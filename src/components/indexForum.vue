<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="indexForum d-flex flex-column justify-center">
        <div class="iFone d-flex">
          <div class="iFleft"></div>
          <div class="iFright"></div>
        </div>
        <div class="iFtwo d-flex">
          <div class="iFphoto">
            <img src="../assets/i-f-photo.jpeg" />
          </div>
          <div class="iFcontent d-flex flex-column">
            <div class="iFtitle text-h4 font-weight-bold">討論區分享</div>
            <div class="iFtext d-flex">
              <div class="textLeft text-subtitle-1 font-weight-light">
                當天去看車，整體給我的感受就是服務專業，即使車齡較高的車也都照顧得很好，車況用看的就知道還不錯，業務單刀直入也不會跟你扯有的沒的，果然網紅不會砸自己招牌，唯一缺點價格都是不2價，但我覺得沒關係，畢竟老闆收車的時候就幫你把關車況，我覺得這才是好的中古車商，把實質車況一五一十的告知消費者，也希望諸位找到心目中想買的車！
              </div>
              <div class="textRight"></div>
            </div>
            <div class="iFbtn">
              <v-btn rounded outlined width="120" color="#F34841" to="/forum">
                查看全文
              </v-btn>
            </div>
          </div>
        </div>
        <div class="iFone d-flex">
          <div class="iFleft"></div>
          <div class="iFright"></div>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  components: { Media },
  data () {
    return {
      forum: [
        {
          id: 1,
          imgsrc: require('../assets/i-f-photo.jpeg'),
          content:
            '當天去看車，整體給我的感受就是服務專業，即使車齡較高的車也都照顧得很好，車況用看的就知道還不錯，業務單刀直入也不會跟你扯有的沒的，果然網紅不會砸自己招牌，唯一缺點價格都是不2價，但我覺得沒關係，畢竟老闆收車的時候就幫你把關車況，我覺得這才是好的中古車商，把實質車況一五一十的告知消費者，也希望諸位找到心目中想買的車！'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.indexForum {
  height: 100vh;
  width: 1200px;
  margin: 0 auto;
  .iFone {
    width: 1200px;
    height: 80px;
    .iFleft {
      width: 200px;
      height: 80px;
    }
    .iFright {
      width: 1000px;
      height: 80px;
      background-color: #181818;
    }
  }
  .iFtwo {
    width: 1200px;
    height: 400px;
    .iFtitle {
      width: 505px;
      height: 80px;
      background-color: #f34841;
      color: #ffffff;
      padding-left: 30px;
      padding-top: 18px;
    }
    .iFtext {
      background-color: #181818;
      height: 265px;
      padding-left: 30px;
      .textLeft {
        width: 350px;
        color: #ffffff;
        padding-top: 35px;
      }
    }
    img {
      height: 400px;
    }
    .iFbtn {
      width: 505px;
      height: 60px;
      background-color: #181818;
      padding-left: 30px;
      padding-top: 25px;
    }
  }
}
</style>
