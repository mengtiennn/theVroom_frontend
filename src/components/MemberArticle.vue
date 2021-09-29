<template>
  <div class="article">
    <media :query="{ minWidth: '401px' }">
      <div style="width: 100%; height: 900px;">
        <div style="width: 600px; height: 100%; margin: 0 auto;" class="d-flex justify-center align-center">
          <div style="width: 600px; height: 95%; overflow: auto;">
            <div style="border: 2px solid black; border-radius:10px; width:570px; height:160px;" class="d-flex mb-6" v-for="test in tests" :key="test">
              <div style="width:35%; height:100%" class="d-flex align-center justify-center">
                <img :src="test.img" style="width:85%; height:85%">
              </div>
              <div style="width:65%; height:100%">
                <div style="width: 100%; height: 70%;" class="pl-3 pt-3 pr-3 text-subtitle-1 font-weight-light">{{ test.word }}</div>
                <div style="width: 100%; height: 30%" class="d-flex justify-end align-center">
                  <v-btn color="#F34841" text>閱覽文章</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
    <!-- ---------------------------------------------------------------- -->
    <media :query="{ maxWidth: '400px' }">
      <div>
        <div
          style="max-width: 375px;"
        >
          <div
            style="max-width: 100%; height:100%;"
          >
            <div style="width: 350px; height:1200px; margin: 0 auto;" class="d-flex flex-column justify-space-around mt-10">
              <div style="border: 2px solid black; border-radius:10px; width: 350px; height:150px;" v-for="test in tests" :key="test">
                <div style="width:100%; height:70%" class="text-subtitle-1 font-weight-light pa-3">{{ test.word }}</div>
                <div style="width:100%; height:30%" class="d-flex align-center justify-end pr-3"><v-btn color="#F34841" text>閱覽文章</v-btn></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </media>
  </div>
</template>

<script>
import Media from 'vue-media'
export default {
  data: () => ({
    benched: 0,
    tests: [
      {
        img: require('../assets/compare-car-pic/hotcar01.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      },
      {
        img: require('../assets/compare-car-pic/hotcar02.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      },
      {
        img: require('../assets/compare-car-pic/hotcar03.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      },
      {
        img: require('../assets/compare-car-pic/hotcar04.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      },
      {
        img: require('../assets/compare-car-pic/hotcar01.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      },
      {
        img: require('../assets/compare-car-pic/hotcar02.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      },
      {
        img: require('../assets/compare-car-pic/hotcar03.png'),
        word: 'Volkswagen T-Roc 280算是CUV中造型好看的，尤其是全彩全螢幕的駕駛儀表板最讓人心動.....'
      }
    ]
  }),
  components: {
    Media
  }
}
</script>

<style lang="scss">
.article {
  box-sizing: border-box;
  // border: 2px solid #00f;
  margin: 0;
  padding: 0;
  // height: 1200px;
  // width: 100%;
}
</style>
