<template>
    <div>
        <v-container class="mt-10">
        <v-row justify="space-around">
            <v-col cols="8">
            <img
                ref="indexcar"
                max-width="800"
                src="../assets/indexbenz.png"
                class="photo"
                style="pointer-events: none;"
                @move-car="letCarMove"
            >
            </v-col>
            <v-col cols="4">
            <v-card
                    outlined
                    max-width="400"
                >
                <v-container @click="move" v-click-outside="onClickOutside">
                    <v-row justify="center">
                        <v-col cols="11">
                            <v-card-title>快速搜尋</v-card-title>
                        </v-col>
                            <v-col cols="10">
                                <v-text-field
                                    label="品牌"
                                    placeholder="請輸入車子品牌"
                                    outlined
                                    dense
                                    ref="firstinput"
                                ></v-text-field>
                                <v-select
                                    :items="items"
                                    label="車型"
                                    outlined
                                    dense
                                ></v-select>
                                <v-text-field
                                    label="年份"
                                    placeholder="請輸入西元年"
                                    outlined
                                    dense
                                ></v-text-field>
                                <v-text-field
                                    label="款式"
                                    placeholder="請輸入車子款式"
                                    outlined
                                    dense
                                ></v-text-field>
                            </v-col>
                            <v-col cols="10">
                                <v-row justify="end">
                                    <v-card-actions>
                                                    <v-btn
                                                    rounded
                                                    outlined
                                                    width="100"
                                                    >
                                                    搜尋
                                                    </v-btn>
                                    </v-card-actions>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
            <v-btn rounded color="#F34841" class="btn white--text" @click="wantmove" to="/auctionoverview"
            >
            進入競標場
            </v-btn>
        </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: ['四門房車', '雙門轎跑', '休旅車']
    }
  },
  methods: {
    move () {
      this.$refs.indexcar.style.transform = 'translateX(-50px)'
    },
    wantmove () {
      this.$refs.indexcar.style.transform = 'translateX(0px)'
    },
    movetwo () {
      this.$refs.indexcar.style.transform = 'translateX(-50px)'
    },
    onClickOutside () {
      this.$refs.indexcar.style.transform = 'translateX(60px)'
    }
  }
}
</script>

<style scoped>
.photo {
  position: relative;
  transform: translateX(130px);
  z-index: 10;
}
.btn {
  position: relative;
  bottom: 80px;
}
img{
  transform: translateX(60px);
  z-index: 10;
  transition: all 1s;
}
</style>
