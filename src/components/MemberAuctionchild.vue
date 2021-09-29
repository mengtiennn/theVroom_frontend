<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div
        style="width:600px;height:100%;border:1px solid rgba(0,0,0,.1);border-radius:10px"
        class="pa-5 my-5"
      >
        <div
          style="height:100px"
          class="d-flex flex-column justify-space-around"
        >
          <div>訂單編號:{{ num }}</div>
          <div>訂購時間:{{ time }}</div>
          <div>訂單金額:{{ price }}</div>
        </div>
         <div class="text-center">
           <v-dialog
             v-model="dialog"
             width="700">
            <template v-slot:activator="{ on, attrs }">
             <v-btn
             @click="find"
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on">
                購物清單內容
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          購物清單內容
        </v-card-title>
      <div class="d-flex flex-column" v-for="item in shoplist" :key="item[0]">
        <div style="width:100%;height:1px" class="grey"></div>
        <div class="my-3 d-flex">
          <div class="mr-5">
            <img
              style="max-width:100px;max-height:100px"
              :src=item.PRODUCTIMG
              alt="圖壞了"
            />
          </div>
          <div
            style="width:100%"
            class="d-flex justify-space-between align-center"
          >
            <div class="ml-10">
              <div>{{ item.PRODUCTNAME }}</div>
              <div>數量:{{ item.PRODUCTAMOUNT }}</div>
            </div>
            <div class="mr-10">NT${{ item.TOTALPRICE }}</div>
          </div>
        </div>
        <div style="width:100%;height:1px" class="grey"></div>
      </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false">
            返回
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        <!-- <div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                檢視訂單細項
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <member-auctiongrandchild
                  v-for="item in detail"
                  :key="item.id"
                  :img="item.img"
                  :title="item.title"
                  :count="item.count"
                  :price="item.price"
                />
                <div class="align-self-end">訂單金額:${{ totalp }}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div> -->
      </div>
    </media>
    <!-- ----------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div
        style="width:300px;height:100%;border:1px solid rgba(0,0,0,.1);border-radius:10px"
        class="pa-5 my-5 ma-auto"
      >
        <div
          style="height:100px"
          class="d-flex flex-column justify-space-around"
        >
          <div>訂單編號:{{ num }}</div>
          <div>訂購時間:{{ time }}</div>
          <div>訂單金額:{{ price }}</div>
        </div>
        <!-- <div>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                檢視訂單細項
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <member-auctiongrandchild
                  v-for="item in detail"
                  :key="item.id"
                  :img="item.img"
                  :title="item.title"
                  :count="item.count"
                  :price="item.price"
                />
                <div style="text-align:right" class="text-h6">訂單金額:${{ totalp }}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div> -->
      </div>
    </media>
  </div>
</template>

<script>
// import MemberAuctiongrandchild from './MemberAuctiongrandchild.vue'
import Media from 'vue-media'
export default {
  props: ['num', 'time', 'price', 'detail'],
  components: {
    // MemberAuctiongrandchild,
    Media
  },
  data () {
    return {
      total: 0,
      member: 0,
      shoplist: []
    }
  },
  created () {
    this.member = this.$store.getters.getmember[0].MEMBERID
  },
  methods: {
    async find () {
      console.log(this.num)
      const fd2 = new FormData()
      fd2.append('MEMBERID', this.member)
      fd2.append('ORDERLISTID', this.num)
      const res2 = await fetch('./phpfile/orderlistidselect.php', {
        method: 'POST',
        body: fd2
      })
      const resdata2 = await res2.json()
      console.log(resdata2)
      this.shoplist = resdata2
    }
  },
  computed: {
    totalp () {
      this.detail.forEach(item => {
        // console.log(item.count)
        // console.log(item.price)
        // console.log(item.price * item.count)
        this.total += item.price * item.count
      })
      return this.total
    }
  }
}
</script>
