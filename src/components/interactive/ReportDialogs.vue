<template>
  <v-row justify="center" style="margin:0">
    <v-dialog v-model="dialog" scrollable max-width="290px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn light v-bind="attrs" v-on="on">
          <i class="fas fa-exclamation-triangle"></i>
        </v-btn>
      </template>
      <v-card>
        <v-card-title style="font-weight:700;">檢舉原因</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-model="dialogm1" column>
            <v-radio label="帶有惡意字眼" value="帶有惡意字眼"></v-radio>
            <v-radio label="侮辱他人" value="侮辱他人"></v-radio>
            <v-radio label="挑起戰爭" value="挑起戰爭"></v-radio>
            <v-radio label="不當內容" value="不當內容"></v-radio>
            <v-radio label="廣告罐頭訊息" value="廣告罐頭訊息"></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="d-flex justify-space-between">
          <v-btn color="blue darken-1" text @click="dialog = false">
            取消
          </v-btn>
          <v-btn color="blue darken-1" text @click.prevent="sendout">
            送出
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialogm1: '',
      dialog: false
    }
  },
  methods: {
    sendout () {
      // console.log(this.dialogm1)
      this.$emit('gogororo2', this.dialogm1)
      this.$emit('gogororo')
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn:not(.v-btn--round).v-size--default {
    padding: 0;
    height:15px;
    min-width:0px;
}
.v-application .justify-center {
    justify-content: start !important;
}
</style>
