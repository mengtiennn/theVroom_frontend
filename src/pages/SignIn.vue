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
        <div style="width:100%;height:100%" class="d-flex align-center">
          <div
            style="width:80%;height:80%"
            class="ma-auto d-flex flex-column align-center justify-space-around"
          >
            <div class="mb-10 ml-10 align-self-start">
              <h1>會員登入</h1>
              <div style="width:200%;height:3px" class="red"></div>
            </div>
            <div class="d-flex align-center mb-5" style="height:60px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>電子信箱:</h2>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="該資料為您日後的登入帳號"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                      v-model="signemail"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:60px;width:90%">
              <v-container>
                <v-row fluid class="d-flex align-center">
                  <v-col cols="12" sm="3">
                    <h2>密碼:</h2>
                  </v-col>
                  <v-col cols="12" sm="9">
                    <v-textarea
                      label="請輸入6-12位英數混和 需區分大小寫 請勿使用特殊符號"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                      v-model="signpassword"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </div>
            <div class="align-self-start ml-10">
              <div class="d-flex">
                <div @click="sign">
                  <button-submit buttonSubmit="登入"></button-submit>
                </div>
                <h6 class="align-self-end ml-10">
                  <router-link to="/signup">還不是會員嗎? 立即註冊</router-link>
                </h6>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </media>
  <!-- ------------------------------------------------------------------ -->
  <media :query="{ maxWidth: '400px' }">
  <div
    style="width:100%;height:100vh;background-position:center;"
    class="ma-auto d-flex justify-center align-center"
  >
    <div class="LoginBackground2" style="width:100%;height:100%;">
      <div
        class="d-flex my-5 ma-auto"
        style="border-radius:20px;width:90%;height:90%;background-color:rgba(255,255,255,.9);"
      >
        <div
          style="width:100%;border-radius:20px"
        >
        <div style="width:100%;height:90%" class="d-flex align-center">
          <div
            style="width:100%;height:100%"
            class="ma-auto d-flex flex-column align-center justify-space-around"
          >
            <div class="mb-10 ml-5 align-self-start">
              <h1>會員登入</h1>
              <div style="width:200%;height:3px" class="red"></div>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:80%">
              <v-container>
                <v-row fluid class="d-flex flex-column align-start">
                    <h2 class="mb-3">電子信箱:</h2>
                    <v-textarea
                      label="該資料為您日後的登入帳號"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                      style="width:100%"
                    ></v-textarea>
                </v-row>
              </v-container>
            </div>
            <div class="d-flex align-center mb-5" style="height:50px;width:80%">
              <v-container>
                <v-row fluid class="d-flex flex-column align-start">
                    <h2 class="mb-3">密碼:</h2>
                    <v-textarea
                      label="請輸入6-12位英數混和 需區分大小寫 請勿使用特殊符號"
                      auto-grow
                      outlined
                      rows="1"
                      row-height="10"
                      style="width:100%"
                    ></v-textarea>
                </v-row>
              </v-container>
            </div>
            <div class="align-self-center">
              <div class="d-flex flex-column" style="width:100%">
                  <button-submit style="width:300px" buttonSubmit="登入"></button-submit>
                <h6 class="align-self-end ml-10 mt-5">
                  <router-link to="/signup">還不是會員嗎? 立即註冊</router-link>
                </h6>
              </div>
            </div>
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
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: { ButtonSubmit, Media },
  data () {
    return {
      jedgenum: 0,
      count: 0,
      member: [],
      resdata: []
    }
  },
  methods: {
    async sign () {
      const fd = new FormData()
      fd.append('SIGNEM', this.signemail)
      fd.append('SIGNPA', this.signpassword)
      fd.append('JEDGENUM', this.jedgenum)
      // fetch('./testsignin.php', {
      //   method: 'POST',
      //   body: fd
      // })
      const res = await fetch('./phpfile/testsignin.php', {
        method: 'POST',
        body: fd
      })
      console.log('13')
      const resdata = await res.json()
      console.log(resdata)
      if (resdata.length === 0) {
        alert('帳號密碼錯誤')
      } else {
        console.log('123')
        this.$store.dispatch('membersign', resdata)
        console.log('456')
        this.$router.replace('/') // 成功登入後導入首頁
        const memberinfo = this.$store.getters.getmember
        // const account = memberinfo[0].EMAIL
        // const password = memberinfo[0].PASSWORD
        // console.log('abc')
        console.log(memberinfo)
        // localStorage.setItem('memberac', account)
        // localStorage.setItem('memberpa', password)
        localStorage.setItem('member', JSON.stringify(memberinfo))
      }
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
.LoginBackground2 {
  background-image: url(../assets/signin.jpg);
  background-size: cover;
  .v-text-field__details {
    height: 0px;
    display: none;
  }
}
</style>
