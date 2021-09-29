<template>
<div>
    <media :query="{ minWidth: '401px' }">
  <div class="aboutus" style="100%">
    <div class="leftandright d-flex">
      <!-- <div class="leftgo px-5 mr-3" @click="move"><i class="fas fa-caret-left"></i></div>
      <div class="rightgo px-5 ml-3" @click="back">
        <i class="fas fa-caret-right"></i>
      </div> -->
      <div @click="move">
        <button-directbuy
          class="px-5 mr-1"
          style="font-size:24px;font-weight:700;"
          iconame="❮"
        ></button-directbuy>
      </div>
      <div @click="back">
        <button-directbuy
          class="px-5 ml-1"
          style="font-size:24px;font-weight:700;"
          iconame="❯"
        ></button-directbuy>
      </div>
    </div>
    <div class="aboutitembackground">
      <div class="aboutitembackgroundimage">
          <div
            class="aboutusitem"
            v-for="item in list"
            :key="item.id"
            ref="aboutusall"
          >
            <div class="aboutusitem1">
              <h1>{{ item.num }}</h1>
            </div>
            <div class="aboutusitem2"><i :class="item.icon"></i></div>
            <div class="aboutusitem3">
              <h2 class="text-h6 font-weight-bold">{{ item.title }}</h2>
            </div>
            <div class="aboutusitem4">
              <p class="text-subtitle-1 font-weight-light">
                {{ item.info }}
              </p>
            </div>
            <div class="aboutusitem5">
              <v-btn rounded color="#F34841" dark>
                <router-link to="/newdriver" style="color: #FFFFFF;">
                  了解詳情
                </router-link>
              </v-btn>
            </div>
          </div>
      </div>
    </div>
  </div>
  </media>
  <!-- -------------------------------------------------------------------------- -->
  <media :query="{ maxWidth: '400px' }">
  <div class="d-flex flex-column">
    <div v-for="item in listM" :key="item.id" class="mb-10" style="max-width:375px">
          <div  style="width:100%">
            <v-img
              class="white--text align-end"
              style="height:220px"
              :src="item.imgsrc"
            >
              <!-- <v-card-title>經典新款</v-card-title> -->
            </v-img>

            <v-card-subtitle class="text-h5 font-weight-bold">
              {{ item.title }}
              <div style="width:50%;height:3px" class="red"></div>
            </v-card-subtitle>

            <v-card-text class="text-subtitle-1 font-weight-light">
              <div>
                {{ item.info }}
              </div>
            </v-card-text>
          </div>
        </div>
  </div>
  </media>
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  components: { Media },
  data () {
    return {
      list: [
        {
          id: '1',
          num: '01',
          icon: 'fas fa-dna',
          title: '系統化競價',
          info:
            '我們規劃出一套細膩的競價系統，以及透明化的出價紀錄，讓使用者能夠輕鬆競標，快樂得標．'
        },
        {
          id: '2',
          num: '02',
          icon: 'fab fa-ubuntu',
          title: '專業化團隊',
          info:
            '結合最優秀、專業之車檢人員並引進日本最先進的車輛檢查技術，為拍賣流通之車輛作把關，使會員於競拍車輛時更能快速、即時判斷車況及行情，競標到自己屬意的車輛。'
        },
        {
          id: '3',
          num: '03',
          icon: 'fas fa-user-friends',
          title: '透明化車況',
          info:
            '由合格認證的專業查定士，對於車輛進行22部位，共105項的檢查及鑑定；並將查定的結果於『查定結果表』上忠實呈現，一舉將目前拍賣車無法啟動檢視的風險降至最低！'
        },
        {
          id: '4',
          num: '04',
          icon: 'fas fa-tools',
          title: '完整化服務',
          info:
            '購買車輛後不只提供牌照、燃料及車險等等一系列服務，在購車起算後一年內額外提供保固維修，讓你在購車之餘多享受一份安心。'
        },
        {
          id: '5',
          num: '05',
          icon: 'fas fa-tools',
          title: '完整化服務',
          info:
            '購買車輛後不只提供牌照、燃料及車險等等一系列服務，在購車起算後一年內額外提供保固維修，讓你在購車之餘多享受一份安心。'
        }
      ],
      listM: [
        {
          id: '1',
          imgsrc: require('../assets/indexaboutus1.jpg'),
          num: '01',
          icon: 'fas fa-dna',
          title: '系統化競價',
          info:
            '我們規劃出一套細膩的競價系統，以及透明化的出價紀錄，讓使用者能夠輕鬆競標，快樂得標．'
        },
        {
          id: '2',
          imgsrc: require('../assets/indexaboutus2.jpg'),
          num: '01',
          icon: 'fas fa-dna',
          title: '專業化團隊',
          info:
            '結合最優秀、專業之車檢人員並引進日本最先進的車輛檢查技術，為拍賣流通之車輛作把關，使會員於競拍車輛時更能快速、即時判斷車況及行情，競標到自己屬意的車輛。'
        },
        {
          id: '3',
          imgsrc: require('../assets/indexaboutus3.jpg'),
          num: '01',
          icon: 'fas fa-dna',
          title: '透明化車況',
          info:
            '由合格認證的專業查定士，對於車輛進行22部位，共105項的檢查及鑑定；並將查定的結果於『查定結果表』上忠實呈現，一舉將目前拍賣車無法啟動檢視的風險降至最低！'
        }
      ],
      train: 0,
      carmove: 0,
      carback: 0,
      moved: 600
    }
  },
  methods: {
    move () {
      const allitem = this.$refs.aboutusall
      if (this.train < -1) {
        this.train += this.moved
        this.carback = this.train
        console.log(this.carback)
        allitem.forEach(item => {
          item.style.transform = `translateX(${this.carback}px)`
        })
      }
    },
    back () {
      const allitem = this.$refs.aboutusall
      if (this.train > -349) {
        this.train -= this.moved
        this.carmove = this.train
        console.log(this.carmove)
        allitem.forEach(item => {
          item.style.transform = `translateX(${this.carmove}px)`
        })
      }
    }
  }
}
</script>

<style lang="scss">
.aboutus {
  display: flex;
  height: 100vh;
  .leftandright {
    background-color: black;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    .leftgo {
      color: white;
      border: 1px solid white;
      border-radius: 50%;
      padding: 1px 15px;
      font-size: 35px;
      cursor: pointer;
      &:hover {
        border: 1px solid #f34841;
        color: #f34841;
      }
    }
    .rightgo {
      color: white;
      border: 1px solid white;
      border-radius: 50%;
      padding: 1px 15px;
      font-size: 35px;
      cursor: pointer;
      &:hover {
        border: 1px solid #f34841;
        color: #f34841;
      }
    }
  }
  .aboutitembackground {
    transition: all 1s;
    display: flex;
    width: calc(100% - 350px);
    overflow: hidden;
    background-color: rgba($color: #000000, $alpha: .5);
    .aboutitembackgroundimage {
      height: 100vh;
      display: flex;
        .aboutusitem {
          width: 390px;
          border-left: 1px solid #f34841;
          padding: 50px 30px;
          display: flex;
          flex-direction: column;
          transition: all 1s;
          background-image: url('../assets/index-aboutus.png');
          .aboutusitem1 {
            color: #fff;
            border-bottom: 2px solid #f34841;
            width: 60px;
            padding-bottom: 10px;
          }
          .aboutusitem2 {
            align-self: center;
            color: #fff;
            border: 1px solid #707070;
            border-radius: 50%;
            padding: 15px 20px;
            font-size: 30px;
            margin-top: 50px;
            margin-bottom: 50px;
          }
          .aboutusitem3 {
            color: #fff;
            margin-bottom: 50px;
            height: 200px;
          }
          .aboutusitem4 {
            color: #fff;
            height: 150px;
            margin-bottom: 50px;
          }
        }
      }
  }
}
</style>
