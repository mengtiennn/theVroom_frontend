<template>
    <div class="allPage">
        <add-left titleNum="02" titleText="填寫內容"></add-left>
        <v-container class="contentRightTwo">
            <div class="d-flex flex-column contentInside mt-13 justify-center">
                <div>
                    <v-form>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                車輛型號：
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                label="請輸入車輛型號"
                                placeholder="請輸入車輛型號"
                                outlined
                                dense
                                v-model="series"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                車輛敘述：
                            </v-col>
                            <v-col cols="4">
                                <v-textarea
                                solo
                                name="input-7-4"
                                label="請敘述車輛詳細內容"
                                outlined
                                elevation="0"
                                height="100"
                                v-model="des"
                                ></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                車輛所在區域：
                            </v-col>
                            <v-col cols="2">
                                <v-select
                                :items="countyList"
                                label="請選擇縣市"
                                outlined
                                dense
                                v-model="region"
                                ></v-select>
                            </v-col>
                            <v-col cols="5">
                                <v-text-field
                                label="請輸入詳細地址"
                                placeholder="請輸入詳細地址"
                                outlined
                                dense
                                v-model="address"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                底價：
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                label="請輸入物件底價"
                                placeholder="請輸入物件底價"
                                outlined
                                dense
                                v-model="price"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row style="width: 1000px;">
                            <v-col cols="2" class="auName mt-1 ml-15">
                                拍賣開始時間：
                            </v-col>
                            <v-col cols="2">
                                <v-select
                                :items="yearList"
                                label="年份"
                                outlined
                                dense
                                class="slc"
                                v-model="year"
                                ></v-select>
                            </v-col>
                            <v-col cols="2">
                                <v-select
                                :items="monthList"
                                label="月份"
                                outlined
                                dense
                                class="slc"
                                v-model="month"
                                ></v-select>
                            </v-col>
                            <v-col cols="2">
                                <v-select
                                :items="dayList"
                                label="日期"
                                outlined
                                dense
                                class="slc"
                                v-model="date"
                                ></v-select>
                            </v-col>
                            <v-col auto>
                                <v-select
                                :items="hourList"
                                label="時"
                                outlined
                                dense
                                class="slc"
                                v-model="hour"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                持續天數：
                            </v-col>
                            <v-col cols="2">
                                <v-select
                                :items="prList"
                                label="天數"
                                outlined
                                dense
                                v-model="day"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-form>
                </div>
                <div style="width: 950px;" class="d-flex justify-end mt-16">
                    <v-btn rounded outlined width="100" to="#page1" @click="scrollpage">上一步</v-btn>
                    <v-btn rounded color="#F34841" class="btn ml-16" dark width="100"
                     to="#page3" @click="scrollpagetwo"
                     >下一步</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import AddLeft from './AddLeft.vue'

export default {
  data: () => ({
    countyList: ['台北市', '新北市', '基隆市', '桃園市', '新竹市'],
    yearList: ['2021', '2022', '2023'],
    monthList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    dayList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
    hourList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '18', '19', '20', '21', '22', '23', '00'],
    minList: ['00', '30'],
    prList: ['1', '2', '3', '4', '5', '6', '7'],
    model: 1,
    modelT: 1
  }),
  components: {
    AddLeft
  },
  methods: {
    scrollpage () {
      this.$emit('tosrcoll')
    },
    scrollpagetwo () {
      this.$emit('srcollthree', this.series, this.des, this.region, this.address, this.price, this.year, this.month, this.date, this.hour, this.day)
    }
  }
}
</script>

<style lang="scss">
    .allPage{
        display: flex;
        .contentRightTwo{
            width: 75%;
            height: 100vh;
            .contentInside{
                height: 750px;
                .insideTitle{
                    font-size: 25px;
                    color: #BFBDBD;
                    .line{
                    width: 500px;
                    border-bottom: 2px solid #BFBDBD;
                    }
                }
                .auName{
                    font-size: 20px;
                    text-align: end;
                }
                .v-text-field__details {
                display: none !important;
                }
            }
        }
    }
    .slc{
      width: 120px;
    }
</style>
