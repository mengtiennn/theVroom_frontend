<template>
  <div>
    <media :query="{minWidth: '401px'}">
      <div class="auctionOv d-flex">
        <div class="auctionWhole d-flex">
          <div class="carNav d-flex flex-column">
            <div class="btnup d-flex justify-center" v-if="show">
              <v-icon x-large @click="carUp" ref="upB">mdi-chevron-up</v-icon>
            </div>
            <div class="carimgIn d-flex flex-column align-center">
              <img
                v-for="(car, index) in contentListR"
                :id="car.id"
                :src="car.IMGPATH"
                :key="car.id"
                ref="carmoving"
                @click="changeCon(index)"
              />
            </div>
            <div class="btndown d-flex justify-center" v-if="show">
              <v-icon x-large @click="carDown" ref="upD">mdi-chevron-down</v-icon>
            </div>
          </div>
        </div>
        <div class="auctionContent">
            <!-- <transition> -->
              <overview-content :acid="acid" :titleYear="tYear" :titleBrand="tBrand" :description="desC" :milesT="mText" :priceT="pText" :imgPath="imagePath"/>
            <!-- </transition> -->
        </div>
      </div>
    </media>
    <!-- --------------------------------------------------------------------- -->
    <media :query="{maxWidth: '400px'}">
      <div class="mobileAO">
        <mobile-overview-content/>
      </div>
    </media>
  </div>
</template>

<script>
import OverviewContent from '../components/OverviewContent.vue'
import Media from 'vue-media'
import MobileOverviewContent from '../components/MobileOverviewContent.vue'

export default {
  async created () {
    // const reshigh = await fetch('./phpfile/selecthigh.php')
    // const highdata = await reshigh.json()
    // console.log(highdata)`
    const res = await fetch('./phpfile/selectauction.php')
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    resdata.forEach(async function (singledata) {
      // console.log(singledata.STARTINGTIME)
      // console.log(singledata.DURATION)
      const AUID = singledata.AUCTIONID
      const ST = singledata.STARTINGTIME
      let year = parseInt(ST.substr(0, 4))
      let month = parseInt(ST.substr(5, 2))
      const date = parseInt(ST.substr(8, 2))
      const hour = parseInt(ST.substr(11, 2))
      const DU = singledata.DURATION
      const PRICE = singledata.CURRENTPRICE
      const IMGPATH = singledata.IMGPATH
      const AUNAME = singledata.NAME
      console.log(PRICE)
      console.log(IMGPATH)
      console.log(AUNAME)
      let enddate = date + parseInt(DU)
      console.log(enddate)
      if (enddate > 30 && month === 4) {
        enddate -= 30
        month += 1
      } else if (enddate > 30 && month === 6) {
        enddate -= 30
        month += 1
      } else if (enddate > 30 && month === 9) {
        enddate -= 30
        month += 1
      } else if (enddate > 30 && month === 11) {
        enddate -= 30
        month += 1
      } else if (enddate > 31 && month === 1) {
        enddate -= 31
        month += 1
      } else if (enddate > 31 && month === 3) {
        enddate -= 31
        month += 1
      } else if (enddate > 31 && month === 5) {
        enddate -= 31
        month += 1
      } else if (enddate > 31 && month === 7) {
        enddate -= 31
        month += 1
      } else if (enddate > 31 && month === 8) {
        enddate -= 31
        month += 1
      } else if (enddate > 31 && month === 10) {
        enddate -= 31
        month += 1
      } else if (enddate > 31 && month === 12) {
        month -= 11
        enddate -= 31
        year += 1
      } else if (enddate > 29 && month === 2 && year % 4 === 0) {
        month += 1
        enddate -= 29
      } else if (enddate > 28 && month === 2) {
        month += 1
        enddate -= 28
      }
      const countdowndate = year.toString() + '-' + month.toString() + '-' + enddate.toString()
      const endsec = new Date(year, month - 1, enddate, hour).getTime()
      console.log(endsec)
      const current = Date.now()
      console.log(current)
      console.log(countdowndate)
      if (current > endsec) {
        const fdyo = new FormData()
        fdyo.append('acid', AUID)
        fdyo.append('pr', PRICE)
        fdyo.append('path', IMGPATH)
        fdyo.append('end', countdowndate)
        fdyo.append('acname', AUNAME)
        const reshigh = await fetch('./phpfile/selecthigh.php', {
          method: 'POST',
          body: fdyo
        })
        const highdata = await reshigh.json()
        console.log(highdata)
        const highR = highdata.reverse()
        console.log(highR[0][0])
        fdyo.append('memberidHigh', highR[0][0])
        // fetch('./phpfile/updateauctionjd.php', {
        //   method: 'POST',
        //   body: fdyo
        // })
        fetch('./phpfile/insertcomplete.php', {
          method: 'POST',
          body: fdyo
        })
        console.log('123')
      } else {
        console.log('9999')
      }
    })
    this.contentList = resdata
    console.log(this.contentList)
    this.tYear = this.contentList[0].YEAR + ' ' + this.contentList[0].CARBRAND
    this.tBrand = this.contentList[0].CARSERIES
    this.desC = this.contentList[0].DESCRIPTION
    this.mText = this.contentList[0].MILES
    this.pText = this.contentList[0].RESERVEPRICE
    this.imagePath = this.contentList[0].IMGPATH
    this.acid = this.contentList[0].AUCTIONID
    this.contentListR = this.contentList.reverse()

    // console.log(resdata[resdata.length - 1][0])
    // this.contentList[0].description = resdata[resdata.length - 1][0]
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  data: () => ({
    imagePath: '',
    tYear: '',
    tBrand: '',
    desC: '',
    mText: '',
    pText: '',
    show: true,
    length: 3,
    window: 0,
    carimgIn: [
      { id: '0', src: require('../assets/carlist/benz10.png') },
      { id: '1', src: require('../assets/carlist/benz11.png') },
      { id: '2', src: require('../assets/carlist/benz12.png') },
      { id: '3', src: require('../assets/carlist/benzgclass.png') },
      { id: '4', src: require('../assets/carlist/bmw7.png') },
      { id: '5', src: require('../assets/carlist/gtr1.png') },
      { id: '6', src: require('../assets/carlist/benz10.png') },
      { id: '7', src: require('../assets/carlist/benz11.png') },
      { id: '8', src: require('../assets/carlist/benz12.png') },
      { id: '9', src: require('../assets/carlist/benzgclass.png') },
      { id: '10', src: require('../assets/carlist/bmw7.png') }
    ],
    distanceY: 0,
    count: 0,
    contentList: [],
    acid: '',
    contentListR: []
  }),
  methods: {
    changeCon (index) {
      // console.log(this.contentList[index].titleYear)
      this.tYear = this.contentList[index].YEAR + ' ' + this.contentList[index].CARBRAND
      this.tBrand = this.contentList[index].CARSERIES
      this.desC = this.contentList[index].DESCRIPTION
      this.mText = this.contentList[index].MILES
      this.pText = this.contentList[index].RESERVEPRICE
      this.imagePath = this.contentList[index].IMGPATH
      // console.log(this.contentList[index].AUCTIONID)
      this.acid = this.contentList[index].AUCTIONID
      const fd = new FormData()
      fd.append('auID', this.contentList[index].AUCTIONID)
      fetch('./phpfile/singleauction.php', {
        method: 'POST',
        body: fd
      })
    },
    carUp () {
      // console.log(this.$refs.carmoving.length)
      // if (this.distanceY < 0) {
      // this.$refs.upB.disabled = true
      // console.log(this.$refs.carmoving)
      // const y = -60
      this.distanceY = 60
      // this.count += 1
      this.$refs.carmoving.forEach((item) => {
        item.style.transform += `translateY(${this.distanceY}px)`
      // console.log(y)
      // console.dir(item)
      // console.dir(this.$refs.carmoving[0])
      })
      // console.log(this.distanceY)
      // console.dir(document.querySelector('#first'))
      // }
      // this.distanceY = 70
      // this.$refs.carmoving.forEach((item) => {
      //   item.style.transform += `translateY(${this.distanceY}px)`
      // })
    },
    carDown () {
      // console.log(this.$refs.carmoving)
      // this.distanceY -= 60
      const i = -60
      this.$refs.carmoving.forEach((item) => {
        item.style.transform += `translateY(${i}px)`
      })
    }
  },
  components: {
    OverviewContent,
    Media,
    MobileOverviewContent
  }
  // mounted () {
  //   this.distanceY = 1
  // }
}
</script>

<style lang="scss">
.auctionOv{
  .auctionWhole {
    .carNav {
      width: 280px;
      height: calc(100vh - 48px);
      overflow: hidden;
      position: relative;
      .btnup {
      width: 280px;
      height: 50px;
      // background-color: orange;
      position: absolute;
      top: 0;
      z-index: 10;
      }
      .carimgIn {
      width: 280px;
      height: 1500px;
      // background-color: tomato;
        img {
          width: 220px;
          height: 140px;
          object-fit: cover;
          transform: translateY(30px);
          transition: all 1s;
          margin-top: 5px;
        }
      }
      .btndown {
      width: 280px;
      height: 50px;
      // background-color: orange;
      position: absolute;
      bottom: 0;
    }
    }
  }
  .auctionContent{
    width: 100%;
  }
}
</style>
