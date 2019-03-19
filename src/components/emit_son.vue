<template>
  <div>
    子组件：
    <button @click="sendMsg">传递</button>
  </div>
</template>

<script>

export default {
  name: 'son',
  data() {
    return {
      msg: '我是子组件的数据'
    }
  },
  methods: {
    sendMsg(event) {
      //两个参数：参数1：key 参数2：数据
      this.$emit('sendmsg', this.msg)
    }
  }
}
</script>

<style>
</style>
