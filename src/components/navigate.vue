<template>
  <div>
    <ul>
      <li>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link :to="urlData.url">routers</router-link>
      </li>
      <li>
        <router-link :to="urlData.url1">routers1</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routers from '../components/routers'
import routers1 from '../components/routers1'

export default {
  name: 'navigate',
  data() {
    return {
        urlData:{
          url:'/',
          url1:'/hello',
        }
    }
  },
  components: {

  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

ul li {
  display: inline;
}
</style>

