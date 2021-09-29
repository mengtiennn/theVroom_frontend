<template>
    <div class="singleBid d-flex">
        <div class="spaceLeft">
            <div class="d-flex" style="cursor: pointer;" @click="moveback">
                <v-icon>mdi-arrow-left-thick</v-icon>
                <div class="text-subtitle-1 font-weight-medium ml-2" style="color: gray;">返回車輛資訊</div>
            </div>
        </div>
        <div class="bidContent">
            <div class="bidTitle d-flex align-end">
                <div class="bidT text-h6 font-weight-bold">目前競標價錢：</div>
                <div class="iCountUp text-h3 font-weight-bold ml-3">
                  <ICountUp
                    :delay="delay"
                    :endVal="endVal"
                    :options="options"
                    @ready="onReady"
                  />
                </div>
            </div>
            <div class="record d-flex flex-column justify-space-around mt-5">
                <div class="recordTitle text-h6 mt-5 font-weight-bold">出價紀錄</div>
                <div class="recordContent d-flex justify-start">
                    <bid-record :acid="auctionid" :bid="childbid"/>
                </div>
            </div>
            <bid-coming-soon :ends-on="starttime" v-if="showcoming"/>
            <div class="bidTime d-flex align-center mt-5" v-else>
                <div class="bidTimeTitle text-h6 font-weight-bold">拍賣會剩餘時間：</div>
                <Countdown :end="countdowndate"></Countdown>
                <!-- <div class="ml-10"><auction-dialogs/></div> -->
            </div>
            <div class="goBid d-flex align-center mt-5 justify-space-between">
                <div class="d-flex">
                  <div class="goBidTi text-h6 font-weight-bold">每口叫價</div>
                  <div class="goBidPr text-h6 font-weight-bold ml-2">5000</div>
                  <div class="goBidBtn ml-4">
                      <div v-if="changesign">
                        <bid-dialogs @startbid="bidnow"/>
                      </div>
                      <div v-else>
                        <gotosignin @startbid="bidnow"/>
                      </div>
                  </div>
                </div>
                <!-- <div class="checkAuto ml-16">
                    <v-checkbox
                    v-model="checkbox"
                    label="自動出價"
                    style="margin-top: 17px;"
                    ></v-checkbox>
                </div>
                <div class="autoPrice d-flex align-center ml-5">
                    出價上限：
                    <v-text-field
                        label="請輸入金額上限"
                        solo
                        dense
                        style="width: 150px;"
                        :disabled="false"
                    ></v-text-field>
                </div> -->
                <div style="margin-left: 85px;">
                    <v-btn
                          rounded
                          outlined
                          color="#181818"
                          class="btn"
                          to="/AuctionOverview"
                          dark>
                          回拍賣會總覽
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="spaceRight"></div>
    </div>
</template>

<script>
import bidRecord from './bidRecord.vue'
// import AuctionDialogs from './interactive/AuctionDialogs.vue'
import BidDialogs from './interactive/BidDialogs.vue'
import Countdown from 'vuejs-countdown'
import BidComingSoon from './BidComingSoon.vue'
import ICountUp from 'vue-countup-v2'
import gotosignin from './interactive/gotosignin.vue'

export default {
  props: ['acid'],
  async created () {
    this.auctionid = this.acid
    const fd = new FormData()
    fd.append('acid', this.acid)
    const res = await fetch('./phpfile/selectbidtime.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    console.log(this.acid)
    this.starttime = resdata[0].STARTINGTIME
    this.duday = resdata[0].DURATION
    this.endVal = parseInt(resdata[0].CURRENTPRICE)
    console.log(this.starttime)
    console.log(this.duday)
    console.log(this.endVal)
    let year = parseInt(this.starttime.substr(0, 4))
    console.log(year)
    let month = parseInt(this.starttime.substr(5, 2))
    console.log(month)
    const date = parseInt(this.starttime.substr(8, 2))
    console.log(date)
    const hour = parseInt(this.starttime.substr(11, 2))
    console.log(hour)
    const startdate = new Date(year, month - 1, date, hour)
    console.log(startdate)
    const startsec = startdate.getTime()
    console.log(startsec)
    // 計算結束日期
    this.enddate = date + parseInt(this.duday)
    console.log(this.enddate)
    if (this.enddate > 30 && month === 4) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 30 && month === 6) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 30 && month === 9) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 30 && month === 11) {
      this.enddate -= 30
      month += 1
    } else if (this.enddate > 31 && month === 1) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 3) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 5) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 7) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 8) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 10) {
      this.enddate -= 31
      month += 1
    } else if (this.enddate > 31 && month === 12) {
      month -= 11
      this.enddate -= 31
      year += 1
    } else if (this.enddate > 29 && month === 2 && year % 4 === 0) {
      month += 1
      this.enddate -= 29
    } else if (this.enddate > 28 && month === 2) {
      month += 1
      this.enddate -= 28
    }

    this.countdowndate = year.toString() + '-' + month.toString() + '-' + this.enddate.toString()
    console.log(this.countdowndate)
    console.log(new Date(year, month - 1, this.enddate))
    const endsec = new Date(year, month - 1, this.enddate).getTime()
    console.log(endsec)
    // currrent現在時間換算成毫秒
    const current = Date.now()
    console.log(current)
    if (current < startsec) {
      this.showcoming = true
    } else {
      this.showcoming = false
    }
    // if (current > endsec) {
    //   const fdyo = new FormData()
    //   fdyo.append('acid', this.acid)
    //   fetch('./phpfile/updateauctionjd.php', {
    //     method: 'POST',
    //     body: fdyo
    //   })
    //   console.log('123')
    // } else {
    //   console.log('9999')
    // }
  },
  data () {
    return {
      showcoming: true,
      starttime: '',
      duday: '',
      enddate: '',
      countdowndate: '',
      delay: 1000,
      endVal: '',
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      member: [],
      memberid: '',
      auctionid: '',
      bidrecord: [],
      memberemail: '',
      nowtime: '',
      year: '',
      month: '',
      day: '',
      hours: '',
      min: '',
      sec: '',
      childbid: [],
      zeromonth: '',
      zeroday: '',
      zerohours: '',
      zeromin: '',
      zerosec: ''
    }
  },
  components: {
    bidRecord,
    // AuctionDialogs,
    BidDialogs,
    Countdown,
    BidComingSoon,
    ICountUp,
    gotosignin
  },
  methods: {
    moveback () {
      this.$emit('moveback')
    },
    bidnow () {
      this.member = JSON.parse(localStorage.getItem('member'))
      this.memberemail = this.member[0].EMAIL
      this.memberid = this.member[0].MEMBERID
      console.log(this.memberid)
      console.log(this.memberemail)
      this.endVal += 5000
      const fdone = new FormData()
      fdone.append('currentprice', this.endVal)
      fdone.append('acid', this.acid)
      fdone.append('memberid', this.memberid)
      fetch('./phpfile/updateprice.php', {
        method: 'POST',
        body: fdone
      })
      this.nowtime = new Date()
      // console.log(this.nowtime)
      this.year = this.nowtime.getFullYear()
      this.month = this.nowtime.getMonth() + 1
      this.day = this.nowtime.getDate()
      this.hours = this.nowtime.getHours()
      this.min = this.nowtime.getMinutes()
      this.sec = this.nowtime.getSeconds()
      this.zeromonth = this.month.toString().padStart(2, '0')
      this.zeroday = this.day.toString().padStart(2, '0')
      this.zerohours = this.hours.toString().padStart(2, '0')
      this.zeromin = this.min.toString().padStart(2, '0')
      this.zerosec = this.sec.toString().padStart(2, '0')
      console.log(this.zeromonth)
      // console.log(this.sec)
      this.bidrecord.push({
        BIDPRICE: this.endVal,
        DATE: this.year + '-' + this.zeromonth + '-' + this.zeroday + ' ' + this.zerohours + ':' + this.zeromin + ':' + this.zerosec,
        EMAIL: this.memberemail
      })
      console.log(this.bidrecord)
      this.$store.dispatch('bidrecordone', {
        BIDPRICE: this.endVal,
        DATE: this.year + '-' + this.zeromonth + '-' + this.zeroday + ' ' + this.zerohours + ':' + this.zeromin + ':' + this.zerosec,
        EMAIL: this.memberemail
      })
      console.log(this.$store.getters.getbid)
      this.childbid = this.$store.getters.getbid
      console.log(this.childbid)
    }
  },
  computed: {
    changesign () {
      return this.$store.getters.getmember
    }
  }
}
</script>

<style lang="scss">
.singleBid{
    width: 1200px;
    height: 630px;
    // border: 1px solid blue;
    margin: 0 auto;
    .bidContent{
        width: 720px;
        height: 630px;
        // border: 1px solid yellow;
        .bidTitle{
            width: 500px;
            height: 80px;
            // border: 1px solid lawngreen;
        }
        .record{
            width: 750px;
            height: 300px;
            // border: 1px solid lightblue;
        }
        .bidTime{
            width: 750px;
            height: 80px;
            // border: 1px solid orange;
        }
        .autoBid{
            width: 600px;
            height: 60px;
            // border: 1px solid purple;
        }
        .goBid{
            width: 850px;
            height: 70px;
            // border: 1px solid khaki;
        }
    }
    .spaceRight{
        width: 200px;
        height: 630px;
        // border: 1px solid red;
    }
    .spaceLeft{
        width: 280px;
        height: 630px;
        // border: 1px solid green;
    }
    .v-text-field__details {
        display: none !important;
    }
}
</style>
