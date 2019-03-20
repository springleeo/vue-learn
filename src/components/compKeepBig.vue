<template>
  <div>big
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
    <button @click="changeView">切换组件</button>
  </div>
</template>

<script>
import sm1 from './compKeepSm1'
import sm2 from './compKeepSm2'
export default {
  name: 'big',
  data() {
    return {
      currentView: 'sm1',
      flag: true
    }
  },
  components: {
    sm1,
    sm2
  },
  methods: {
    changeView() {
      if (this.flag) {
        this.currentView = 'sm2',
          this.flag = false
      } else {
        this.currentView = 'sm1',
          this.flag = true
      }

    }
  }
}
</script>

<style>
</style>
