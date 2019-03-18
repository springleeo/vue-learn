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
    <textarea v-model="msg" cols="30" rows="2" placeholder="add multiline message"></textarea>
    <p>单选框绑定：</p>
    <p>
      <input type="radio" name="" id="fale" value="男" v-model="sex">
      <label for="fale">男</label>
    </p>
    <p>
      <input type="radio" name="" id="female" value="女" v-model="sex">
      <label for="female">女</label>
    </p>
    <p>性别是：{{sex}}</p>
    <p>多选框绑定数组：</p>
    <p>
      <input type="checkbox" id="java" value="java" v-model="lang">
      <label ffor="isTrue">java</label>
      </p>
    <p>
      <input type="checkbox" id="python" value="python" v-model="lang">
      <label for="isTrue">python</label>
      </p>
    <p>
      <input type="checkbox" id="vue" value="vue" v-model="lang">
      <label for="isTrue">vue</label>
      </p>
    <p>语言是：{{lang}}</p>

  </div>
</template>

<script>
export default {
  name: "vmodel",
  data() {
    return {
      msg: '',
      sex: '',
      lang: [],
      isTrue: true,
    }
  }
}
</script>

<style>
</style>
