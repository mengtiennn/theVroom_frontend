<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div>
        <div class="ma-auto">
          <div
            class="forumblack d-flex flex-column justify-center align-center pt-10 pb-15"
            style="width:100%;height:100%"
          >
          <!-- <div class="color">
            <div class="d-flex align-center">
            <h1></h1> 餘剩時間：<Countdown deadline="August 23, 2021"></Countdown>
            </div>
          </div> -->
            <div class="d-flex justify-end mb-10" style="width:80%">
              <router-link style="text-decoration:none;" :to="signset"
                ><button-news buttonName="我要發文"></button-news
              ></router-link>
            </div>
            <div style="width:1200px" class="d-flex align-center">
              <div style="width:35%;height:3px" class="black"></div>
              <div style="width:30%" class=" text-h4 font-weight-bold text-center">發燒分享</div>
              <div style="width:35%;height:3px" class="black"></div>
            </div>
            <div
              class="d-flex align-center justify-sm-space-around"
              style="width:1200px;height:100%"
            >
              <!-- <v-card class="mr-15" min-width="650" height="600">
                <v-img
                  class="white--text align-end"
                  max-height="470px"
                  :src="this.max[3]"
                >
                  <v-card-title>{{this.max[4]}}</v-card-title>
                </v-img>
                <v-card-text class="text--primary">
                  <div class="d-flex justify-center">
                    <h2 class="text-h6 font-weight-bold">
                      {{this.max[5]}}
                    </h2>
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                  <v-btn color="orange" text @click="test">
                    <router-link
                      :to="/ForumPage/ + this.max[0]"
                      style="text-decoration:none;width:100%;color:#F34841"
                    >
                      閱覽文章
                    </router-link>
                  </v-btn>
                </v-card-actions>
              </v-card> -->
              <div class="d-flex mt-8">
                 <v-card
                  class="mb-8 mx-1"
                  width='400'
                  height="500"
                 >
                 <div style="position:relative;">
                  <v-img
                    class="white--text align-end"
                    width='400'
                    height="500"
                    :src="this.max[3]"
                    style="object-fit: contain;object-position: center;"
                  >
                   </v-img>
                    <div style="position:absolute;bottom:0;left:0;">
                      <div class="d-flex flex-column">
                      <div class="white--text text-center ml-4" style="background:#f34841;width:80px">{{this.max[4]}}</div>
                      <v-card-text class="text--primary">
                      <div class="white--text text-h5 font-weight-bold" style="height:70px">
                        {{ this.max[5] }}
                      </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-start">
                      <v-btn color="#F34841" text>
                        <router-link
                        class="white--text"
                        :to="/ForumPage/ + this.max[0]"
                        style="text-decoration:none;width:100%;color:#F34841">
                        閱覽文章
                        </router-link>
                      </v-btn>
                      </v-card-actions>
                      </div>
                    </div>
                  </div>
                 </v-card>
                 <v-card
                  class="mb-8 mx-1"
                  width='400'
                  height="500"
                 >
                 <div style="position:relative;">
                  <v-img
                    class="white--text align-end"
                    height="500px"
                    :src="this.sec[3]"
                    style="object-fit: contain;object-position: center;"
                  >
                   </v-img>
                    <div style="position:absolute;bottom:0;left:0;">
                      <div class="d-flex flex-column">
                      <div class="white--text text-center ml-4" style="background:#f34841;width:80px">{{this.max[4]}}</div>
                      <v-card-text class="text--primary">
                      <div class="white--text text-h5 font-weight-bold" style="height:70px">
                        {{ this.sec[5] }}
                      </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-start">
                      <v-btn color="#F34841" text>
                        <router-link
                        class="white--text"
                        :to="/ForumPage/ + this.sec[0]"
                        style="text-decoration:none;width:100%;color:#F34841">
                        閱覽文章
                        </router-link>
                      </v-btn>
                      </v-card-actions>
                      </div>
                    </div>
                  </div>
                 </v-card>
                 <v-card
                  class="mb-8 mx-1"
                  width='400'
                  height="500"
                 >
                 <div style="position:relative;">
                  <v-img
                    class="white--text align-end"
                    height="500px"
                    :src="this.thr[3]"
                    style="object-fit: contain;object-position: center;"
                  >
                   </v-img>
                    <div style="position:absolute;bottom:0;left:0;">
                      <div class="d-flex flex-column">
                      <div class="white--text text-center ml-4" style="background:#f34841;width:80px">{{this.max[4]}}</div>
                      <v-card-text class="text--primary">
                      <div class="white--text text-h5 font-weight-bold" style="height:70px">
                        {{ this.thr[5] }}
                      </div>
                      </v-card-text>
                      <v-card-actions class="d-flex justify-start">
                      <v-btn color="#F34841" text>
                        <router-link
                        class="white--text"
                        :to="/ForumPage/ + this.thr[0]"
                        style="text-decoration:none;width:100%;color:#F34841">
                        閱覽文章
                        </router-link>
                      </v-btn>
                      </v-card-actions>
                      </div>
                    </div>
                  </div>
                 </v-card>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-15" style="max-width:100%;">
          <!-- <div class="d-flex flex-column align-center" style="max-width:100%">
            <h1 class="align-self-center ma-auto mb-2 mt-10" style="width:70%;">
              熱門討論專區
            </h1>
            <div class="newtitle" style="width:80%;height:5px;"></div>
          </div> -->
          <div style="width:1200px" class="d-flex align-center ma-auto">
              <div style="width:35%;height:3px" class="black"></div>
              <div style="width:30%" class=" text-h4 font-weight-bold text-center">熱門討論專區</div>
              <div style="width:35%;height:3px" class="black"></div>
          </div>
          <div
            class="d-flex justify-space-around mt-10 ma-auto"
            style="width:70%"
          >
            <div class="d-none d-sm-flex">
              <img :src="goimg" style="width:500px;height:330px" />
            </div>
            <div
              class="d-flex flex-column justify-space-around"
              style="width:500px"
            >
              <div class="d-flex flex-column" v-for="(title, index) in titles" :key="title[0]">
                <h2
                  @mouseover="gogo(index)"
                  :class="{ yellow: index == count }"
                  class="text-h6 font-weight-bold"
                >
                <!-- {{ title[5] }} -->
                <router-link :to="/ForumPage/ + title[0]">{{ "『" + title[4] + "』" + title[5] }}</router-link>
                </h2>
                <h4 class="align-self-end">{{title[2]}}</h4>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-around flex-wrap mb-10 ma-auto"
          style="width:1200px;"
        >
          <div v-for="carnew in carnewsfirst" :key="carnew[0]" class="mb-10" style="width:400px;">
            <v-card class="mx-10 d-flex flex-column orange lighten-5">
              <v-img
                class="white--text align-end"
                style="height:250px"
                :src="carnew[3]"
              >
                <v-card-title></v-card-title>
              </v-img>

              <v-card-subtitle class="-h6 font-weight-bold text-center">
                <div style="width:30%" class="grey lighten-3 pa-2">{{ carnew[4] }}</div>
              </v-card-subtitle>

              <v-card-text class="text-subtitle-1 font-weight-light" style="height:100px">
                <div>
                  {{ carnew[5] }}
                </div>
              </v-card-text>

              <v-card-actions class="align-self-end">
                <v-btn color="#F34841" text>
                  <router-link
                  :to="/ForumPage/ + carnew.ARTICLEID"
                  style="text-decoration:none;width:100%;color:#F34841">
                  閱覽文章
                  </router-link>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div
            class="moredata text-center d-flex justify-center"
            style="width:100%"
            ref="moredata"
          >
            <div
              @click="moredata"
              style="border:1px solid #f34841;width:300px;cursor: pointer;color:#fff;background-color:#f34841"
              class="rounded-pill py-5"
            >
              更多資料
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <button-btn-banner />
        <div class="forumtop ma-auto">
          <div
            class="forumblack d-flex flex-column justify-center align-center pt-10 pb-15"
            style="width:100%;height:100%"
          >
            <div
              class="d-flex flex-column flex-sm-row align-center justify-sm-space-around"
              style="width:300px;height:100%"
            >
              <v-card max-width="330" height="350">
                <v-img
                  class="white--text align-end"
                  height="250px"
                  src="../assets/forum/TDI SUV.png"
                >
                  <v-card-title>Top 10 Australian car</v-card-title>
                </v-img>
                <v-card-text class="text--primary" style="padding:3px">
                  <div class="d-flex justify-center">
                    <div
                      class="text-body-1 font-weight-bold pa-3"
                      style="line-height:1"
                    >
                      VW Arteon Shooting Brake v.s Peugeot 508 SW ｜ 200
                      萬級美型 Wagon 對決！
                    </div>
                  </div>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                  <v-btn color="orange" text class="pb-5">
                    <router-link
                      to="/ForumPage"
                      style="text-decoration:none;width:100%;color:#F34841"
                    >
                      閱覽文章
                    </router-link>
                  </v-btn>
                </v-card-actions>
              </v-card>
              <div class="d-flex flex-column mt-8">
                <v-card
                  class="mx-auto mb-8"
                  max-width="330"
                  height="285"
                  v-for="item in news"
                  :key="item.id"
                >
                  <v-img
                    class="white--text align-end"
                    height="150px"
                    :src="item.image"
                  >
                    <v-card-title>Top 10 Australian beaches</v-card-title>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div class="-text-subtitle-1 font-weight-bold">
                      {{ item.content }}
                    </div>
                  </v-card-text>
                  <v-card-actions class="d-flex justify-end">
                    <v-btn color="#F34841" text>
                      閱覽文章
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-15" style="max-width:100%;">
          <div class="d-flex flex-column align-center" style="max-width:100%">
            <h1 class="align-self-center ma-auto mb-2 mt-10" style="width:70%;">
              今日最新消息
            </h1>
            <div class="newtitle" style="width:80%;height:5px;"></div>
          </div>
          <div
            class="d-flex justify-space-around mt-10 ma-auto"
            style="width:70%"
          >
            <div class="d-none d-sm-flex">
              <img :src="goimg" style="width:500px;height:330px" />
            </div>
            <div
              class="d-flex flex-column justify-space-around"
              style="width:500px"
            >
              <div
                v-for="(title, index) in titles"
                :key="title.id"
                class="mb-5"
              >
                <h2
                  @click="gogo(index)"
                  :class="{ yellow: index == count }"
                  class="text-h6 font-weight-bold"
                >
                  {{ title.title }}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column align-center justify-space-between flex-wrap mb-10 ma-auto"
          style="width:100%;"
        >
          <div v-for="carnew in carnews" :key="carnew" class="mb-10">
            <v-card class="mx-2" max-width="300">
              <v-img
                class="white--text align-end"
                style="height:150px"
                :src="carnew.src"
              >
                <v-card-title></v-card-title>
              </v-img>

              <v-card-subtitle class="-h6 font-weight-bold">
                {{ carnew.title }}
              </v-card-subtitle>

              <v-card-text class="text-subtitle-1 font-weight-light">
                <div>
                  {{ carnew.content }}
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="#F34841" text>
                  閱覽文章
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="text-center" style="width:100%">
            <v-pagination
              v-model="page"
              :length="10"
              :total-visible="5"
            ></v-pagination>
          </div>
        </div>
      </div>
    </media>
  </div>
</template>
<script>
// import Countdown from 'vuejs-countdown'
import Media from 'vue-media'
import ButtonBtnBanner from '../components/layout/RwdBtnBanner.vue'
export default {
  async created () {
    console.log(this.$store.getters.getshoplist)
    const res = await fetch('./phpfile/forumselect.php')
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.alllist = [...resdata]
    console.log(this.alllist)
    this.alllist.forEach(list => {
      console.log(list)
    })
    this.carnews1 = resdata.reverse()
    console.log(this.carnews1)
    this.carnewsfirst = this.carnews1.slice(0, 6)
    console.log(this.carnewsfirst)
    this.carnewspush = this.carnews1.splice(6, this.carnews1.length - 6)
    console.log(this.carnewspush)
    const forumre = await fetch('./phpfile/forumreplyall.php')
    const forumreply = await forumre.json()
    console.log(forumreply)
    this.max = forumreply[0]
    this.sec = forumreply[1]
    this.thr = forumreply[2]
    console.log(this.max)
    console.log(this.sec)
    console.log(this.thr)
    this.titles = forumreply.slice(3, 6)
    console.log(this.titles)
    this.goimg = this.titles[0][3]
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: {
    Media,
    ButtonBtnBanner
    // Countdown
  },
  data () {
    return {
      max: {},
      sec: {},
      thr: {},
      page: 1,
      num1: 0,
      num2: 6,
      newscount: 0,
      count: null,
      active: false,
      alllist: [],
      carnews1: [],
      carnewsfirst: [],
      carnewspush: [],
      replylist: [],
      res: {},
      titles: [],
      goimg: ''
    }
  },
  methods: {
    gogo (index) {
      // console.log(this.$refs.gogoro)
      this.count = index
      this.goimg = this.titles[index][3]
    },
    moredata () {
      console.log(this.carnewsfirst.length)
      console.log(this.carnewspush.length)
      console.log(this.carnews1.length)
      if (this.carnewsfirst.length > 5 + this.carnewspush.length) {
        return
      }
      if (this.carnewsfirst.length < this.carnews1.length + this.carnewspush.length) {
        this.carnewsfirst.push(
          ...this.carnewspush.slice(
            this.num1 + 6 * this.newscount,
            this.num2 + 6 * this.newscount
          )
        )
        // this.carnews.push(...this.carnewspush.slice(6, 12))
        this.newscount += 1
        if (this.carnewsfirst.length > 5 + this.carnewspush.length) {
          this.$refs.moredata.textContent = '----------資料已全部顯示----------'
        }
      }
    },
    test () {
      console.log(this.alllist.reverse())
    },
    issuerouter (e) {
      console.log(this.alllist)
      console.log(e.target)
      return '/ForumPage/1'
    }
  },
  computed: {
    signset () {
      const data = this.$store.getters.getmember
      if (data === 0) {
        return '/Signin'
      } else {
        return '/IssuePage'
      }
    }
  }
}
</script>
<style lang="scss">
.forumtop {
  background-size: cover;
  background-image: url('../assets/forum/toyota-supra.jpg');
  .forumblack {
    background-color: rgba($color: black, $alpha: 0.7);
    .v-card__subtitle,
    .v-card__text,
    .v-card__title {
      padding: 30px 0 0 15px;
    }
    .newscard {
      border-bottom: 5px solid orange;
    }
  }
}
.newtitle {
  border-bottom: 5px solid #f34841;
}
.moredata {
  :hover {
    background-color: #fff;
    color: #f34841;
  }
}
</style>
