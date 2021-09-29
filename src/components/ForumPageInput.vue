<template>
  <div>
    <div class="d-flex justify-center max-width:800px">
      <input
        type="text"
        placeholder="回應..."
        class="align-self-center grey lighten-2 px-3"
        style="width:800px;border-radius:15px;height:45px;outline:0"
        @input="gogoro"
        :value="value"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    gogoro (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
