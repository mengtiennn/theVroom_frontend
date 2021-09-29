<template>
  <div class="compare_inside">
    <media :query="{ minWidth: '401px' }">
      <div class="inside d-flex flex-column justify-center">
        <!-- <div class="d-flex ma-auto">
        <div class="inside_card" v-for="item in cardata" :key="item">
          <div class="table">
            <div class="table_top">
              <div class="top_first text-subtitle-1 font-weight-light">車款比較</div>
            </div>
            <div class="table_middle">
              <div class="middle_first text-subtitle-1 font-weight-light">車款</div>
              <div class="middle_second">
                <div class="middle_sec_in">
                  <div class="sec_in_img">
                    <img :src=item[17] class="sec_image" style="object-fit: contain">
                  </div>
                  <div class="sec_in_select">
                    <ul style="list-style: none; padding: 10px 0 0 0; height: 100%" class="d-flex flex-column justify-space-around">
                      <li>
                        <v-select
                          :items="items"
                          label="請選擇車廠"
                          dense
                          outlined
                          style="border-radius:50px; width:270px"
                        ></v-select>
                      </li>
                      <li>
                        <v-select
                          :items="brands"
                          label="請選擇車款"
                          dense
                          outlined
                          style="border-radius:50px; width:270px"
                        ></v-select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="middle_third">
                <div class="middle_thr_in">
                  <div class="thr_in_img">
                    <img :src="cardata[1][17]" class="thr_image" style="object-fit: contain">
                  </div>
                  <div class="thr_in_select">
                    <ul style="list-style: none; padding: 10px 0 0 0; height: 100%" class="d-flex flex-column justify-space-around">
                      <li>
                        <v-select
                          :items="items"
                          label="請選擇車廠"
                          dense
                          outlined
                          style="border-radius:50px; width:270px"
                        ></v-select>
                      </li>
                      <li>
                        <v-select
                          :items="brands"
                          label="請選擇車款"
                          dense
                          outlined
                          style="border-radius:50px; width:270px"
                        ></v-select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <diV class="table_bottom">
              <div class="bottom_first text-subtitle-1 font-weight-light">車輛名稱</div>
              <div style="color: #F34841" class="bottom_second d-flex align-center justify-center text-h6 font-weight-regular">{{item[2]}}</div>
               <div style="color: #F34841" class="bottom_third d-flex align-center justify-center text-h6 font-weight-regular">123</div>
            </div>
          </div>
        </div>
       </div> -->
        <div style="width: 100%" class="mt-12">
          <v-card
            class="d-flex"
            outlined
            width="1200"
            height="650"
            style="border:2px solid black; margin:0 auto;"
          >
            <div style="width: 50%; height:100%" class="d-flex align-center justify-center" v-for="item in cardata" :key="item">
              <div style="width: 80%; height: 90%" class="d-flex flex-column">
                <div style="border: 1px solid black; height: 45%">
                  <img :src="item.CARTYPEPHOTO" style="width: 100%; height:100%">
                </div>
                <div style="height: 35%" class="d-flex align-center justify-center">
                  <ul style="list-style: none; padding: 0; width: 100%; height: 70%" class="d-flex flex-column justify-space-around">
                    <li>
                      <v-select
                        :items="items"
                        :label="item.BRAND"
                        dense
                        outlined
                        style="border-radius:50px; width:100%"
                      >
                      </v-select>
                    </li>
                    <li>
                      <v-select
                        :items="items"
                        :label="item.CARMODEL"
                        dense
                        outlined
                        style="border-radius:50px; width:100%"
                      >
                      </v-select>
                    </li>
                  </ul>
                </div>
                <div style="height: 20%; color:#F34841" class="d-flex align-center justify-center text-h6 font-weight-bold">
                  <div>NT$:{{item.CARPRICE}}</div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
       <div class="mb-15">
          <div class="btn_middle">
            <div class="btn_mid_inside">
              <div class="btn_first">
                <v-btn
                    x-large
                    color="#F34841"
                    dark
                    width="100%"
                    height="100%"
                    @click="component = 'table-one'"
                  >
                    基本資訊
                  </v-btn>
              </div>
              <div class="btn_second">
                <v-btn
                    x-large
                    color="#363636"
                    dark
                    width="100%"
                    height="100%"
                    @click="component = 'table-two'"
                  >
                    技術規格
                </v-btn>
            </div>
          </div>
        </div>

        <div style="margin-top: 50px">
          <component :is="component"></component>
        </div>
       </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <rwd-banner rwdtitle="市場行情" :pathImg="banner"/>
        <div
          style="max-width: 375px; height: 2600px; margin-top: 120px"
        >
          <div
            style="width: 100%;"
          >
            <div
              style="border: 1px solid black; width:350px; height:900px; margin: 0 auto;"
            >
              <div
                class="d-flex justify-center align-center"
                style="border: 1px solid black; width: 100%; height:50%"
              >
                <div
                  style="width: 300px; height:80%"
                >
                  <div style="width: 100%; height:50%">
                    <img :src="comparerwd01" style="width: 100%; height:100%">
                  </div>
                  <div style="width: 100%; height:50%">
                    <ul
                      class="d-flex flex-column justify-space-between pt-3"
                      style="list-style: none; padding: 0; width: 100%; height:100%"
                    >
                      <li
                        class="d-flex justify-center align-center"
                      >
                        <v-select
                          :items="items"
                          label="請選擇車廠"
                          dense
                          outlined
                          style="border-radius:50px; width:180px"
                        ></v-select>
                      </li>
                      <li
                        class="d-flex justify-center align-center"
                      >
                        <v-select
                          :items="brands"
                          label="請選擇車款"
                          dense
                          outlined
                          style="border-radius:50px; width:180px"
                        ></v-select>
                      </li>
                      <li
                        class="d-flex justify-center align-center"
                      >
                        <v-select
                          :items="version"
                          label="請選擇車系"
                          dense
                          outlined
                          style="border-radius:50px; width:180px"
                        ></v-select>
                      </li>
                    </ul>
                  </div>

                  <div style="height:50px; color: #F34841" class="d-flex align-center text-h6 font-weight-regular">$ 990W</div>
                </div>
              </div>

              <div
                class="d-flex justify-center align-center"
                style="border: 1px solid black; width: 100%; height:50%"
              >
                <div
                  style="width: 300px; height:80%"
                >
                  <div style="width: 100%; height:50%">
                    <img :src="comparerwd02" style="width: 100%; height:100%">
                  </div>
                  <div style="width: 100%; height:50%">
                    <ul
                      class="d-flex flex-column justify-space-between pt-3"
                      style="list-style: none; padding: 0; width: 100%; height:100%"
                    >
                      <li
                        class="d-flex justify-center align-center"
                      >
                        <v-select
                          :items="items"
                          label="請選擇車廠"
                          dense
                          outlined
                          style="border-radius:50px; width:180px"
                        ></v-select>
                      </li>
                      <li
                        class="d-flex justify-center align-center"
                      >
                        <v-select
                          :items="brands"
                          label="請選擇車款"
                          dense
                          outlined
                          style="border-radius:50px; width:180px"
                        ></v-select>
                      </li>
                      <li
                        class="d-flex justify-center align-center"
                      >
                        <v-select
                          :items="version"
                          label="請選擇車系"
                          dense
                          outlined
                          style="border-radius:50px; width:180px"
                        ></v-select>
                      </li>
                    </ul>
                  </div>

                  <div style="height:50px; color: #F34841" class="d-flex align-center text-h6 font-weight-regular">$ 990W</div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="mt-10"
            style="width: 100%;">
            <div
              class="d-flex"
              style="width: 350px; height:60px; margin: 0 auto;">
              <div style="width:50%; height:100%">
                <v-btn
                    x-large
                    color="#F34841"
                    dark
                    width="100%"
                    height="100%"
                    @click="component = 'table-one'"
                  >
                    基本資訊
                  </v-btn>
              </div>
              <div style="width:50%; height:100%">
                <v-btn
                    x-large
                    color="#363636"
                    dark
                    width="100%"
                    height="100%"
                    @click="component = 'table-two'"
                  >
                    技術規格
                </v-btn>
            </div>
          </div>

          <div class="mt-10">
            <component :cardata='cardata' :is="component"></component>
          </div>
        </div>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import RwdBanner from '../components/layout/RwdBanner.vue'
import CompareTableA from '../components/CompareTableA.vue'
import CompareTableB from '../components/CompareTableB.vue'
import Media from 'vue-media'

export default {
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    // console.log(this.$store.getters.getcardata)
  },
  async created () {
    this.cardata = this.$store.getters.getcardata
    const cardata = JSON.parse(localStorage.getItem('cardata'))
    console.log('dddd', cardata)
    this.cardata = cardata
    console.log(this.cardata)
    // console.log('mount????????????')

    console.log(this.$store.getters.getoneid)
    this.first = this.$store.getters.getoneid
    const formdata = new FormData()
    formdata.append('CARID1', this.first[0])
    formdata.append('CARID2', this.first[1])
    const res = await fetch('./phpfile/SelectFirst.php', {
      method: 'POST',
      body: formdata
    })
    const resdata = await res.json()
    console.log(resdata)
    // console.log(this.first)
    this.test = resdata
    console.log(this.test)

    const first = JSON.parse(localStorage.getItem('a'))
    const firstb = JSON.parse(localStorage.getItem('b'))
    console.log(first)
    this.first.push(first)
    this.first.push(firstb)
    console.log(this.first)
  },
  components: {
    cardata: [],
    'table-one': CompareTableA,
    'table-two': CompareTableB,
    Media,
    RwdBanner
  },
  data: () => ({
    first: [],
    test: [],
    component: 'table-one',
    items: ['Porsche', 'Lamborghini', 'Volkswagen', 'Volvo', 'M-Benz', 'BMW', 'Toyota', 'Audi', 'Ford', 'Honda', 'Lexus', 'Nissan'],
    brands: [],
    banner: require('../assets/123.png'),
    comparerwd01: require('../assets/compare-car-pic/hotcar01.png'),
    comparerwd02: require('../assets/compare-car-pic/hotcar02.png')
  })
}
</script>

<style lang="scss">
  .compare_inside {
    .v-text-field__details {
  display: none !important;
  }
    .inside {
      // border: 2px solid #00f;
      width: 100%;
      height: 1600px;
      .inside_card{
        // border: 1px solid #f20;
        width: 100%;
        margin-top: 50px;
        .table{
          // border: 1px solid #000;
          width: 800px;
          height: 650px;
          margin: 0 auto;
          .table_top{
          border: 1px solid #000;
          width: 55%;
          height: 12%;
          background: #D6D5D5;
          .top_first{
            // border: 1px solid #000;
            width: 10%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .table_middle{
          // border: 1px solid #f20;
          width: 100%;
          height: 76%;
          display: flex;
          .middle_first{
            border: 1px solid #000;
            border-top: none;
            border-bottom: none;
            border-right: none;
            width: 10%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .middle_second{
            border: 1px solid #000;
            border-top: none;
            border-bottom: none;
            border-right: none;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .middle_sec_in{
              // border: 1px solid #000;
              width:50%;
              height: 80%;
              .sec_in_img{
                // border: 1px solid #f20;
                width:100%;
                height: 50%;
                .sec_image{
                  width: 100%;
                  height: 100%;
                }
              }
              .sec_in_select{
                // border: 1px solid #00f;
                width:100%;
                height: 50%;
              }
            }
          }
          .middle_third{
            border: 1px solid #000;
            border-top: none;
            border-bottom: none;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            .middle_thr_in{
              // border: 1px solid #000;
              width:50%;
              height: 80%;
              .thr_in_img{
                // border: 1px solid #f20;
                width:100%;
                height: 50%;
                .thr_image{
                  width: 100%;
                  height: 100%;
                }
              }
              .thr_in_select{
                // border: 1px solid #00f;
                width:100%;
                height: 50%;
              }
            }
          }
        }
        .table_bottom{
          // border: 1px solid #f20;
          width: 100%;
          height: 12%;
          display: flex;
          .bottom_first{
            border: 1px solid #000;
            border-right: none;
            width: 10%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bottom_second{
            border: 1px solid #000;
            border-right: none;
            width: 45%;
            height: 100%;
          }
          .bottom_third{
            border: 1px solid #000;
            width: 45%;
            height: 100%;
          }
        }
        }
      }
      .btn_middle{
        // border: 1px solid #f20;
        width: 100%;
        height: 75px;
        margin-top: 50px;
        .btn_mid_inside{
          // border: 1px solid #000;
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          .btn_first{
            // border: 1px solid #00f;
            width: 50%;
            height: 100%;
          }
          .btn_second{
            // border: 1px solid green;
            width: 50%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
