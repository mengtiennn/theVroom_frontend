<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="normalSize my-16">
        <div class="main">
          <div class="productpart">
            <div
              class="productlist"
              v-for="product in productList"
              :key="product"
            >
              <!-- :class="{block:itemname === currentsort}" -->
              <div class="linkdetail">
                  <template>
                    <div class="text-center">
                      <v-dialog
                        v-model="dialog"
                        width="500"
                      >
                        <template v-slot:activator="{ on, attrs }">
                        <span
                          v-bind="attrs"
                          v-on="on"
                        >
                        <img :src="product.PRODUCTIMG" alt="圖壞了" class="itemimg" />
                        </span>
                        </template>
                        <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          商品細項
                        </v-card-title>
                        <v-card-text v-html="product.PRODUCTINFO" style="margin-top:20px;">
                            <!-- {{product.PRODUCTINFO}} -->
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                          >
                          <!-- <router-link to=/shoppingcar>
                            加入購物車
                          </router-link> -->
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
              </div>
              <br />
              <span class="text-subtitle-2 font-weight-bold">{{product.PRODUCTNAME}}</span>
              <br />
              <span style="display:none;">{{product.SORT}}</span>
              <span
                class="price"
                style="color: #f34841; font-size: 14px; font-weight: bold"
              >
                ${{ product.PRODUCTPRICE }}</span
              >
              <!-- <router-link to=/shoppingcar> -->
              <img
                :src="shoppingcart"
                alt="圖壞了"
                title="加入購物車"
                class="shopcart"
                @click="testgogo"
              />
              <!-- </router-link> -->
                <!-- @click="linkshop()" -->
              <img :src="goshopping" alt="圖壞了" class="goshopping" />
            </div>
          </div>
        </div>
      </div>
    </media>
    <media :query="{ maxWidth: '400px' }">
      <div>
        <component :is="'a-rwd'" class="component"></component>
      </div>
    </media>
  </div>
</template>
<script>
// import RwdBanner from '../components/layout/RwdBanner.vue'
import Media from 'vue-media'
import AccRwd from '../components/AccRwd.vue'
export default {
  components: {
    Media,
    'a-rwd': AccRwd
  },
  async created () {
    const response = await fetch('./phpfile/acc.php')
    const responsedata = await response.json()
    // alert('456')
    console.log(response)
    console.log(responsedata)
    // this.productList.push(responsedata)
    this.productList = responsedata
    console.log(this.productList)
  },
  data () {
    return {
      pathimg: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      big: require('../assets/accessories-pic/aoto-part-banner2.jpg'),
      house: require('../assets/accessories-pic/house.png'),
      shoppingcart: require('../assets/accessories-pic/shopcart.png'),
      goshopping: require('../assets/accessories-pic/shopping.png'),
      productList: []
    }
  },
  methods: {
    testgogo () {
      this.$emit('testgogo')
    },
    linkshop () {
      document.querySelector('.goshopping').style.display = 'inline'
      document.querySelector('.shopcart').style.display = 'none'
      setTimeout(() => this.$router.push({ path: '/shoppingcar' }), 400)
    }
  }
}
// filters ('filterProduct',function (product) {
//   this.currentsort = product.sort
//    })
</script>
<style lang='scss' scoped>
div.normalSize {
  div.banner {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  h1 {
    margin: 50px auto;
    width: 1200px;
    img {
      width: 30px;
    }
  }
  .-active {
    color: #f34841;
  }
  div.main {
    width: 1200px;
    margin: 0 auto;
    // display: flex;
    // justify-content: left;
    .block{
      display: block;
    }
    .hidden{
      display: hidden;
    }
    div.productpart {
      display: flex;
      flex-wrap: wrap;
      justify-content: right;
      width:900px;
      height:600px;
      overflow: scroll;
      // position: absolute;
      div.productlist {
        width: calc(33.33% - 40px);
        background-color: #ffffff;
        // border:1px solid black;
        text-align: center;
        padding: 10px 30px;
        margin: 20px 10px;
        box-shadow: white 0 0px 1px, black 1px 0px 2px, white -1px 0px 2px;
        &:hover {
          transform: scale(1.1);
        }
        img.itemimg {
          width: 100%;
        }
        img.shopcart {
          height: 20px;
          cursor: pointer;
          position: relative;
        }
        img.goshopping {
          height: 20px;
          display: none;
        }
        div.detail {
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
