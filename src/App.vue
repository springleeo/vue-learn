<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <vfor/>
    <vfor1/>
    <vif/>
    <von/>
    <vmodel/>
    <event/>
    <propsparent/>
    <emitparent/>
    <slotParent/>
    <compKeepBig/>
    <anim></anim>
    <axiosGet></axiosGet>-->
    <navigate></navigate>
    <router-view></router-view>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
  </div>
</template>

<script>
import vfor from './components/vfor'  //引入组件
import vfor1 from './components/vfor1'
import vif from './components/vif'
import von from './components/von'
import vmodel from './components/vmodel'
import event from './components/event'
import propsparent from './components/props_parent'
import emitparent from './components/emit_parent'
import slotParent from './components/slotParent'
import compKeepBig from './components/compKeepBig'
import anim from './components/anim'
import axiosGet from './components/axiosGet'
import navigate from './components/navigate'

export default {
  name: 'App',
  components: {
    vfor,
    vfor1,
    vif,
    von,
    vmodel,
    event,
    propsparent,
    emitparent,
    slotParent,
    compKeepBig,
    anim,
    axiosGet,
    navigate
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
