<template>
  <div>父->子：
    <!-- 子组件的key，在父组件中当做一个自定义事件 -->
    <input type="text" v-model="age" placeholder="input age">
    <son @sendmsg="getMsg" :age="getNum"/>
    {{info}}
  </div>
</template>

<script>
import son from './emit_son'
export default {
  name: 'parent',
  data() {
    return {
      info: '',
      age: '',
    }
  },
  components: {
    son
  },
  computed: {
    getNum() {
      return this.age - 0
    }
  },
  methods: {
    getMsg(data) {
      console.log(data),
        this.info = data
    }
  }
}
</script>

<style>
</style>
