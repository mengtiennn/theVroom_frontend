<template>
    <div class="carInfo d-flex flex-column mb-10">
        <router-link to="/AuctionOverview">
            <div class="d-flex mb-9">
                <v-icon>mdi-arrow-left-thick</v-icon>
                <div class="text-subtitle-1 font-weight-medium ml-2" style="color: gray;">返回拍賣會總覽</div>
            </div>
        </router-link>
        <div class="d-flex">
            <div class="spaceLeft"></div>
            <div class="infoCar d-flex flex-column">
                <div class="infoT d-flex flex-column">
                    <div class="titleY">{{ year }}</div>
                    <div class="titleB">{{ cbrand }} {{ cseries }}</div>
                    <div class="titleLine mt-2"></div>
                </div>
                <div class="infoC pt-3">{{ des }}</div>
                <div class="d-flex">
                    <div class="infoM d-flex justify-space-between">
                        <div class="infoBoxL d-flex flex-column justify-space-around">
                            <div class="cnBox d-flex flex-column">
                                <div class="inCBox">車身座位</div>
                                <div class="inBox">{{ door }}</div>
                            </div>
                            <div class="cnBox d-flex flex-column">
                                <div class="inCBox">車色</div>
                                <div class="inBox">{{ color }}</div>
                            </div>
                            <div class="cnBox d-flex flex-column">
                                <div class="inCBox">排氣量</div>
                                <div class="inBox">{{ dis }}</div>
                            </div>
                        </div>
                        <div class="infoBoxR d-flex flex-column justify-space-around">
                            <div class="cnBox d-flex flex-column">
                                <div class="inCBox">排氣量</div>
                                <div class="inBox">{{ dis }}</div>
                            </div>
                            <div class="cnBox d-flex flex-column">
                                <div class="inCBox">里程數</div>
                                <div class="inBox">{{ miles }}</div>
                            </div>
                            <div class="cnBox d-flex flex-column">
                                <div class="inCBox">引擎形式</div>
                                <div class="inBox">渦輪增壓, V型8缸, DOHC雙凸輪軸, 32氣門</div>
                            </div>
                        </div>
                    </div>
                    <div style="height: 370px; width: 100px;">
                    </div>
                    <div style="height: 370px; width: 100px;" class="d-flex align-end">
                        <v-btn
                          rounded
                          color="#F34841"
                          class="btn mr-4 mb-9"
                          width="130"
                          @click="movegogo"
                          dark>
                          開始競標
                          </v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      year: '',
      cbrand: '',
      cseries: '',
      des: '',
      door: '',
      color: '',
      dis: '',
      miles: ''
    }
  },
  async created () {
    console.log('route', this.$route.params.id)
    const fd = new FormData()
    fd.append('IDac', this.$route.params.id)

    const res = await fetch('./phpfile/singleauction.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.year = resdata[0].YEAR
    this.cbrand = resdata[0].CARBRAND
    this.cseries = resdata[0].CARSERIES
    this.des = resdata[0].DESCRIPTION
    this.door = resdata[0].DOOR
    this.color = resdata[0].COLOR
    this.dis = resdata[0].DISPLACEMENT
    this.miles = resdata[0].MILES
    console.log(this.miles)
  },
  //   props: ['year', 'cbrand', 'cseries', 'des', 'door', 'color', 'dis', 'miles'],
  methods: {
    movegogo () {
      this.$emit('gomove')
    }
  }
}
</script>

<style lang="scss">
    .carInfo{
        // border: 1px solid blue;
        width: 1200px;
        // height: 630px;
        margin: 0 auto;
        .spaceLeft{
            // border: 1px solid red;
            width: 200px;
            height: 100%;
        }
        .infoCar{
            // border: 1px solid green;
            width: 1000px;
            // height: 100%;
        }
        .infoT{
            width: 500px;
            height: 130px;
            // border: 1px solid pink;
            .titleY{
                font-size: 35px;
                font-weight: bolder;
            }
            .titleB{
                font-size: 35px;
                font-weight: bolder;
            }
            .titleLine{
                width: 200px;
                height: 3px;
                background-color: #BFBDBD;
            }
        }
        .infoC{
            width: 600px;
            height: 120px;
            // border: 1px solid lightskyblue;
        }
        .infoM{
            width: 500px;
            height: 370px;
            // border: 1px solid palegreen;
            .infoBoxL{
                // border: 1px solid tomato;
                .inCBox{
                    color: #F34841;
                    font-weight: bold;
                }
            }
            .infoBoxR{
                // border: 1px solid khaki;
                .inCBox{
                    color: #F34841;
                    font-weight: bold;
                }
            }
        }
    }
</style>
