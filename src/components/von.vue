<template>
  <div>
    <!-- 只能存在一个根组件-->
    <button @click="jia">加分</button>
    <button v-on:click="jian">减分</button>
    <!-- <input type="text" v-on:keyup.enter="onEnter" v-model="secondCount"> -->
    <input @keyup.enter="onEnter" v-model="secondCount">
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  name: "von",
  data() {
    return {
      count: 1,
      secondCount: 0,
    }
  },
  methods: {
    jia(count) {
      this.count++
    },
    jian(count) {
      this.count--
    },
    onEnter(count) {
      this.count = this.count + parseInt(this.secondCount);
    }

  }
}
</script>

<style>
</style>
