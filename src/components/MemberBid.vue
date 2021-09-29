<template>
  <div class="article">
    <media :query="{ minWidth: '401px' }">
      <div>
        <div style="width: 600px; height:900px; margin: 0 auto; border-radius: 10px; overflow-y: scroll;" class="d-flex flex-column justify-start">
          <div
            style="border: 2px solid #000; width: 100%; height:180px; border-radius: 10px"
            class="d-flex justify-center align-center mt-3"
            v-for="item in follow"
            :key="item"
          >
            <div style="width: 580px; height:160px;" class="d-flex">
              <div style="height: 100%; width:35%;" class="d-flex justify-center align-center">
                <img :src="item.AUPATH" style="width: 90%; height: 90%; object-fit: cover;">
              </div>
              <div style="height: 100%; width:65%;">
                <div style="height: 52px" class="d-flex">
                  <div style="width: 30%; height: 100%" class="text-subtitle-1 font-weight-light d-flex align-center justify-center">拍賣會名稱 :</div>
                  <div style="height:100%; width: 55%;" class="text-subtitle-1 font-weight-light d-flex align-center pl-2">{{ item.AUNAME }}</div>
                  <div style="height:100%; width: 15%;" class="d-flex align-center justify-center">
                    <v-icon large>mdi-delete-forever</v-icon>
                  </div>
                </div>
                <div style="height: 52px" class="d-flex">
                  <div style="height: 100%; width:30%" class="text-subtitle-1 font-weight-light d-flex align-center justify-center pl-12">底價 :</div>
                  <div style="height: 100%; width:70%" class="text-subtitle-1 font-weight-light d-flex align-center pl-2">{{ item.RESERVEPRICE }}</div>
                </div>
                <div style="height: 52px" class="d-flex">
                  <div style="height: 100%; width:30%" class="text-subtitle-1 font-weight-light d-flex align-center justify-center pl-3">開始時間 :</div>
                  <div style="height: 100%; width:70%" class="text-subtitle-1 font-weight-light d-flex align-center pl-2">{{ item.STARTINGTIME }}</div>
                </div>
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
          style="max-width: 375px;"
        >
          <div
            style="max-width: 100%; height:100%;"
          >
            <div style="width:350px; height:1600px; margin: 0 auto;" class="d-flex flex-column justify-space-around">
              <div style="border: 2px solid black; width: 350px;" v-for="item in follow" :key="item">
                <div style="width:100%; height:50%" class="d-flex align-center justify-center">
                  <img :src="item.AUPATH" style="width: 100%; height: 100%;">
                </div>
                <div style="width:100%; height:50%">
                  <div style="height: 52px" class="d-flex">
                    <div style="width: 30%; height: 100%" class="text-subtitle-1 font-weight-light d-flex align-center justify-center">拍賣會名稱 :</div>
                    <div style="height:100%; width: 55%;" class="text-subtitle-1 font-weight-light d-flex align-center pl-2">{{ item.AUNAME }}</div>
                    <div style="height:100%; width: 15%;" class="d-flex align-center justify-center">
                      <v-icon large>mdi-delete-forever</v-icon>
                    </div>
                  </div>
                  <div style="height: 52px" class="d-flex align-center">
                    <div style="height: 100%; width:30%" class="text-subtitle-1 font-weight-light d-flex align-center justify-center pl-12">底價 :</div>
                    <div style="height: 100%; width:70%" class="text-subtitle-1 font-weight-light d-flex align-center pl-2">{{ item.RESERVEPRICE }}</div>
                  </div>
                  <div style="height: 52px" class="d-flex">
                    <div style="height: 100%; width:30%" class="text-subtitle-1 font-weight-light d-flex align-center justify-center pl-3">開始時間 :</div>
                    <div style="height: 100%; width:70%" class="text-subtitle-1 font-weight-light d-flex align-center pl-2">{{ item.STARTINGTIME }}</div>
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
import Media from 'vue-media'
export default {
  async created () {
    this.member = JSON.parse(localStorage.getItem('member'))
    console.log(this.member[0].MEMBERID)
    const fd = new FormData()
    fd.append('mID', this.member[0].MEMBERID)
    const res = await fetch('./phpfile/memberfollow.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(resdata)
    this.follow = resdata.reverse()
  },
  data: () => ({
    member: [],
    follow: [],
    items: [
      {
        img: require('../assets/compare-car-pic/hotcar01.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21 14:00PM'
      },
      {
        img: require('../assets/compare-car-pic/hotcar02.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21 14:00PM'
      },
      {
        img: require('../assets/compare-car-pic/hotcar03.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21 14:00PM'
      },
      {
        img: require('../assets/compare-car-pic/hotcar04.png'),
        name: '2020 BENZ GLC',
        price: '$650,000',
        start: '2021/04/21 14:00PM'
      }
    ]
  }),
  components: {
    Media
  }
}
</script>

<style lang="scss">
.article {
  box-sizing: border-box;
  // border: 2px solid #00f;
  margin: 0;
  padding: 0;
}
</style>
