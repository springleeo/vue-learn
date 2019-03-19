<template>
  <div>
    父亲
    <input type="text" v-model="lifemsg">
    <son :title="msg" :lifemsg="lifemsg" :num="num" :myobj="myobj"/>
    <button @click="changeMsg">按钮</button>
  </div>
</template>

<script>
import son from "./props_son";
export default {
  name: 'propsparent',
  data() {
    return {
      msg: "传递的原始msg数据",
      lifemsg: '',
      num: 1,
      myobj: {
        name: 'lili',
        age: 20      }
    }
  },
  components: {
    son
  },
  methods: {
    changeMsg(event) {
      this.msg = '传递的修改后msg数据'
    }
  }

}
</script>

<style>
</style>
