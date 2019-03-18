<template>
  <div>
    <input v-model="msg" placeholder="edit me">
    <p>原始文本信息：{{msg}}</p>
    <p>
      v-model:
      <input type="text" v-model="msg">
    </p>
    <span>multiline message is:</span>
    <p style="white-space: pre-line;">{{ msg }}</p>
    <textarea v-model="msg" cols="30" rows="10" placeholder="add multiline message"></textarea>
  </div>
</template>

<script>
export default {
  name: "vmodel",
  data() {
    return { msg: '' }
  }
}
</script>

<style>
</style>
