<template>
 <div>
  <media :query="{ minWidth: '401px' }">
  <div style="max-width:1200px;" class="ma-auto">
    <div
      class="d-flex mb-10 align-center"
      style="border-bottom:1px dashed rgba(0,0,0,.3)"
      v-for="list in prolist"
      :key="list.id"
    >
      <div class="py-3" style="width:15%;text-align:center;">
        <img style="width:100px; height: 100px; object-fit: contain;" class="fitImg" :src="list.PRODUCTIMG" alt="圖壞了" />
      </div>
      <div class="py-3" style="width:45%;text-align:center;">
        {{ list.PRODUCTNAME }}
      </div>
      <div class="py-3" style="width:15%;text-align:center;">
        {{ list.PRODUCTPRICE }}
      </div>
      <div class="py-3" style="width:15%;text-align:center;">
        {{ list.PRODUCTMOUNT }}
      </div>
      <div class="py-3" style="width:15%;text-align:center;">
        {{ list.PRODUCTPRICE * list.PRODUCTMOUNT }}
      </div>
    </div>
    <div style="margin:100px 0px">
      <h1>付款方式</h1>
      <div style="border:1px solid black" class="py-5">
        <label style="font-size:20px;" class="mx-8"
          ><input
            type="radio"
            name="city"
            value="信用卡付款"
            checked
            v-model="way"
          />信用卡付款</label
        >
        <label style="font-size:20px;" class="mx-8"
          ><input type="radio" name="city" value="到店取貨" v-model="way" />到店取貨</label
        >
      </div>
      <div style="border:1px solid black;border-top:0" class="pa-5">
        <h2>信用卡資訊</h2>
        <div>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    :rules="cardRules"
                    label="信用卡號"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    :rules="dateRules"
                    label="到期日期"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    :rules="cardsucRules"
                    label="安全碼"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
        <!-- <v-checkbox v-model="checkbox">
          <template v-slot:label>
            <div>
              本人聲明下訂即表示並詳細閱讀
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a
                    target="_blank"
                    href="https://tw.yahoo.com/"
                    @click.stop
                    v-on="on"
                  >
                    『thevroom』
                  </a>
                </template>
                Turn to yahoo
              </v-tooltip>
              車行之相關購車條款規定，並確認下訂車輛。
            </div>
          </template>
        </v-checkbox> -->
      </div>
    </div>
    <div class="d-flex justify-end mb-10 ma-auto" style="width:70%">
      <h1>
        共<span class="red--text">{{ totalitem }}</span
        >項商品,
      </h1>
      <h1>
        總金額<span class="red--text">{{ totalprice }}</span
        >元
      </h1>
    </div>
    <div class="d-flex justify-space-between align-center mb-10">
      <router-link to="/accessories"><button-news buttonName="繼續購物" /></router-link>
      <div class="d-flex align-center">
        <v-checkbox v-model="checkbox" style="width:400px">
          <template v-slot:label>
            <div>
              本人表示理解相關配件資訊和『thevroom』車行之相關購物條款規定，並確認下訂商品。
            </div>
          </template>
        </v-checkbox>
        <!-- <div @click="(component = 'shopping-car3')"> -->
          <v-btn style="width:150px" class="red white--text rounded-pill" @click="checkout">確認結帳</v-btn>
          <!-- <button-submit class="ml-5" buttonSubmit="下一步" /> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
  </media>
  <!-- ------------------------------------------------------------------------------------------- -->
  <media :query="{ maxWidth: '400px' }">
  <div style="max-width:1200px;" class="ma-auto">
    <div style="max-width:100%;" class="ma-auto">
    <div
      class="d-flex flex-column mb-5 align-center"
      v-for="list in prolist"
      :key="list.id"
    >
    <div class="d-flex justify-space-around" style="width:85%">
      <div class="py-3" style="width:35%;">
        <img style="width:100px; height: 100px; object-fit: contain;" :src="list.proSrc" alt="圖壞了" />
      </div>
      <div style="width:65%" class="ma-auto d-flex flex-column align-center">
        <div class="d-flex flex-column justify-center" style="width:75%" align-center>
          <div class="py-3 text-h5 font-weight-bold" >
            {{ list.proName }}
          </div>
          <div class="py-3 align-self-end" >
            <i class="fas fa-minus"></i>
            {{ list.proCount }}
            <i class="fas fa-plus"></i>
          </div>
          <div class="mb-3 align-self-end" >
            NT$:{{ list.proPrice * list.proCount }}
          </div>
        </div>
      </div>
      </div>
      <div style="width:90%;height:2px;background-color:rgba(0,0,0,.3)"></div>
    </div>
  </div>
    <div style="margin:100px 0px;width:90%" class="mt-15 ma-auto">
      <div class="text-h5 font-weight-bold mb-3">付款方式</div>
      <div style="border:1px solid black" class="py-5">
        <label class="mx-8 text-body1 font-weight-medium"
          ><input
            type="radio"
            name="city"
            value="信用卡付款"
            checked
          />信用卡付款</label
        >
        <label class="mx-8 text-body1 font-weight-medium"
          ><input type="radio" name="city" value="到店取貨" />到店取貨</label
        >
      </div>
      <div style="border:1px solid black;border-top:0" class="pa-5">
        <div class="text-h6 font-weight-bold">信用卡資訊</div>
        <div>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    :rules="cardRules"
                    label="信用卡號"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="2">
                  <v-text-field
                    :rules="dateRules"
                    label="到期日期"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="2">
                  <v-text-field
                    :rules="cardsucRules"
                    label="安全碼"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </div>
        <v-checkbox v-model="checkbox">
          <template v-slot:label>
            <div>
              本人聲明下訂即表示並詳細閱讀
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <a
                    target="_blank"
                    href="https://tw.yahoo.com/"
                    @click.stop
                    v-on="on"
                  >
                    『thevroom』
                  </a>
                </template>
                Turn to yahoo
              </v-tooltip>
              車行之相關購車條款規定，並確認下訂車輛。
            </div>
          </template>
        </v-checkbox>
      </div>
    </div>
    <div class="d-flex justify-end mt-10 mb-5 ma-auto" style="width:90%">
      <div class="text-h6 font-weight-bold">
        共<span class="red--text">{{ totalitem }}</span
        >項商品,
      </div>
      <div class="text-h6 font-weight-bold">
        總金額<span class="red--text">{{ totalprice }}</span
        >元
      </div>
    </div>
    <div class="d-flex justify-center">
    <div style="width:80%">
     <v-checkbox v-model="checkbox" style="width:400px">
          <template v-slot:label>
            <div>
              本人表示理解相關配件資訊和『thevroom』車行之相關購物條款規定，並確認下訂商品。
            </div>
          </template>
        </v-checkbox>
    </div>
    </div>
    <div class="my-10 ma-auto" style="width:90%">
      <div class="d-flex justify-space-between align-center">
      <router-link to="/accessories"><button-news buttonName="繼續購物" /></router-link>
      <div class="d-flex align-center">
        <div>
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
import Media from 'vue-media'
import shoppingcar3 from './ShoppingCar3.vue'
export default {
  components: { Media },
  async created () {
    console.log(this.$store.getters.getmember)
    console.log(this.$store.getters.getshoplist)
    this.prolist = this.$store.getters.getshoplist
    this.member = this.$store.getters.getmember
    this.list = this.prolist.forEach(li => {
      li.PRODUCTINFO = ''
      li[5] = ''
    })
    console.log(this.list)
    const res = await fetch('./phpfile/proidselect.php')
    const resdata = await res.json()
    console.log(resdata)
    resdata.forEach(li => {
      this.alreadyHave.push(li.ORDERLISTID)
    })
    console.log(this.alreadyHave)
  },
  data () {
    return {
      date: new Date(),
      valid: false,
      amountlist: [],
      orderlistid: [],
      alreadyHave: [],
      allprolist: [],
      list: null,
      turnon: false,
      components: {
        'shopping-car3': shoppingcar3
      },
      totalcount: 0,
      totalp: 0,
      card: '',
      shop: '',
      prolist: [],
      member: [],
      totalprice1: 0,
      cardRules: [
        v => !!v || '請填入卡號',
        v => v.length <= 16 || '請輸入16字卡號'
      ],
      dateRules: [
        v => !!v || '請填入到期日期',
        v => v.length <= 4 || '請輸入正確日期'
      ],
      cardsucRules: [
        v => !!v || '請填入安全碼',
        v => v.length <= 3 || '請輸入正確安全碼'
      ]
    }
  },
  methods: {
    async checkout () {
      this.$emit('testbtn')
      this.year = this.date.getFullYear()
      this.month = this.date.getMonth()
      this.day = this.date.getDate()
      this.hours = this.date.getHours()
      this.minutes = this.date.getMinutes()
      this.seconds = this.date.getSeconds()
      this.randomId = Math.floor(Math.random() * 999)
      console.log(this.randomId)
      this.alreadyHave.forEach((idlist) => {
        // console.log(idlist)
        if (this.randomId === parseInt(idlist)) {
          console.log(this.randomId)
          this.randomId = Math.floor(Math.random() * 999)
        }
      })
      this.prolist.forEach(li => {
        this.totalprice1 += li.PRODUCTTOTAL
      })
      console.log(this.totalprice1)
      console.log(this.way)
      console.log(this.prolist)
      this.prolist.forEach(list => {
        console.log(list.PRODUCTID)
        console.log(list.PRODUCTMOUNT)
        this.allprolist.push(list.PRODUCTID)
        this.amountlist.push(parseInt(list.PRODUCTMOUNT))
      })
      console.log(this.allprolist)
      console.log(this.amountlist)
      console.log(JSON.stringify(this.prolist))
      const fd = new FormData()
      fd.append('ORDERLISTID', this.randomId)
      fd.append('MEMBERID', this.member[0].MEMBERID)
      fd.append('TOTALPRICE', this.totalprice1)
      fd.append('PATMENTMETHOD', this.way)
      // fd.append('CARDNUM', this.cardname)
      // fd.append('DATE', this.date)
      // fd.append('CARDSUC', this.cardsuc)
      console.log(this.year + '-' + (this.month + 1) + '-' + this.day + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds)
      fd.append('PRODUCTLIST', JSON.stringify(this.allprolist))
      fd.append('AMOUNTLIST', JSON.stringify(this.amountlist))
      fd.append('ORDERDATE', this.year + '-' + (this.month + 1) + '-' + this.day + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds)
      const res = await fetch('./phpfile/productlist.php', {
        method: 'POST',
        body: fd
      })
      const resdata = res.json()
      console.log(resdata)
      this.allprolist = []
    }
  },
  updated () {
    // this.$emit('done', 'shopping-car3')
  },
  computed: {
    gogo2 () {
      return "this.component = 'shopping-car3'"
    },
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
