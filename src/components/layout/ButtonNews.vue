<template>
  <div class="text-center">
    <v-btn color="white" light class="newsbutton">
      {{ buttonName }}
    </v-btn>
  </div>
</template>
<script>
export default {
  props: ['buttonName']
}
</script>

<style lang="scss" scoped>
.newsbutton {
  width: 150px;
  border-radius: 20px;
  .v-btn__content {
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    padding: 20px;
  }
}
</style>
