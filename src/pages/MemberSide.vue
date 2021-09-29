<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="member">
        <div class="member_out">
          <div class="member_in">
            <div class="inside_left">
              <v-card
                outline
                width="250"
                height="900"
                dark
                class="d-flex flex-column justify-space-between"
              >
                <div>
                  <v-list flat class="mt-3">
                    <v-list-item-group color="deep-orange accent-3">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            @click="component = 'member-data'"
                            class="d-flex justify-center text-h6 font-weight-bold pa-6"
                            style="cursor: pointer;"
                            >帳戶管理</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            @click="component = 'member-auction'"
                            class="d-flex justify-center text-h6 font-weight-bold pa-6"
                            style="cursor: pointer;"
                            >訂單管理</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            @click="component = 'member-notify'"
                            class="d-flex justify-center text-h6 font-weight-bold pa-6"
                            style="cursor: pointer;"
                            >得標通知</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title
                            @click="component = 'member-bid'"
                            class="d-flex justify-center text-h6 font-weight-bold pa-6"
                            style="cursor: pointer;"
                            >我的追蹤</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </div>
                <div class="mb-12">
                  <div class="d-flex justify-center text-subtitle-1 font-weight-ligh">
                    贊助
                  </div>
                  <div class="d-flex justify-center mt-1">
                    <img src="../assets/sponsor(2).png" style="width:150px" />
                  </div>
                  <div
                    class="d-flex justify-center mt-1 text-subtitle-1 font-weight-ligh"
                  >
                    透過馳家保養您的愛車
                  </div>
                  <div class="d-flex justify-center mt-4">
                    <img
                      src="../assets/sponsor(1).png"
                      style="width:130px; height:70px;"
                    />
                  </div>
                  <div
                    class="d-flex justify-center mt-3 text-subtitle-1 font-weight-ligh"
                  >
                    性能舒適性 專為卓越汽車打造
                  </div>
                </div>
              </v-card>
            </div>

            <div class="inside_middle" style="width:600px; height:100%">
              <component :is="component"></component>
            </div>

            <div
              class="inside_right d-flex flex-column justify-space-between"
              style="width:300px; height:100%"
            >
              <div style="height:265px">
                <v-date-picker
                  v-model="picker"
                  show-adjacent-months
                  :events="arrayEvents"
                  event-color="blue lighten-1"
                  dark
                  width="299"
                  @click:date ="category"
                ></v-date-picker>
                <!-- <v-date-picker
                  v-model="date1"
                  :events="arrayEvents"
                  event-color="green lighten-1"
                  dark
                  width="299"
                ></v-date-picker> -->
              </div>
              <div class="d-flex flex-column justify-space-evenly"
                style="width:300px; height:560px; border:2px solid #000"
              >
                <div
                  style="font-size: 20px; font-weight: bold;"
                  class="pl-4 text-h6 font-weight-bold"
                >
                      當日排程
                </div>
              <div class="event" v-for="date in dates" :key="date" style="border:1px solid #181818; width:90%; margin:10px auto; padding:5px 5px;" :class="{ block: currentcategory === date.category}">
                <div>{{date.name}}</div>
                <span style="color:#f34841; font-weight:bold">{{date.time}}</span>
                <div>
                  {{date.reserve}} : {{date.price}}
                </div>
                <div>{{date.status}}</div>

              </div>
                <!-- <v-card
                  width="300"
                  height="560"
                  style="border: 2px solid #000; display:none"
                  class="d-flex flex-column justify-space-between"
                >
                  <div
                    style="width: 100%; height: 10%"
                    class="d-flex align-center"
                  >
                    <div
                      style="font-size: 20px; font-weight: bold;"
                      class="pl-4 text-h6 font-weight-bold"
                    >
                      當日排程
                    </div>
                  </div>
                  <div
                    style="height: 90%; width: 100%;"
                    class="d-flex flex-column justify-space-around align-center"
                  >
                    <div
                      v-for="date in dates"
                      :key="date.name"
                      style="border: 1px solid #000; border-radius:5px; width:260px; height:130px; display:none;"
                      class="d-flex flex-column justify-space-around"
                    >
                      <div class="d-flex">
                        <div
                          style="width: 60%"
                          class="d-flex justify-center align-center text-subtitle-1 font-weight-light"
                        >
                          {{ date.name }}
                        </div>
                        <div
                          style="width: 40%; color:#F34841"
                          class="d-flex justify-center align-center text-h6 font-weight-bold"
                        >
                          {{ date.time }}
                        </div>
                      </div>
                      <div
                        class="d-flex align-center pl-5 text-subtitle-1 font-weight-light"
                      >
                        {{ date.reserve }} : {{ date.price }}
                      </div>
                      <div
                        class="d-flex align-center pl-5 text-subtitle-1 font-weight-light"
                      >
                        {{ date.title }} : {{ date.status }}
                      </div>
                    </div>
                  </div>
                </v-card> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- --------------------------------------------------------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <div
          class="black white--text d-flex justify-space-around align-center"
          style="height:70px"
        >
          <button
            @click="(componentM = 'member-data-m'), gogo(num)"
            :class="{ redgo: num == 1 }"
          >
            帳戶管理
          </button>
          <div class="grey" style="width:1px;height:35px"></div>
          <button @click="(componentM = 'member-auction'), gogo2(num)"
            :class="{ redgo: num == 2 }"
          >訂單管理</button>
          <div class="grey" style="width:1px;height:35px"></div>
          <button @click="(componentM = 'member-notify'), gogo3(num)"
            :class="{ redgo: num == 3 }"
          >通知總攬</button>
          <div class="grey" style="width:1px;height:35px"></div>
          <button @click="(componentM = 'member-bid'), gogo4(num)"
            :class="{ redgo: num == 4 }"
          >我的追蹤</button>
        </div>
        <div>
          <component :is="componentM"></component>
        </div>
        <div>
          <date-act />
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import MemberData from '../components/MemberData.vue'
import MemberDataM from '../components/MemberDateM.vue'
import MemberAuction from '../components/MemberAuction.vue'
// import MemberAuctionM from '../components/MemberAuctionM.vue'
import MemberBid from '../components/MemberBid.vue'
import MemberArticle from '../components/MemberArticle.vue'
import MemberNotify from '../components/MemberNotify.vue'
import DateAct from '../components/DateAct.vue'
import Media from 'vue-media'
export default {
  components: {
    'member-data': MemberData,
    'member-data-m': MemberDataM,
    'member-auction': MemberAuction,
    // 'member-auction-m': MemberAuctionM,
    'member-bid': MemberBid,
    'member-article': MemberArticle,
    'date-act': DateAct,
    'member-notify': MemberNotify,
    Media
  },
  data: () => ({
    component: 'member-data',
    componentM: 'member-data-m',
    picker: null,
    currentcategory: 'today',
    dates: [
      {
        name: '2021 BMW 330i',
        time: '17 : 00',
        reserve: '底價',
        price: '130萬',
        title: '賣場狀態',
        status: '進行中',
        category: 'today'
      },
      {
        name: '2021 BENZ GLC',
        time: '17 : 00',
        reserve: '底價',
        price: '900萬',
        title: '賣場狀態',
        status: '進行中',
        category: 'today'
      },
      {
        name: '2021 AUDI Q30',
        time: '17 : 00',
        reserve: '底價',
        price: '200萬',
        title: '賣場狀態',
        status: '進行中',
        category: 'today'
      },
      {
        name: '2021 Mazda3',
        time: '17 : 00',
        reserve: '底價',
        price: '50萬',
        title: '賣場狀態',
        status: '進行中',
        category: 'today'
      },
      {
        name: '2021 MINI PACEMAN 2014',
        time: '17 : 00',
        reserve: '底價',
        price: '100萬',
        title: '賣場狀態',
        status: '即將開始',
        category: 'future'
      },
      {
        name: '2021 BENZ GLC300 2020',
        time: '17 : 00',
        reserve: '底價',
        price: '200萬',
        title: '賣場狀態',
        status: '即將開始',
        category: 'future'
      },
      {
        name: '2021 BMW 5-Series Sedan 2011',
        time: '17 : 00',
        reserve: '底價',
        price: '70萬',
        title: '賣場狀態',
        status: '即將開始',
        category: 'future'
      },
      {
        name: '2021 FORD KUGA 2020',
        time: '17 : 00',
        reserve: '底價',
        price: '100萬',
        title: '賣場狀態',
        status: '已結束',
        category: 'past'
      },
      {
        name: 'Suzuki Swift 2008',
        time: '17 : 00',
        reserve: '底價',
        price: '20萬',
        title: '賣場狀態',
        status: '已結束',
        category: 'past'
      },
      {
        name: '今日無拍賣會',
        time: '00 : 00',
        reserve: '底價',
        price: '0',
        title: '賣場狀態',
        status: '無',
        category: 'empty'
      }
    ],
    num: 1,
    count1: 1,
    count2: 2,
    count3: 3,
    count4: 4
  }),
  methods: {
    gogo (num) {
      this.num = num
      this.num = this.count1
    },
    gogo2 (num) {
      this.num = num
      this.num = this.count2
    },
    gogo3 (num) {
      this.num = num
      this.num = this.count3
    },
    gogo4 (num) {
      this.num = num
      this.num = this.count4
    },
    category (date) {
      const todaydate = new Date()
      const time = todaydate.getDate()
      // console.log(todaydate)
      console.log(time)
      console.log(date)
      // console.log(date.length)
      const dateday = date.substr(8, 10)
      console.log(dateday)
      if (time === dateday) {
        this.currentcategory = 'today'
      } else if (time - dateday === 5 || time - dateday === 10 || time - dateday === 15 || time - dateday === 4 || time - dateday === 18 || time - dateday === 12 || time - dateday === 7) {
        this.currentcategory = 'past'
      } else if (dateday - time === 5 || dateday - time === 7) {
        this.currentcategory = 'empty'
      } else if (dateday > time) {
        this.currentcategory = 'future'
      } else {
        this.currentcategory = 'empty'
      }
      console.log(this.currentcategory)
    }
    // category (date) {
    //   const todaydate = new Date()
    //   const time = todaydate.getDate()
    //   if (date === time) {
    //     this.currentcategory = 'today'
    //   } else if (date >= time) {
    //     this.currentcategory = 'future'
    //   } else {
    //     this.currentcategory = 'past'
    //   }
    //   return this.dates.filter((data) => {
    //     return data.category === this.currentcategory
    //   })
    // }
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  }
}
</script>

<style lang="scss">
.member {
  // border: 2px solid #00f;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 1200px;
  .member_out {
    // border: 1px solid #f20;
    width: 100%;
    height: 905px;
    margin-top: 50px;
    .member_in {
      // border: 1px solid #000;
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .v-picker__title {
      // display: none;
      height: 65px;
      .v-date-picker-title__date{
        font-size: 23px;
      }
    }
  }
  .v-date-picker-header {
    padding: 0;
  }
  .v-date-picker-table {
    height: 220px;
  }
}
.redgo{
  background-color: red;
  border-radius: 20px;
  padding:5px
}
div.event{
  display: none;
}
 .block{
    display: block !important;
  }
</style>
