<template>
  <div>父组件：
    <!-- 子组件的key，在父组件中当做一个自定义事件 -->
    <son @sendmsg="getMsg"/>
    {{info}}
  </div>
</template>

<script>
import son from './emit_son'
export default {
  name: 'parent',
  data() {
    return {
      info: ''
    }
  },
  components: {
    son
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
