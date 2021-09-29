<template>
    <div>
        <input type="file" name="file" @change="test">
        <img :src="changeimg">
    </div>
</template>

<script>
export default {
  data () {
    return {
      changeimg: ''
    }
  },
  async created () {
    console.log('ya')
    const response = await fetch('/test2.php')
    const responsedata = await response.json()
    console.log(response)
    console.log('ya2')
    console.log(responsedata)
    this.changeimg = `.${responsedata[0].namethree}`
  },
  methods: {
    test (e) {
      const fileTarget = e.target.files
      const formData = new FormData()
      console.log(fileTarget)
      formData.append('file', e.target.files[0])
      // fetch('https://tibamef2e.com/tfd102/project/g2/FileUpload/SingleFile.php', {
      //   method: 'POST',
      //   body: formData
      // })
      fetch('./FileUpload/SingleFile.php', {
        method: 'POST',
        body: formData
      })
    }
  }
}
</script>
