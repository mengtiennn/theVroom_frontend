<template>
    <div class="overviewWhole">
        <div class="contentOv d-flex flex-column justify-center">
            <div class="titleOv d-flex flex-column">
                <div class="yearOv text-h4 font-weight-bold">{{ titleYear }}</div>
                <div class="brandOv text-h4 font-weight-bold">{{ titleBrand }}</div>
                <div class="lineOv mt-4"></div>
            </div>
            <div class="textOv d-flex">
                <div class="leftOv d-flex flex-column justify-space-between">
                    <div class="descriptionOv pr-2 mt-5 text-subtitle-1 font-weight-light">
                        {{ description }}
                    </div>
                    <div>
                        <div class="mileOv d-flex align-end">
                            <div class="mileIcon d-flex align-end">
                                <v-icon large color="#FFFFFF">mdi-car-cruise-control</v-icon>
                                <div class="mileCo ml-3">里程數：</div>
                            </div>
                            <div class="mileText ml-1">{{ milesT }}</div>
                        </div>
                        <div class="reservePriceOv d-flex align-end mt-4">
                            <div class="priceIcon d-flex align-end">
                                <v-icon large color="#FFFFFF">mdi-gavel</v-icon>
                                <div class="priceCo ml-3">拍賣底價：</div>
                            </div>
                            <div class="priceText ml-1">{{ priceT }}</div>
                        </div>
                    </div>
                </div>
                <div class="rightOv ml-5">
                    <img :src="imgPath" style="object-fit: contain;">
                </div>
            </div>
            <div class="btnOv d-flex align-end justify-end">
                <v-btn
                :to="signSet"
                outlined
                rounded
                color="#F34841"
                class="btn"
                dark>
                開設競標場
                </v-btn>
                <v-btn
                :to="/singleauction/ + this.acid"
                rounded
                color="#F34841"
                class="btn ml-10"
                dark>
                進入競標場
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['titleYear', 'titleBrand', 'description', 'milesT', 'priceT', 'imgPath', 'acid'],
  computed: {
    // 假設未登入會直接導入登入頁面
    signSet () {
      const data = this.$store.getters.getmember
      console.log(data)
      if (data === 0) {
        return '/signin'
      } else {
        return '/AddProduct'
      }
    }
  }
}
</script>

<style lang="scss">
.overviewWhole{
    background-color: #181818;
    width: 100%;
    height: calc(100vh - 48px);
    .contentOv{
        margin: 0 auto;
        width: 1000px;
        height: calc(100vh - 100px);
        .titleOv{
            width: 1000px;
            height: 150px;
            .yearOv{
                // font-size: 35px;
                // font-weight: bold;
                color: #FFFFFF;
            }
            .brandOv{
                // font-size: 35px;
                // font-weight: bold;
                color: #FFFFFF;
            }
            .lineOv{
                width: 300px;
                height: 3px;
                background-color: #F34841;
            }
        }
        .textOv{
            width: 100%;
            height: 360px;
            .leftOv{
                width: 45%;
                height: 360px;
                .descriptionOv{
                    color: #FFFFFF;
                }
                .mileOv{
                    font-weight: bold;
                    color: #FFFFFF;
                }
                .reservePriceOv{
                    font-weight: bold;
                    color: #FFFFFF;
                }
                .priceText{
                    font-size: 40px;
                    line-height: 40px;
                }
            }
            .rightOv{
                width: 55%;
                height: 360px;
                // border: 1px solid yellow;
                img{
                    width: 550px;
                    height: 300px;
                }
            }
        }
        .btnOv{
            width: 100%;
            height: 75px;

        }
    }
}
</style>
