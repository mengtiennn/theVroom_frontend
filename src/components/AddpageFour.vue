<template>
    <div class="allPage">
        <add-left titleNum="04" titleText="開設完成"></add-left>
        <v-container class="contentRightFour d-flex flex-column justify-center">
            <div class="finalpage">
                <div class="finaltitle">恭喜開設拍賣會成功！</div>
                <div class="finalbtn">
                    <v-btn rounded outlined width="120">回會員介面</v-btn>
                    <v-btn rounded color="#F34841" class="btn ml-16" dark width="120" to="/"
                     >回首頁</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import AddLeft from './AddLeft.vue'

export default {
  data: () => ({
    colorList: ['黑', '白', '銀', '灰', '紅', '藍', '棕', '綠', '黃', '紫', '其他'],
    airList: ['1200cc 以下', '1201cc~1800cc', '1801cc~2400cc', '2401cc~3000cc', '3001cc~3600cc', '3601cc 以上']
  }),
  methods: {
    showOption () {
      this.showSelect = true
    }
  },
  components: {
    AddLeft
  }
}
</script>

<style lang="scss">
    .allPage{
        display: flex;
        .contentRightFour{
            width: 75%;
            height: 100vh;
            margin-top: 50px;
            .finalpage{
                width: 370px;
                height: 370px;
                margin: 0px auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .finaltitle{
                    font-size: 35px;
                    text-align: center;
                }
                .finalbtn{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>
