<template>
  <div>
    {{msg}}
    <button @click="changeInfo">changeInfo</button>
  </div>
</template>

<script>
export default {
  name: 'sm1',
  data() {
    return {
      msg: "sm1"
    }
  },
  methods: {
    changeInfo() {
      this.msg = 'sm11111'
    }
  }
}
</script>

<style>
</style>
