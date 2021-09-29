<template>
    <div>
        <media :query="{ maxWidth: '400px' }">
      <div style="width:100%" class="black d-flex flex-column my-5 py-5 pb-10">
        <div style="width:60%;height:70px" class="red align-self-end mt-8">
          <div
            class="white--text text-h4 font-weight-bold"
            style="position: relative;right:80px;top:20px"
          >
            討論區分享
          </div>
        </div>
        <div v-for="item in forum" :key="item.id" class="mt-8">
          <div><img style="width:375px" :src="item.imgsrc" alt="圖壞了"></div>
          <div class="d-flex justify-center">
            <div style="width:80%" class="white--text my-8">{{item.content}}}</div>
          </div>
          <div style="text-align:center;width:40%;border:2px solid red;border-radius:20px" class="ml-10 pa-3 px-4"><button><router-link to="/forum" class="white--text">查看全文</router-link></button></div>
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
