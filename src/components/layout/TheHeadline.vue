<template>
  <div class="titlebox">
    <div class="auctiontitle text-h4 font-weight-bold">
      {{ titleName }}
      <div class="rect"></div>
      <div class="anrect"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titleName']
}
</script>

<style lang="scss">
.titlebox {
    display: flex;
    height: 18%;
    color: #ffffff;
    .auctiontitle {
        display: flex;
        justify-content: center;
        height: 18%;
        color: #FFFFFF;
        padding-left: 30px;
        .rect {
        background-color: #f34841;
        width: 13px;
        height: 32px;
        transform: skew(150deg);
        margin-top: 5px;
        margin-left: 20px;
        }
        .anrect {
        background-color: #f34841;
        width: 13px;
        height: 32px;
        transform: skew(150deg);
        margin-top: 5px;
        margin-left: 5px;
        }
    }
}
</style>
