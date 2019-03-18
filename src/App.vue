<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <vfor/> -->
    <!-- <vfor1/> -->
    <!-- <vif/> -->
    <von/>
  </div>
</template>

<script>
import vfor from './components/vfor'  //引入组件
import vfor1 from './components/vfor1'
import vif from './components/vif'
import von from './components/von'

export default {
  name: 'App',
  components: {
    vfor,
    vfor1,
    vif,
    von,
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
