<template>
  <div id="banner">
    <div class="cover" @click="closecover"></div>
    <!-- <meta name="viewport" content="width=device-width,initial-scale=1.0"> -->
    <div class="chat">
      <img :src="iconchat" alt="sorry img is gone" class="chat" @click="cover" />
      <span class="askQuestion">常見問題點我</span>
      <div class="questionblock">
        <perfect-scrollbar>
          <img :src="logowhitewide" class="logochatbox" />
          <span class="closebtnQ" style="cursor: pointer" @click="closecover()">✕</span>
          <br />
          <img :src="logochat" alt="sorry img is gone" class="logochat" />
          <div class="questions" v-for="bigq in groupquestion" :key="bigq" @click="bigQ(bigq)" :class="{ block: currentCategory === bigq.category }">
            {{ bigq.group }}
          </div>
          <div class="default">
            <span style="color: #bfbdbd">_____________________________________________________________</span>
            <br />
            <span style="color: #181818; width: 100%; height: 100%">點擊上方問題類別詢問</span>
          </div>
          <div class="givesmallq">
            <div class="smallq1" v-for="smallq in ask" :key="smallq" :class="{ block: currentCategory === smallq.category }" v-html="smallq.question" @click="smallQ(smallq)"></div>
          </div>
          <div class="giveanswer">
            <img :src="logochat" alt="sorry img is gone" class="logochat2" style="display: none" />
            <div class="answers" v-for="ans in answer" :key="ans" :class="{ block: currentChoose === ans.id }" v-html="ans.answer"></div>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
    <img :src="banner" class="banner" />
    <div class="bannerWord">
      <span></span>
      <span class="text-h4 font-weight-bold">{{ bannerSoul }}</span>
      <p class="ad text-h6 font-weight-bold" style="margin-left: 40px; margin-top: 20px">TheVroom 讓你遇見夢想車款</p>
      <p class="ad text-h6 font-weight-bold" style="margin-left: 40px">與理想的自己相遇</p>
    </div>
    <div class="phonebannerpart">
      <img :src="phonebanner" alt="" class="phonebanner" />
      <span class="text-h4 font-weight-bold first">TheVroom</span>
      <span class="text-h4 font-weight-bold second">新手上路</span>
      <img :src="downArrow" alt="" class="godown" />
    </div>
    <div class="buy">
      <h1 text-h4 font-weight-bold>新手買車-競標說明</h1>
      <br />
      <div class="firstLine">
        <div class="stepO step1">
          <span text-h6 font-weight-bold> 01 鎖定競標場次</span>
          <p text-subtitle-1 font-weight-light>瀏覽競標會場，鎖定有興趣的競標場次， 瀏覽競標規則，準備「加入會員」參與競標</p>
          <img :src="stepOne" class="whiteCar" />
        </div>

        <div class="stepE step2">
          <span text-h6 font-weight-bold> 02 加入會員</span>
          <p text-subtitle-1 font-weight-light>加入會員，同意競標規則，即可參與競標。 會員於後台擁有專屬會員行事曆，可將競標場 次加入行事曆，管理您專屬的「The Vroom行程」</p>
        </div>
      </div>
      <div class="secondLine">
        <div class="stepO step3">
          <span text-h6 font-weight-bold> 03 同意競標聲明</span>
          <p text-subtitle-1 font-weight-light>本站嚴格禁止棄標，如棄標累計兩次， 會員帳號將被凍結。因此加入會員前請詳閱 競標規則與聲明，避免影響您的權益。</p>
          <img :src="stepThree" class="contract icon" />
        </div>

        <div class="stepE step4">
          <span text-h6 font-weight-bold> 04 參加競標</span>
          <p text-subtitle-1 font-weight-light>
            設定好預算，看好價格，按下競標按鈕參與競標。 每口叫價金額為賣家設置，競標金額需以此為基準， 頁面上亦提供自動出價服務，讓您不避盯著電腦，也 能競逐您喜愛的車款。
          </p>
          <button
            type="button"
            class="btn v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default"
            style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65); padding-top: 7px; width: 60px; height: 40px"
          >
            <span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-gavel theme--dark"></i></span>
          </button>
        </div>

        <div class="stepE step4-phone">
          <span text-h6 font-weight-bold> 04 參加競標</span>
          <p text-subtitle-1 font-weight-light>
            設定好預算，看好價格，按下競標按鈕參與競標。 每口叫價金額為賣家設置，競標金額需以此為基準， 頁面上亦提供自動出價服務，讓您不避盯著電腦，也 能競逐您喜愛的車款。
          </p>
          <button
            type="button"
            class="btn v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default"
            style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65); padding-top: 7px; width: 60px; height: 40px"
          >
            <span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-gavel theme--dark"></i></span>
          </button>
        </div>

        <div class="stepO step5">
          <span text-h6 font-weight-bold> 05 收到得標email</span>
          <p text-subtitle-1 font-weight-light>競標時間結束後，本站會寄得標email通知得標者。 所以記得寄起來心儀車款競標截止時間 ，並且注意您的信箱喔~</p>
          <img :src="stepFive" class="medal icon" />
        </div>
      </div>
    </div>

    <div class="sell">
      <h1 text-h4 font-weight-bold>新手買車-線上估價</h1>
      <form>
        車輛廠牌：<input type="text" v-model="carb" class="input" placeholder="請輸入車輛廠牌" :class="{'focus':inputbar === true}"  @focus="inputbrand" @blur="blurbrand" />
        <span class="alert" style="color:#f34841" v-if="alertcarbrand">*請輸入車輛廠牌</span>
        <br />
        出廠年份：<input type="text" required v-model="pyear" class="input" placeholder="請輸入出廠年份" :class="{'focus':inputyearbar === true}" @focus="inputyear" @blur="bluryear" />
        <span class="alert" style="color:#f34841" v-if="alertyear">*請輸入出廠年份</span>
        <br />
        里程數：<input type="text" required v-model="long" class="input" placeholder="請輸入里程數" :class="{'focus':inputmilebar === true}" @focus="inputmile" @blur="blurmile"/>
        <span class="alert" style="color:#f34841" v-if="alertlong">*請輸入里程數</span>
        <br />
        姓名：<input type="text"  required v-model="person" class="input" placeholder="請輸入全名"  :class="{'focus':inputnamebar === true}" @focus="inputname" @blur="blurname"/>
        <span class="alert" style="color:#f34841" v-if="alertname">*請輸入全名</span>
        <br />
        email：<input type="email" required v-model="emailaddress" class="input" placeholder="123@gmail.com" :class="{'focus':emailbar === true}"  @focus="inputemail" @blur="bluremail" />
        <span class="alert" style="color:#f34841" v-if="alertemail">*請輸入email</span>
        <br>
        <span class="alertemail" style="color:#f34841" v-if="alertmailrule">*請輸入正確的email格式</span>
        <br />
        <button type="submit" class="sellonline" @click.prevent="popup()">送出</button>
      </form>
      <div class="overlay" @click="closebtn()"></div>
      <div class="formSubmit" @keyup="keyesp()">
        <span class="popup"></span>
        <span class="closebtn" style="cursor: pointer" @click="closebtn()">✕</span>
        <p text-subtitle-1 font-weight-light class="popupp"></p>
        <img :src="logo" alt="" />
      </div>
      <div class="gogo">
        <img :src="gogo" class="go" />
        <br />
        <button
          type="button"
          class="carbtn v-btn v-btn--is-elevated v-btn--has-bg v-btn--rounded theme--dark v-size--default"
          style="background-color: rgb(243, 72, 65); border-color: rgb(243, 72, 65)"
          @click="driver"
        >
          前往拍賣會場
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
    this.imgbelate()
  },
  // async created () {
  //   const response = await fetch('./test_eva.php')
  //   const responsedata = await response.json()
  //   console.log(response)
  //   console.log(responsedata)
  // },
  data () {
    return {
      carbrand: '',
      year: '',
      milage: '',
      name: '',
      email: '',
      count: '',
      inputbar: false,
      inputyearbar: false,
      inputmilebar: false,
      inputnamebar: false,
      emailbar: false,
      alertcarbrand: false,
      alertyear: false,
      alertlong: false,
      alertname: false,
      alertemail: false,
      alertmailrule: false,
      banner: require('../assets/new-driver-pic/new-driver-banner.jpg'),
      bannerSoul: '勝負心是促使人們前進的原動力',
      stepOne: require('../assets/new-driver-pic/step1-whitecar.png'),
      stepThree: require('../assets/new-driver-pic/contract.png'),
      stepFive: require('../assets/new-driver-pic/medal.png'),
      gogo: require('../assets/new-driver-pic/gogo.png'),
      iconchat: require('../assets/new-driver-pic/question.png'),
      logochat: require('../assets/logo-only(2).png'),
      customer: require('../assets/new-driver-pic/customer.png'),
      logochatbox: require('../assets/logowhite-transparent.png'),
      phonebanner: require('../assets/new-driver-pic/forphone.jpg'),
      downArrow: require('../assets/new-driver-pic/down-arrow.png'),
      logo: require('../assets/new-driver-pic/logowidth.png'),
      logowhitewide: require('../assets/new-driver-pic/logowhite.png'),
      currentChoose: null,
      currentCategory: null,
      groupquestion: [
        {
          group: '競標相關',
          category: 'group1',
          id: 1
        },
        {
          group: '會員相關',
          category: 'group2',
          id: 2
        },
        {
          group: '訂單相關',
          category: 'group3',
          id: 3
        },
        {
          group: '其他',
          category: 'group4',
          id: 4
        }
      ],
      ask: [
        {
          question: '競標流程是什麼？我需要準備什麼資料嗎？',
          category: 'group1',
          id: 11
        },
        {
          question: '拍賣會場的「自動出價功能」是什麼意思？',
          category: 'group1',
          id: 12
        },
        {
          question: '我要怎麼知道自己已經得標？',
          category: 'group1',
          id: 13
        },
        {
          question: '每一個人都可以開拍賣場嗎?',
          category: 'group1',
          id: 14
        },
        {
          question: '得標後要怎麼付款?',
          category: 'group1',
          id: 15
        },
        {
          question: '得標後天內要完成付款?',
          category: 'group1',
          id: 16
        },
        {
          question: '賣車起標價格有規定嗎？',
          category: 'group1',
          id: 17
        },
        {
          question: '什麼是每口叫價？',
          category: 'group1',
          id: 18
        },
        {
          question: '加入會員可以幹嘛？',
          category: 'group2',
          id: 19
        },
        {
          question: '如何成為高級會員？',
          category: 'group2',
          id: 20
        },
        {
          question: '如何編輯拍賣會場？',
          category: 'group2',
          id: 21
        },
        {
          question: '得標汽車如何交車？',
          category: 'group3',
          id: 22
        },
        {
          question: '商品配件要如何運送？',
          category: 'group3',
          id: 23
        },
        {
          question: '我第一次買車可以教我要注意什麼嗎？',
          category: 'group4',
          id: 24
        },
        {
          question: '請問你們有專人可以諮詢車輛相關事宜嗎？',
          category: 'group4',
          id: 25
        }
      ],
      answer: [
        {
          answer: '競標流程非常簡單，只要鎖定拍賣商品，之後加入會員，就可以出價參加競標了！<a href="/AuctionOverview" style="color:#ffffff; text-decoration:underline; font-weight:bold;">看看拍賣會場</a>',
          id: 11
        },
        {
          answer: '「自動出價功能」是一個提供您不用一直在電腦前也可以競標愛車的服務。只要設定好您的上限金額，系統會自動幫您出價，只要沒超過預算，時間一到您就會收到得標通知囉！',
          id: 12
        },
        {
          answer: '競標時間結束後，我們會寄出得標通知email給得標者，同時也會寄出候補信給第二高價者，因此記得您心儀車款截標時間，並前往您的信箱收信就對囉~',
          id: 13
        },
        {
          answer: '只有高級會員可以開設拍賣場，相關會員方案請洽<a href="/memberside" style="color:#ffffff; text-decoration:underline; font-weight:bold;>會員專區</a>',
          id: 14
        },
        {
          answer: '本站一律採取線上付款，相關分期方案請洽您的信用卡公司。',
          id: 15
        },
        {
          answer: '得標後請在3天內完成付款，逾期將視同棄標，累計兩次將會停止您的帳號。',
          id: 16
        },
        {
          answer:
            '拍賣車輛的起標價格完全由開設拍賣場的會員自行決定，一但產品上架拍賣，我們即視起標價格為您接受的最低成交價，因此請務必在開設拍賣場時設定一個可以接受的價格，避免您的權益受損。',
          id: 17
        },
        {
          answer: '「每口叫價」為每次競標應出價的價格區間，例如起標價為30萬，每口叫價為2萬，則第一次叫價最低金額為32萬。本站每口叫價價格由賣家自行決定。',
          id: 18
        },
        {
          answer: '加入會員以享受我們提供的完整服務，加入會員才能競標商品與購買車輛或是配件，這是為了確保每位使用者都對本站有一定程度的瞭解，並且遵守使用規範。同時會員將擁有自己的會員專區，內可以管理有興趣的拍賣會場，並且也擁有自己的會員行事曆，讓您不錯過TheVroom上發生的每個精彩細節。而如果您滿意我們服務，可以升級為「高級會員」，「高級會員」擁有開設拍賣會場的權限。加入高級會員，開設拍賣會，讓您成為眾人追尋的對象吧！<a href="/signup" style="color:#ffffff; text-decoration:underline; font-weight:bold;">加入會員</a>',
          id: 19
        },
        {
          answer: '「高級會員」資格需要購買，價格為一年3000元台幣。前往升級<a href="/memberside" style="color:#ffffff; text-decoration:underline; font-weight:bold;">高級會員</a>',
          id: 20
        },
        {
          answer: '首先您需要成為高級會員才有開設拍賣會場的相關權利，在開設完拍賣會場後，可以在「會員專區=>賣場管理」輕鬆編輯拍賣會場。',
          id: 21
        },
        {
          answer: '付了訂金後，專人會與您聯繫後續事宜。',
          id: 22
        },
        {
          answer: '配件商品一律「到店取貨」，至我們的服務據點取貨並讓我們協助您安裝。',
          id: 23
        },
        {
          answer:
            '我們提供「市場行情」頁面，讓您瞭解最新市場行情，比較當年度熱門車款，讓您輕鬆上手新車知識；如果您有其他買車相關問題，也可以上討論區，和大家一起討論喔。前往「<a href="/comparecard" style="color:#ffffff; text-decoration:underline; font-weight:bold;">市場行情</a>」「<a href="/forum" style="color:#ffffff; text-decoration:underline; font-weight:bold;">前往討論區</a>」',
          id: 24
        },
        {
          answer:
            '除了「線上估價系統」我們會在您填完表單後有專人聯繫協助外，其他的頁面皆不會有專人給予建議，如果您有任何疑問，可以聯繫我們的客服信箱：xxx@theVroom，或是至「討論區」與其他一樣愛好車的朋友們交流。前往<a href="/forum" style="color:#ffffff; text-decoration:underline; font-weight:bold;">討論區</a>',
          id: 25
        }
      ]
    }
  },
  methods: {
    driver () {
      const img = document.querySelector('.go')
      img.classList.add('isActive')
      setTimeout(() => this.$router.push({ path: '/AuctionOverview' }), 3000)
    },
    imgbelate () {
      const lateimg = document.querySelector('img.chat')
      lateimg.classList.add('active')
    },
    inputbrand () {
      this.inputbar = true
      this.carb = ''
    },
    blurbrand () {
      this.inputbar = false
      if (this.carb !== '') {
        this.alertcarbrand = false
      }
    },
    inputyear () {
      this.inputyearbar = true
      this.pyear = ''
      if (this.carb === '') {
        this.alertcarbrand = true
      } else {
        this.alertcarbrand = false
      }
    },
    bluryear () {
      this.inputyearbar = false
      if (this.pyear !== '') {
        this.alertyear = false
      }
    },
    inputmile () {
      this.inputmilebar = true
      this.long = ''
      if (this.pyear === '') {
        this.alertyear = true
      } else {
        this.alertyear = false
      }
    },
    blurmile () {
      this.inputmilebar = false
      if (this.long !== '') {
        this.alertlong = false
      }
    },
    inputname () {
      this.inputnamebar = true
      this.person = ''
      if (this.long === '') {
        this.alertlong = true
      } else {
        this.alertlong = false
      }
    },
    blurname () {
      this.inputnamebar = false
      if (this.person !== '') {
        this.alertname = false
      }
    },
    inputemail () {
      this.emailbar = true
      this.emailaddress = ''
      if (this.person === '') {
        this.alertname = true
      } else {
        this.alertname = false
      }
    },
    bluremail () {
      this.emailbar = false
      if (this.emailaddress !== '') {
        this.alertemail = false
      }
      if (!this.validEmail(this.emailaddress)) {
        this.alertmailrule = true
      } else {
        this.alertmailrule = false
      }
    },
    validEmail (emailaddress) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(emailaddress)
    },
    popup () {
      if (this.emailaddress === '') {
        this.alertemail = true
        if (!this.validEmail(this.emailaddress)) {
          this.alertmailrule = true
        }
      } else {
        this.alertemail = false
        const overlay = document.querySelector('.overlay')
        overlay.classList.add('displayBlock')
        const popup = document.querySelector('.formSubmit')
        popup.classList.add('displayBlock')
        const sent = document.querySelector('.popup')
        const popupp = document.querySelector('.popupp')
        sent.innerHTML = '表單已送出'
        popupp.innerHTML = '我們會儘快與您聯繫'
        const everyinput = document.querySelectorAll('.input')
        everyinput.forEach(function (e) {
          e.value = ''
        })
      }
      this.carbrand = this.carb
      this.year = this.pyear
      this.milage = this.long
      this.name = this.person
      this.email = this.emailaddress
      const fd = new FormData()
      fd.append('carbrand', this.carbrand)
      fd.append('year', this.year)
      fd.append('milage', this.milage)
      fd.append('name', this.name)
      fd.append('email', this.email)
      fetch('./phpfile/eva.php', {
        method: 'POST',
        body: fd
      })

      this.carb = ''
      this.pyear = ''
      this.long = ''
      this.person = ''
      this.emailaddress = ''
    },
    closebtn () {
      const overlay = document.querySelector('.overlay')
      overlay.classList.remove('displayBlock')
      const popup = document.querySelector('.formSubmit')
      popup.classList.remove('displayBlock')
    },
    keyesp (e) {
      const overlay = document.querySelector('.overlay')
      const popup = document.querySelector('.formSubmit')
      if (e.key === 'Escape' && popup.classList.contains('displayBlack')) {
        overlay.classList.remove('displayBlock')
        popup.classList.remove('displayBlock')
      }
    },
    bigQ (bigq) {
      this.currentCategory = bigq.category
      this.currentChoose = null
      this.chatlogohide()
      document.querySelector('.default').style.display = 'none'
    },
    smallQ (smallq) {
      this.currentChoose = smallq.id
      if (smallq.id === 19) {
        const memberans = document.querySelector('.giveanswer')
        memberans.classList.add('formemberans')
      }
      this.chatlogoshow()
    },
    cover () {
      const qBlock = document.querySelector('div.questionblock')
      const darkBack = document.querySelector('div.cover')
      qBlock.classList.add('block')
      darkBack.style.display = 'block'
    },
    closecover () {
      const darkBack = document.querySelector('div.cover')
      darkBack.style.display = 'none'
      const qBlock = document.querySelector('div.questionblock')
      qBlock.classList.remove('block')
    },
    chatlogoshow () {
      // const ans = document.querySelector('.answers')
      const chatlogo = document.querySelector('.logochat2')
      chatlogo.classList.add('block')
    },
    chatlogohide () {
      const chatlogo = document.querySelector('.logochat2')
      chatlogo.classList.remove('block')
    }
  }
}
</script>
<style scoped lang="scss">
$bigTitle: '60px';
$middleTitle: '40px';
$parnerColor: #f34841;
* {
  font-family: 'Noto Sans';
}
// perfectscrollbar 預設class
.ps {
  height: 500px;
}
div#banner {
  img.banner {
    max-width: 100%;
    position: relative;
  }
  div.cover {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: none;
  }
  div.chat {
    position: relative;
    border: 1px solid #181818;
    &:hover span.askQuestion {
      display: block;
    }
    > span.askQuestion {
      background-color: #bfbdbd;
      color: $parnerColor;
      position: fixed;
      z-index: 98;
      width: 120px;
      top: 350px;
      right: 60px;
      text-align: center;
      padding: 20px 20px;
      border-radius: 20px;
      font-size: 12px;
      display: none;
    }
    img.chat {
      position: fixed;
      z-index: 10;
      width: 80px;
      top: 300px;
      right: 0;
      cursor: pointer;
      // display: none;
      // transform: translateX(100%);
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    @keyframes showup {
      0% {
        transform: translateX(100%);
      }
      50% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(-70%) scale(1.1);
      }
    }

    .active {
      display: block;
      // transform: translateX(100%);
      animation-name: showup;
      animation-duration: 2s;
    }
    .block {
      display: block !important;
    }

    .formemberans {
      transform: translateY(10%);
    }

    div.questionblock {
      background-color: #ffffff;
      width: 420px;
      position: fixed;
      overflow: scroll;
      top: 0;
      right: 0;
      z-index: 99;
      height: auto;
      display: none;
      box-shadow: white 0 0px 8px, black 3px 0px 2px, white -5px 0px 2px;
      img.logochatbox {
        width: 40px;
        margin-left: -5px;
      }
      span.closebtnQ {
        position: absolute;
        right: 10px;
        top: 0;
        font-size: 30px;
      }
      img.logochat {
        width: 30px;
        margin-top: 10px;
      }
      div.questions {
        background-color: #f34841;
        color: #ffffff;
        padding: 5px 10px;
        width: 100px;
        margin-bottom: 10px;
        border-radius: 20px;
        text-align: center;
        transform: translate(35%, -60%);
        cursor: pointer;
      }
      img.logochatbox {
        width: 110px;
        background-color: #181818;
        object-fit: contain;
        padding: 5px;
      }
      div.givesmallq {
        div.smallq1 {
          // position: absolute;
          // right:0;
          // bottom: 0;
          background-color: #181818;
          color: #ffffff;
          padding: 5px 10px;
          width: 210px;
          margin-bottom: 10px;
          border-radius: 20px;
          text-align: left;
          cursor: pointer;
          transform: translate(90%, -40%);
          display: none;
        }
        .smallQactive {
          display: block;
        }
      }
      .giveanswer {
        img.logochat2 {
          width: 30px;
          //   display: none;
        }
        div.answers {
          background-color: #f34841;
          color: #ffffff;
          padding: 5px 10px;
          width: 80%;
          margin-bottom: 30px;
          border-radius: 20px;
          text-align: left;
          transform: translate(10%, -20%);
          cursor: pointer;
          display: none;
        }
      }
    }
  }
  div.bannerWord {
    background: url(../assets/new-driver-pic/banner-word.png);
    color: #fff;
    width: 620px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 64px;
    span {
      font-size: 40px;
      padding-left: 5px;
    }

    p.ad {
      font-size: 30px;
      padding-left: 5px;
    }
  }
}

h1 {
  position: relative;
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    left: 30px;
    top: 100%;
    background-color: $parnerColor;
  }
}

@mixin stepO {
  background-color: #181818;
  font-size: 20px;
  color: #ffffff;
  height: 300px;
  width: 400px;
  padding: 20px 5px 20px 20px;
}

@mixin stepE {
  background-color: #ffffff;
  font-size: 20px;
  color: #181818;
  height: 300px;
  width: 400px;
  padding: 20px 5px 20px 20px;
  border: 1px solid #181818;
}
div.buy {
  // display: flex;
  // flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
  .firstLine,
  .secondLine {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  div.firstLine {
    div.step2 {
      margin-left: 15px;
    }
  }
  div.secondLine {
    margin-top: 50px;
    div.step4 {
      width: 350px;
      margin: 0 15px;
      position: relative;
      button {
        position: absolute;
        right: 20px;
        bottom: 10px;
      }
    }
    div.step4-phone {
      display: none;
    }
  }
}
.stepO {
  position: relative;
  span {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    padding: 20px 5px 5px 5px;
  }
  @include stepO;
  img.whiteCar {
    height: 170px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  img.icon {
    height: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 20px;
    margin-bottom: 10px;
  }
}

.stepE {
  @include stepE;
  position: relative;
  // margin:30px 30px 0px 0px;
  span {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  p {
    padding: 20px 5px 5px 5px;
  }
}

@keyframes letsgo {
  100% {
    transform: scale(0.1);
  }
  70% {
    transform: scale(0.1);
  }
  50% {
    transform: scale(0.3);
  }
  30% {
    transform: scale(0.5);
  }
  0% {
    transform: scale(0.7);
  }
}
.focus {
  outline: none;
  border: 2px solid #181818;
  border-radius: 10px;
  margin-bottom: 20px;
  width: 100%;
  background-color: hsla(0, 100%, 100%, 0.7);
  box-shadow: hsla(0, 100%, 100%, 0.7);
}
div.sell {
  width: 1200px;
  margin: 0 auto;
  position: relative;
  form {
    border: 1px solid #181818;
    width: 1000px;
    margin: 50px auto;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    .input {
      //  display: flex;
      // position: relative;
      border-bottom: 1px solid hsla(0, 0%, 0%, 0.5);
      border-radius: 10px;
      width: 100%;
      margin-bottom: 15px;
      background-color: hsla(0, 100%, 100%, 0.7);
      box-shadow: hsla(0, 100%, 100%, 0.7);
      outline: none;
    }
    button {
      color: #ffffff;
      background-color: $parnerColor;
      text-align: center;
      width: 50%;
      padding: 5px 0px;
      border-radius: 20px;
      transform: translateX(50%);
    }
  }
  .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
  }
  .formSubmit {
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #181818;
    padding: 20px 30px;
    position: relative;
    border-radius: 20px;
    position: absolute;
    top: 30%;
    left: 40%;
    background-color: #ffffff;
    display: none;
    z-index: 10;
    span.popup {
      color: #181818;
      font-weight: bold;
      font-size: 1.2rem;
    }
    span.closebtn {
      font-weight: bold;
      font-size: 25px;
      position: absolute;
      right: 10px;
      top: 0;
    }
    p {
      margin-top: 20px;
      color: #181818;
    }
    img {
      height: 60px;
    }
  }
  .displayBlock {
    display: block;
  }
  .gogo {
    width: 1000px;
    margin: 0 auto;
    text-align: center;
    img.go {
      width: 200px;
    }
    .isActive {
      animation-name: letsgo;
      animation-duration: 3s;
    }
    button {
      margin: 30px 0;
      cursor: pointer;
    }
  }
}

div.phonebannerpart {
  display: none;
}

@media (max-width: 576px) {
  div.banner {
    max-width: 100%;
  }
  img.banner {
    display: none;
  }
  div.bannerWord {
    display: none;
  }

  div.phonebannerpart {
    display: block;
    position: relative;
    max-width: 100%;
    img.phonebanner {
      max-width: 100%;
      overflow-x: hidden;
    }
    span.first {
      position: absolute;
      color: #ffffff;
      left: 50px;
      top: 30px;
    }
    span.second {
      position: absolute;
      color: #ffffff;
      left: 150px;
      top: 70px;
    }
    img.godown {
      height: 30px;
      position: absolute;
      text-align: center;
      bottom: 10px;
      left: 45%;
      margin: auto;
    }
  }

  div.questionblock{
    max-width:95%;
    div.givesmallq{
      div.smallq1{
        transform: translate(60%,-40%) !important;
      }
    }
  }

  div.buy {
    max-width: 100%;
    margin: 0 auto;
    h1 {
      max-width: 100%;
      &:after {
        max-width: 80%;
      }
    }
    div.firstLine {
      display: block;
      align-items: center;
      max-width: 100%;
      margin: 0 auto;
      // transform: translateX(8%);
      div.stepO {
        max-width: 100%;
        margin-bottom: 30px;
        margin-left: 0;
      }
      div.stepE {
        max-width: 100%;
        margin: 0;
        margin-bottom: 30px;
      }
    }

    div.secondLine {
      display: block;
      max-width: 100%;
      // transform: translateX(8%);
      div.stepO {
        max-width: 100%;
        margin-bottom: 30px;
      }

      div.stepE {
        max-width: 100%;
        margin: 0;
        margin-bottom: 30px;
      }

      div.step4 {
        display: none;
        margin-bottom: 30px;
      }

      div.step4-phone {
        display: block;
        position: relative;
        button {
          position: absolute;
          right: 50px;
          bottom: 20px;
        }
      }
    }
  }

  div.sell {
    max-width: 100%;
    margin: 0 auto;
    h1 {
      max-width: 100%;
      &:after {
        max-width: 80%;
      }
    }
    form {
      max-width: 90%;
      button {
        text-align: center;
      }
      input:focus {
        outline: none;
      }
    }
    div.formSubmit{
      left:20% ;
    }
  }

  div.gogo {
    max-width: 100%;
    text-align: center;
    img.go {
      width: 100px;
    }
  }
}
</style>
