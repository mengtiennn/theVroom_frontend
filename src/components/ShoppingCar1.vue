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
  </div>
  </media>
  <media :query="{ maxWidth: '400px' }">
  <div style="max-width:100%;" class="ma-auto">
    <div
      class="d-flex flex-column mb-5 align-center"
      v-for="list in prolist"
      :key="list.id"
    >
    <div class="d-flex justify-space-around" style="width:85%">
      <div class="py-3" style="width:35%;">
        <img style="width:100px; height: 100px; object-fit: contain;" :src="list.PRODUCTIMG" alt="圖壞了" />
      </div>
      <div style="width:65%" class="ma-auto d-flex flex-column align-center">
        <div class="d-flex flex-column justify-center" style="width:75%" align-center>
          <div class="py-3 text-h5 font-weight-bold" >
            {{ list.PRODUCTMOUNT }}
          </div>
          <div class="py-3 align-self-end" >
            <i class="fas fa-minus"></i>
            {{ list.PRODUCTPRICE }}
            <i class="fas fa-plus"></i>
          </div>
          <div class="mb-3 align-self-end" >
            NT$:{{ list.PRODUCTPRICE * list.PRODUCTMOUNT }}
          </div>
        </div>
      </div>
      </div>
      <div style="width:90%;height:2px;background-color:rgba(0,0,0,.3)"></div>
    </div>
  </div>
  </media>
 </div>
</template>

<script>
import Media from 'vue-media'
export default {
  components: { Media },
  // props: ['proSrc', 'proName', 'proPrice', 'proCount'],
  created () {
    console.log(this.$store.getters.getshoplist)
    this.prolist = this.$store.getters.getshoplist
    console.log(this.prolist)
  },
  data () {
    return {
      prolist: []
    }
  }
}
</script>

<style>
.fitImg{
  object-fit: cover;
}
</style>
