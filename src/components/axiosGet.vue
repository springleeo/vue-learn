<template>
  <div>
    <li v-for="news in newsData">
      <p>{{news.title}}</p>
      <img :src="news.thumbnail_pic_s" alt>
    </li>
  </div>
</template>

<script>
export default {
  name: 'axiosGet',
  data() {
    return {
      data: '',
      newsData: []
    }
  },
  created() {
    this.$axios("http://www.wwtliu.com/sxtstu/news/juhenews.php", {
      params: {
        type: 'junshi',
        count: '30'
      }
    })
      .then(res => {
        this.newsData = res.data,
          console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
