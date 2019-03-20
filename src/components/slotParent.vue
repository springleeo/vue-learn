<template>
  <div class="slotParent">
    <son>
      <div slot="s1">
        <p>我是插槽1</p>
        <p>我是插槽11</p>
      </div>
      <p slot="s2">我是插槽2</p>
      <p slot="s3" slot-scope="key">{{key.text}}</p>
    </son>
  </div>
</template>

<script>
import son from './slotSon'
export default {
  name: 'slotParent',
  data() {
    return {

    }
  },
  components: {
    son
  }
}
</script>

<style>
</style>
