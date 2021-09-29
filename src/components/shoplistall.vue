<template>
    <div style="width:350px;min-height:50px" class="grey d-flex flex-column justify-between align-center">
        <h3>購物車</h3>
        <div v-for="(shoplist, index) in list" :key="index" class="d-flex flex-column">
          <div class="d-flex justify-around my-3">
          <div style="width:150px;height:150px" class="mx-1">
              <img style="width:150px;height:150px" :src=shoplist.PRODUCTIMG alt="圖壞了">
          </div>
          <div style="width:150px;height:150px" class="mx-1 d-flex flex-column justify-between">
              <div>{{ shoplist.PRODUCTNAME }}</div>
              <div class="d-flex justify-between align-center" style="width:150px;height:150px">
                  <div style="min-width:50px">{{ shoplist.PRODUCTPRICE }}</div>
                  <div style="min-width:35px">X</div>
                  <div style="min-width:35px">{{ shoplist.PRODUCTMOUNT }}</div>
              </div>
              <div class="align-self-end" style="cursor: pointer;" @click="removeproduct(index)"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg></div>
          </div>
          </div>
        </div>
        <div class="align-self-center my-2"> 總金額: {{totalprice}} 元 </div>
        <div class="black white--text d-flex justify-center align-center" style="width:100%;height:50px;cursor: pointer;"><router-link :to="signset">訂單結帳</router-link></div>
        <!-- <div class="white" @click="testremove">123</div> -->
    </div>
</template>
<script>
export default {
  created () {
    this.shoplist = JSON.parse(localStorage.getItem('shoplist'))
    if (this.shoplist === null) {
      this.shoplist = []
      this.$store.dispatch('shoplist2', this.shoplist)
    } else {
      this.$store.dispatch('shoplist2', this.shoplist)
    }
    console.log(this.shoplist)
  },
  data () {
    return {
      shoplist1: [],
      shoplist: [],
      total: 0
    }
  },
  methods: {
    removeproduct (index) {
      this.shoplist = this.$store.getters.getshoplist
      console.log(this.shoplist)
      this.shoplist.splice(index, 1)
      this.$store.dispatch('shoplist2', this.shoplist)
    }
  },
  computed: {
    totalprice () {
      console.log(this.$store.getters.getshoplisttotal)
      return this.$store.getters.getshoplisttotal
    },
    list () {
      console.log(this.$store.getters.getshoplist)
      return this.$store.getters.getshoplist
    },
    signset () {
      const data = this.$store.getters.getmember
      console.log(data)
      if (data === 0) {
        return '/Signin'
      } else {
        return '/shoppingcar'
      }
    }
  }
}
</script>
