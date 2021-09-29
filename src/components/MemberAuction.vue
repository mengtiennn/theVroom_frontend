<template>
  <div>
    <media :query="{ minWidth: '401px' }">
      <div>
      <member-auctionchild
         v-for="item in listall" :key="item.title"
        :num="item.ORDERLISTID"
        :time="item.ORDERDATE"
        :price="item.TOTALPRICE"
      />
      </div>
    </media>
    <media :query="{ maxWidth: '400px' }">
      <div>
      <member-auctionchild
         v-for="item in listall" :key="item.title"
        :num="item.title"
        :time="item.time"
        :price="item.total"
        :detail='item.detail'
      />
      </div>
    </media>
  </div>
</template>

<script>
import MemberAuctionchild from './MemberAuctionchild.vue'
import Media from 'vue-media'
export default {
  async created () {
    console.log(this.$store.getters.getmember)
    this.member = this.$store.getters.getmember[0].MEMBERID
    console.log(this.member)
    const fd = new FormData()
    fd.append('MEMBERID', this.member)
    const res = await fetch('./phpfile/shoporder.php', {
      method: 'POST',
      body: fd
    })
    const resdata = await res.json()
    console.log(resdata)
    this.listall = resdata.reverse()
  },
  components: {
    MemberAuctionchild,
    Media
  },
  data () {
    return {
      listall: [],
      orderlistid: [],
      member: []
      // list: [
      //   {
      //     title: '001',
      //     time: new Date(2021, 6, 3),
      //     total: 1000,
      //     detail: [
      //       {
      //         id: 1,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 1,
      //         price: 1250
      //       },
      //       {
      //         id: 2,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 1,
      //         price: 1550
      //       },
      //       {
      //         id: 3,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 2,
      //         price: 1800
      //       }
      //     ]
      //   },
      //   {
      //     title: '002',
      //     time: new Date(),
      //     total: 1000,
      //     detail: [
      //       {
      //         id: 1,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 1,
      //         price: 1300
      //       },
      //       {
      //         id: 2,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 1,
      //         price: 8500
      //       },
      //       {
      //         id: 3,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 2,
      //         price: 1800
      //       }
      //     ]
      //   },
      //   {
      //     title: '003',
      //     time: new Date(),
      //     total: 1000,
      //     detail: [
      //       {
      //         id: 1,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 1,
      //         price: 2200
      //       },
      //       {
      //         id: 2,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 1,
      //         price: 1500
      //       },
      //       {
      //         id: 3,
      //         img: require('../assets/compare-car-pic/hotcar04.png'),
      //         title: 'PHILPS 煞車燈',
      //         count: 2,
      //         price: 900
      //       }
      //     ]
      //   }
      // ]
    }
  }
  // computed: {
  //   getday () {
  //     return new Date()
  //   }
  // }
}
</script>

<style lang="scss"></style>
