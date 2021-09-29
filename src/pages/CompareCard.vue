<template>
  <div class="all_compare">
    <media :query="{ minWidth: '401px' }">
      <div class="compare_info">
        <div class="title">
          <h3 class="title_name text-h4 font-weight-bold">車款比較</h3>
        </div>

        <div class="card">
          <v-card
          outline
          width="1200"
          height="450"
          style="border:2px solid black; margin:0 auto;"
          >

            <div class="card_tile">
              <div class="card_title_name text-h6 font-weight-bold">選擇車款進行比較</div>
            </div>
            <div class="select_bar">
              <ul class="bar">
                <li>
                  <v-select
                    @change="test"
                    :items="items"
                    v-model="cartype"
                    value="cartype"
                    label="請選擇車廠"
                    dense
                    outlined
                    style="border-radius:50px; width:420px"
                  ></v-select>
                </li>
                <li>
                  <v-select
                    v-model="carname"
                    :items="brands"
                    value="carname"
                    label="請選擇車款"
                    dense
                    outlined
                    style="border-radius:50px; width:420px"
                  ></v-select>
                </li>
                <li>
                  <v-btn rounded color="#F34841" dark width="150" height="40" @click="compare">加入</v-btn>
                </li>
              </ul>
            </div>

            <div class="liner"></div>

            <div class="card_photo_area">
              <div class="inside_area">
                <div v-for="item in cardata" :key="item.CARID">
                  <div style="width:350px;300px"><img style="width:100%;height:100%" :src=item.CARTYPEPHOTO alt="圖壞了"></div>
                </div>
                <!-- <div class="card_photo" style="width:350px;300px"><img style="width:100%;height:100%" :src='cardata[0].CARTYPEPHOTO' alt="圖壞了"></div>
                <div class="card_photo" style="width:350px;300px"><img style="width:100%;height:100%" :src="cardata[1].CARTYPEPHOTO" alt="圖壞了"></div> -->
                  <div class="card_photo_area_btn d-flex justify-center">
                    <div class="area_btn_inside">
                      <div class="area_btn_word text-h6 font-weight-bold">目 前 選 擇<span class="area_btn_num">{{ carcount}}</span>輛</div>
                      <router-link to="/compareinside">
                      <v-btn rounded color="#F34841" dark width="150" height="40" @click="comparecar">開始比較</v-btn>
                      </router-link>
                    </div>
                  </div>
              </div>
            </div>
          </v-card>
        </div>

        <div class="middle_title_outside">
          <div class="title_outside">
            <h3 class="pk_title text-h6 font-weight-bold
            ">熱門新車PK <div class="pk_liner"></div></h3>
            <h3 class="hotcar_title text-h6 font-weight-bold
            ">配件專區 <div class="hotcar_liner"></div></h3>
          </div>
        </div>

        <div class="middle_outside">
          <div class="compare_middle">
            <div class="compare_middle_left">
              <div class="photo_left" v-for="item in newcar" :key="item" :src="item.CARTYPEPHOTO">
                <img :src="item.CARTYPEPHOTO" class="newcar_photo">
              </div>
              <div style="background-color: #fff; width: 90px; height: 90px; border-radius: 50px; color: #F34841; position: absolute; margin-top: 70px; margin-left: 392px;" class="d-flex align-center justify-center">VS</div>
              <div style="background-color: #fff; width: 80px; height: 80px; border-radius: 50px; color: #F34841; position: absolute; margin-top: 350px; margin-left: 397px;" class="d-flex align-center justify-center">VS</div>
              <div style="background-color: #fff; width: 80px; height: 80px; border-radius: 50px; color: #F34841; position: absolute; margin-top: 615px; margin-left: 397px;" class="d-flex align-center justify-center">VS</div>
              <div style="background-color: #fff; width: 80px; height: 80px; border-radius: 50px; color: #F34841; position: absolute; margin-top: 880px; margin-left: 397px;" class="d-flex align-center justify-center">VS</div>
              <router-link to="/compareinside" style="position: absolute; margin-top: 180px; margin-left: 360px">
                <v-btn rounded absolute color="#F34841" dark width="150" height="40" @click="compareone">比較結果</v-btn>
              </router-link>
              <router-link to="/compareinside" style="position: absolute; margin-top: 450px; margin-left: 360px">
                <v-btn rounded absolute color="#F34841" dark width="150" height="40" @click="compare2">比較結果</v-btn>
              </router-link>
              <router-link to="/compareinside" style="position: absolute; margin-top: 710px; margin-left: 360px">
                <v-btn rounded absolute color="#F34841" dark width="150" height="40" @click="compare3">比較結果</v-btn>
              </router-link>
              <router-link to="/compareinside" style="position: absolute; margin-top: 980px; margin-left: 360px">
                <v-btn rounded absolute color="#F34841" dark width="150" height="40" @click="compare4">比較結果</v-btn>
              </router-link>
            </div>
            <div class="compare_middle_right">
              <v-card>
                <router-link to="/accessories">
                  <v-hover v-slot="{ hover }">
                    <div class="hotcar">
                      <div class="hotcar_img_outside">
                        <!-- <img src="../../assets/logo-only(2).png" style="position: absolute; width: 75px; height: 50px; top: 685px; right: 400px"> -->
                        <img src="../assets/accessories-pic/save/sign_led.jpeg" class="hotcar_img" style="object-fit: contain">
                      </div>
                      <div class="hotcar_info">
                        <div class="hotcar_title text-h6 font-weight-bold" style="color: black">警告標誌 LED三角警示架</div>
                        <div class="hotcar_price text-h6 font-weight-bold">$ 558</div>
                        <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out v-card--reveal text-h6 font-weight-bold white--text"
                            >
                              去搶購
                            </div>
                          </v-expand-transition>
                      </div>
                    </div>
                  </v-hover>
                </router-link>
              </v-card>

              <v-card>
                <router-link to="/accessories">
                  <v-hover v-slot="{ hover }">
                    <div class="hotcar">
                      <div class="hotcar_img_outside">
                        <!-- <img src="../../assets/logo-only(2).png" style="position: absolute; width: 75px; height: 50px; top: 1020px; right: 400px"> -->
                        <img src="../assets/accessories-pic/speaker/speaker.jpg" class="hotcar_img" style="object-fit: contain">
                      </div>
                      <div class="hotcar_info">
                        <div class="hotcar_title text-h6 font-weight-bold" style="color: black">BOSS 音頻SVC低音砲</div>
                        <div class="hotcar_price text-h6 font-weight-bold">$ 1500</div>
                        <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out v-card--reveal text-h6 font-weight-bold white--text"
                            >
                              去搶購
                            </div>
                          </v-expand-transition>
                      </div>
                    </div>
                  </v-hover>
                </router-link>
              </v-card>

              <v-card>
                <router-link to="/accessories">
                  <v-hover v-slot="{ hover }">
                    <div class="hotcar">
                      <div class="hotcar_img_outside">
                        <!-- <img src="../../assets/logo-only(2).png" style="position: absolute; width: 75px; height: 50px; top: 1355px; right: 400px"> -->
                        <img src="../assets/accessories-pic/rain/soft_rain.jpeg" class="hotcar_img" style="object-fit: contain">
                      </div>
                      <div class="hotcar_info">
                        <div class="hotcar_title text-h6 font-weight-bold" style="color: black">BOSCH 新款軟骨雨刷</div>
                        <div class="hotcar_price text-h6 font-weight-bold">$ 158</div>
                        <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out v-card--reveal text-h6 font-weight-bold white--text"
                            >
                              去搶購
                            </div>
                          </v-expand-transition>
                      </div>
                    </div>
                  </v-hover>
                </router-link>
              </v-card>

              <v-card>
                <router-link to="/accessories">
                  <v-hover v-slot="{ hover }">
                    <div class="hotcar">
                      <div class="hotcar_img_outside">
                        <!-- <img src="../../assets/logo-only(2).png" style="position: absolute; width: 75px; height: 50px; top: 1690px; right: 400px"> -->
                        <img src="../assets/accessories-pic/light/light_t10.jpeg" class="hotcar_img" style="object-fit: contain">
                      </div>
                      <div class="hotcar_info">
                        <div class="hotcar_title text-h6 font-weight-bold" style="color: black">【OSRAM】T10 LED藍光</div>
                        <div class="hotcar_price text-h6 font-weight-bold">$ 780</div>
                        <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out v-card--reveal text-h6 font-weight-bold white--text"
                            >
                              去搶購
                            </div>
                          </v-expand-transition>
                      </div>
                    </div>
                  </v-hover>
                </router-link>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <rwd-banner rwdtitle="市場行情" :pathImg="banner"/>
        <div
          class="compare_info"
          style="max-width: 375px; height: 1800px;"
        >

          <div
            style="width: 100%; margin-top: 120px"
          >
            <v-card
              outline
              width="350"
              height="450"
              class="d-flex flex-column justify-space-around align-center"
              style="border:2px solid black; margin:0 auto;"
            >
              <div
                class="d-flex"
                style="width: 330px; height:180px"
              >
                <ul
                  class="text-h6 font-weight-bold d-flex flex-column justify-space-between"
                  style="list-style: none; padding:0; width: 30%;">
                  <li
                    class="d-flex justify-center align-center"
                    style="height:46px"
                  >車廠</li>
                  <li
                    class="d-flex justify-center align-center"
                    style="height:46px"
                  >車系</li>
                  <li
                    class="d-flex justify-center align-center"
                    style="height:46px"
                  >車款</li>
                </ul>
                <ul
                  class="d-flex flex-column justify-space-between"
                  style="list-style: none; padding: 0; width: 70%;"
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

              <div
                class="d-flex justify-space-between"
                style="width:330px; height:120px"
              >
                <div
                  style="width:49%; height:100%; background-color:gray;"
                ></div>
                <div
                  style="width:49%; height:100%; background-color:gray;"
                ></div>
              </div>

              <div style="width:330px">
                <v-btn rounded color="#F34841" dark width="330" height="40" to="/compareinside">開始比較</v-btn>
              </div>
            </v-card>
          </div>

          <div style="width: 100%" class="mt-10">
            <div style="width:350px; margin: 0 auto;">
              <h3
                class="text-h6 font-weight-bold d-flex justify-space-between align-center"
                style="width:100%"
              >
                熱門新車PK
                <div
                  style="border-radius:10px; width:67%; height:8px; background-color:#F34841"
                ></div>
              </h3>
            </div>
          </div>

          <div
            class="mt-10 d-flex flex-column justify-space-between"
            style="width: 100%; height:550px"
          >
            <div
              v-for="image in images"
              :key="image"
              class="d-flex justify-space-between"
              style="width:350px; height:120px; margin:0 auto;"
            >
              <div style="position: absolute; margin-top:45px; margin-left:130px">
                <v-btn rounded color="#F34841" dark width="90" height="25" to="/compareinside">開始比較</v-btn>
              </div>
              <div
                style="width:49%; height:100%;"
              >
                <img :src="image.src" style="width:100%; height:100%">
              </div>

              <div
                style="width:49%; height:100%;"
              >
                <img :src="image.src02" style="width:100%; height:100%">
              </div>
            </div>
          </div>

          <div style="width: 100%" class="mt-10">
            <div style="width:350px; margin: 0 auto;">
              <h3
                class="text-h6 font-weight-bold d-flex justify-space-between align-center"
                style="width:100%"
              >
                熱門配件專區
                <div
                  style="border-radius:10px; width:62%; height:8px; background-color:#F34841"
                ></div>
              </h3>
            </div>
          </div>

            <div
              class="mt-10 d-flex flex-column justify-space-between"
              style="width: 100%; height:500px"
            >
              <div
                class="d-flex justify-space-between"
                style="width:350px; margin:0 auto;"
              >
                <div
                  style="border:2px solid red; width:49%; height:230px;"
                >
                  <div style="width:100%; height:78%">
                    <img src="../assets/accessories-pic/speaker09.png" style="width:100%; height:100%">
                  </div>
                  <div style="width:100%; height:22%">
                    <v-btn color="#F34841" dark width="100%" height="100%" to="/compareinside">去搶購</v-btn>
                  </div>
                </div>

                <div
                  style="border:2px solid red; width:49%; height:230px;"
                >
                  <div style="width:100%; height:78%">
                    <img src="../assets/accessories-pic/speaker/speaker.jpg" style="width:100%; height:100%">
                  </div>
                  <div style="width:100%; height:22%">
                    <v-btn color="#F34841" dark width="100%" height="100%" to="/compareinside">去搶購</v-btn>
                  </div>
                </div>
              </div>

              <div
                class="d-flex justify-space-between"
                style="width:350px; margin:0 auto;"
              >
                <div
                  style="border:2px solid red; width:49%; height:230px;"
                >
                  <div style="width:100%; height:78%">
                    <img src="../assets/accessories-pic/gps_icon.jpg" style="width:100%; height:100%">
                  </div>
                  <div style="width:100%; height:22%">
                    <v-btn color="#F34841" dark width="100%" height="100%" to="/compareinside">去搶購</v-btn>
                  </div>
                </div>

                <div
                  style="border:2px solid red; width:49%; height:230px;"
                >
                  <div style="width:100%; height:78%">
                    <img src="../assets/accessories-pic/oil.png" style="width:100%; height:100%">
                  </div>
                  <div style="width:100%; height:22%">
                    <v-btn color="#F34841" dark width="100%" height="100%" to="/compareinside">去搶購</v-btn>
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
import RwdBanner from '../components/layout/RwdBanner.vue'
export default {
  async mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    const carlist = await fetch('./phpfile/carlist.php')
    const carlistbrand = await carlist.json()
    console.log(carlistbrand)
    const carlist2 = await fetch('./phpfile/carlist1.php')
    const carlistcartype = await carlist2.json()
    console.log(carlistcartype)
  },
  async created () {
    const res = await fetch('./phpfile/SelectNewcar.php')
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.newcar = [...resdata]
    console.log(this.newcar[0].CARID)
    this.$store.dispatch('getcar', this.newcar)
    console.log(this.$store.getters)
    console.log(this.newcar)
  },
  components: {
    Media,
    RwdBanner
  },
  computed: {
    carcount () {
      return this.cardata.length
    }
  },
  methods: {
    async test () {
      // console.log(this.cartype)
      const fc = new FormData()
      fc.append('CARTYPE', this.cartype)
      const res123 = await fetch('./phpfile/cartype.php', {
        method: 'POST',
        body: fc
      })
      const resdataall = await res123.json()
      // console.log(resdataall)
      this.brand = []
      resdataall.forEach(res => {
        // console.log(res.CARMODEL)
        this.brand.push(res.CARMODEL)
        this.brands = this.brand
      })
    },
    async compare () {
      console.log(this.cartype)
      console.log(this.carname)
      const fa = new FormData()
      fa.append('BRAND', this.cartype)
      fa.append('CARMODEL', this.carname)
      const cardata = await fetch('./phpfile/cardata.php', {
        method: 'POST',
        body: fa
      })
      const resdata123 = await cardata.json()
      console.log(resdata123)
      console.log(...resdata123)
      this.cardata.push(...resdata123)
      console.log(this.cardata)
    },
    comparecar () {
      this.$store.dispatch('cardata', this.cardata)
      // localStorage.delete('cardata')
      localStorage.setItem('cardata', JSON.stringify(this.cardata))
      console.log(this.$store.getters.getcardata)
    },
    compareone () {
      localStorage.clear()
      console.log('123')
      this.$store.dispatch('getnewid', this.newone)
      console.log(this.newone)

      this.newone.push(this.newcar[0].CARID)
      this.newone.push(this.newcar[1].CARID)
      console.log(this.newone)
      // const abc = this.newone
      // localStorage.setItem('abc', JSON.stringify(abc))
      // localStorage.setItem('a', JSON.stringify(this.newcar[0]))
      // localStorage.setItem('b', JSON.stringify(this.newcar[1]))
      localStorage.setItem('cardata', JSON.stringify([this.newcar[0], this.newcar[1]]))
    },
    compare2 () {
      localStorage.clear()
      this.$store.dispatch('getnewid', this.newone)
      console.log(this.newone)

      this.newone.push(this.newcar[2].CARID)
      this.newone.push(this.newcar[3].CARID)
      console.log(this.newone)

      // localStorage.setItem('a', JSON.stringify(this.newcar[2]))
      // localStorage.setItem('b', JSON.stringify(this.newcar[3]))
      localStorage.setItem('cardata', JSON.stringify([this.newcar[2], this.newcar[3]]))
    },
    compare3 () {
      localStorage.clear()
      this.$store.dispatch('getnewid', this.newone)
      console.log(this.newone)

      this.newone.push(this.newcar[4].CARID)
      this.newone.push(this.newcar[5].CARID)

      // localStorage.setItem('a', JSON.stringify(this.newcar[4]))
      // localStorage.setItem('b', JSON.stringify(this.newcar[5]))
      localStorage.setItem('cardata', JSON.stringify([this.newcar[4], this.newcar[5]]))
    },
    compare4 () {
      localStorage.clear()
      this.$store.dispatch('getnewid', this.newone)
      console.log(this.newone)

      this.newone.push(this.newcar[6].CARID)
      this.newone.push(this.newcar[7].CARID)

      // localStorage.setItem('a', JSON.stringify(this.newcar[6]))
      // localStorage.setItem('b', JSON.stringify(this.newcar[7]))
      localStorage.setItem('cardata', JSON.stringify([this.newcar[6], this.newcar[7]]))
    }
  },
  data: () => ({
    newcar: [],
    newone: [],
    cardata: [],
    carname: '',
    cartype: '',
    cols: 'true',
    items: ['Porsche', 'Lamborghini', 'Volkswagen', 'Volvo', 'M-Benz', 'BMW', 'Toyota', 'Audi', 'Ford', 'Honda', 'Lexus', 'Nissan'],
    brand: [],
    brands: [],
    newImages: [
      {
        id: '1',
        src: require('../assets/compare-car-pic/newcar01.png')
      },
      {
        id: '2',
        src: require('../assets/compare-car-pic/newcar02.png')
      },
      {
        id: '3',
        src: require('../assets/compare-car-pic/newcar03.png')
      },
      {
        id: '4',
        src: require('../assets/compare-car-pic/newcar04.png')
      },
      {
        id: '5',
        src: require('../assets/compare-car-pic/newcar05.png')
      },
      {
        id: '6',
        src: require('../assets/compare-car-pic/newcar06.png')
      },
      {
        id: '7',
        src: require('../assets/compare-car-pic/newcar07.png')
      },
      {
        id: '8',
        src: require('../assets/compare-car-pic/newcar08.png')
      }
    ],
    images: [
      {
        id: '1',
        src: require('../assets/compare-car-pic/newcar01.png'),
        src02: require('../assets/compare-car-pic/newcar02.png')
      },
      {
        id: '2',
        src: require('../assets/compare-car-pic/newcar03.png'),
        src02: require('../assets/compare-car-pic/newcar04.png')
      },
      {
        id: '3',
        src: require('../assets/compare-car-pic/newcar05.png'),
        src02: require('../assets/compare-car-pic/newcar06.png')
      },
      {
        id: '4',
        src: require('../assets/compare-car-pic/newcar07.png'),
        src02: require('../assets/compare-car-pic/newcar08.png')
      }
    ],
    banner: require('../assets/123.png')
  })
}
</script>

<style lang="scss">
.all_compare{
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.compare_info{
  // border: 2px solid #00f;
  width: 100%;
  height: 2000px;
}

.v-text-field__details {
  display: none !important;
}

.title {
  width: 100%;
  // border: 1px solid #f20;
  margin-top: 50px;
  .title_name{
    // border: 1px solid #000;
    width: 1200px;
    margin: 0 auto;
  }
}

.card{
  // border: 1px solid #f20;
  width: 100%;
  margin-top: 30px;
}

.card_tile{
  // border: 1px solid #000;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  .card_title_name{
    border: 4px solid #f20;
    border-top: none;
    border-bottom: none;
    border-right: none;
    color: #F34841;
    width: 1100px;
    padding-left: 20px;
  }
}

.select_bar{
  // border: 1px solid #000;
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  .bar{
    // border: 1px solid #f20;
    padding: 0;
    width: 1100px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
}

.v-input.v-input--dense.theme--light.v-text-field.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-select {
  display: flex;
  justify-content: space-around;
}

.v-application ul, .v-application ol {
  padding: 0;
}

.liner{
  border-top: 3px solid #000;
  width: 1100px;
  margin: 0 auto;
  margin-top: 30px;
}

.card_photo_area{
  // border: 1px solid #000;
  width: 100%;
  height: 235px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  .inside_area{
    // border: 1px solid #f20;
    width: 1100px;
    height: 235px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .card_photo{
    // border: 1px solid #f20;
    width: 350px;
    height: 200px;
    background-color: lightgray;
  }
  .card_photo_area_btn{
    // border: 1px solid #f20;
    width: 350px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .area_btn_inside{
      // border: 1px solid #000;
      width: 150px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .area_btn_num{
          color: #F34841;
      }
    }
  }
  }
}

.middle_title_outside{
  // border: 1px solid #f20;
  width: 100%;
  margin-top: 40px;
  .title_outside{
    // border: 1px solid #000;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    .pk_title{
      // border: 1px solid green;
      width: 75.5%;
      display: flex;
      align-items: center;
      .pk_liner{
        border: 2px solid #F34841;
        width: 84%;
        height: 1px;
        background-color: #F34841;
        margin-left: 13px;
      }
    }
    .hotcar_title{
      // border: 1px solid green;
      width: 24.5%;
      display: flex;
      align-items: center;
      .hotcar_liner{
        border: 2px solid #F34841;
        width: 60%;
        height: 1px;
        background-color: #F34841;
        margin-left: 13px;
      }
    }
  }
}

.middle_outside{
  // border: 1px solid #f20;
  width: 100%;
  margin-top: 30px;
  .compare_middle{
  // border: 1px solid #000;
  width: 1200px;
  height: 1300px;
  margin: 0 auto;
  display: flex;
  .compare_middle_left{
    // border: 1px solid #00f;
    width: 73%;
    height: 1070px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .photo_left{
      // border: 1px solid #f20;
      height: 240px;
      .newcar_photo{
        width: 425px;
        height: 240px;
      }
    }
  }
  .compare_middle_right{
    // border: 1px solid green;
    width: 27%;
    height: 1300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
}
}

.hotcar{
  // border: 2px solid #F34841;
  width: 270px;
  height: 290px;
  .hotcar_img_outside{
    // border-bottom: 2px solid #F34841;
    width: 100%;
    height: 70%;
    .hotcar_img{
      width: 100%;
      height: 100%;
    }
  }
  .hotcar_info{
    // border: 1px solid #000;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .hotcar_price{
      color: #F34841;
    }
  }
}

.v-card--reveal {
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 270px;
  height: 85px;
  background-color: #F34841;
  cursor: pointer;
}
}

</style>
