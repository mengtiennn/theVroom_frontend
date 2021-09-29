<template>
  <div class="bottom_first">
    <media :query="{ minWidth: '401px' }">
      <div class="bottom">
        <div class="bottom_inside">
          <div style="width: 100%; height: 75px" class="d-flex text-subtitle-1 font-weight-light" v-for="info in infos" :key="info">
            <div style="border: 1px solid black; width: 20%; height: 100%; font-weight: 700; border-right: none; border-bottom: none;" class="d-flex align-center justify-center">{{ info.title }}</div>
            <div style="border: 1px solid black; width: 40%; height: 100%; font-weight: 700; border-right: none; border-bottom: none;" class="d-flex align-center justify-center">{{ info.contentA }}</div>
            <div style="border: 1px solid black; width: 40%; height: 100%; font-weight: 700; border-bottom: none;" class="d-flex align-center justify-center">{{ info.contentB }}</div>
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
          <div style="border: 2px solid black; border-bottom: none; width: 350px; margin: 0 auto;">
            <div style="width: 350px; height:180px;" v-for="info in infos" :key="info">
              <div style="border-bottom: 2px solid black; width: 99%; height: 50%; background-color:lightgray" class="d-flex align-center justify-center">{{ info.title }}</div>
              <div style="width: 100%; height: 50%" class="d-flex">
                <div style="border: 2px solid black; border-top:none; border-left: none; border-right: none; width: 50%; height:100%" class="d-flex align-center justify-center">{{ info.contentA }}</div>
                <div style="border: 2px solid black; border-top:none; border-right: none; width: 49%; height:100%" class="d-flex align-center justify-center">{{ info.contentB }}</div>
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
  props: ['cardata.title'],
  mounted () {
    console.log(this.first)

    const first = JSON.parse(localStorage.getItem('a'))
    const firstb = JSON.parse(localStorage.getItem('b'))
    console.log(first)
    this.first.push(first)
    this.first.push(firstb)
    console.log(this.first)
    this.infos[0].contentA = this.first[0][3]
    this.infos[0].contentB = this.first[1][3]
    this.infos[1].contentA = this.first[0][4]
    this.infos[1].contentB = this.first[1][4]
    this.infos[2].contentA = this.first[0][5]
    this.infos[2].contentB = this.first[1][5]
    this.infos[3].contentA = this.first[0][6]
    this.infos[3].contentB = this.first[1][6]
    this.infos[4].contentA = this.first[0][13]
    this.infos[4].contentB = this.first[1][13]
    this.infos[5].contentA = this.first[0][8]
    this.infos[5].contentB = this.first[1][8]
    this.infos[6].contentA = this.first[0][9]
    this.infos[6].contentB = this.first[1][9]
    this.infos[7].contentA = this.first[0][10]
    this.infos[7].contentB = this.first[1][10]
  },
  created () {
    console.log(this.cardata)
    const cardata = JSON.parse(localStorage.getItem('cardata'))
    // this.infos = this.cardata
    console.log(cardata)
    this.cardata = cardata
    console.log(this.infos[0].contentA)
    console.log(this.cardata)
    this.infos[0].contentA = this.cardata[0][3]
    this.infos[0].contentB = this.cardata[1][3]
    this.infos[1].contentA = this.cardata[0][4]
    this.infos[1].contentB = this.cardata[1][4]
    this.infos[2].contentA = this.cardata[0][5]
    this.infos[2].contentB = this.cardata[1][5]
    this.infos[3].contentA = this.cardata[0][6]
    this.infos[3].contentB = this.cardata[1][6]
    this.infos[4].contentA = this.cardata[0][13]
    this.infos[4].contentB = this.cardata[1][13]
    this.infos[5].contentA = this.cardata[0][8]
    this.infos[5].contentB = this.cardata[1][8]
    this.infos[6].contentA = this.cardata[0][9]
    this.infos[6].contentB = this.cardata[1][9]
    this.infos[7].contentA = this.cardata[0][10]
    this.infos[7].contentB = this.cardata[1][10]
  },
  data: () => ({
    first: [],
    cardata: [],
    infos: [
      {
        id: '1',
        title: '動力型式',
        contentA: '柴油',
        contentB: '柴油'
      },
      {
        id: '2',
        title: '引擎型式',
        contentA: '渦輪增壓, 直列5缸, DOHC雙凸輪軸, 20氣門',
        contentB: '渦輪增壓, 直列5缸, DOHC雙凸輪軸, 20氣門'
      },
      {
        id: '3',
        title: '變速系統',
        contentA: '6速自手排',
        contentB: '6速自手排'
      },
      {
        id: '4',
        title: '驅動型式',
        contentA: '前輪驅動',
        contentB: '前輪驅動'
      },
      {
        id: '5',
        title: '最大扭力',
        contentA: '40.8kgm@2000rpm',
        contentB: '40.8kgm@2000rpm'
      },
      {
        id: '6',
        title: '車身型式',
        contentA: '轎式旅行車',
        contentB: '轎式旅行車'
      },
      {
        id: '7',
        title: '車型大小',
        contentA: '車長:4660mm',
        contentB: '車長:4660mm'
      },
      {
        id: '8',
        title: '後車箱大小',
        contentA: '235ltr',
        contentB: '235ltr'
      }
    ]
  }),
  components: {
    Media
  }
}
</script>

<style lang="scss">
  .bottom_first {
    .bottom{
        // border: 1px solid #f20;
        width: 100%;
        // height: 600px;
        // margin-top: 50px;
        .bottom_inside{
          border: 1px solid #000;
          border-top: none;
          border-left: none;
          border-right: none;
          width: 1200px;
          // height: 100%;
          margin: 0 auto;
        }
      }
  }
</style>
