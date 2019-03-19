<template>
  <div>
    <p>computed字符串反转：{{msgRe}}</p>
    <p>methods字符串反转：{{msgReverse()}}</p>
  </div>
</template>

<script>
export default {
  name: 'event',
  data() {
    return {
      msg: 'springleeo'
    }
  },
  computed: {
    msgRe() {
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    msgReverse() {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>

<style>
</style>
