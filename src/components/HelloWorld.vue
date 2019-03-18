<template>
  <div class="hello">
    <h1 class="msg">{{ msg }}</h1>
    <h2 id="func">{{1+2}}</h2>
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    <p v-bind:title="props">props</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hello: '<p>hello</p>',
      props:'props'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.msg{
    color: red;
}
#func{
  color: red; 
}
</style>
