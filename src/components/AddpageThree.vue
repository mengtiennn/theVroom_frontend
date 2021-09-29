<template>
    <div class="allPage">
        <add-left titleNum="03" titleText="填寫內容"></add-left>
        <v-container class="contentRightThree">
            <div class="d-flex flex-column contentInside mt-13 justify-center">
                <div>
                    <v-form>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                出廠年份：
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                label="請輸入西元年"
                                placeholder="請輸入西元年"
                                outlined
                                dense
                                v-model="caryear"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                外觀車色：
                            </v-col>
                            <v-col cols="2">
                                <v-select
                                :items="colorList"
                                label="請選擇顏色"
                                outlined
                                dense
                                v-model="carcolor"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                排氣量：
                            </v-col>
                            <v-col cols="3">
                                <v-select
                                :items="airList"
                                label="請選擇排氣量"
                                outlined
                                dense
                                v-model="dis"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                車門數：
                            </v-col>
                            <v-col cols="4">
                                <v-radio-group
                                v-model="row"
                                row
                                class="mt-1"
                                >
                                <v-radio
                                    label="三門"
                                    value="三門"
                                    color="#F34841"
                                ></v-radio>
                                <v-radio
                                    label="四門"
                                    value="四門"
                                    color="#F34841"
                                ></v-radio>
                                <v-radio
                                    label="五門"
                                    value="五門"
                                    color="#F34841"
                                ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                行駛里程：
                            </v-col>
                            <v-col cols="4">
                                <v-text-field
                                label="請輸入目前里程數"
                                placeholder="請填入目前行駛里程，例16888"
                                outlined
                                dense
                                v-model="door"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="2" class="auName mt-3 ml-7">
                                上傳圖檔：
                            </v-col>
                            <v-col cols="2">
                                <input type="file" @change="addphoto" class="mt-3">
                            </v-col>
                        </v-row>
                    </v-form>
                </div>
                <div style="width: 950px;" class="d-flex justify-end">
                    <v-btn rounded outlined width="100" to="#page2" @click="testo">上一步</v-btn>
                    <v-btn rounded color="#F34841" class="btn ml-16" dark width="100" to="#page4" @click="testk">下一步</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import AddLeft from './AddLeft.vue'

export default {
  components: {
    AddLeft
  },
  data: () => ({
    colorList: ['黑', '白', '銀', '灰', '紅', '藍', '棕', '綠', '黃', '紫', '其他'],
    airList: ['1200cc 以下', '1201cc~1800cc', '1801cc~2400cc', '2401cc~3000cc', '3001cc~3600cc', '3601cc 以上']
  }),
  methods: {
    showOption () {
      this.showSelect = true
    },
    testo () {
      this.$emit('testyo')
    },
    testk () {
      this.$emit('testl', this.caryear, this.carcolor, this.dis, this.row, this.door)
    },
    addphoto (e) {
      console.log(e.target.files)
      const photofile = e.target.files
      this.$emit('passphoto', photofile)
    }
  }
}
</script>

<style lang="scss" scoped>
    .allPage{
        display: flex;
        .contentRightThree{
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
            }
        }
        .v-text-field__details {
        display: none !important;
        }
        .slc{
        width: 120px;
        }
        .theme--light.v-messages {
        color: rgba(0, 0, 0, 0.6);
        display: none;
        }
        .v-input--selection-controls {
        margin-top: 0 !important;
        padding-top: 4px;
        }
    }
</style>
