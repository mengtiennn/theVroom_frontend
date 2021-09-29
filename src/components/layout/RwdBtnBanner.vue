<template>
    <div class="rwdBanner">
        <div class="addTitle d-flex justify-space-between">
            <div class="d-flex align-center">
                <div class="addTitleLine ml-6"></div>
                <div class="titleOne text-h5 font-weight-bold ml-5">討論專區</div>
            </div>
            <div class="d-flex align-center mr-6">
                <router-link style="text-decoration:none;" to="/issuePage">
                <v-btn rounded outlined width="100" color="#FFFFFF">我要發文</v-btn>
                </router-link>
            </div>
        </div>
        <img src="../../assets/Issuepage1.jpg">
    </div>
</template>

<style lang="scss">
.rwdBanner{
    max-height: 220px;
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
