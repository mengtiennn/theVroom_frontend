<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div>
        <div class="forumtop white--text" v-for="item in news11" :key="item.ARTICLEID">
          <div
            class="forumblack d-flex flex-column justify-space-around align-center py-10"
            style="width:100%;height:100%"
          >
            <h2 class="mb-5 text-h4 font-weight-bold">--{{ item.TOPICTYPE }}--</h2>
            <div class="d-flex" style="width:1200px">
              <div
                class="d-flex flex-column mr-15 justify-start align-center"
                style="width:20%"
              >
                <i style="font-size:36px" class="fas fa-portrait"></i>
                <div class="text-h5 font-weight-bold">-{{ item.FULLNAME }}-</div>
                <h3
                  style="border:1px solid white; border-radius:20px"
                  class="pa-2 px-5 my-2"
                >
                  樓主
                </h3>
              </div>
              <div
                class="d-flex flex-column ml-15"
                style="width:80%"
              >
                <h2 class="text-h4 font-weight-bold">{{ item.SUBJECTNAME }}</h2>
                <div style="width:100%" class="d-flex justify-end">
                  <router-link to="/forum">
                    <button-news
                      class="black white--text ma-3 align-self-end"
                      buttonName="返回上一頁"
                    ></button-news>
                  </router-link>
                  <div @click="down">
                    <button-news
                      class="ma-3 align-self-end"
                      buttonName="留言回覆"
                    ></button-news>
                  </div>
                </div>
                <div style="width:100%;height:5px;" class="orange"></div>
                <div class="my-10">
                  <img style="width:70%;height:85%" :src="item.ARTICLEIMG" />
                </div>
                <div>
                  <p style="line-height:3;text-subtitle-1 font-weight-light">
                    {{ item.CONTENT }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-10">
          <div
            class="d-flex flex-column align-center justify-center ma-auto"
            style="max-width:1000px;max-height:100%"
          >
            <div class="text-h4 font-weight-bold align-self-start">回應區</div>
            <div style="width:100%;height:3px" class="orange"></div>
            <div
              v-for="(message, index) in messagelist"
              :key="index"
              style="min-width:100%;"
              class="d-flex flex-column align-space-around"
            >
              <div class="d-flex justify-space-around my-4">
                <div class="d-flex flex-column align-center mr-5" style="width:200px">
                  <i class="fas fa-portrait"></i>
                  <h3 class="text-h6 font-weight-bold">{{ message.FULLNAME }}</h3>
                  <h5 class="-text-subtitle-1 font-weight-light">
                    date:{{ message.DATE }}
                  </h5>
                </div>
                <div
                  class="d-flex align-center justify-start"
                  style="width:80%"
                >
                  <p>{{ message.MESSAGECONTENT }}</p>
                </div>
                <report-dialogs
                  ref="warn"
                  style="cursor: pointer;font-size:10px"
                  @gogororo2='reportgetvalue'
                  @gogororo='reportdialog(index)'
                ></report-dialogs>
                <!-- <button @click="test(index)">123</button> -->
              </div>
              <div style="width:100%;height:1px;opacity:.3" class="black"></div>
            </div>
          </div>
          <div class="my-8 d-flex justify-center align-center" v-if="changesign">
            <div class="d-flex flex-column align-center mr-5">
              <i class="fas fa-portrait"></i>
              <h3>{{ this.username }}</h3>
            </div>
            <forum-page-input v-model="content" @input="getvalue"/>
            <v-btn
              @click="send"
              class="align-self-center ml-5"
              rounded
              color="orange"
              dark
              >送出</v-btn
            >
          </div>
          <div class="my-8 d-flex justify-center align-center" v-else>
            <router-link to="/signin"><div class="black white--text pa-3 rounded-pill">去登入拉白痴</div></router-link>
          </div>
        </div>
        <div
          v-if="messagelist.length"
          v-observe-visibility="handleScrolledToBottom"
        ></div>
      </div>
    </media>
      <!-- ---------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <div class="forumtop white--text">
          <div
            class="forumblack d-flex flex-column justify-space-around align-center py-10"
            style="width:100%;height:100%"
          >
            <div class="d-flex flex-column" style="width:100%">
              <div class="d-flex">
                <div
                  class="d-flex flex-column justify-start align-center"
                  style="width:20%"
                >
                  <i style="font-size:36px" class="fas fa-portrait"></i>
                  <div class="text-h6 font-weight-bold">-xxx-</div>
                  <div
                    style="border:1px solid white; border-radius:20px"
                    class="pa-1 px-3 my-2 text-h6 font-weight-bold"
                  >
                    樓主
                  </div>
                </div>
                <div
                  style="width:60%"
                  class="d-flex flex-column align-end justify-space-around"
                >
                  <div @click="down">
                    <button-news
                      class="ma-1 align-self-end"
                      buttonName="留言回覆"
                      style="max-width:80px"
                    ></button-news>
                  </div>
                  <router-link to="/forum">
                    <button-news
                      class="black white--text ma-1 align-self-end"
                      buttonName="返回上一頁"
                      style="width:80px"
                    ></button-news>
                  </router-link>
                </div>
              </div>
              <div
                class="d-flex flex-column ma-auto"
                v-for="newli in news"
                :key="newli.id"
                style="width:90%"
              >
                <div class="mt-10 text-h5 font-weight-bold">
                  {{ newli.title }}
                </div>
                <div
                  style="width:100%;height:5px; background-color: #F34841;"
                  class="mt-5"
                ></div>
                <div class="my-10">
                  <img style="width:100%;height:100%" :src="newli.src" />
                </div>
                <div>
                  <p style="line-height:3;text-subtitle-1 font-weight-light">
                    {{ newli.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-10">
          <div
            class="d-flex flex-column align-center justify-center ma-auto"
            style="max-width:1000px;max-height:100%"
          >
            <div
              style="width:80%"
              class="text-h4 font-weight-bold justify-start"
            >
              回應區
            </div>
            <div
              style="width:90%;height:3px; background-color: #F34841;"
              class="mt-3"
            ></div>
            <div
              v-for="message in messagelist"
              :key="message"
              style="width:85%;"
              class="d-flex flex-column"
            >
              <div class="d-flex justify-space-around my-4">
                <div class="d-flex flex-column align-center mr-5">
                  <i class="fas fa-portrait"></i>
                  <h3 class="text-h6 font-weight-bold">{{ message.name }}</h3>
                  <h5 class="-text-subtitle-1 font-weight-light">
                    date:{{ message.data }}
                  </h5>
                </div>
                <div
                  class="d-flex align-center justify-start"
                  style="width:80%"
                >
                  <p>{{ message.message }}</p>
                </div>
                <report-dialogs
                  style="cursor: pointer;font-size:10px"
                ></report-dialogs>
              </div>
              <div style="width:100%;height:1px;opacity:.3" class="black"></div>
            </div>
          </div>
          <div class="mt-6 d-flex justify-center max-width:800px">
            <div class="d-flex flex-column align-center mr-5">
              <i class="fas fa-portrait"></i>
              <!-- <h3>tony</h3> -->
            </div>
            <input
              type="text"
              placeholder="回應..."
              class="align-self-center grey lighten-2 px-3"
              style="width:50%;border-radius:15px;height:45px;outline:0"
            />
            <v-btn class="align-self-center ml-5" rounded color="#F34841" dark
              >送出</v-btn
            >
          </div>
        </div>
        <div
          v-if="messagelist.length"
          v-observe-visibility="handleScrolledToBottom"
        ></div>
      </div>
    </media>
  </div>
</template>

<script>
import ReportDialogs from '../components/interactive/ReportDialogs.vue'
import ForumPageInput from '../components/ForumPageInput.vue'
import Media from 'vue-media'
export default {
  async created () {
    // console.log(this.$refs.warn)
    console.log(this.$store.getters.getmember)
    console.log('123')
    console.log(this.$route)
    const formdata = new FormData()
    formdata.append('FORUMID', this.$route.params.id)
    const res = await fetch('./phpfile/forumpageselect.php', {
      method: 'POST',
      body: formdata
    })
    // console.log(res)
    const resdata = await res.json()
    console.log(resdata)
    this.news11 = resdata
    // console.log(this.news11)
    const issue = await fetch('./phpfile/forumreply.php', {
      method: 'POST',
      body: formdata
    })
    const issuelist = await issue.json()
    console.log(issuelist)
    console.log(this.$store.getters.getmember)
    console.log(this.$store.getters.getmember[0].FULLNAME)
    this.messagelist = [...issuelist]
    this.username = this.$store.getters.getmember[0].FULLNAME
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    this.member = this.changesign
  },
  components: {
    ReportDialogs,
    ForumPageInput,
    Media
  },
  data () {
    return {
      theindex: 0,
      member: [],
      content: '',
      username: '',
      date: new Date(),
      year: '',
      month: '',
      day: '',
      hours: '',
      minutes: '',
      seconds: '',
      news11: [],
      newsday: '',
      news: [
        {
          id: 1,
          title: 'Volkswagen Tiguan R 試駕｜戰力大躍進，強悍性能不容隨意招惹！',
          content:
            '對於有天生選擇困難的天秤座來說，購車這種充滿選擇的行為真的不容易，尤其汽車工程不斷進步，新車駕馭本格基本都很優秀，這無疑是把天秤的困難提升到酷刑的境界，而助長這股野火肆虐Volkswagen 絕對有份。Volkswagen 全新休旅車款 T-Roc，歷經好一段時間波折，終於上個月（11月）抵台發表，首波試駕 330 TSI R-Line Performance 即是旗艦，時尚好看有點主觀先不說，配備也稱得上全面，車身尺碼和空間機能都很適切，同時還有開過都說好的性能，讓我不由得對這款新休旅產生好奇心，真的有這麼棒？不開沒事，開過之後，特別害怕有一天輪到我要買車、要做選擇的時候，增加的優秀選項會把選擇困難和昇華到讓人害怕的境界。不開沒事，開過之後，特別害怕有一天輪到我要買車、要做選擇的時候，增加的優秀選項會把選擇困難和昇華到讓人害怕的境界。',
          src: require('../assets/forum/toyota-supra.jpg')
        }
      ],
      messagelist: [],
      messagelist2: [],
      reportvalue: ''
    }
  },
  methods: {
    reportgetvalue (val) {
      this.reportvalue = val
    },
    reportdialog (index, val) {
      this.theindex = index
      console.log(this.reportvalue)
      console.log(this.theindex)
      console.log(this.messagelist[this.theindex])
      const fd = new FormData()
      fd.append('ARTICLEID', this.messagelist[this.theindex].ARTICLEID)
      fd.append('FULLNAME', this.messagelist[this.theindex].FULLNAME)
      fd.append('DATE', this.messagelist[this.theindex].DATE)
      fd.append('MESSAGECONTENT', this.messagelist[this.theindex].MESSAGECONTENT)
      fd.append('REASON', this.reportvalue)
      fetch('./phpfile/reportdialog.php', {
        method: 'POST',
        body: fd
      })
    },
    handleScrolledToBottom (isVisavle) {
      if (!isVisavle) {
        return
      }
      if (this.messagelist.length < 15) {
        this.messagelist.push(...this.messagelist2)
      }
      // console.log(this.messagelist.length)
    },
    down () {
      const scrollHeight = document.scrollingElement.offsetHeight
      window.scrollTo({ top: scrollHeight, behavior: 'smooth' })
    },
    getvalue (val) {
      this.content = val
    },
    send () {
      if (this.content === '') {
        alert('請輸入內容')
        return
      }
      this.year = this.date.getFullYear()
      this.month = this.date.getMonth()
      this.day = this.date.getDate()
      this.hours = this.date.getHours()
      this.minutes = this.date.getMinutes()
      this.seconds = this.date.getSeconds()
      this.messagelist.push({
        FULLNAME: this.username,
        DATE: this.year + '-' + (this.month + 1) + '-' + this.day + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds,
        MESSAGECONTENT: this.content
      })
      this.sendtodb()
      this.content = ''
    },
    sendtodb () {
      console.log(this.news11)
      const formdata = new FormData()
      formdata.append('MEMBERID', this.$store.getters.getmember[0][0])
      formdata.append('ARTICLEID', this.news11[0].ARTICLEID)
      formdata.append('FULLNAME', this.$store.getters.getmember[0][4])
      formdata.append('MESSAGECONTENT', this.content)
      formdata.append('DATE', this.year + '-' + (this.month + 1) + '-' + this.day + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds)
      formdata.append('JUDGENUM', 0)
      // formdata.append('TIME', '2021-8-9 21:00:00')
      fetch('./phpfile/forumreplyinsert.php', {
        method: 'POST',
        body: formdata
      })
    }
  },
  computed: {
    changesign () {
      return this.$store.getters.getmember
    }
  }
}
</script>

<style lang="scss"></style>
