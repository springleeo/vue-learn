<template>
  <div>
    <span v-if="show">我能看见吗</span>
    <span v-else>看不见</span>
    <div v-show="show">你好：JSPang</div>
  </div>
</template>

<script>
export default {
  name: "vif",
  data() {
    return {
      show: false
    }
  }
}
</script>


<style>
</style>
