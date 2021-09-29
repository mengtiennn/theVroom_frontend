<template>
    <div class="rwdSA">
        <div class="rwdSAtop d-flex flex-column justify-space-between">
            <div class="SAtopTitle ml-8 mt-16">
                <div class="SAtitle text-h5 font-weight-bold">Mercedes-Benz</div>
                <div class="SAtitle text-h5 font-weight-bold">GLC Coupe 300</div>
            </div>
            <div class="SAimg ml-8">
                <img class="SACar" src="../assets/carlist/benz30.png">
            </div>
            <div class="SAbtn ml-8 mb-16">
                <div>
                    <v-btn
                    rounded
                    outlined
                    width="310"
                    color="#BFBDBD"
                    class="rwdSAbtn mt-3"
                    dark>
                    追蹤此拍賣場
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="rwdSAmid">
            <div class="midTitle ml-8 mt-10">
                <div class="SAtitle text-h5 font-weight-bold">車款資訊</div>
                <div class="SAline mt-1"></div>
            </div>
            <div class="ml-8 SAcon text-subtitle-1 font-weight-medium mt-4">相較於先前車款，新G-Class的車身尺碼全面放大，帶來更具份量感的視覺效果，對於乘坐空間也有實質助益，但不變的是，G-Class風靡車壇近40年的經典比例，完整延續。</div>
            <div class="mt-5">
                <div class="intrCar">
                    <v-sheet
                    class="mx-auto"
                    elevation="0"
                    max-width="300"
                    >
                        <v-slide-group
                        v-model="model"
                        active-class="success"
                        >
                            <v-slide-item
                                v-for="intr in intList"
                                :key="intr.id"
                            >
                                <v-card
                                color="#FFFFFF"
                                class="ma-4 d-flex flex-column"
                                height="350"
                                width="220"
                                >
                                <div>
                                    <img :src="intr.src" style="position: absolute; opacity: 0.3;">
                                    <div style="position: absolute; z-index: 10; bottom: 0;" class="d-flex flex-column ml-2 mb-2">
                                        <div class="text-h3 font-weight-bold">{{ intr.num }}</div>
                                        <div class="text-h4 font-weight-medium mt-3">{{ intr.con }}</div>
                                    </div>
                                </div>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </div>
            </div>
            <div class="midTitle ml-8 mt-15">
                <div class="SAtitle text-h5 font-weight-bold">目前競標價錢</div>
                <div class="SAline mt-1"></div>
            </div>
            <div class="ml-8 mt-4 text-h3 font-weight-bold">1,935,000</div>
            <div class="midTitle ml-8 mt-15">
                <div class="SAtitle text-h5 font-weight-bold">剩餘時間</div>
                <div class="SAline mt-1"></div>
            </div>
            <div class="ml-8 mt-4 text-h4 font-weight-bold">01天08時25分30秒</div>
            <div class="ml-8 mt-12 text-subtitle-1 font-weight-medium mt-10">每口叫價 TWD 5000</div>
            <div class="ml-8 mt-6">
                <v-btn
                rounded
                color="#F34841"
                class="rwdSAbtn"
                width="310"
                dark>
                我要競價
                </v-btn>
                <v-btn
                rounded
                outlined
                width="310"
                color="#181818"
                class="rwdSAbtn mt-3"
                dark>
                自動出價
                </v-btn>
            </div>
            <div class="ml-8 mt-10 mb-5">
                <v-expansion-panels style="width: 310px;">
                    <v-expansion-panel>
                        <v-expansion-panel-header style="background-color: #BFBDBD;" class="text-subtitle-1 font-weight-bold">
                            出價紀錄
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="d-flex flex-column mt-3">
                                <div v-for="item in bidList" :key="item.id">
                                    <div class="text-subtitle-1 font-weight-bold mt-2">{{ item.account }}</div>
                                    <div class="text-subtitle-1 font-weight-medium">{{ item.price }}</div>
                                    <div class="d-flex">
                                        <div class="text-subtitle-1 font-weight-medium">{{ item.date }}</div>
                                        <div class="text-subtitle-1 font-weight-medium ml-4">{{ item.time }}</div>
                                    </div>
                                    <div class="bidLine mt-2"></div>
                                </div>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      bidList: [
        { account: 'ale****6789', price: 'TWD 1,200,000', date: '2021/06/19', time: '08:20:56 a.m', id: '1' },
        { account: 'ale****6789', price: 'TWD 1,200,000', date: '2021/06/19', time: '08:20:56 a.m', id: '2' },
        { account: 'ale****6789', price: 'TWD 1,200,000', date: '2021/06/19', time: '08:20:56 a.m', id: '3' },
        { account: 'ale****6789', price: 'TWD 1,200,000', date: '2021/06/19', time: '08:20:56 a.m', id: '4' },
        { account: 'ale****6789', price: 'TWD 1,200,000', date: '2021/06/19', time: '08:20:56 a.m', id: '5' }
      ],
      intList: [
        { id: '1', src: require('../assets/single-rwd/one.png'), num: '01', con: '外觀' },
        { id: '2', src: require('../assets/single-rwd/two.png'), num: '02', con: '內裝' },
        { id: '3', src: require('../assets/single-rwd/three.png'), num: '03', con: '性能' },
        { id: '4', src: require('../assets/single-rwd/four.png'), num: '04', con: '動力' },
        { id: '5', src: require('../assets/single-rwd/five.png'), num: '05', con: '科技' }
      ]
    }
  }
}
</script>

<style lang="scss">
.rwdSA{
    .rwdSAtop{
        width: 100%;
        height: 750px;
        background-color: #181818;
        .SAtitle{
            color: #FFFFFF;
        }
        .SAimg{
            .SACar{
                width: 320px;
            }
        }
    }
    .rwdSAmid{
        width: 100%;
        // height: 1500px;
        border: 1px solid yellow;
        .midTitle{
            .SAline{
                width: 200px;
                height: 3px;
                background-color: #F34841;
            }
        }
        .SAcon{
            width: 300px;
        }
        .bidLine{
            width: 250px;
            height: 2px;
            background-color: #BFBDBD;
        }
    }
}
</style>
