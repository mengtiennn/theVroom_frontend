import Vue from 'vue'
import VueRouter from 'vue-router'
import CompareCard from '../pages/CompareCard.vue'
import NewDriver from '../pages/NewDriver.vue'
import Forum from '../pages/Forum.vue'
import ForumPage from '../pages/ForumPage.vue'
import IssuePage from '../pages/IssuePage.vue'
import UploadImage from '../components/interactive/UploadImage.vue'
import ReportDialogs from '../components/interactive/ReportDialogs.vue'
import CarCheckout from '../pages/CarCheckout.vue'
import AddProduct from '../pages/AddProduct.vue'
import AuctionOverview from '../pages/AuctionOverview.vue'
import CompareInside from '../pages/CompareInside.vue'
import MemberSide from '../pages/MemberSide.vue'
import Accessories from '../pages/Accessories.vue'
import SingleAuction from '../pages/SingleAuction.vue'
import Shoppingcar from '../pages/ShoppingCar.vue'
import SignUp from '../pages/SignUp.vue'
import SignIn from '../pages/SignIn.vue'
import MemberData from '../components/MemberData.vue'
import MemberAuction from '../components/MemberAuction.vue'
import MemberBid from '../components/MemberBid.vue'
import Test from '../components/Test.vue'
import MemberNotify from '../components/MemberNotify.vue'
import testfileload from '../components/testfileload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comparecard',
    name: 'CompareCard',
    component: CompareCard
  },
  {
    path: '/newdriver',
    name: 'NewDriver',
    component: NewDriver
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  },
  {
    path: '/forumPage/:id',
    name: 'ForumPage',
    component: ForumPage
  },
  {
    path: '/issuePage',
    name: 'IssuePage',
    component: IssuePage
  },
  {
    path: '/uploadimage',
    name: 'UploadImage',
    component: UploadImage
  },
  {
    path: '/reportdialogs',
    name: 'ReportDialogs',
    component: ReportDialogs
  },
  {
    path: '/carcheckout',
    name: 'CarCheckout',
    component: CarCheckout
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/auctionoverview',
    name: 'AuctionOverview',
    component: AuctionOverview
  },
  {
    path: '/compareinside',
    name: 'CompareInside',
    component: CompareInside
  },
  {
    path: '/memberside',
    name: 'MemberSide',
    component: MemberSide
  },
  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  },
  {
    path: '/singleauction/:id',
    name: 'SingleAuction',
    component: SingleAuction
  },
  {
    path: '/shoppingcar',
    name: 'Shoppingcar',
    component: Shoppingcar
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/memberdata',
    name: 'MemberData',
    component: MemberData
  },
  {
    path: '/memberauction',
    name: 'MemberAuction',
    component: MemberAuction
  },
  {
    path: '/memberbid',
    name: 'MemberBid',
    component: MemberBid
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/membernotify',
    name: 'MemberNotify',
    component: MemberNotify
  },
  {
    path: '/testfileload',
    name: 'testfileload',
    component: testfileload
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
