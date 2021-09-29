<template>
  <v-carousel hide-delimiters style="height:100%">
      <v-carousel-item
        style="min-width:375px;height:100%"
        v-for="item in mobileConList"
        :key="item.id">
        <div style="border:2px solid #181818;border-radius:20px;width:95%;height:100%" class="ma-auto">
        <div class="d-flex flex-column mt-5">
          <div class="text-h5 font-weight-bold">{{ item.brand }}</div>
          <div class="text-h5 font-weight-bold">{{ item.series }}</div>
          <div class="mt-2"></div>
        </div>
        <div class="aoCardImg">
          <img style="width:200px;height:150px" :src="item.imgsrc" />
        </div>
        <div class="aoCardCon d-flex flex-column">
          <div class="con text-subtitle-1 font-weight-medium">
            {{ item.conOne }}
          </div>
          <div class="con text-subtitle-1 font-weight-medium">
            {{ item.conTwo }}
          </div>
          <div class="con text-subtitle-1 font-weight-medium">
            {{ item.conThree }}
          </div>
          <div class="con text-subtitle-1 font-weight-medium">
            {{ item.conFour }}
          </div>
          <div class="con text-subtitle-1 font-weight-medium">
            {{ item.conFive }}
          </div>
        </div>
          <button-submit class="mt-10" buttonSubmit='進入競標場' webPath='/AuctionOverview'/>
        </div>
      </v-carousel-item>
  </v-carousel>
</template>

<script>
import ButtonSubmit from './layout/ButtonSubmit.vue'
export default {
  components: {
    ButtonSubmit
  },
  data () {
    return {
      mobileConList: [
        {
          id: '1',
          brand: 'Mercedes-Benz',
          series: 'GLE43',
          conOne: '5門5人座',
          conTwo: '272hp@3400~4600rpm',
          conThree: '平均 13.1km/ltr',
          conFour: '市區 11.13km/ltr',
          conFive: '高速 14.63km/ltr',
          conSix: '渦輪增壓 直列6缸',
          conSeven: 'DOHC雙凸輪軸 24氣門',
          imgsrc: require('../assets/index-car-pic/benzglc.png')
        },
        {
          id: '2',
          brand: 'Mercedes-Benz',
          series: 'GLE300',
          conOne: '5門5人座',
          conTwo: '272hp@3400~4600rpm',
          conThree: '平均 13.1km/ltr',
          conFour: '市區 11.13km/ltr',
          conFive: '高速 14.63km/ltr',
          conSix: '渦輪增壓 直列6缸',
          conSeven: 'DOHC雙凸輪軸 24氣門',
          imgsrc: require('../assets/index-car-pic/benzgle1.png')
        },
        {
          id: '3',
          brand: 'BMW',
          series: 'X5',
          conOne: '5門5人座',
          conTwo: '272hp@3400~4600rpm',
          conThree: '平均 13.1km/ltr',
          conFour: '市區 11.13km/ltr',
          conFive: '高速 14.63km/ltr',
          conSix: '渦輪增壓 直列6缸',
          conSeven: 'DOHC雙凸輪軸 24氣門',
          imgsrc: require('../assets/index-car-pic/bmw7.png')
        },
        {
          id: '4',
          brand: 'BMW',
          series: 'M2C',
          conOne: '2門2人座',
          conTwo: '370hp@3400~4600rpm',
          conThree: '平均 13.1km/ltr',
          conFour: '市區 11.13km/ltr',
          conFive: '高速 14.63km/ltr',
          conSix: '渦輪增壓 直列6缸',
          conSeven: 'DOHC雙凸輪軸 24氣門',
          imgsrc: require('../assets/index-car-pic/bmw7.png')
        },
        {
          id: '5',
          brand: 'Nissan',
          series: 'GT-R',
          conOne: '2門2人座',
          conTwo: '565hp@3300~5800rpm',
          conThree: '平均 13.1km/ltr',
          conFour: '市區 11.13km/ltr',
          conFive: '高速 14.63km/ltr',
          conSix: '渦輪增壓 直列6缸',
          conSeven: 'DOHC雙凸輪軸 24氣門',
          imgsrc: require('../assets/index-car-pic/gtr.png')
        }
      ]
    }
  }
}
</script>
