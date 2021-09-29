<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="wholepage d-flex align-center">
          <div class="insideWhole d-flex align-center">
              <div class="leftpart d-flex flex-column">
                  <the-headline titleName="近期競標場次" style="height: 100px;" class="pt-8 d-flex"></the-headline>
                  <div v-for="(item, index) in auction"
                  :key="item.id"
                  class="leftitem d-flex align-center justify-space-between"
                  :class="{ addcolor:index == count}" @click="addBg(index)">
                      <div class="text-h6 font-weight-regular">{{ item.NAME }}</div>
                      <div :class="{ viewbar:index == count}" class="viewcolor d-flex align-center justify-center">
                        <router-link :to="/singleauction/ + item.AUCTIONID">
                          <div style="color: #181818;">{{ viewtag }}</div>
                        </router-link>
                      </div>
                  </div>
                  <div class="moreAu d-flex align-center">
                    <router-link to="/auctionoverview" style="color: #BFBDBD;" class="mt-3 text-subtitle-1 font-weight-medium">
                      查看更多場次
                    <v-icon class="mb-1" color="#BFBDBD">mdi-arrow-right</v-icon>
                    </router-link>
                  </div>
              </div>
              <div class="rightpart d-flex flex-column justify-space-between">
                  <div class="carImg mt-10">
                      <img :src="showImg" class="imgSize">
                  </div>
                  <!-- <div class="timer">01:08:54:36''</div> -->
                  <div class="timer">
                  <Countdown :end="countdowndatee"></Countdown>
                  </div>
              </div>
          </div>
      </div>
    </media>
    <!-- ----------mobile---------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <select-car-rwd/>
      </div>
    </media>
  </div>
</template>

<script>
import gsap from 'gsap'
import Media from 'vue-media'
import SelectCarRwd from '../components/SelectCarRwd.vue'
import Countdown from 'vuejs-countdown'

export default {
  async created () {
    const res = await fetch('./phpfile/selectcar.php')
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.auction = resdata.slice(0, 5)
    console.log(this.auction)
    this.showImg = this.auction[0].IMGPATH
    this.countdowndate = this.auction[0].STARTINGTIME
    console.log(this.countdowndate)
  },
  components: {
    Media,
    SelectCarRwd,
    Countdown
  },
  data () {
    return {
      auction: [],
      show: false,
      count: 0,
      viewtag: 'View',
      carlink: '/singleauction',
      showImg: '',
      countdowndate: '2021-09-30 00:00:00',
      viewList: [ // 之後把SingleAuction的children路徑改上去
        { id: '0', link: '/singleauction/4' },
        { id: '1', link: '/singleauction/5' },
        { id: '2', link: '/singleauction/6' },
        { id: '3', link: '/singleauction/7' },
        { id: '4', link: '/singleauction/8' }
      ]
    }
  },
  methods: {
    addBg (index) {
      this.count = index
      this.showImg = this.auction[index].IMGPATH
      this.viewtag = 'View'
      this.carlink = this.viewList[index].link
      this.countdowndate = this.auction[index].STARTINGTIME
      console.log(this.countdowndate)
      // this.showView = true
      //   console.log(this.carImg[index].src)
      gsap.fromTo('.imgSize', {
        x: 400
      }, {
        x: 0,
        duration: 1,
        ease: 'circ'
      })
    }
  },
  computed: {
    countdowndatee () {
      return this.countdowndate
    }
  }
}
</script>

<style lang="scss" scoped>
.wholepage {
  width: 100vw;
  height: 900px;
  background-color: #181818;
    .insideWhole{
        // border: 1px solid yellow;
        width: 1200px;
        height: 650px;
        margin: 0 auto;
    }
    .leftpart {
    // border: 1px solid yellow;
    width: 600px;
    height: 650px;
    position: relative;
    z-index: 10;
        .leftitem{
        // border: 1px solid blue;
        height: 100px;
        color: #FFFFFF;
        padding-left: 30px;
        cursor: pointer;
            &:hover{
                background-color: rgba($color: #F34841, $alpha: 0.5)
            }
          .viewcolor{
            color: #181818;
            font-size: 0px;
          }
        }
        .moreAu{
          padding-left: 30px;
          color: #BFBDBD;
        }
      }
  .rightpart {
    // border: 1px solid green;
    width: 600px;
    height: 650px;
    // position: relative;
        .imgSize{
            // border: 1px solid yellow;
            width: 600px;
            height: 390px;
            margin-top: 100px;
            object-fit: contain;
        }
        .timer{
            // border: 1px solid yellow;
            text-align: end;
            font-size: 40px;
            color: #FFFFFF;
            font-weight: bold;
        }
  }
  .viewbar{
      // border: 1px solid yellow;
      height: 100%;
      width: 100px;
      background-color: #FFFFFF;
      color: #181818;
      font-size: 20px !important;
  }
  .addcolor{
      background-color: #F34841;
  }
}
</style>
