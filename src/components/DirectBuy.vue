<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="indexproductall mb-10" style="height:100vh">
        <div class="d-flex justify-center">
          <the-headline
            titleName="直購區"
            style="color:black"
            class="mt-15 mb-3"
          ></the-headline>
        </div>
        <div class="indexproduct1 ma-auto">
          <div
            class="indexproductsection"
            v-for="item in product"
            :key="item.id"
          >
            <div class="indexproductborder"></div>
            <h2 class="text-h6 font-weight-bold">{{ item.title }}</h2>
            <div class="indexproductsection1">
              <v-btn rounded color="white" large class="ml-15 mt-15">
                <router-link to="/accessories" style="color: #181818;">
                  Shop now <i class="fas fa-shopping-cart ml-3"></i>
                </router-link>
              </v-btn>
              <img :src="item.src" alt="圖壞了" style="object-fit: contain"/>
            </div>
          </div>
        </div>
        <div class="indexproduct2 ma-auto" style="width:1200px;overflow:hidden">
          <div class="carousel">
            <v-carousel
              width="700"
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
              class="d-flex justify-center"
            >
              <template v-slot:prev="{ on, attrs }">
                <v-btn
                  class="#FFFFFF--text"
                  width="100"
                  color="#F34841"
                  v-bind="attrs"
                  v-on="on"
                  @click="move"
                  >上一台</v-btn
                >
              </template>
              <template v-slot:next="{ on, attrs }">
                <v-btn
                  class="#FFFFFF--text"
                  width="100"
                  color="#F34841"
                  v-bind="attrs"
                  v-on="on"
                  @click="back"
                  >下一台</v-btn
                >
              </template>
              <v-carousel-item
                v-for="item in items"
                :key="item.id"
                :src="item.src"
                width="850"
                ref="carinfo"
              ></v-carousel-item>
            </v-carousel>
          </div>
          <div class="indexcarinfo">
            <div class="indexcarinfo1">
              <h1 class="text-h4 font-weight-bold">{{ brand }}</h1>
              <h2 class="text-h6 font-weight-bold">{{ type }}</h2>
              <ul style="list-style: none;" class="indexcarinfo2">
                <li>車門數:{{ door }}</li>
                <li>動力特色:{{ info }}</li>
                <li>馬力:{{ power }}</li>
                <li>平均油耗:{{ liters }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ------------------------------------------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div class="indexproductall mb-10" style="height:100%">
        <div class="d-flex justify-start">
          <the-headline
            titleName="直購區"
            style="color:black"
            class="mt-15 mb-10"
          ></the-headline>
        </div>
          <div
            class="indexproductsection"
            v-for="item in product"
            :key="item.id"
          >
            <div class="indexproductsectionM ma-auto d-flex justify-sapce-between" style="min-width:300px;min-height:150px">
            <div class="d-flex flex-column justify-space-around">
            <div style="width:100%" class="text-h6 font-weight-bold">{{ item.title }}</div>
            <div style="width:150px">
              <v-btn rounded color="white" large style="width:120px">
                <router-link to="/accessories" style="color: #181818;border:1px solid #181818" class="rounded-pill text-body2 font-weight-medium pa-2 py-3">
                  Shop now <i class="fas fa-shopping-car"></i>
                </router-link>
              </v-btn>
            </div>
            </div>
            <div class="align-self-center" style="width:100%;height:100%"><img :src="item.src" alt="圖壞了" /></div>
            </div>
          </div>
          <!-- <div>
          <mobile-overview-content/>
          </div> -->
          <div class="my-5">
            <direct-buy-m/>
          </div>
      </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'
import DirectBuyM from './DirectBuyM.vue'
// import MobileOverviewContent from './MobileOverviewContent.vue'
export default {
  components: {
    Media,
    // MobileOverviewContent,
    DirectBuyM
  },
  data () {
    return {
      product: [
        {
          id: '1',
          title: '輪胎專區',
          src: require('../assets/index-car-pic/indexpicwheel.png')
        },
        {
          id: '2',
          title: '汽車零件專區',
          src: require('../assets/index-car-pic/indexpicproduct.gif')
        },
        {
          id: '3',
          title: '其他商品',
          src: require('../assets/index-car-pic/indexpicother.png')
        }
      ],
      items: [
        {
          id: '1',
          src: require('../assets/index-car-pic/benzglc.png')
        },
        {
          id: '2',
          src: require('../assets/index-car-pic/benzgle1.png')
        },
        {
          id: '3',
          src: require('../assets/index-car-pic/benzgle2.png')
        },
        {
          id: '4',
          src: require('../assets/index-car-pic/bmw7.png')
        },
        {
          id: '5',
          src: require('../assets/index-car-pic/gtr.png')
        }
      ],
      carbrands: [
        {
          id: '0',
          brand: 'Mercedes-Benz',
          type: 'GLE43',
          door: '5門5人座',
          info: '渦輪增壓, 直列6缸, DOHC雙凸輪軸, 24氣門',
          power: '272hp@3400~4600rpm',
          liters: '平均 13.1km/ltr'
        },
        {
          id: '1',
          brand: 'Mercedes-Benz',
          type: 'GLE300',
          door: '5門5人座',
          info: '渦輪增壓, 直列4缸, DOHC雙凸輪軸, 16氣門',
          power: '212hp@2400~4500rpm',
          liters: '平均 15.5km/ltr'
        },
        {
          id: '2',
          brand: 'BMW',
          type: 'X5',
          door: '5門5人座',
          info: '渦輪增壓, 直列4缸, DOHC雙凸輪軸, 16氣門',
          power: '225hp@3400~4600rpm',
          liters: '平均 11.8km/ltr'
        },
        {
          id: '3',
          brand: 'BMW',
          type: 'M2C',
          door: '2門2人座',
          info: '渦輪增壓, 直列6缸, DOHC雙凸輪軸, 24氣門',
          power: '370hp@3400~4600rpm',
          liters: '平均 9.5km/ltr'
        },
        {
          id: '4',
          brand: 'Nissan',
          type: 'GT-R',
          door: '2門2人座',
          info: '渦輪增壓, V列6缸, DOHC雙凸輪軸, 24氣門',
          power: '565hp@3300~5800rpm',
          liters: '平均 8km/ltr'
        }
      ],
      count: 0
    }
  },
  methods: {
    move () {
      if (this.count < 0.1) {
        this.count = 5
      }
      this.count--
    },
    back () {
      if (this.count > 3.9) {
        this.count = -1
      }
      this.count += 1
      console.log(this.count)
    }
  },
  computed: {
    brand () {
      return this.carbrands[this.count].brand
    },
    type () {
      return this.carbrands[this.count].type
    },
    door () {
      return this.carbrands[this.count].door
    },
    info () {
      return this.carbrands[this.count].info
    },
    power () {
      return this.carbrands[this.count].power
    },
    liters () {
      return this.carbrands[this.count].liters
    }
  }
}
</script>

<style lang="scss">
.indexproductall {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  .titlebox .auctiontitle {
    flex-direction: row;
    color: black;
  }
  .indexproduct1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .indexproductsection {
    z-index: 10;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    h2 {
      padding-top: 15px;
    }
    .indexproductborder {
      border: 1px solid grey;
      height: 200px;
      width: 300px;
      position: absolute;
      transform: skew(-20deg, 0deg);
      z-index: -1;
    }
    .indexproductborderM {
      border: 3px solid grey;
      border-radius: 20px;
      height: 200px;
      width: 300px;
      z-index: -1;
    }
    .indexproductsection1 {
      img {
        width: 180px;
        height: 180px;
      }
      display: flex;
    }
    .indexproductsectionM {
      border: 3px solid grey;
      border-radius: 20px;
      img {
        width: 100px;
        height: 120px;
      }
    }
  }
  .indexproduct2 {
    display: flex;
    .v-image__image--cover {
      background-size: contain;
    }
    .indexcarinfo {
      display: flex;
      align-items: center;
      .indexcarinfo1 {
        width: 350px;
        .indexcarinfo2 {
          margin-top: 30px;
          text-align: left;
          margin-left: 30px;
          li {
            margin-top: 10px;
          }
          .v-image__image,
          .v-image__placeholder {
            left: -5px;
          }
        }
      }
    }
  }
}
</style>
