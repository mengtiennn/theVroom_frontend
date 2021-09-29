<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="d-flex flex-column">
        <div style="width:100%;height:1px" class="grey"></div>
        <div class="my-3 d-flex">
          <div class="mr-5">
            <img
              style="max-width:100px;max-height:100px"
              :src="img"
              alt="圖壞了"
            />
          </div>
          <div
            style="width:100%"
            class="d-flex justify-space-between align-center"
          >
            <div>
              <div>{{ title }}</div>
              <div>數量:{{ count }}</div>
            </div>
            <div>NT${{ price }}</div>
          </div>
        </div>
        <div style="width:100%;height:1px" class="grey"></div>
      </div>
    </media>
    <!-- ----------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div class="d-flex flex-column">
        <div style="width:100%;height:1px" class="grey"></div>
        <div class="my-3 d-flex">
          <div class="mr-5">
            <img
              style="max-width:70px;max-height:70px"
              :src="img"
              alt="圖壞了"
            />
          </div>
          <div
            style="width:100%"
            class="d-flex justify-space-between align-center text-body-1 font-weight-thin"
          >
            <div>
              <div>{{ title }}</div>
              <div>數量:{{ count }}</div>
            </div>
            <div>NT${{ price }}</div>
          </div>
        </div>
        <div style="width:100%;height:1px" class="grey"></div>
      </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  components: {
    Media
  },
  props: ['img', 'title', 'total', 'count', 'price'],
  data () {
    return {}
  }
}
</script>
