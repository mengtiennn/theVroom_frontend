<template>
    <div>
        <v-app>
            <v-card
                outlined
                max-width="400"
            >
            <v-container>
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
                                @focus="move"
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
        </v-app>
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
    //   console.log('yo')
      this.$emit('move-car')
    }
  }
}

</script>
