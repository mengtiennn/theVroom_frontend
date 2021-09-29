import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    happy: true,
    sad: 'margin-top: 64px',
    sign: 0,
    shop: [],
    cart: false,
    bid: [],
    checkoutcardata: [],
    total: 0,
    cardataall: [],
    carnew: [],
    onenewid: []
  },
  mutations: {
    sethappy (state, payload) {
      state.happy = payload[0]
      state.sad = payload[1]
    },
    setsign (state, payload) {
      state.sign = payload
    },
    setkeep (state, payload) {
      state.sign = payload
    },
    shoplist (state, payload) {
      console.log(state.shop)
      if (state.shop === null) {
        state.shop.push(payload)
      }
      // console.log(payload)
      state.shop.push(payload)
      payload.PRODUCTTOTAL = parseInt(payload.PRODUCTPRICE)
      this.total = 0
      state.shop.forEach(list => {
        this.total += list.PRODUCTTOTAL
      })
      state.total = this.total
      // console.log(state.shop)
      localStorage.setItem('shoplist', JSON.stringify(state.shop))
    },
    shoplist1 (state, payload) {
      // console.log(payload)
      const index = state.shop.findIndex(li => {
        // console.log(li)
        return li.PRODUCTID === payload.PRODUCTID
      })
      console.log(index)
      if (index !== -1) {
        state.shop[index].PRODUCTMOUNT++
        state.shop[index].PRODUCTTOTAL = state.shop[index].PRODUCTMOUNT * state.shop[index].PRODUCTPRICE
      }
      this.total = 0
      state.shop.forEach(list => {
        this.total += list.PRODUCTTOTAL
      })
      state.total = this.total
      localStorage.setItem('shoplist', JSON.stringify(state.shop))
    },
    shoplist2 (state, payload) {
      console.log(this.total)
      this.total = 0
      state.shop = payload
      console.log(this.total)
      state.shop.forEach(list => {
        console.log(list.PRODUCTTOTAL)
        this.total += list.PRODUCTTOTAL
      })
      console.log(this.total)
      state.total = this.total
      state.shop = payload
      localStorage.setItem('shoplist', JSON.stringify(state.shop))
    },
    shopcart (state, payload) {
      state.cart = payload
      // console.log(payload)
    },
    bidrecord (state, payload) {
      // console.log(state.bid)
      state.bid = payload
      // if (state.bid.length > 0) {
      //   state.bid.push(payload)
      // }
    },
    bidrecordone (state, payload) {
      state.bid.unshift(payload)
    },
    checkout (state, payload) {
      state.checkoutcardata = []
      state.checkoutcardata.push(payload)
    },
    cardata (state, payload) {
      state.cardataall = payload
    },
    getcar (state, payload) {
      state.carnew = payload
    },
    getnewid (state, payload) {
      state.onenewid = payload
    }
  },
  actions: {
    happy (context, payload) {
      context.commit('sethappy', payload)
    },
    membersign (context, payload) {
      context.commit('setsign', payload)
    },
    keepsign (context, payload) {
      context.commit('setkeep', payload)
    },
    shoplist (context, payload) {
      context.commit('shoplist', payload)
    },
    shoplist1 (context, payload) {
      context.commit('shoplist1', payload)
    },
    shoplist2 (context, payload) {
      context.commit('shoplist2', payload)
    },
    shopcart (context, payload) {
      context.commit('shopcart', payload)
    },
    bidrecord (context, payload) {
      context.commit('bidrecord', payload)
    },
    bidrecordone (context, payload) {
      console.log('dddddddd', payload)
      context.commit('bidrecordone', payload)
    },
    checkout (context, payload) {
      context.commit('checkout', payload)
    },
    cardata (context, payload) {
      context.commit('cardata', payload)
    },
    getcar (context, payload) {
      context.commit('getcar', payload)
    },
    getnewid (context, payload) {
      context.commit('getnewid', payload)
    }
  },
  modules: {
  },
  getters: {
    gethappy (state) {
      return state.happy
    },
    getsad (state) {
      // console.log(state.sad)
      return state.sad
    },
    getmember (state) {
      return state.sign
    },
    getshoplist (state) {
      return state.shop
    },
    getshoplisttotal (state) {
      return state.total
    },
    getcart (state) {
      return state.cart
    },
    getbid (state) {
      console.log(state.bid)
      return state.bid
    },
    getcheckoutcardata (state) {
      return state.checkoutcardata
    },
    getcardata (state) {
      return state.cardataall
    },
    getnewcar (state) {
      return state.carnew
    },
    getoneid (state) {
      return state.onenewid
    }
  }
})
