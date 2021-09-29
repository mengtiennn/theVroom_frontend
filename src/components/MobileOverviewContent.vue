<template>
    <div class="mobileAObg d-flex flex-column">
        <div class="d-flex ml-6 mb-3 justify-space-between">
            <button-directbuy iconame='❮'/>
            <button-directbuy class="mr-4" iconame='❯'/>
        </div>
        <div class="d-flex">
            <div class="aoCard d-flex flex-column ml-5" v-for="item in mobileConList" :key="item.id">
                <div class="aoCardtitle d-flex flex-column mt-10 ml-6">
                    <div class="cardtitle text-h5 font-weight-bold">Mercedes-Benz</div>
                    <div class="cardtitle text-h5 font-weight-bold">GLE 350 4MATIC</div>
                    <div class="cardtitleLine mt-2"></div>
                </div>
                <div class="aoCardImg ml-4">
                    <img src="../assets/carlist/benz10.png">
                </div>
                <div class="aoCardCon d-flex flex-column ml-6">
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.brand }}</div>
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.series }}</div>
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.conOne }}</div>
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.conTwo }}</div>
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.conThree }}</div>
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.conFour }}</div>
                    <div class="con text-subtitle-1 font-weight-medium">{{ item.conFive }}</div>
                </div>
                <div class="mobileAObtn d-flex justify-space-between mt-10">
                <v-btn
                    to="/addproduct"
                    outlined
                    rounded
                    color="#F34841"
                    class="btn"
                    dark>
                    開設競標場
                    </v-btn>
                    <v-btn
                    to="/singleauction"
                    rounded
                    color="#F34841"
                    class="btn ml-10"
                    dark>
                    進入競標場
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonDirectbuy from '../components/layout/ButtonDirectbuy.vue'
export default {
  data: () => ({
    mobileConList: [
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' },
      { id: '1', brand: 'Mercedes-Benz', series: 'GLE 350 4MATIC', conOne: '5門5人座', conTwo: '272hp@3400~4600rpm', conThree: '平均 13.1km/ltr', conFour: '市區 11.13km/ltr', conFive: '高速 14.63km/ltr', conSix: '渦輪增壓 直列6缸', conSeven: 'DOHC雙凸輪軸 24氣門' }
    ]
  }),
  components: {
    ButtonDirectbuy
  }
}
</script>

<style lang="scss">
.mobileAObg{
    width: 100%;
    height: 750px;
    background-color: #181818;
    padding-top: 20px;
    overflow-x: hidden;
    .aoCard{
    width: 350px;
    height: 650px;
    margin: 0 auto;
    border: 2px solid #FFFFFF;
    border-radius: 20px;
        .cardtitle{
            color: #FFFFFF;
        }
        .aoCardCon{
            color: #FFFFFF;
        }
    }
    .mobileAObtn{
    width: 315px;
    height: 40px;
    margin: 15px auto 0 auto;
    }
    .cardtitleLine{
    width: 100px;
    height: 3px;
    background-color: #F34841;
    }
    .aoCardImg{
        img{
            width: 320px;
        }
    }
}
</style>
