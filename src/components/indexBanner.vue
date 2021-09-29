<template>
    <div>
        <media :query="{ minWidth: '401px' }">
            <div class="indexBan2 d-flex flex-column">
                <div class="navbar d-flex justify-space-between align-center mt-2" style="opacity: 0; transform: translateY(40px);">
                    <div class="logoBan">
                        <router-link to="/" tag="span" style="cursor: pointer">
                            <img class="logoImg ml-7" src="../assets/small_logowhite-transparent.png">
                        </router-link>
                    </div>
                    <ul class="listLine d-flex text-h6 font-weight-bold ml-16">
                        <li>
                            <router-link to="/auctionoverview" tag="span" style="cursor: pointer">
                            競標會場
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/accessories" tag="span" style="cursor: pointer">
                            配件專區
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/comparecard" tag="span" style="cursor: pointer">
                            市場行情
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/forum" tag="span" style="cursor: pointer">
                            討論專區
                            </router-link>
                        </li>
                        <li class="ml-10">
                            <router-link to="/newdriver" tag="span" style="cursor: pointer">
                            新手上路
                            </router-link>
                        </li>
                    </ul>
                    <div class="iconBan d-flex">
                        <div style="position:relative;">
                        <v-icon left class="mr-5" color="#FFFFFF" @click="showlistcart">mdi-cart-outline</v-icon>
                        <div v-if="shopcartnum" class="text-center white--text rounded-pill" style="background-color: #F34841; width:25px;position: absolute;top:-10px;left:15px">{{ shopcartnum }}</div>
                        </div>
                        <div v-if="changesign" class="d-flex">
                            <router-link to="/memberside" tag="span" style="cursor: pointer" class="mr-5">
                            <v-icon left class="mr-4" color="#FFFFFF">mdi-account-circle-outline</v-icon>
                            </router-link>
                            <div class="white--text mr-3 text-body-1 font-weight-bold" style="margin-top: 2px;">歡迎 {{ membername }}</div>
                            <v-icon left class="mr-4" color="#FFFFFF" @click="logout">mdi-logout</v-icon>
                        </div>
                        <div v-else>
                            <router-link to="/signin" tag="span" style="cursor: pointer">
                            <v-icon left class="mr-6" color="#FFFFFF">mdi-login</v-icon>
                            </router-link>
                        </div>
                    </div>
                </div>
                <!-- ----------------------------------------------- -->
                <!-- <div class="disappear2"></div> -->
                <!-- <div class="disappear3"> -->
                    <!-- <div class="bigC1" style="position: absolute; z-index: 20; opacity: 1; left: 50%; top: -100%; transform: translateX(-50%)">
                        <img class="circle" src="../assets/index-banner/ring.png" style="width: 900px;">
                        <img class="logoImgC" src="../assets/small_logowhite-transparent.png" style="width:200px; position: absolute; left: 50%; top: 50%; opacity: .5; transform: translate(-50%, -50%)">
                    </div>
                    <div class="bigB1" style="position: absolute; z-index: 20; opacity: 1; left: 50%; transform: translateX(-50%); top: -100%;">
                        <img class="circleT" src="../assets/index-banner/ring.png" style="width: 900px;">
                    </div> -->
                <!-- </div> -->
                <div class="banContent1 d-flex align-center justify-space-between mt-16 position: absolute;">
                    <div>
                        <img class="mocaR1" src="../assets/index-banner/ctwo.png" style="width: 600px; transform: translate(-100%, 30px)">
                    </div>
                    <div>
                        <div style="width: 600px; height: 500px;" class="alltitle1 d-flex flex-column justify-space-between mr-16">
                            <div>
                                <div style="color: #FFFFFF; opacity: 0;" class="text-h4 font-weight-bold mt-5 btitle">WELCOME TO THEVROOM</div>
                                <div style="width: 0px; height: 4px; background-color: #F34841;" class="bline mt-3"></div>
                            </div>
                            <div class="banBtn1">
                                <v-btn rounded outlined color="#FFFFFF" class="inbtn1" style="opacity: 0;" to="/auctionoverview">
                                競標場入口
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </media>
        <!-- --------------mobile--------------- -->
        <media :query="{ maxWidth: '400px' }">
            <div>
                <rwd-index-banner/>
            </div>
        </media>
    </div>
</template>

<script>
import Media from 'vue-media'
import RwdIndexBanner from '../components/RwdIndexBanner.vue'
import gsap from 'gsap'

export default {
  created () {
    this.member = JSON.parse(localStorage.getItem('member'))
    console.log(this.member[0].FULLNAME)
    this.membername = this.member[0].FULLNAME
  },
  computed: {
    changesign () {
      return this.$store.getters.getmember
    },
    shopcartnum () {
      return this.$store.getters.getshoplist.length
    }
  },
  data () {
    return {
      cartshow: true,
      member: [],
      membername: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('membersign', 0)
      this.$store.dispatch('keepsign', 0)
      this.$store.dispatch('shoplist', [])
      localStorage.clear()
    },
    showlistcart () {
      this.cartshow = !this.cartshow
      this.$store.dispatch('shopcart', !this.cartshow)
    }
  },
  components: {
    Media,
    RwdIndexBanner
  },
  mounted () {
    setTimeout(function () {
      gsap.timeline()
        // .to('.bigC1', {
        //   yPercent: 200,
        //   duration: 1.5,
        //   opacity: 1,
        //   ease: 'slow'
        // })
        // .to('.bigB1', {
        //   yPercent: 200,
        //   duration: 1.5,
        //   opacity: 1,
        //   delay: -1.5,
        //   ease: 'slow'
        // })
        // .to('.bigC1', {
        //   xPercent: 100,
        //   duration: 3,
        //   delay: 0.5,
        //   ease: 'power'
        // })
        // .to('.bigB1', {
        //   xPercent: 100,
        //   duration: 3,
        //   ease: 'power',
        //   delay: -2.8
        // })
        // .to('.disappear2', {
        //   height: 0,
        //   duration: 1,
        //   delay: -1.3,
        //   ease: 'slow'
        // })
        // .to('.disappear3', {
        //   height: 0,
        //   duration: 0.8,
        //   delay: -1.3
        // })
        .to('.navbar', {
          y: 0,
          duration: 1,
          opacity: 1,
          delay: 0,
          ease: 'slow'
        })
        .to('.mocaR1', {
          xPercent: 130,
          duration: 2,
          opacity: 1,
          delay: -0.5
        })
        .to('.btitle', {
          duration: 2,
          opacity: 1,
          delay: -0.5
        })
        .to('.bline', {
          width: '200px',
          duration: 2,
          opacity: 1,
          delay: -2
        })
        .to('.inbtn1', {
          opacity: 1,
          duration: 1,
          delay: -2
        })
    }, 0)
  }
}
</script>

<style lang="scss">
.indexBan2{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-image: url('../assets/index-banner/btwo.png');
    .navbar{
        position: absolute;
        width: 100%;
        height: 64px;
        .logoBan{
            .logoImg{
                width: 200px;
            }
        }
        .listLine{
            list-style: none;
            color: #FFFFFF;
        }
    }
    .disappear2{
        width: 100vw;
        height: 100vh;
        position: absolute;
        background-color: black;
        z-index: 10;
    }
    .disappear3{
        width: 100vw;
        height: 100vh;
        position: absolute;
        // background-color: orange;
        z-index: 10;
        .bigC1{
            .circle{
                animation: rCircle 2s linear infinite;
            }
        }
        .bigB1{
            .circleT{
                animation: rCircle 2s linear infinite;
            }
        }
    }
    .banContent1{
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
    }
}
@keyframes rCircle {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
