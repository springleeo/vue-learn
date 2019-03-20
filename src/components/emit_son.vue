<template>
  <div>
    <p>{{age}}</p>
    <p>子->父：</p>
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
  props: {
    age: {
      type: Number,
      default: 23
    }
  },
  computed: {
    addNum() {
      return this.age * 8
    }
  },
  methods: {
    sendMsg(event) {
      //两个参数：参数1：key 参数2：数据
      this.$emit('sendmsg', this.addNum)
    }
  }
}
</script>

<style>
</style>
