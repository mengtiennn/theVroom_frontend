<template>
  <div>
    <button @click="gogoro" class="rounded-pill pa-5 red white--text">123</button>
  </div>
</template>

<script>
export default {
  methods: {
    async gogoro () {
      const res = await fetch('http://localhost/test2.php')
      console.log(res)
      const resdata = await res.json()
      console.log(resdata)
    }
  },
  mounted () {
    this.$store.dispatch('happy', [true, 'margin-top: 64px'])
  }
}
</script>
