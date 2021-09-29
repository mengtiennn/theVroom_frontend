<template>
  <div>
  <media :query="{ minWidth: '401px' }">
   <div>
    <div class="d-flex justify-center ma-auto">
      <div
        class="my-10 red d-flex justify-center"
        style="width:300px;height:70px;border-radius:20px"
      >
        <div
          class="white red--text px-2 mr-3 align-self-center d-flex justify-center align-center"
          style="width:30px;height:30px;border:1px solid black;border-radius:50%"
        >
          1
        </div>
        <button class="white--text text-h6 font-weight-bold" @click="component = 'shopping-car1'">
          購物車商品列表
        </button>
      </div>
      <div
        class="my-10 mx-10 d-flex justify-center"
        style="width:300px;height:70px;border:1px solid black;border-radius:20px"
        :class="{
          red1: component == 'shopping-car2' || component == 'shopping-car3'
        }"
      >
        <div
          class="px-2 mr-3 align-self-center black--text d-flex justify-center align-center"
          style="width:30px;height:30px;border:1px solid black;border-radius:50%"
          :class="{
            red2: component == 'shopping-car2' || component == 'shopping-car3'
          }"
        >
          2
        </div>
        <button class="text-h6 font-weight-bold" @click="(component = 'shopping-car2'), gogo">
          確認及付款
        </button>
      </div>
      <div
        class="my-10 d-flex justify-center"
        style="width:300px;height:70px;border:1px solid black;border-radius:20px"
        :class="{ red1: component == 'shopping-car3' }"
      >
        <div
          class="px-2 mr-3 align-self-center black--text d-flex justify-center align-center"
          style="width:30px;height:30px;border:1px solid black;border-radius:50%"
          :class="{ red2: component == 'shopping-car3' }"
        >
          3
        </div>
        <button class="text-h6 font-weight-bold" @click="(component = 'shopping-car3'), gogo2">完成</button>
      </div>
    </div>
    <div
      style="max-width:1200px;"
      class="ma-auto"
      :class="{ gogoro: component == 'shopping-car3' }"
    >
      <div class="mb-5"><h1 class="text-h4 font-weight-bold">商品明細</h1></div>
      <div class="d-flex">
        <div
          class="py-3"
          style="width:15%;text-align:center;border:1px solid black;background-color:#E0E0E0"
        >
          <h2 class="text-h6 font-weight-bold">圖片</h2>
        </div>
        <div
          class="py-3"
          style="width:45%;text-align:center;border:1px solid black;background-color:#E0E0E0"
        >
          <h2 class="text-h6 font-weight-bold">商品</h2>
        </div>
        <div
          class="py-3"
          style="width:15%;text-align:center;border:1px solid black;background-color:#E0E0E0"
        >
          <h2 class="text-h6 font-weight-bold">單價</h2>
        </div>
        <div
          class="py-3"
          style="width:15%;text-align:center;border:1px solid black;background-color:#E0E0E0"
        >
          <h2 class="text-h6 font-weight-bold">數量</h2>
        </div>
        <div
          class="py-3"
          style="width:15%;text-align:center;border:1px solid black;background-color:#E0E0E0"
        >
          <h2 class="text-h6 font-weight-bold">小計</h2>
        </div>
      </div>
    </div>
    <div>
      <component
        @testbtn='done' :is="component">
      </component>
    </div>
    <div class="d-flex justify-end mb-10 ma-auto" style="width:70%">
      <div class="text-h4 font-weight-bold" :class="{ gogoro: component == 'shopping-car2' || component == 'shopping-car3' }">
        共<span class="red--text">{{ totalitem }}</span
        >項商品,
      </div>
      <div class="text-h4 font-weight-bold" :class="{ gogoro: component == 'shopping-car2' || component == 'shopping-car3' }">
        總金額<span class="red--text">{{ totalprice }}</span
        >元
      </div>
    </div>
    <div :class="{gogoro: component == 'shopping-car2' || component == 'shopping-car3'}">
      <div
        class="d-flex justify-space-around align-center mb-10"
      >
        <router-link to="/accessories"><button-news buttonName="繼續購物" /></router-link>
        <div class="d-flex align-center">
          <v-checkbox v-model="checkbox" style="width:400px" :class="{gogoro: component == 'shopping-car1'}">
            <template v-slot:label>
              <div>
                本人表示理解相關配件資訊和『thevroom』車行之相關購物條款規定，並確認下訂商品。
              </div>
            </template>
          </v-checkbox>
          <div @click="(component = 'shopping-car2'), gogo">
            <button-submit class="ml-5" buttonSubmit="下一步" />
          </div>
        </div>
      </div>
    </div>
   </div>
  </media>
  <!-- --------------------------------------------------- -->
  <media :query="{ maxWidth: '400px' }">
   <div>
    <div class="d-flex justify-center ma-auto" style="width:90%">
      <div
        class="my-10 red d-flex flex-column justify-center"
        style="width:30%;height:70px;border-radius:25px"
      >
        <div
          class="white red--text pa-1 align-self-center"
          style="height:20px;border:1px solid black;border-radius:50%;line-height:.4"
        >
          1
        </div>
        <button class="mt-2 white--text text-overline font-weight-bold" style="line-height:1" @click="component = 'shopping-car1'">
          購物車商品列表
        </button>
      </div>
      <div
        class="my-10 mx-10 d-flex flex-column justify-center"
        style="width:30%;height:70px;border:1px solid black;border-radius:25px"
        :class="{
          red1: component == 'shopping-car2' || component == 'shopping-car3'
        }"
      >
        <div
          class="pa-1 align-self-center black--text"
          style=";height:20px;border:1px solid black;border-radius:50%;line-height:.4"
          :class="{
            red2: component == 'shopping-car2' || component == 'shopping-car3'
          }"
        >
          2
        </div>
        <button class="text-overline font-weight-bold" @click=";(component = 'shopping-car2'), gogo">
          確認及付款
        </button>
      </div>
      <div
        class="my-10 d-flex flex-column justify-center"
        style="width:30%;height:70px;border:1px solid black;border-radius:25px"
        :class="{ red1: component == 'shopping-car3' }"
      >
        <div
          class="pa-1 align-self-center black--text"
          style="height:20px;border:1px solid black;border-radius:50px;line-height:.4"
          :class="{ red2: component == 'shopping-car3' }"
        >
          3
        </div>
        <button class="text-overline font-weight-bold" @click=";(component = 'shopping-car3'), gogo2">完成</button>
      </div>
    </div>
    <div
      style="width:90%"
      class="ma-auto"
      :class="{ gogoro: component == 'shopping-car3' }"
    >
      <div class="mb-5">
        <div class="text-h5 font-weight-bold">商品明細</div>
        <div style="width:100%;height:2px" class="black mt-2"></div>
      </div>
    </div>
    <div>
      <component
        :is="component">
      </component>
    </div>
    <div class="d-flex justify-end mb-10 ma-auto" style="width:90%">
      <div class="text-h6 font-weight-bold" :class="{ gogoro: component == 'shopping-car2' || component == 'shopping-car3' }">
        共<span class="red--text">{{ totalitem }}</span
        >項商品,
      </div>
      <div class="text-h6 font-weight-bold" :class="{ gogoro: component == 'shopping-car2' || component == 'shopping-car3' }">
        總金額<span class="red--text">{{ totalprice }}</span
        >元
      </div>
    </div>
    <div :class="{gogoro: component == 'shopping-car2' || component == 'shopping-car3'}">
      <div
        class="d-flex justify-space-around align-center mb-10"
      >
        <router-link to="/accessories"><button-news buttonName="繼續購物" /></router-link>
        <div class="d-flex align-center">
          <v-checkbox v-model="checkbox" style="width:400px" :class="{gogoro: component == 'shopping-car1'}">
            <template v-slot:label>
              <div>
                本人表示理解相關配件資訊和『thevroom』車行之相關購物條款規定，並確認下訂商品。
              </div>
            </template>
          </v-checkbox>
          <div @click="(component = 'shopping-car2'), gogo">
            <button-submit class="ml-5" buttonSubmit="下一步" />
          </div>
        </div>
      </div>
    </div>
   </div>
  </media>
  </div>
</template>

<script>
import shoppingcar1 from '../components/ShoppingCar1.vue'
import shoppingcar2 from '../components/ShoppingCar2.vue'
import shoppingcar3 from '../components/ShoppingCar3.vue'
import ButtonNews from '../components/layout/ButtonNews.vue'
import ButtonSubmit from '../components/layout/ButtonSubmit.vue'
import Media from 'vue-media'
export default {
  mounted () {
    this.prolist = this.$store.getters.getshoplist
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: {
    'shopping-car1': shoppingcar1,
    'shopping-car2': shoppingcar2,
    'shopping-car3': shoppingcar3,
    ButtonNews,
    ButtonSubmit,
    Media
  },
  data () {
    return {
      active: false,
      component: 'shopping-car1',
      prolist: [],
      totalcount: 0,
      totalp: 0
    }
  },
  methods: {
    done () {
      // console.log('123')
      this.component = 'shopping-car3'
    },
    gogo () {
      this.component = 'shopping-car2'
    },
    gogo2 () {
      this.component = 'shopping-car3'
    }
  },
  computed: {
    totalitem () {
      this.$store.getters.getshoplist.forEach(list => {
        this.totalcount += parseInt(list.PRODUCTMOUNT)
      })
      return this.totalcount
    },
    totalprice () {
      this.$store.getters.getshoplist.forEach(list => {
        this.totalp += list.PRODUCTMOUNT * list.PRODUCTPRICE
      })
      return this.totalp
    }
  }
}
</script>

<style lang="scss">
.red1 {
  background-color: #f44336;
  color: white;
}
.red2 {
  background-color: white;
  color: #f44336 !important;
  border-color: #f44336 !important;
}
.gogoro {
  display: none !important;
}
</style>
