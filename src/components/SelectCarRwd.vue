<template>
    <div class="selectRwd d-flex flex-column">
        <div>
            <the-headline titleName="近期競標場場次" class="pt-10 mb-5"/>
        </div>
        <div class="d-flex flex-column">
            <div class="ml-5 mt-16">
                <img class="SCrwd" :src="selectCarImg">
            </div>
            <div class="ml-7 text-h6 font-weight-medium" style="color: #F34841;">距離結束時間</div>
            <div class="ml-7 text-h5 font-weight-medium" style="color: #FFFFFF;">01天08時25分30秒</div>
        </div>
        <div style="transform: translateX(-15px)" class="mt-10">
            <v-sheet
            class="mx-auto"
            elevation="0"
            max-width="320"
            color="transparent"
            >
                <v-slide-group
                v-model="model"
                active-class="success"
                >
                    <v-slide-item
                        v-for="(zone, index) in carZone"
                        :key="zone.id"
                    >
                        <v-card
                        outlined
                        color="transparent"
                        class="ma-4 d-flex flex-column"
                        height="200"
                        width="220"
                        >
                        <div class="selectZone" :class="{ addline:index == count }" @click="addselect(index)">
                            <div class="selectLine mt-6 ml-5" style="width: 80px; height: 2px; background-color: #F34841;"></div>
                            <div class="carBrand text-h6 font-weight-medium mt-6 ml-5" style="color: #FFFFFF;">{{ zone.brand }}</div>
                            <div class="carSeries text-h6 font-weight-medium mt-6 ml-5" style="color: #FFFFFF;">{{ zone.series }}</div>
                        </div>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>
</template>

<script>
import TheHeadline from '../components/layout/TheHeadline.vue'

export default {
  components: {
    TheHeadline
  },
  data () {
    return {
      count: 0,
      selectCarImg: require('../assets/index-select-car/bmwm2c.png'),
      carZone: [
        { id: '0', brand: 'BMW', series: 'M2 Competition', img: require('../assets/index-select-car/bmwm2c.png') },
        { id: '1', brand: 'M-Benz', series: 'GLA 250 4MATIC', img: require('../assets/index-select-car/benzglar.png') },
        { id: '2', brand: 'BMW', series: 'X4 competition', img: require('../assets/index-select-car/bmwX4.png') },
        { id: '3', brand: 'Bentley', series: 'Continental GT', img: require('../assets/index-select-car/bentley2.png') },
        { id: '4', brand: 'LAND ROVER', series: 'Evoque', img: require('../assets/index-select-car/landrover_evoque.png') }
      ]
    }
  },
  methods: {
    addselect (index) {
      this.count = index
      this.selectCarImg = this.carZone[index].img
    }
  }
}
</script>

<style lang="scss">
    .selectRwd{
        width: 100%;
        height: 750px;
        background-color: #181818;
        .SCrwd{
            width: 320px;
        }
        .selectZone{
            width: 220px;
            height: 200px;
        }
    }
    .addline{
        border: 1px solid gray;
    }
</style>
