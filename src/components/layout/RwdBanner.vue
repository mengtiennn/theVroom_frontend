<template>
    <div class="rwdBanner">
        <div class="addTitle d-flex align-center">
            <div class="addTitleLine ml-6"></div>
            <div class="titleOne text-h5 font-weight-bold ml-5">{{ rwdtitle }}</div>
        </div>
        <img :src="pathImg">
    </div>
</template>

<script>
export default {
  props: ['rwdtitle', 'pathImg']
}
</script>

<style lang="scss">
.rwdBanner{
  max-height: 230px;
    .addTitle{
      width: 100%;
      height: 64px;
      background-color: #181818;
      .addTitleLine{
        height: 40px;
        width: 2px;
        background-color: #F34841;
      }
      .titleOne{
        color: #FFFFFF;
      }
    }
    img{
        width: 100%;
    }
}
</style>
