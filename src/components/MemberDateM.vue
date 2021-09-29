<template>
  <div>
    <div class="my-10 ml-5">
      <div class="text-h5 font-weight-bold">帳戶資料</div>
      <div style="width:60%;height:3px" class="red"></div>
    </div>
    <div class="d-flex flex-column mb-10">
      <v-container>
        <v-row fluid class="d-flex flex-column align-center">
          <div
            style="width:90%"
            class="black--text text-h6 font-weight-bold"
          >
            帳號:
          </div>
          <v-textarea
            disabled
            label="帳號無法修改"
            auto-grow
            rows="1"
            row-height="10"
            dense
            style="width:90%;border-radius:15px;"
            color="#181818"
            solo="true"
            outlined
          ></v-textarea>
        </v-row>
        <v-row
          fluid
          class="d-flex flex-column align-center"
          v-for="item in items"
          :key="item.title"
        >
          <div
            style="width:90%"
            class="black--text text-h6 font-weight-bold my-3"
          >
            {{ item.title }}:
          </div>
          <v-textarea
            :label="item.placeholder"
            auto-grow
            rows="1"
            row-height="10"
            dense
            outlined
            style="width:90%;border-radius:15px"
            color="#181818"
            solo="true"
          ></v-textarea>
        </v-row>
      </v-container>
      <div class="d-flex align-self-center">
      <button class="text-h6 font-weight-bold red white--text pa-2 px-5 mr-8 rounded-pill">修改</button>
      <button class="text-h6 font-weight-bold black white--text pa-2 px-5 ml-8 rounded-pill">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: '密碼', placeholder: '請確認密碼' },
        {
          title: '電子郵件',
          placeholder: '請確認電子郵件'
        },
        { title: '手機', placeholder: '請確認手機' },
        { title: '地址', placeholder: '請確認地址' }
      ]
    }
  }
}
</script>
