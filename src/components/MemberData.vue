<template>
  <div class="memberdata">
    <div style="height:900px" class="ma-auto d-flex align-center">
      <div style="width:600px;" class="d-flex justify-center">
        <div
          class="d-flex flex-column align-center justify-space-around"
          style="width:90%;height:900px;"
        >
          <div
            class="d-flex flex-column mt-10 my-5 px-5"
            style="width:90%;height:70px"
          >
            <div class="d-flex justify-space-between align-center">
              <h2>帳戶資料</h2>
              <!-- <button class="red white--text pa-3" style="border-radius:20px">
                升級會員
              </button> -->
            </div>
            <div style="width:100%;height:3px" class="grey mt-5"></div>
          </div>
          <div
            style="width:90%;height:65px"
            class="d-flex flex-column my-5 px-5"
          >
            <h3>電子信箱</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model='email'
                filled
                rounded
                dense
                disabled
              ></v-text-field>
            </v-col>
          </div>
          <div
            style="width:90%;height:65px"
            class="d-flex flex-column my-5 px-5"
          >
            <h3>密碼</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                filled
                rounded
                dense
                :disabled='turn'
                v-model='password'
                :value='this.password'
              ></v-text-field>
            </v-col>
          </div>
          <div
            style="width:90%;height:65px"
            class="d-flex flex-column my-5 px-5"
          >
            <h3>姓名</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                filled
                rounded
                dense
                :disabled='turn'
                v-model='fullname'
                :value='this.fullname'
              ></v-text-field>
            </v-col>
          </div>
          <div
            style="width:90%;height:65px"
            class="d-flex flex-column my-5 px-5"
          >
            <h3>手機</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                label="請輸入手機號碼"
                filled
                rounded
                dense
                :disabled='turn'
                v-model='mobile'
                :value='this.mobile'
              ></v-text-field>
            </v-col>
          </div>
          <div
            style="width:90%;height:65px"
            class="d-flex flex-column my-5 px-5"
          >
            <h3>地址</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                label="請輸入正確地址"
                filled
                rounded
                dense
                :disabled='turn'
                v-model='address'
                :value='this.address'
              ></v-text-field>
            </v-col>
          </div>
          <div class="mt-8 align-self-center">
            <button @click="turnbtn" class="text-h6 font-weight-bold red white--text pa-2 px-5 mr-8 rounded-pill">修改</button>
            <button @click="save" class="text-h6 font-weight-bold black white--text pa-2 px-5 ml-8 rounded-pill">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      member: [],
      address: '',
      mobile: '',
      fullname: '',
      password: '',
      email: '',
      turn: true
    }
  },
  async created () {
    this.member = JSON.parse(localStorage.getItem('member'))
    this.memberid = this.member[0].MEMBERID
    // console.log(this.member[0])
    // console.log(this.member[0].EMAIL)
    // console.log(this.member[0].MOBILE)
    const formdata = new FormData()
    formdata.append('MEMBERID', this.memberid)
    const res = await fetch('./phpfile/memberselect.php', {
      method: 'POST',
      body: formdata
    })
    const resdata = await res.json()
    this.member = resdata
    this.address = this.member[0].ADDRESS
    console.log(this.member)
    this.mobile = this.member[0].MOBILE
    this.fullname = this.member[0].FULLNAME
    this.password = this.member[0].PASSWORD
    this.email = this.member[0].EMAIL
    this.memberid = this.member[0].MEMBERID
  },
  methods: {
    async save () {
      const fd = new FormData()
      fd.append('PASSWORD', this.password)
      fd.append('ADDRESS', this.address)
      fd.append('FULLNAME', this.fullname)
      fd.append('MOBILE', this.mobile)
      fd.append('MEMBERID', this.memberid)
      const res = await fetch('./phpfile/updatedata.php', {
        method: 'POST',
        body: fd
      })
      const resdata = res.json()
      this.member = [...resdata]
      console.log(this.member)
    },
    turnbtn () {
      if (this.turn === true) {
        this.turn = false
      } else {
        this.turn = true
      }
    }
  }
}
</script>

<style lang="scss">
.memberdata{
  .v-text-field__slot input{
    height:30px
  }
}
</style>
