<template>
  <div id="app">
    <v-app>
      <the-header v-if="showheader"></the-header>
      <div class="fixHeader" :style="nomargin">
        <router-view />
      </div>
      <!-- <v-btn @click="test">123</v-btn> -->
      <!-- <testfileload/> -->
      <!-- <button @click="test123">123</button> -->
      <transition name="fade">
      <shoplistall style="position:fixed;top:100px;right:0;" v-if="showcart1"/>
      </transition>
      <!-- <shoplist :to='signset' :shoplist1="shoplist1" class="testani"/> -->
      <the-footer></the-footer>
      <!-- <home class="d-none"></home> -->
    </v-app>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
// import Home from './views/Home.vue'
// import testfileload from './components/testfileload.vue'
import shoplistall from './components/shoplistall.vue'

export default {
  created () {
    console.log(this.$store.getters.getcart)
    // this.showcart = this.$store.getters.getcart
  },
  mounted () {
    // console.log(this.$store.getters)
    // const member123 = JSON.parse(localStorage[member])
    // console.log(member123)
    // const ac = localStorage.getItem('memberac')
    // const ps = localStorage.getItem('memberpa')
    // console.log(JSON.parse(localStorage.getItem('member')))
    // console.log(this.$store.getters.getmember)
    const member123 = JSON.parse(localStorage.getItem('member'))
    // const shoplist = JSON.parse(localStorage.getItem('shoplist'))
    // console.log(shoplist)
    // console.log(member123)
    // if (shoplist) {
    //   this.$store.dispatch('shoplist', shoplist)
    // }
    if (member123) {
      this.$store.dispatch('keepsign', member123)
      // console.log('123')
      // console.log(this.$store.getters)
    }
    // console.log(this.$store.getters)
  },
  data () {
    return {
      memberac: '',
      memberps: '',
      abc: '',
      topstyle: 'margin-top: 64px;',
      showcart: false
    }
  },
  components: {
    TheHeader,
    TheFooter,
    // Home,
    // testfileload,
    shoplistall
  },
  computed: {
    showheader () {
      return this.$store.getters.gethappy
    },
    nomargin () {
      return this.$store.getters.getsad
    },
    showcart1 () {
      return this.$store.getters.getcart
    }
  },
  methods: {
    aaa () {
      console.log('123')
      this.$refs.fullpage_api.setAllowScrolling(false)
    },
    test123 () {
      const memberinfo = this.$store.getters.getmember
      if (memberinfo === 0) {
      } else {
        // console.log(memberinfo[0].EMAIL)
        // console.log(memberinfo[0].PASSWORD)
        this.memberid = localStorage.getItem('memberac')
        this.memberps = localStorage.getItem('memberpa')
        console.log(this.memberid)
        console.log(this.memberps)
        // this.$cookies.set('memberac', account)
        // this.$cookies.set('memberpa', password)
        // console.log(document.$cookie)
        // console.log(this.$cookies.isKey('memberpa'))
        // console.log(this.$cookies.get('memberac'))
      }
    },
    showlistcart () {
      this.showcart = !this.showcart
    }
    // async test () {
    //   const response = await fetch('./test2.php')
    //   const responsedata = await response.json()

    //   console.log(response)
    //   console.log(responsedata)
    // }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

*{
  font-family: 'Noto Sans TC', 'Noto Sans';
  text-decoration: none;
  box-sizing: border-box;
}
body{
  box-sizing: border-box;
}
.fixHeader{
  margin-top: 64px;
}
a{
  color: #FFFFFF;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave, .fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 0.8s ease;
}
.fade-leave-active {
  transition: all 0.8s ease;
}
</style>
