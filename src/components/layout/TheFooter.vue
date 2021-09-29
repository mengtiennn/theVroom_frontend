<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div class="footer-body d-flex flex-column align-center">
        <div class="footer-first d-flex" style="width:85%">
          <div class="footer-sub d-flex flex-column" >
            <h2 class="ml-5">準備啟程</h2>
            <h4 class="ml-5 text-subtitle-1 font-weight-light">
              Get exclusive digital marketing update straight to your inbox.
            </h4>
            <div class="footer-submail">
              <input type="text" placeholder="Email address" class="ml-5" />
              <button class="ml-5">Subscribe</button>
            </div>
          </div>
          <div class="footer-detil">
            <div>
              <h2><a href="#">售後服務</a></h2>
              <div>
                <h3 class="mb-2 mt-4">
                  <a href="#" class="red--text">購物說明</a>
                </h3>
                <h4 class="mb-1">
                  <a href="#" class="text-subtitle-1 font-weight-light"
                    >顧客服務</a
                  >
                </h4>
                <h4 class="mb-1">
                  <a href="#" class="text-subtitle-1 font-weight-light"
                    >如何購買</a
                  >
                </h4>
                <h4 class="mb-1">
                  <a href="#" class="text-subtitle-1 font-weight-light"
                    >退換貨流程</a
                  >
                </h4>
                <h3 class="mb-2 mt-4">
                  <a href="#" class="red--text">會員</a>
                </h3>
                <h4 class="mb-1">
                  <a href="#" class="text-subtitle-1 font-weight-light"
                    >會員註冊</a
                  >
                </h4>
                <h4 class="mb-1">
                  <a href="#" class="text-subtitle-1 font-weight-light"
                    >會員登入</a
                  >
                </h4>
              </div>
            </div>
            <div>
              <h2 class="mb-5"><a href="#">競標資訊</a></h2>
              <h4 class="mb-1">
                <a href="#" class="text-subtitle-1 font-weight-light"
                  >新手上路</a
                >
              </h4>
              <h4 class="mb-1">
                <a href="#" class="text-subtitle-1 font-weight-light"
                  >熱門競標</a
                >
              </h4>
              <h4 class="mb-1">
                <a href="#" class="text-subtitle-1 font-weight-light"
                  >車主文章</a
                >
              </h4>
              <h4 class="mb-1">
                <a href="#" class="text-subtitle-1 font-weight-light"
                  >車款比價</a
                >
              </h4>
              <h4 class="mb-1">
                <a href="#" class="text-subtitle-1 font-weight-light"
                  >常見問題</a
                >
              </h4>
            </div>
            <div>
              <h2 class="mb-5"><a href="#">關於我們</a></h2>
              <h4 class="mb-1">
                <a href="#" class="text-subtitle-1 font-weight-light"
                  >TheVroom</a
                >
              </h4>
            </div>
            <div>
              <h2><a href="#">討論區分享</a></h2>
            </div>
          </div>
        </div>
        <div class="footer-icon" style="font-size:30px">
          <div><i class="fab fa-facebook-square"></i></div>
          <div class="ml-3"><i class="fab fa-instagram"></i></div>
          <div class="ml-3"><i class="fab fa-twitter-square"></i></div>
        </div>
        <div class="footer-last mt-5">
          <p>本網站為緯育TibaMe前端設計工程師班第68期學員專題作品
          本平台僅供學習、展示之用。
          若有侵權疑慮，您可以私訊 TibaMe-前端設計工程師養成班 ，後續會由專人協助處理</p>
        </div>
      </div>
    </media>
    <!-- ------------------------------------------------------------------------------ -->
    <media :query="{ maxWidth: '400px' }">
      <div class="footer-body d-flex flex-column">
        <div class="footer-first d-flex flex-column align-center">
          <div class="footer-sub d-flex flex-column align-self-start ma-auto" style="width:80%">
            <h2 class="ml-5">準備啟程</h2>
            <h4 class="ml-5 text-subtitle-1 font-weight-light">
              Get exclusive digital marketing update straight to your inbox.
            </h4>
            <div class="footer-submail">
              <input type="text" placeholder="Email address" class="ml-5" />
              <button class="ml-5">Subscribe</button>
            </div>
          </div>
          <div class="footer-detil d-flex flex-column mt-10" style="width:270px">
              <div class="d-flex flex-column justify-center">
                <h2><a href="#">售後服務</a></h2>
                <div class="d-flex justify-start my-3">
                  <h3 class="mb-2 mt-4 d-none">
                    <a href="#" class="red--text">購物說明</a>
                  </h3>
                  <h4 class="mb-1 mr-3">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >顧客服務</a
                    >
                  </h4>
                  <h4 style="width:2px" class="white mr-3"></h4>
                  <h4 class="mb-1 mr-3">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >如何購買</a
                    >
                  </h4>
                  <h4 style="width:2px" class="white mr-3"></h4>
                  <h4 class="mb-1">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >退換貨流程</a
                    >
                  </h4>
                </div>
                <div>
                  <h2 class="my-3">
                    <a href="#" class="white--text">會員</a>
                  </h2>
                  <div class="d-flex justify-start mt-2">
                    <h4 class="mb-1 mr-3">
                      <a href="#" class="text-subtitle-1 font-weight-light"
                        >會員註冊</a
                      >
                    </h4>
                  <h4 style="width:2px" class="white mr-2"></h4>
                    <h4 class="mb-1">
                      <a href="#" class="text-subtitle-1 font-weight-light"
                        >會員登入</a
                      >
                    </h4>
                  </div>
                </div>
              </div>
            <div class="my-3">
              <h2 class="my-3"><a href="#">競標資訊</a></h2>
              <div class="d-flex flex-column">
                <div class="d-flex justify-start mt-2">
                  <h4 class="mb-1 mr-3">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >新手上路</a
                    >
                  </h4>
                  <h4 style="width:2px" class="white mr-3"></h4>
                  <h4 class="mb-1 mr-3">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >熱門競標</a
                    >
                  </h4>
                  <h4 style="width:2px" class="white mr-3"></h4>
                  <h4 class="mb-1">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >車主文章</a
                    >
                  </h4>
                </div>
                <div class="d-flex justify-start mt-5">
                  <h4 class="mb-1 mr-3">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >車款比價</a
                    >
                  </h4>
                  <h4 style="width:2px;" class="white mr-3"></h4>
                  <h4 class="mb-1">
                    <a href="#" class="text-subtitle-1 font-weight-light"
                      >常見問題</a
                    >
                  </h4>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column align-center mt-10 mb-5">
              <h5 class="mt-1 mb-2 white--text">關於我們</h5>
              <h5 class="mt-1 mb-2 white--text">營業時間:12:00~2200</h5>
              <h5 class="mt-1 mb-2 white--text">台北市信義區五段7號1樓</h5>
            </div>
          </div>
        </div>
        <div class="footer-icon justify-space-around" style="font-size:35px">
          <div><i class="fab fa-facebook-square"></i></div>
          <div><i class="fab fa-instagram"></i></div>
          <div><i class="fab fa-twitter-square"></i></div>
        </div>
        <div class="footer-last mt-5">
          <p>本網站為緯育TibaMe前端設計工程師班第68期學員專題作品
          本平台僅供學習、展示之用。
          若有侵權疑慮，您可以私訊 TibaMe-前端設計工程師養成班 ，後續會由專人協助處理</p>
        </div>
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
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  .footer-body {
    padding: 30px 0;
    background-color: #181818;
    .footer-first {
      display: flex;
      justify-content: space-around;

      .footer-sub {
        width: 250px;
        color: #fff;
        h4 {
          font-size: 12px;
        }
        .footer-submail {
          display: flex;
          flex-direction: column;
          input {
            height: 25px;
            background-color: transparent;
            margin: 15px 0;
            width: 200px;
            padding: 15px 20px;
            border: 1px solid #bfbdbd;
          }
          button {
            width: 100px;
            background-color: #F34841;
            color: #fff;
            height: 25px;
            border-radius: 5px;
          }
        }
      }
      .footer-detil {
        width: 70%;
        display: flex;
        justify-content: space-evenly;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
    .footer-icon {
      margin: 0 auto;
      width: 90%;
      color: #fff;
      font-size: 20px;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid #fff;
      i {
        margin: 0 20px;
      }
    }
    .footer-last {
      text-align: center;
      color: #fff;
    }
  }
}
</style>
