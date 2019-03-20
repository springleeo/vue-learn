<template></template>

<script>
export default {
  name: 'axiosPost',
  data() {
    return {

    }
  },
  created() {
    this.$axios.post("", {
      user: '',
      password: ''
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
