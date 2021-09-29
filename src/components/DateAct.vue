<template>
  <div class="d-flex justify-center my-10">
    <v-card
      width="300"
      height="560"
      class="d-flex flex-column justify-space-between"
    >
      <div style="width: 100%; height: 10%" class="d-flex flex-column align-start ml-5">
        <div
          style="font-size: 20px; font-weight: bold;"
          class="pl-4 text-h6 font-weight-bold"
        >
          當日排程
        </div>
        <div style="width:60%;height:3px" class="red"></div>
      </div>
      <div
        style="height: 90%; width: 100%;"
        class="d-flex flex-column justify-space-around align-center"
      >
        <div
          v-for="date in dates"
          :key="date.name"
          style="border: 1px solid #000; border-radius:5px; width:260px; height:130px"
          class="d-flex flex-column justify-space-around"
        >
          <div class="d-flex">
            <div
              style="width: 60%"
              class="d-flex justify-center align-center text-subtitle-1 font-weight-light"
            >
              {{ date.name }}
            </div>
            <div
              style="width: 40%; color:#F34841"
              class="d-flex justify-center align-center text-h6 font-weight-bold"
            >
              {{ date.time }}
            </div>
          </div>
          <div
            class="d-flex align-center pl-5 text-subtitle-1 font-weight-light"
          >
            {{ date.reserve }} : {{ date.price }}
          </div>
          <div
            class="d-flex align-center pl-5 text-subtitle-1 font-weight-light"
          >
            {{ date.title }} : {{ date.status }}
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dates: [
        {
          name: '2021 BMW 330i',
          time: '17 : 00',
          reserve: '底價',
          price: '130萬',
          title: '賣場狀態',
          status: '進行中'
        },
        {
          name: '2021 BENZ GLC',
          time: '17 : 00',
          reserve: '底價',
          price: '900萬',
          title: '賣場狀態',
          status: '進行中'
        },
        {
          name: '2021 AUDI Q30',
          time: '17 : 00',
          reserve: '底價',
          price: '200萬',
          title: '賣場狀態',
          status: '進行中'
        }
      ]
    }
  }
}
</script>
