<template>
  <div>
    <div class="aboutusmove d-flex justify-center align-center">
      <div class="a">
        <span style="font-weight:900;">{{ iconame }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['iconame']
}
</script>
<style lang="scss">
.aboutusmove {
  width: 70px;
  height: 50px;
  .a {
    position: relative;
    width: 70px;
    height: 50px;
    padding: 10px;
    background: transparent;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 20px;
    letter-spacing: 4px;
    line-height: 2.5;
    text-decoration: none;
    // -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    span {
      position: absolute;
      display: block;
      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      text-align: center;
      background: #0c0c0c;
      color: rgba(255, 255, 255, 1);
      transition: 0.5s;
      z-index: 1;
      border-radius: 20px;
    }
    &:hover span {
      color: rgba(255, 255, 255, 1);
      &span::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: rgba(255, 255, 255, 0.1);
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00
      );
      background-size: 400%;
      opacity: 0;
      transition: 0.5s;
      animation: animate 20s linear infinite;
      border-radius: 20px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00,
        #fb0094,
        #00f,
        #0f0,
        #ff0,
        #f00
      );
      background-size: 400%;
      opacity: 0;
      filter: blur(20px);
      transition: 0.5s;
      animation: animate 20s linear infinite;
      border-radius: 20px;
    }
    @keyframes animate {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 300% 0;
      }
      10% {
        background-position: 0 0;
      }
    }
    &:hover::before,
    &:hover::after {
      opacity: 1;
    }
  }
}
</style>
