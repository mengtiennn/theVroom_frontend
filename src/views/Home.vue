<template>
  <div>
    <!-- <search-banner/> -->
    <index-banner/>
    <select-car></select-car>
    <direct-buy />
    <index-forum-m />
    <about-us />
    <index-forum/>
  </div>
</template>

<script>
import AboutUs from '../components/AboutUs.vue'
import DirectBuy from '../components/DirectBuy.vue'
import SelectCar from '../components/SelectCar.vue'
import indexForum from '../components/indexForum.vue'
// import SearchBanner from '../components/SearchBanner.vue'
import indexBanner from '../components/indexBanner.vue'
import indexForumM from '../components/indexForumM.vue'

export default {
  name: 'Home',
  components: {
    AboutUs,
    DirectBuy,
    SelectCar,
    indexForum,
    // SearchBanner,
    indexBanner,
    indexForumM
  },
  created () {
    this.$store.dispatch('happy', [false, 'margin-top: 0px'])
  },
  beforeDestroy () {
    this.$store.dispatch('happy', true)
  }
}
</script>
