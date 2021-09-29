<template>
    <div class="contentLeft">
            <div class="numB">{{ titleNum }}
                <div class="contentName">{{ titleText }}</div>
            </div>
        </div>
</template>

<script>
export default {
  props: ['titleNum', 'titleText']
}
</script>

<style lang="scss">
.contentLeft{
    width: 25%;
    height: 100vh;
    margin-top: 48px;
    background-color: #181818;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .numB{
        -webkit-text-stroke:1px #FFFFFF;
        color: transparent;
        font-size: 90px;
        font-weight: bold;
        padding-left: 40px;
        margin-bottom: 200px;
        .contentName{
            font-size: 40px;
            color: #FFFFFF;
            -webkit-text-stroke:0px #FFFFFF;
        }
    }
}
</style>
