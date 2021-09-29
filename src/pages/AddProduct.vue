<template>
    <div>
      <media :query="{minWidth: '401px'}">
          <div id="app"  @scroll.native="noscroll">
              <full-page ref="fullpage" :options="options" id="fullpage">
              <div class="section tests">
                  <addpage @nextsrcoll="scrollone"></addpage>
              </div>
              <div class="section">
                  <addpage-two @tosrcoll="scrolltwo" @srcollthree="srcollthree"></addpage-two>
              </div>
              <div class="section">
                  <addpage-three @testyo="testj" @testl="scrolltwice" @passphoto="photopass"></addpage-three>
              </div>
              <div class="section">
                  <addpage-four></addpage-four>
              </div>
              </full-page>
          </div>
      </media>
      <!-- -----------mobile----------- -->
      <media :query="{maxWidth: '400px'}">
        <div class="d-flex flex-column">
          <div class="addTitle d-flex align-center">
            <div class="addTitleLine ml-6"></div>
            <div class="titleOne text-h5 font-weight-bold ml-5">新增拍賣品</div>
          </div>
          <div class="addConOne ml-6">
            <div>
              <div class="mt-6">拍賣會名稱</div>
              <div class="mt-2">
                <v-text-field
                label="拍賣會名稱"
                placeholder="請輸入拍賣會名稱"
                solo
                outlined
                dense
                style="width: 330px;"
                color="#181818"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div>請選擇車種</div>
              <div class="mt-2">
                <v-select
                :items="sorts"
                label="請選擇車種"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-select>
              </div>
            </div>
            <div>
              <div>請選擇品牌</div>
              <div class="mt-2 mb-3">
                <v-select
                :items="brands"
                label="請選擇品牌"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-select>
              </div>
            </div>
          </div>
          <div class="addTitle d-flex align-center">
            <div class="addTitleLine ml-6"></div>
            <div class="titleOne text-h5 font-weight-bold ml-5">填寫內容</div>
          </div>
          <div class="addConTwo ml-6">
            <div>
              <div class="mt-6">物件名稱</div>
              <div class="mt-2">
                <v-text-field
                label="物件名稱"
                placeholder="請輸入物件名稱"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div>物件敘述</div>
              <div class="mt-2">
                <v-textarea
                solo
                outlined
                style="width: 330px;"
                name="input-7-4"
                label="物件敘述"
                value="請輸入物件敘述"
                color="#181818"
                ></v-textarea>
              </div>
            </div>
            <div>
              <div>物件所在區域</div>
              <div class="mt-2">
                <v-select
                  :items="rigs"
                  label="地區"
                  solo
                  outlined
                  dense
                  style="width: 330px;"
                  ></v-select>
              </div>
              <div class="mt-2">
                <v-text-field
                label="詳細地址"
                placeholder="請輸入詳細地址"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div>底價</div>
              <div class="mt-2">
                <v-text-field
                label="底價"
                placeholder="請輸入拍賣品底價"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div>拍賣會開始時間</div>
              <div class="d-flex mt-2">
                <div>
                  <v-select
                  :items="years"
                  label="年"
                  solo
                  outlined
                  dense
                  color="#181818"
                  style="width: 100px;"
                  ></v-select>
                </div>
                <div class="ml-4">
                  <v-select
                  :items="months"
                  label="月"
                  solo
                  outlined
                  dense
                  style="width: 100px;"
                  ></v-select>
                </div>
                <div class="ml-4">
                  <v-select
                  :items="days"
                  label="日"
                  solo
                  outlined
                  dense
                  style="width: 100px;"
                  ></v-select>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <v-select
                  :items="hours"
                  label="時"
                  solo
                  outlined
                  dense
                  style="width: 100px;"
                  ></v-select>
                </div>
                <div class="ml-4">
                  <v-select
                  :items="mins"
                  label="分"
                  solo
                  outlined
                  dense
                  style="width: 100px;"
                  ></v-select>
                </div>
              </div>
            </div>
            <div>
              <div>拍賣天數</div>
              <div class="mt-2">
                <v-select
                  :items="prs"
                  label="天數"
                  solo
                  outlined
                  dense
                  style="width: 330px;"
                  ></v-select>
              </div>
            </div>
            <div>
              <div>出廠年份</div>
              <div class="mt-2">
                <v-text-field
                label="出廠年份"
                placeholder="請輸入出廠年份（西元年）"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div>外觀車色</div>
              <div class="mt-2">
                <v-select
                  :items="colors"
                  label="請選擇車色"
                  solo
                  outlined
                  dense
                  style="width: 330px;"
                ></v-select>
              </div>
            </div>
            <div>
              <div>排氣量</div>
              <div class="mt-2">
                <v-select
                  :items="airs"
                  label="請選擇排氣量"
                  solo
                  outlined
                  dense
                  style="width: 330px;"
                ></v-select>
              </div>
            </div>
            <div>
              <div>車門數</div>
              <div class="mt-2">
                <v-select
                  :items="doors"
                  label="請選擇車門數"
                  solo
                  outlined
                  dense
                  style="width: 330px;"
                ></v-select>
              </div>
            </div>
            <div>
              <div>行駛里程</div>
              <div class="mt-2">
                <v-text-field
                label="行駛里程"
                placeholder="請輸入目前行駛里程，例：1688km"
                solo
                outlined
                dense
                style="width: 330px;"
                ></v-text-field>
              </div>
            </div>
            <div>
              <div>上傳物件圖片</div>
              <div class="mt-2 mb-3">
                <v-file-input
                label="上傳圖片"
                outlined
                prepend-icon="mdi-camera"
                style="width: 330px;"
                ></v-file-input>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div class="addTitle d-flex align-center">
            <div class="addTitleLine ml-6"></div>
            <div class="titleOne text-h5 font-weight-bold ml-5">開設完成</div>
          </div>
          <div class="addConThree ml-6 d-flex flex-column justify-center">
            <div class="text-h5 font-weight-bold mb-16">恭喜開設拍賣會成功！</div>
            <div class="d-flex flex-column">
              <v-btn rounded outlined width="330" to="/memberside">回會員介面</v-btn>
              <v-btn rounded color="#F34841" class="btn mt-5" dark width="330" to="/"
                >回首頁</v-btn>
            </div>
          </div>
        </div>
      </media>
    </div>
</template>

<script>
import Addpage from '../components/Addpage.vue'
import AddpageTwo from '../components/AddpageTwo.vue'
import AddpageThree from '../components/AddpageThree.vue'
import AddpageFour from '../components/AddpageFour.vue'
import Media from 'vue-media'

export default {
  created () {
    console.log(this.$store.getters.getmember)
    const memberinfo = this.$store.getters.getmember
    this.memberid = memberinfo[0][0]
    console.log(this.memberid)
    this.$refs.fullpage.api.setAllowScrolling(false)
    // 頁面載入時鎖住y軸
    // const elHtml = document.querySelector('html')
    // elHtml.style.overflowY = 'hidden'
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top:64px'])
    // window.addEventListener('mousewheel', this.handleScroll, true)
    const that = this
    window.addEventListener('resize', function () {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    })
    console.log(this.screenWidth)
    // 頁面載入時鎖住y軸
    const elHtml = document.querySelector('html')
    elHtml.style.overflowY = 'hidden'
    const test = document.querySelector('window')
    test.addEventListener('mousewheel', function () {
      console.log('123')
      this.$refs.fullpage.api.setAllowScrolling(false)
    })
  },
  destroyed () {
    const elHtml = document.querySelector('html')
    elHtml.style.overflowY = null
    const testy = document.querySelector('body')
    testy.style.transform = 'translateY(0vh)'
  },
  watch: {
    // 監聽視窗大小
    screenWidth: function () {
      if (this.screenWidth > 600) {
        console.log('yo')
        const elHtml = document.querySelector('html')
        elHtml.style.overflowY = 'hidden'
      } else {
        console.log('hey')
        const elHtml = document.querySelector('html')
        elHtml.style.overflowY = 'auto'
      }
    }
  },
  data () {
    return {
      scrollBar: false,
      screenWidth: document.body.clientWidth,
      alldata: [],
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        navigation: true,
        anchors: ['page1', 'page2', 'page3', 'page4']
      },
      sorts: [
        '四門房車 / 旅行車 / 掀背車',
        '雙門轎跑 / 跑車 / 敞篷車',
        '休旅車 / 吉普車'
      ],
      brands: [
        'Audi 奧迪',
        'Benz 賓士',
        'Bentley 賓利',
        'BMW 寶馬',
        'Dodge 道奇',
        'LandRover'
      ],
      years: [
        '2021',
        '2022',
        '2023',
        '2024'
      ],
      months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      hours: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '16', '17', '18', '19', '20', '21', '22', '23', '00'],
      mins: ['00', '30'],
      prs: ['1天', '2天', '3天', '4天'],
      colors: ['黑', '白', '銀', '灰', '紅', '藍', '棕', '綠', '黃', '紫', '其他'],
      airs: ['1200cc 以下', '1201cc~1800cc', '1801cc~2400cc', '2401cc~3000cc', '3001cc~3600cc', '3601cc 以上'],
      doors: ['三門', '四門', '五門'],
      rigs: ['台北市', '新北市', '基隆市', '桃園市', '新竹市'],
      acName: '',
      acCarSort: '',
      acCarBrand: '',
      acCarSeries: '',
      acCarDes: '',
      acRegion: '',
      acAddress: '',
      acPrice: '',
      acyear: '',
      acmonth: '',
      acdate: '',
      achour: '',
      acDuDay: '',
      acCarYear: '',
      acCarColor: '',
      acDis: '',
      acDoor: '',
      acMile: '',
      acfile: [],
      memberid: '',
      start: ''
    }
  },
  components: {
    Addpage,
    AddpageTwo,
    AddpageThree,
    AddpageFour,
    Media
  },
  methods: {
    handleScroll () {
      // console.log('123')
      // this.$refs.fullpage.api.setAllowScrolling(false)
    },
    noscroll () {
      // console.log('123')
      this.$refs.fullpage.api.setAllowScrolling(false)
    },
    scrollone (val, valone, valtwo) {
      // console.log('123')
      // this.$refs.fullpage.api.moveSectionDown()
      // this.$refs.fullpage.api.setAllowScrolling(true)
      // console.log(val)
      // console.log(valone)
      // console.log(valtwo)
      this.acName = val
      this.acCarSort = valone
      this.acCarBrand = valtwo
      console.log(this.acName)
      console.log(this.acCarSort)
      console.log(this.acCarBrand)
      // 點擊後頁面往下
      const testy = document.querySelector('body')
      testy.style.transform = 'translateY(-100vh)'
      testy.style.transition = 'all 1s'
    },
    scrolltwo () {
      // this.$refs.fullpage.api.moveSectionUp()
      // 點擊後往上
      const testy = document.querySelector('body')
      testy.style.transform = 'translateY(0vh)'
      testy.style.transition = 'all 1s'
    },
    srcollthree (one, two, three, four, five, six, seven, eight, nine, ten) {
      // this.$refs.fullpage.api.moveSectionDown()
      this.acCarSeries = one
      this.acCarDes = two
      this.acRegion = three
      this.acAddress = four
      this.acPrice = five
      this.acyear = six
      this.acmonth = seven
      this.acdate = eight
      this.achour = nine
      this.acDuDay = ten
      this.start = this.acyear + '-' + this.acmonth + '-' + this.acdate + ' ' + this.achour
      // this.start = new Date(this.acyear, this.acmonth, this.acdate, this.achour)
      console.log(this.acCarSeries)
      console.log(this.acCarDes)
      console.log(this.acRegion)
      console.log(this.acAddress)
      console.log(this.acPrice)
      console.log(this.acyear)
      console.log(this.acmonth)
      console.log(this.achour)
      console.log(this.acdate)
      console.log(this.acDuDay)
      console.log(this.start)
      // 點擊後往下
      const testy = document.querySelector('body')
      testy.style.transform = 'translateY(-200vh)'
      testy.style.transition = 'all 1s'
    },
    testj () {
      // this.$refs.fullpage.api.moveSectionUp()
      // 點擊後往上
      const testy = document.querySelector('body')
      testy.style.transform = 'translateY(-100vh)'
      testy.style.transition = 'all 1s'
    },
    photopass (val) {
      // console.log(val)
      this.acfile = val
      console.log(this.acfile)
    },
    scrolltwice (one, two, three, four, five) {
      // 點擊後往下
      const testy = document.querySelector('body')
      testy.style.transform = 'translateY(-300vh)'
      testy.style.transition = 'all 1s'
      // this.$refs.fullpage.api.moveSectionDown()
      this.acCarYear = one
      this.acCarColor = two
      this.Dis = three
      this.Door = four
      this.Mile = five
      console.log(this.acCarYear)
      console.log(this.acCarColor)
      console.log(this.Dis)
      console.log(this.Door)
      console.log(this.Mile)
      const fd = new FormData()
      fd.append('MEMBER_ID', this.memberid)
      fd.append('NAME', this.acName)
      fd.append('CARSORT', this.acCarSort)
      fd.append('CARBRAND', this.acCarBrand)
      fd.append('CARSERIES', this.acCarSeries)
      fd.append('DESCRIPTION', this.acCarDes)
      fd.append('REGION', this.acRegion)
      fd.append('ADDRESS', this.acAddress)
      fd.append('RESERVEPRICE', this.acPrice)
      fd.append('STARTINGTIME', this.start)
      fd.append('DURATION', this.acDuDay)
      fd.append('YEAR', this.acCarYear)
      fd.append('COLOR', this.acCarColor)
      fd.append('DISPLACEMENT', this.Dis)
      fd.append('DOOR', this.Door)
      fd.append('MILES', this.Mile)
      fd.append('IMGPATH', this.acfile[0])
      fetch('./phpfile/addauction.php', {
        method: 'POST',
        body: fd
      })
    }
  }
}
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    .addTitle{
      width: 100%;
      height: 64px;
      background-color: #181818;
      .addTitleLine{
        height: 40px;
        width: 2px;
        background-color: #F34841;
      }
      .titleOne{
        color: #FFFFFF;
      }
    }
    .addConThree{
      width: 330px;
      height: 400px;
    }
  }
</style>
