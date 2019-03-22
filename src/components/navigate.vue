<template>
  <div>
    <ul>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li>
        <router-link :to="urlData.urlRoot">首页</router-link>
      </li>
      <li>
        <router-link :to="urlData.urlCourse">课程</router-link>
      </li>
      <li>专家</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navigate',
  data() {
    return {
      urlData: {
        urlRoot: '/',
        urlCourse: '/course',
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
div {
  width: 100%;
  height: 50px;
  background: #f1f1f1;
}
ul {
  list-style: none;
}
li {
  float: left;
  margin: 10px 10px;
}
</style>

