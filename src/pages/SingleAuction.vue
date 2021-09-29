<template>
  <div>
    <media :query="{minWidth: '401px'}">
      <div class="singleAuction">
          <div class="scrollWhole d-flex align-center">
              <div class="rightContent d-flex">
                  <div class="leftPoint d-flex flex-column justify-center">
                      <div class="leftDots d-flex flex-column justify-center">
                        <span @click="moveback"></span>
                        <span @click="moveright" class="mt-4"></span>
                        <span @click="moveleft" class="mt-4"></span>
                      </div>
                  </div>
                  <div class="rightIn d-flex flex-column align-center">
                      <div class="titleAu">{{ brand }}</div>
                      <div class="titleAu">{{ series }}</div>
                      <div class="carAu">
                            <img class="moCar" :src="path">
                      </div>
                      <div class="btnAu d-flex justify-center">
                          <v-btn
                          rounded
                          color="#F34841"
                          class="btn mr-4"
                          width="130"
                          @click="moveleft"
                          dark>
                          開始競標
                          </v-btn>
                          <v-btn
                          rounded
                          outlined
                          color="#BFBDBD"
                          class="btn"
                          @click="moveright"
                          dark>
                          車輛詳細資訊
                          </v-btn>
                          <v-bottom-navigation
                          v-if="changesign"
                          class="ml-2"
                          color="#F34841"
                          background-color="transparent"
                          dark
                          height="35"
                          min-width="35"
                          style="box-shadow: 0px 0px;"
                          :value="testv"
                          >
                          <v-btn
                          @click="follow"
                          >
                            <div>追蹤賣場</div>
                            <!-- <v-icon>mdi-heart</v-icon> -->
                            <v-icon>mdi-plus-box</v-icon>
                          </v-btn>
                          </v-bottom-navigation>
                      </div>
                  </div>
                  <div class="rightPoint"></div>
              </div>
          </div>
          <div class="scrollWholetwo"></div>
          <div class="scrollWholethree d-flex align-center">
            <single-car-info @gomove="movegogo"/>
          </div>
          <div class="scrollWholefour d-flex align-center">
            <single-car-bid-record @moveback="backmove" :acid="acid"/>
          </div>
      </div>
  </media>
<!-- -----------mobile----------- -->
  <media :query="{maxWidth: '400px'}">
    <rwd-single-auction/>
  </media>
  </div>
</template>

<script>
import gsap from 'gsap'
import Media from 'vue-media'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import singleCarInfo from '../components/singleCarInfo.vue'
import singleCarBidRecord from '../components/singleCarBidRecord.vue'
import RwdSingleAuction from '../components/RwdSingleAuction.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {
      member: [],
      id: '',
      auctionid: '',
      brand: '',
      series: '',
      path: '',
      cy: '',
      cb: '',
      cs: '',
      cdes: '',
      cdoor: '',
      cco: '',
      cdis: '',
      cm: '',
      screenWidth: document.body.clientWidth,
      acid: '',
      reprice: '',
      start: '',
      testv: undefined,
      acname: ''
    }
  },
  async created () {
    // console.log('123')
    // console.log('dsdsadad', this.member)
    console.log(this.$route.params.id)
    this.acid = this.$route.params.id
    const fd = new FormData()
    fd.append('IDac', this.$route.params.id)
    const res = await fetch('./phpfile/singleauction.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.brand = resdata[0].CARBRAND
    this.series = resdata[0].CARSERIES
    this.path = resdata[0].IMGPATH
    this.reprice = resdata[0].RESERVEPRICE
    this.start = resdata[0].STARTINGTIME
    this.acname = resdata[0].NAME
    this.member = JSON.parse(localStorage.getItem('member'))
    this.id = this.member[0].MEMBERID
    console.log(this.id)
    console.log(this.start)
    const fdthree = new FormData()
    fdthree.append('AUCTIONID', this.acid)
    fdthree.append('MEMBERID', this.id)
    fdthree.append('RESERVEPRICE', this.reprice)
    fdthree.append('STARTINGTIME', this.start)
    fdthree.append('AUPATH', this.path)
    const restwo = await fetch('./phpfile/iffollow.php', {
      method: 'POST',
      body: fdthree
    })
    const resdatatwo = await restwo.json()
    console.log(resdatatwo)
    if (resdatatwo.length === 0) {
      this.testv = undefined
    } else {
      this.testv = 1
    }
    // this.cy = resdata[0].YEAR
    // this.cb = resdata[0].CARBRAND
    // this.cs = resdata[0].CARSERIES
    // this.cdes = resdata[0].DESCRIPTION
    // this.cdoor = resdata[0].DOOR
    // this.cco = resdata[0].COLOR
    // this.cdis = resdata[0].DISPLACEMENT
    // this.cm = resdata[0].MILES
  },
  computed: {
    changesign () {
      return this.$store.getters.getmember
    }
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    const that = this
    window.addEventListener('resize', function () {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    })
    console.log(this.screenWidth)
    // 頁面載入時鎖住y軸
    const elHtml = document.querySelector('html')
    elHtml.style.overflowY = 'hidden'
  },
  destroyed () {
    const elHtml = document.querySelector('html')
    elHtml.style.overflowY = null
  },
  watch: {
    // 監聽視窗大小
    screenWidth: function () {
      if (this.screenWidth > 600) {
        console.log('yo')
        const elHtml = document.querySelector('html')
        elHtml.style.overflowY = 'hidden'
      } else {
        console.log('hey')
        const elHtml = document.querySelector('html')
        elHtml.style.overflowY = 'auto'
      }
    }
  },
  components: {
    singleCarInfo,
    singleCarBidRecord,
    Media,
    RwdSingleAuction
  },
  methods: {
    async follow () {
      const fdtwo = new FormData()
      fdtwo.append('AUCTIONID', this.acid)
      fdtwo.append('MEMBERID', this.id)
      fdtwo.append('RESERVEPRICE', this.reprice)
      fdtwo.append('STARTINGTIME', this.start)
      fdtwo.append('AUPATH', this.path)
      fdtwo.append('AUNAME', this.acname)
      const res = await fetch('./phpfile/iffollow.php', {
        method: 'POST',
        body: fdtwo
      })
      const resdata = await res.json()
      console.log(resdata)
      if (resdata.length === 0) {
        this.testv = 1
        fetch('./phpfile/followauction.php', {
          method: 'POST',
          body: fdtwo
        })
      } else {
        this.testv = undefined
        fetch('./phpfile/deletefollow.php', {
          method: 'POST',
          body: fdtwo
        })
      }
    },
    backmove () {
      gsap.to('.moCar', {
        x: 550,
        duration: 2
      })
      gsap.to('.titleAu', {
        y: -300,
        duration: 2
      })
      gsap.to('.scrollWholetwo', {
        yPercent: -100,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 0,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: 0,
        yPercent: -200,
        delay: 0.5,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: 0,
        duration: 2
      })
    },
    movegogo () {
      gsap.to('.moCar', {
        x: -550,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 1100,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: -300,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: -100,
        duration: 1
      })
    },
    moveright () {
      gsap.to('.moCar', {
        x: 550,
        duration: 2
      })
      gsap.to('.titleAu', {
        y: -300,
        duration: 2
      })
      gsap.to('.scrollWholetwo', {
        yPercent: -100,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 0,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: 0,
        yPercent: -200,
        delay: 0.5,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: 0,
        duration: 2
      })
    },
    moveback () {
      gsap.to('.moCar', {
        x: 0,
        duration: 2
      })
      gsap.to('.titleAu', {
        y: 50,
        duration: 2
      })
      gsap.to('.scrollWholetwo', {
        yPercent: 0,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 0,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        yPercent: 0,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: 0,
        duration: 2
      })
    },
    moveleft () {
      gsap.to('.moCar', {
        x: -550,
        duration: 2
      })
      gsap.to('.leftDots', {
        x: 1100,
        duration: 2
      })
      gsap.to('.scrollWholefour', {
        yPercent: -300,
        duration: 2
      })
      gsap.to('.scrollWholethree', {
        xPercent: -100,
        duration: 1
      })
    }
  }
}

</script>

<style lang="scss">
.singleAuction{
    .scrollWhole{
        width: 100vw;
        height: 100vh;
        background-color: #181818;
        .leftPoint{
            width: 200px;
            height: 100%;
            // border: 1px solid blue;
            .leftDots{
                // border: 1px solid yellow;
                width: 140px;
                height: 200px;
                position: relative;
                z-index: 10;
                span{
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #BFBDBD;
                }
            }
        }
        .rightContent{
            width: 1200px;
            height: 580px;
            // border: 1px solid yellow;
            margin:0px auto;
            .titleAu{
                // border: 1px solid green;
                width: 800px;
                font-size: 40px;
                font-weight: bolder;
                // transform: translateY(50px);
                color: #FFFFFF;
            }
            .carAu{
                // border: 1px solid red;
                width: 800px;
                height: 380px;
                .moCar{
                    // border: 1px solid pink;
                    width: 750px;
                    height: 260px;
                    object-fit: contain;
                    transform: translateY(30px);
                    position: relative;
                    z-index: 10;
                }
            }
        }
        .rightPoint{
            width: 200px;
            height: 100%;
            // border: 1px solid blue;
        }
    }
    .scrollWholetwo{
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
    }
    .scrollWholethree{
        width: 100vw;
        height: 100vh;
        // background-color: lightcoral;
    }
    .scrollWholefour{
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
    }
}
</style>
