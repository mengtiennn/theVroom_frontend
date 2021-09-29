<template>
 <div>
  <media :query="{ minWidth: '401px' }">
  <div class="d-flex justify-center">
    <div class="d-flex mt-12 ma-auto carcheckout">
      <div style="width:1000px">
        <img
          style="position: sticky;top:20%;left:10%"
          :src="notify[0].IMGPATH"
          alt="車圖"
        />
      </div>
      <div
        class="d-flex flex-column align-end"
        style="display:inline-block;width:400px"
      >
        <div style="width:400px" ref="all">
          <div
            style="height:100vh"
            class="d-flex flex-column justify-space-around"
          >
            <div class="text-h4 font-weight-bold">您的 {{ notify[0].AUCTIONNAME }}</div>
            <div class="d-flex flex-column justify-space-around">
                <div>
                  <ul
                    class="mb-5 text-subtitle-1 font-weight-light"
                    style="line-height:2.5;min-height:200px"
                  >
                    <li
                      style="list-style:none;"
                    >
                      {{ notify[0].DESCRIPTION }}
                    </li>
                  </ul>
                </div>
                <div>
                  <v-row justify="center">
                    <v-expansion-panels inset>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          >顯示詳細資料(牌照+燃料稅計算、保險加購)</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          購買價格 ${{ notify[0].CURRENTPRICE }}
                          <br />
                          今日需完成支付 {{ discount }}
                          <br />
                          訂購費用（下訂後將不予退還轉讓，費用不含於車價內）
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </div>
              </div>
              <div class="red--text text-h4 font-weight-bold my-10">
                 <div>NT$: {{ notify[0].CURRENTPRICE }}</div>
                </div>
              <div class="d-flex justify-center" style="margin-bottom:200px">
                <button
                  class="px-10 py-3"
                  style="border:2px solid black;border-radius:30px;text-h4 font-weight-bold"
                  @click="move"
                >
                  信用卡結帳
                </button>
              </div>
          </div>
          <div>
            <div class="gogo">
              <div class="my-10 text-h4 font-weight-bold">輸入帳戶詳細資料</div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  姓氏:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  名字:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  電子郵件:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  手機號碼:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div class="mb-10 text-h4 font-weight-bold">發票</div>
              <div class="ma-auto">
                <div class="ml-5">
                  <v-radio-group v-model="column" column>
                    <v-radio
                      class="mb-8"
                      label="二聯式個人電子發票* (*配合國稅局勸止二聯換開三聯之政策, 本公司保留換開發票的權利)"
                      value="二聯式個人電子發票* (*配合國稅局勸止二聯換開三聯之政策, 本公司保留換開發票的權利)"
                    ></v-radio>
                    <v-radio
                      class="mb-8"
                      label="發票捐贈"
                      value="發票捐贈"
                    ></v-radio>
                    <v-radio
                      class="mb-8"
                      label="三聯式發票"
                      value="三聯式發票"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>
            <div class="gogo">
              <div class="mb-10 text-h4 font-weight-bold">信用卡</div>
              <div class="d-flex align-center ml-5 mb-8">
                <div class="text-h6 font-weight-bold" style="width:120px">
                  持卡人姓名:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-5 mb-8">
                <div class="text-h6 font-weight-bold" style="width:120px">
                  卡片號碼:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-5 mb-8">
                <div class="text-h6 font-weight-bold" style="width:120px">
                  到期年月日:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-5 mb-8">
                <div class="text-h6 font-weight-bold" style="width:120px">
                  CVV安全碼:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
            </div>
            <div class="gogo mb-15">
              <div class="mb-10 text-h4 font-weight-bold">帳單資訊</div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  地址:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  縣市:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  郵遞區號:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
              <div class="d-flex align-center ml-8 mb-8">
                <div class="text-h6 font-weight-bold" style="width:100px">
                  國家:
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
            </div>
            <div>
              <v-checkbox v-model="checkbox">
                <template v-slot:label>
                  <div>
                    本人聲明下訂即表示已經至展間充分
                    理解、體驗車輛，因此本訂購不適用
                    消保法得於七日內解約之規定;並詳細閱讀
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
            <div class="text-center mb-10">
              <v-dialog v-model="dialog" width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="px-10 rounded-pill"
                    color="orange darken-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    確認訂單
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    信用卡付款規範及相關注意事項
                  </v-card-title>

                  <v-card-text>
                    蒐集個人資料告知事項
                    公司（以下各別或共同簡稱「我們」）因本付款同意書之目的，需蒐集並使用旅客及立書人（以下各別或共同簡稱「您」）之個人資料。為保障
                    您的權益，請您詳閱本「蒐集個人資料告知事項」。
                    個人資料的收集
                    我們將於本付款同意書事項範圍內收集您的個人資料。依本付款同意書之收集方式，
                    我們可能會收集到您的個人資料，包括但不限於：姓名、國籍、護照號碼、身分證字
                    號、電話號碼、戶籍地址、電子郵件地址、搭乘航班日期與起迄點、付款資訊。若您
                    不能提供個人資料給我們，我們將有可能無法提供您所需之搭機相關服務。
                    個人資料的運用
                    我們對您個人資料的使用，將在本付款同意書範圍內，至本付款同意書之目的消失為
                    止。 個人資料之查閱及更改
                    您有權查詢、閱覽、要求製給複製本、補充或更改您的個人資料，您有權於本付款同
                    意書之目的消失後通知我們停止蒐集、處理、利用或刪除您的個人資料。
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                      接受並確認付款
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <!-- <button-submit class="mb-10" buttonSubmit="確認訂單"></button-submit> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  </media>
  <!-- -------------------------------------------------------------- -->
  <media :query="{ maxWidth: '400px' }">
  <div class="d-flex justify-center">
    <div class="d-flex flex-column ma-auto carcheckout">
      <div style="width:100%" class="d-flex justify-end">
        <img
          :src="imgsrc"
          alt="車圖"
          style="width:100%;height:100%"
        />
      </div>
      <div
        class="d-flex flex-column align-end"
        style="display:inline-block;width:100%"
      >
        <div style="width:100%" ref="all">
          <div
            style="height:100vh"
            class="d-flex flex-column"
          >
            <div class="align-self-center text-h4 font-weight-bold">您的 {{ carname }}</div>
            <div class="d-flex flex-column justify-space-around">
                <div>
                  <ul
                    class="mb-5 text-subtitle-1 font-weight-light"
                    style="line-height:2.5;"
                  >
                    <li
                      style="list-style:none;"
                      v-for="cardes in cardesall"
                      :key="cardes"
                    >
                      {{ cardes }}
                    </li>
                  </ul>
                </div>
                <div style="max-width:350px" class="align-self-center">
                  <v-row justify="center">
                    <v-expansion-panels inset>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header
                          >顯示詳細資料(牌照+燃料稅計算、保險加購)</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          購買價格 ${{ carprice }}
                          <br />
                          今日需完成支付 NT$3,000
                          <br />
                          訂購費用（下訂後將不予退還轉讓，費用不含於車價內）
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-row>
                </div>
                <div class="red--text text-h4 font-weight-bold mt-10 mb-5">
                 <div class="ml-3">NT$: {{ carprice }}</div>
                </div>
                <div class="d-flex justify-center">
                <button
                  class="px-10 py-3"
                  style="border:2px solid black;border-radius:30px;text-h4 font-weight-bold"
                  @click="move"
                >
                  信用卡結帳
                </button>
              </div>
              </div>
          </div>
          <div class="ma-auto">
            <div class="gogo ma-auto" style="width:90%">
              <div class="my-10 text-h5 font-weight-bold">輸入帳戶詳細資料</div>
              <div class="d-flex align-center ml-8 mb-8" v-for="item in items1" :key="item">
                <div class="text-body1 font-weight-medium" style="width:100px">
                  {{item}}
                </div>
                <v-text-field
                  dense
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                ></v-text-field>
              </div>
            </div>
            <div style="width:90%" class="ma-auto">
              <div class="mb-10 text-h5 font-weight-medium">發票</div>
              <div class="ma-auto">
                <div class="ml-5">
                  <v-radio-group v-model="column" column>
                    <v-radio
                      class="mb-8"
                      label="二聯式個人電子發票* (*配合國稅局勸止二聯換開三聯之政策, 本公司保留換開發票的權利)"
                      value="二聯式個人電子發票* (*配合國稅局勸止二聯換開三聯之政策, 本公司保留換開發票的權利)"
                    ></v-radio>
                    <v-radio
                      class="mb-8"
                      label="發票捐贈"
                      value="發票捐贈"
                    ></v-radio>
                    <v-radio
                      class="mb-8"
                      label="三聯式發票"
                      value="三聯式發票"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>
            </div>
            <div class="gogo ma-auto" style="width:90%">
              <div class="mb-10 text-h5 font-weight-bold">信用卡</div>
              <div class="d-flex align-center ml-5 mb-8" v-for="item in items2" :key="item">
                <div class="text-body1 font-weight-medium" style="width:120px">
                  {{item}}
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                  dense
                ></v-text-field>
              </div>
            </div>
            <div class="gogo mb-15 ma-auto" style="width:90%">
              <div class="mb-10 text-h5 font-weight-bold">帳單資訊</div>
              <div class="d-flex align-center ml-8 mb-8" v-for="item in items3" :key="item">
                <div class="text-body1 font-weight-medium" style="width:100px">
                  {{item}}
                </div>
                <v-text-field
                  label="請輸入"
                  solo-inverted
                  style="max-width:70%"
                  class="ma-auto"
                  dense
                ></v-text-field>
              </div>
            </div>
            <div style="width:80%" class="ma-auto mb-5">
              <v-checkbox v-model="checkbox">
                <template v-slot:label>
                  <div class="text-subtitle-2 font-weight-medium">
                    本人聲明下訂即表示已經至展間充分
                    理解、體驗車輛，因此本訂購不適用
                    消保法得於七日內解約之規定;並詳細閱讀
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
            <div class="text-center mb-10">
              <v-dialog v-model="dialog" width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="px-10 rounded-pill"
                    color="orange darken-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    確認訂單
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 grey lighten-2">
                    信用卡付款規範及相關注意事項
                  </v-card-title>

                  <v-card-text>
                    蒐集個人資料告知事項
                    公司（以下各別或共同簡稱「我們」）因本付款同意書之目的，需蒐集並使用旅客及立書人（以下各別或共同簡稱「您」）之個人資料。為保障
                    您的權益，請您詳閱本「蒐集個人資料告知事項」。
                    個人資料的收集
                    我們將於本付款同意書事項範圍內收集您的個人資料。依本付款同意書之收集方式，
                    我們可能會收集到您的個人資料，包括但不限於：姓名、國籍、護照號碼、身分證字
                    號、電話號碼、戶籍地址、電子郵件地址、搭乘航班日期與起迄點、付款資訊。若您
                    不能提供個人資料給我們，我們將有可能無法提供您所需之搭機相關服務。
                    個人資料的運用
                    我們對您個人資料的使用，將在本付款同意書範圍內，至本付款同意書之目的消失為
                    止。 個人資料之查閱及更改
                    您有權查詢、閱覽、要求製給複製本、補充或更改您的個人資料，您有權於本付款同
                    意書之目的消失後通知我們停止蒐集、處理、利用或刪除您的個人資料。
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                      接受並確認付款
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
            <!-- <button-submit class="mb-10" buttonSubmit="確認訂單"></button-submit> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  </media>
 </div>
</template>

<script>
// import ButtonSubmit from './layout/ButtonSubmit.vue'
import Media from 'vue-media'
export default {
  computed: {
    discount () {
      return (this.notify[0].CURRENTPRICE) * 0.5
    }
  },
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
    this.img = this.notify[0].IMGPATH
    this.notify = this.$store.getters.getcheckoutcardata
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  },
  components: {
    Media
  },
  // components: { ButtonSubmit },
  data () {
    return {
      img: '',
      member: [],
      notify: [],
      result: '',
      carprice: '3,500,000',
      checkbox: false,
      imgsrc: require('../assets/bmw6.png'),
      carname: 'BMW M4',
      cardesall: [
        '珍珠白 (多塗層)',
        '19 吋 Tempest 輪圈',
        '全黑頂級內裝搭配碳纖維飾板',
        'Autopilot 自動輔助駕駛',
        '頂級連線功能',
        '舒適性套件'
      ],
      items1: [
        '姓氏', '名字', '電子郵件', '手機號碼'
      ],
      items2: [
        '持卡人姓名', '卡片號碼', '到期年月日', 'CVV安全碼'
      ],
      items3: [
        '地址', '縣市', '郵遞區號', '國家'
      ]
    }
  },
  methods: {
    move () {
      window.scrollTo({ top: 1085, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss">
.carcheckout {
  .gogo {
    .v-text-field__details {
      height: 0px;
      display: none;
    }
  }
}
</style>
