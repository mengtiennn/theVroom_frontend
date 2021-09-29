<template>
    <div class="allPage">
        <add-left titleNum="01" titleText="新增拍賣場"></add-left>
        <v-container class="contentRight">
            <div class="d-flex flex-column contentInside mt-13 justify-center">
                <div class="ml-16 insideTitle">
                請為您的商品選擇一個正確的分類
                    <div class="line mt-1"></div>
                </div>
                <div class="mt-16">
                        <v-row>
                            <v-col cols="2" class="auName mt-1 ml-7">
                                拍賣品名稱：
                            </v-col>
                            <v-col cols="3">
                                <v-text-field
                                label="請輸入拍賣會名稱"
                                placeholder="請輸入拍賣會名稱"
                                outlined
                                dense
                                v-model="cName"
                                name="yoone"
                                ></v-text-field>
                                <!-- <v-btn @click="test">123</v-btn> -->
                            </v-col>
                        </v-row>
                </div>
                <div class="mt-6">
                    <v-row>
                        <v-col>
                            <v-card
                            class="mx-auto"
                            max-width="400"
                            elevation="1"
                            @click="showOption"
                            >
                                <v-list>
                                    <v-list-item-group
                                    v-model="model"
                                    mandatory
                                    color="#F34841"
                                    >
                                        <v-list-item
                                        v-for="item in items"
                                        :key="item.text"
                                        >
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item.text"></v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-icon>
                                                <v-icon v-text="item.icon"></v-icon>
                                            </v-list-item-icon>
                                        </v-list-item>
                                    </v-list-item-group>
                                    </v-list>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card
                            class="mx-auto ml-3"
                            max-width="400"
                            elevation="1"
                            v-if="showSelect"
                            @click="showOption"
                            >
                                <v-list max-height="180" style="overflow-y: scroll;">
                                    <v-list-item-group
                                    v-model="modelT"
                                    mandatory
                                    color="#F34841"
                                    >
                                        <v-list-item
                                        v-for="(item, i) in brandList"
                                        :key="i"
                                        >
                                            <v-list-item-icon>
                                                <v-icon v-text="item.icon"></v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title v-text="item.text"></v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                    </v-list>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <div style="width: 950px;" class="d-flex justify-end mt-16">
                    <v-btn rounded color="#F34841" class="btn mt-5" dark width="100"
                    to="#page2" @click="scrollone"
                     >下一步</v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import AddLeft from '../components/AddLeft.vue'

export default {
  data: () => ({
    showSelect: false,
    items: [
      {
        icon: 'mdi-chevron-right',
        text: '四門房車 / 旅行車 / 掀背車'
      },
      {
        icon: 'mdi-chevron-right',
        text: '雙門轎跑 / 跑車 / 敞篷車'
      },
      {
        icon: 'mdi-chevron-right',
        text: '休旅車 / 吉普車'
      }
    ],
    brandList: [
      {
        text: 'Audi'
      },
      {
        text: 'BMW'
      },
      {
        text: 'Ford'
      },
      {
        text: 'Honda'
      },
      {
        text: 'Jaguar'
      },
      {
        text: 'Lexus'
      },
      {
        text: 'Mercedes-Benz'
      },
      {
        text: 'Nissan'
      },
      {
        text: 'Toyota'
      },
      {
        text: 'VolksWangon'
      }
    ],
    model: 1
  }),
  methods: {
    showOption () {
      this.showSelect = true
      // console.log(this.items[this.model].text)
      // console.log(this.brandList[this.modelT].text)
    },
    reloadPage () {
      window.location.reload()
    },
    test () {
      // console.log(this.acName)
      // this.$emit('testsub', this.acName, this.items[this.model].text, this.brandList[this.modelT].text)
      // const formdata = new FormData()
      // formdata.append('yoone', this.acName)
      // // console.log(formdata)
      // fetch('/testinsert.php', {
      //   method: 'POST',
      //   body: formdata
      // })
    },
    scrollone () {
      this.$emit('nextsrcoll', this.acName, this.items[this.model].text, this.brandList[this.modelT].text)
    }
  },
  components: {
    AddLeft
  }
}
</script>

<style lang="scss">
    .allPage{
      margin-top: -64px;
      display: flex;
        .contentRight{
            width: 75%;
            height: 100vh;
            // margin-top: 48px;
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
    }
</style>
