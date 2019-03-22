<template>
  <div>
    <navigate></navigate>
    <div class="left">
      <p>可选课程</p>
      <li>
        <router-link :to="urlCourse.urlJava">java</router-link>
      </li>
      <li>
        <router-link :to="urlCourse.urlPython">python</router-link>
      </li>
      <li>
        <router-link :to="urlCourse.urlVue">vue</router-link>
      </li>
    </div>
    <div class="right">
      <!-- 有几级路由，就有几个router-view -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigate from '@/components/navigate'
export default {
  name: 'course',
  data() {
    return {
      urlCourse: {
        urlJava: '/course/java',
        urlPython: '/course/python',
        urlVue: '/course/vue'
      }
    }
  },
  components: {
    navigate
  }
}
</script>

<style>
li {
  list-style: none;
}
.left,
.right {
  float: left;
}
.right {
  margin: 20px;
}
</style>
