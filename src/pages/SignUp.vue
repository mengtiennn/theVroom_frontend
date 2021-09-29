<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div
        style="width:100%;height:100vh;"
        class="ma-auto d-flex justify-center align-center"
      >
        <div class="LoginBackground" style="width:100%;height:100%">
          <div
            class="d-flex"
            style="width:100%;height:100%;background-color:rgba(0,0,0,.6);"
          >
            <div
              style="width:50%;text-align: left;"
              class="white--text align-self-end mb-15 pl-16"
            >
              <h1>歡迎加入</h1>
              <h1>The Vroom</h1>
            </div>
            <div
              style="width:50%;height:100%;background-color:rgba(255,255,255,0.6)"
            >
              <div
                style="width:80%;height:100%"
                class="ma-auto d-flex flex-column align-center justify-center"
              >
                <div class="mb-10 ml-10 align-self-start">
                  <h1>會員註冊</h1>
                  <div style="width:200%;height:3px" class="red"></div>
                </div>
                <div
                  class="d-flex flex-column align-center mb-5"
                  style="width:90%"
                >
                  <v-container v-for="(item, i) in items1" :key="item.title">
                    <v-row fluid class="d-flex align-center">
                      <v-col cols="12" sm="3">
                        <h2>{{item.title}}:</h2>
                      </v-col>
                      <v-col cols="12" sm="9">
                        <v-textarea
                          :label="item.placeholder"
                          auto-grow
                          outlined
                          rows="1"
                          row-height="10"
                          dense
                          name="yoname"
                          v-model="testlist[i]"
                        ></v-textarea>
                        {{ item.yoname }}
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
                <div
                  class="d-flex align-center mb-5"
                  style="height:50px;width:90%"
                >
                  <v-container>
                    <v-row fluid class="d-flex align-center">
                      <v-col cols="12" sm="3">
                        <h2>生日:</h2>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="3">
                        <v-select
                          :items="year"
                          label="西元年份"
                          outlined
                          dense
                          v-model="selectyear"
                        ></v-select>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="3">
                        <v-select
                          :items="month"
                          label="月"
                          dense
                          outlined
                          v-model="selectmonth"
                        ></v-select>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="3">
                        <v-select
                          :items="day"
                          label="日"
                          dense
                          outlined
                          v-model="selectday"
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
                <div
                  class="d-flex flex-column align-center mb-5"
                  style="width:90%"
                >
                  <v-container v-for="(item, i) in items3" :key="item.title">
                    <v-row fluid class="d-flex align-center">
                      <v-col cols="12" sm="3">
                        <h2>{{item.title}}:</h2>
                      </v-col>
                      <v-col cols="12" sm="9">
                        <v-textarea
                          :label="item.placeholder"
                          auto-grow
                          outlined
                          rows="1"
                          row-height="10"
                          dense
                          v-model="testlisttwo[i]"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>
                <!-- <div
                  class="d-flex align-center mb-5"
                  style="height:50px;width:90%"
                >
                  <v-container>
                    <v-row fluid class="d-flex align-center">
                      <v-col cols="12" sm="4">
                        <h2>驗證碼:</h2>
                      </v-col>
                      <v-col cols="12" sm="7">
                        <v-textarea
                          label="請再次確認驗證碼"
                          auto-grow
                          outlined
                          rows="1"
                          row-height="10"
                          dense
                        ></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                  <div style="width:230px">
                    <button
                      class="px-5 py-3 black white--text"
                      style="border:1px solid black;border-radius:20px;"
                    >
                      獲取驗證碼
                    </button>
                  </div>
                </div> -->
                <div class="align-self-start ml-10 mt-10">
                  <div class="d-flex">
                    <router-link to="/signin">
                    <div @click="testbtn"><button-submit buttonSubmit="註冊"></button-submit></div>
                    </router-link>
                    <h6 class="align-self-end ml-10">
                      <router-link to="/signin"
                        >已經是會員嗎?立即登入</router-link
                      >
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div
        style="width:100%;height:100%;"
        class="ma-auto d-flex justify-center align-center signup"
      >
        <div class="LoginBackground3" style="width:100%;height:100%">
          <div class="d-flex my-10 ma-auto" style="width:90%;height:100%;">
            <div
              style="width:100%;height:100%;background-color:rgba(0,0,0,.5);border-radius:20px"
              class="ma-auto py-10 d-flex flex-column align-center justify-center"
            >
              <div class="white--text mb-10 ml-5 align-self-start">
                <h1>會員註冊</h1>
                <div style="width:200%;height:3px" class="red"></div>
              </div>
              <div
                class="d-flex flex-column align-center mb-5"
                style="height:100%;width:90%"
              >
                <v-container>
                  <v-row
                    fluid
                    class="d-flex align-center flex-column align-start"
                    v-for="item in items1"
                    :key="item.title"
                  >
                    <div
                      style="width:100%"
                      class="white--text text-h6 font-weight-bold my-3"
                    >
                      {{ item.title }}:
                    </div>
                    <v-textarea
                      :label="item.placeholder"
                      auto-grow
                      rows="1"
                      row-height="10"
                      dense
                      style="width:100%;"
                      color="#181818"
                      solo='true'
                      outlined
                    ></v-textarea>
                  </v-row>
                </v-container>
                <v-container class="d-flex align-center my-2">
                  <v-row fluid class="d-flex flex-column align-start">
                    <div style="min-width:58px" class="white--text text-h6 font-weight-bold">
                      姓名:
                    </div>
                    <v-textarea
                      label="請輸入真實姓名"
                      auto-grow
                      rows="1"
                      row-height="10"
                      dense
                      style="max-width:120px;border-radius:5px;"
                      color="#181818"
                      solo='true'
                      outlined
                    ></v-textarea>
                  </v-row>
                </v-container>
                <v-container class="my-2">
                  <v-row fluid class="d-flex align-center flex-column align-start">
                    <div style="width:100%" class="white--text text-h6 font-weight-bold">
                      生日:
                    </div>
                    <div style="width:100%" class="d-flex justify-start">
                      <v-select
                        :items="year"
                        label="西元年份"
                        dense
                        style="max-width:100px;border-radius:5px"
                        color="#181818"
                        outlined
                        solo='true'
                      ></v-select>
                      <v-select
                        :items="month"
                        label="月"
                        dense
                        style="max-width:50px;border-radius:5px"
                        color="#181818"
                        outlined
                        solo='true'
                        class="ml-3"
                      ></v-select>
                      <v-select
                        :items="day"
                        label="日"
                        dense
                        style="max-width:50px;border-radius:5px"
                        color="#181818"
                        outlined
                        solo='true'
                        class="ml-3"
                      ></v-select>
                    </div>
                  </v-row>
                </v-container>
                <v-container>
                  <v-row
                    fluid
                    class="d-flex flex-column align-start"
                    v-for="item in items2"
                    :key="item.title"
                  >
                    <div
                      style="width:100%"
                      class="white--text text-h6 font-weight-bold my-3"
                    >
                      {{ item.title }}:
                    </div>
                    <v-textarea
                      :label="item.placeholder"
                      auto-grow
                      rows="1"
                      row-height="10"
                      dense
                      outlined
                      style="width:100%;border-radius:5px"
                      color="#181818"
                      solo='true'
                    ></v-textarea>
                  </v-row>
                </v-container>
                <div class="align-self-end mt-1">
                  <button
                    class="px-2 py-1 white--text text-subtitle-2 font-weight-medium"
                    style="border:1px solid black;border-radius:20px;"
                  >
                    獲取驗證碼
                  </button>
                </div>
              </div>
              <div class="align-self-center mt-5" style="width:80%">
                <div class="d-flex flex-column">
                  <button-submit buttonSubmit="註冊"></button-submit>
                  <h6 class="align-self-end mt-4">
                    <router-link to="/signin"
                      >已經是會員嗎?立即登入</router-link
                    >
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import ButtonSubmit from '../components/layout/ButtonSubmit.vue'
import Media from 'vue-media'
export default {
  async created () {
    const res = await fetch('./phpfile/testid.php')
    const resdata = await res.json()
    console.log(resdata)
    resdata.forEach((list) => {
      // console.log(list.ID)
      this.alreadyHave.push(list.ID)
    })
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: { ButtonSubmit, Media },
  data () {
    return {
      alreadyHave: [],
      bir: '',
      testlist: [],
      testlisttwo: [],
      items1: [
        { title: '電子信箱', placeholder: '該資料為您日後的登入帳號' },
        {
          title: '密碼',
          placeholder: '請輸入6-12位英數混和 需區分大小寫 請勿使用特殊符號'
        },
        { title: '確認密碼', placeholder: '請再次確認密碼' },
        { title: '姓名', placeholder: '請確認姓名' }
      ],
      items2: [
        { title: '電話號碼', placeholder: '請確認電話號碼' },
        { title: '居住地址', placeholder: '請確認居住地址' },
        { title: '驗證碼', placeholder: '請確認驗證碼' }
      ],
      items3: [
        { title: '手機號碼', placeholder: '請確認手機號碼' },
        { title: '居住地址', placeholder: '請確認居住地址' }
      ],
      year: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980],
      month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      randomId: 0
    }
  },
  methods: {
    testbtn () {
      // 設置亂數
      // this.randomId = Math.floor(Math.random() * 999)
      // console.log(this.randomId)
      // this.alreadyHave.forEach((idlist) => {
      //   // console.log(idlist)
      //   if (this.randomId === parseInt(idlist)) {
      //     console.log(this.randomId)
      //     this.randomId = Math.floor(Math.random() * 999)
      //     console.log('id重複了掰')
      //   }
      // })
      console.log(this.testlist)
      console.log(this.selectyear)
      console.log(this.selectmonth)
      console.log(this.selectday)
      console.log(this.testlisttwo[0])
      console.log(this.testlisttwo[1])
      this.bir = this.selectyear + '-' + this.selectmonth + '-' + this.selectday
      console.log(this.bir)
      const formdata = new FormData()
      // formdata.append('ID', this.randomId)
      formdata.append('PASSWORD', this.testlist[1])
      formdata.append('EMAIL', this.testlist[0])
      formdata.append('ADDRESS', this.testlisttwo[1])
      formdata.append('FULLNAME', this.testlist[3])
      formdata.append('BIRTHDAY', this.bir)
      formdata.append('MOBILE', this.testlisttwo[0])
      fetch('./phpfile/testmember.php', {
        method: 'POST',
        body: formdata
      })
    }
  }
}
</script>

<style lang="scss">
.LoginBackground {
  background-image: url(../assets/logincar.jpeg);
  background-size: cover;
  .v-text-field__details {
    height: 0px;
    display: none;
  }
}
.LoginBackground3 {
  background-image: url(../assets/signup2.jpg);
  background-size: cover;
  .v-text-field__details {
    height: 0px;
    display: none;
  }
}
</style>
