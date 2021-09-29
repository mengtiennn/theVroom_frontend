<template>
    <div class="bidRecord">
        <v-sheet
        class="mx-auto"
        elevation="0"
        max-width="600"
        >
            <v-slide-group
            v-model="model"
            active-class="success"
            show-arrows
            >
                <v-slide-item
                    v-for="record in price"
                    :key="record"
                >
                    <v-card
                    color="#FFFFFF"
                    class="ma-4 d-flex flex-column"
                    height="180"
                    width="200"
                    >
                        <div style="width: 200px; height: 160px;">
                            <div class="pl-2 pt-2 text-h6">{{ record.DATE }}</div>
                            <div class="pl-2 pt-2 text-h6">{{ record.time }}</div>
                            <div class="pl-2 pt-2 text-h6">出價金額 {{ record.BIDPRICE }}</div>
                        </div>
                        <div class="pa-2" style="width: 200px; height: 40px; background-color: #F34841; color: #FFFFFF">
                            {{ record.EMAIL }}
                        </div>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
export default {
  props: ['acid', 'bid'],
  async created () {
    // console.log(this.acid)
    const fd = new FormData()
    fd.append('acid', this.acid)
    const res = await fetch('./phpfile/selectbidrecord.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(res)
    console.log(resdata)
    this.recordList = resdata.reverse()
    console.log(this.recordList)
    this.$store.dispatch('bidrecord', this.recordList)
    // this.recordList = this.bid
    console.log(this.bid)
    this.bidtest = this.$store.getters.getbid
    console.log(this.bidtest)
    this.price()
  },
  data () {
    return {
      recordList: [],
      bidtest: []
    }
  },
  computed: {
    price () {
      console.log(this.$store.getters.getbid)
      return this.$store.getters.getbid
    }
  }
}
</script>
