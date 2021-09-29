<template>
    <div class="rwdindex">
        <div class="headerrrr" style="position: absolute;">
          <v-toolbar flat style="background-color: transparent;" height="64">
            <v-app-bar-nav-icon
              @click.stop="sideNav = !sideNav"
              color="#181818"
              class="ml-1"
            ></v-app-bar-nav-icon>
            <router-link to="/" tag="span" style="cursor: pointer"
              ><img src="../assets/small_logo-transparent.png" class="mt-1 mobileLo"></router-link
            >
            <v-spacer></v-spacer>
            <v-icon right class="mr-3" color="#181818" style="margin-left: 110px;">mdi-cart-outline</v-icon>
            <router-link to="/signin" tag="span" style="cursor: pointer">
              <v-icon right class="mr-2" color="#181818">mdi-login</v-icon>
            </router-link>
            <!-- <v-icon left class="mr-4" color="#FFFFFF">mdi-account-circle-outline</v-icon> -->
            <!-- <v-icon left class="mr-4" color="#FFFFFF">mdi-logout</v-icon> -->
          </v-toolbar>
          <v-navigation-drawer v-model="sideNav" absolute temporary height="100vh" style="z-index: 20;">
            <v-list rounded>
              <v-list-item-group color="deep-orange accent-3">
                <v-list-item
                  v-for="item in menuItem"
                  :key="item.title"
                  :to="item.link"
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>
        <img class="indexBanrwd" src="../assets/rwdbanner.png">
        <v-btn rounded outlined width="300px" class="btn white--text" to="/auctionoverview" style="position: absolute; z-index: 10; left: 50%; top: 700px; transform: translateX(-50%)">
            進入競標場
        </v-btn>
    </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    sideNav: false,
    menuItem: [
      {
        icon: 'mdi-gavel',
        title: '競標會場',
        link: '/auctionoverview'
      },
      {
        icon: 'mdi-car-sports',
        title: '配件專區',
        link: '/accessories'
      },
      {
        icon: 'mdi-clipboard-list-outline',
        title: '市場行情',
        link: '/comparecard'
      },
      {
        icon: 'mdi-draw',
        title: '討論專區',
        link: '/forum'
      },
      {
        icon: 'mdi-account-question-outline',
        title: '新手上路',
        link: '/newdriver'
      }
    ]
  })
}
</script>

<style lang="scss">
    .rwdindex{
        width: 100%;
        height: 100vh;
        .indexBanrwd{
            width: 100%;
        }
        .mobileLo{
            width: 100px;
            height: 26px;
        }
    }
</style>
