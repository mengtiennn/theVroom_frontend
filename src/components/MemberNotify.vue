<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div style="width :100%;">
        <div style="border: 1px solid black; border-radius: 10px; width: 600px; height: 900px; margin: 0 auto;" class="d-flex align-center justify-center">
          <div style="width: 560px; height: 860px;">
            <div style="border-bottom: 1px solid black; width: 100%; height: 172px" class="d-flex aa" v-for="(item, index) in notify" :key="item">
              <div style="width: 22%; height:100%" class="d-flex align-center">
                <div style="width:120px; height: 120px">
                  <img :src="item.IMGPATH" style="width:100%; height: 100%; object-fit: cover;">
                </div>
              </div>

              <div style="width: 60%; height:100%">
                <div style="width: 100%; height: 28%" class="text-subtitle-1 font-weight-medium d-flex align-end pl-4">{{ item.AUCTIONNAME }}</div>
                <div style="width: 100%; height: 28%" class="text-subtitle-1 font-weight-medium pl-4">{{ item.ENDTIME }}</div>
              </div>
              <div style="width: 18%; height:100%" class="d-flex align-center">
                <router-link to="/carcheckout">
                <v-btn rounded outlined width="100%" @click="gogoro(index)" color="#F34841">前往結帳</v-btn>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <div
          style="max-width: 375px"
        >
          <div
            class="d-flex flex-column justify-space-around"
            style="width: 350px; height: 1400px; margin: 0 auto;"
          >
            <div style="border: 2px solid black; border-radius: 10px; width: 100%; height: 250px" v-for="item in notify" :key="item">
              <div style="width: 100%; height: 20%" class="text-h6 font-weight-bold d-flex align-center pl-5">{{ item.AUCTIONNAME }}</div>
              <div style="width: 100%; height: 20%" class="text-subtitle-1 font-weight-medium d-flex align-center pl-5">{{ item.ENDTIME }}</div>
              <div style="width: 100%; height: 20%" class="text-subtitle-1 font-weight-medium d-flex align-center justify-end pr-3 pb-3">
                <v-btn rounded outlined width="150" color="#F34841">前往結帳</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  async created () {
    this.member = JSON.parse(localStorage.getItem('member'))
    console.log(this.member[0].MEMBERID)
    const fd = new FormData()
    fd.append('mID', this.member[0].MEMBERID)
    const res = await fetch('./phpfile/membernotify.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(resdata)
    this.notify = resdata
    console.log(this.notify)
  },
  methods: {
    gogoro (index) {
      console.log(index)
      console.log(this.notify[index])
      this.checkoutdata = this.notify[index]
      console.log(this.checkoutdata)
      this.$store.dispatch('checkout', this.checkoutdata)
    }
  },
  data: () => ({
    checkoutdata: {},
    member: [],
    notify: []
    // notifys: [
    //   {
    //     type: 1,
    //     img: require('../assets/auction.png'),
    //     title: '競標場提醒',
    //     info: '您的 BMW M2 Competition 2020鐵灰 會場時間即將結束',
    //     time: '2021/04/21',
    //     button: '進入會場'
    //   },
    //   {
    //     type: 2,
    //     img: require('../assets/forum2.png'),
    //     title: '討論區提醒',
    //     info: '您的 請問哪款車比較適合剛出社會的我? 文章有新回復',
    //     time: '2021/04/21',
    //     button: '查看文章'
    //   },
    //   {
    //     type: 3,
    //     img: require('../assets/cart2.png'),
    //     title: '訂單通知',
    //     info: '您的 訂單3458264200 已成立',
    //     time: '2021/04/21',
    //     button: '查看訂單'
    //   },
    //   {
    //     type: 4,
    //     img: require('../assets/forum2.png'),
    //     title: '討論區提醒',
    //     info: '您的 請問哪款車比較適合剛出社會的我? 文章有新回復',
    //     time: '2021/04/21',
    //     button: '查看文章'
    //   },
    //   {
    //     type: 5,
    //     img: require('../assets/cart2.png'),
    //     title: '訂單通知',
    //     info: '您的 訂單3458264200 已成立',
    //     time: '2021/04/21',
    //     button: '查看訂單'
    //   }
    // ]
  }),
  components: {
    Media
  }
}
</script>

<style scoped>
.aa:last-child{
  border-bottom: none !important;
}
</style>
