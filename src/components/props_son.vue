<template>
  <div>儿子：{{title}}-{{lifemsg}}-{{num*2}}--{{myobj.name}}</div>
</template>

<script>
export default {
  name: 'son',
  data() {
    return {
    }
  },
  props: {
    title: [String, Number],
    lifemsg: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      default: 5
    },
    myobj: {
      type: Object,
      default: function () {
        return {
          name: '未知',
          age: 10
        }
      }
    }
  }
}
</script>

<style>
</style>
