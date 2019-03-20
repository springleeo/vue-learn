<template>
  <div class="son">
    <h6>子组件</h6>
    <slot name="s1"></slot>
    <hr>
    <slot name="s2"></slot>
    <hr>
    <slot name="s3" text="数据传递"></slot>
  </div>
</template>

<script>
export default {
  name: 'son',
  data() {
    return {
    }
  }
}
</script>

<style>
p {
  color: crimson;
}
</style>
