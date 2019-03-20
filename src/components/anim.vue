<template>
  <div>
    <button @click="showHide">按钮</button>
    <transition name="fade">
      <p v-show="show">hah</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "anim",
  data() {
    return {
      show: true
    }
  },
  methods: {
    showHide() {
      this.show = !this.show
    }
  }
}
</script>

<style>
.fade-enter,
.fade-leave-to {
  transform: translate(10px, -10px);
}
.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}
.fade-enter-to,
.fade-leave {
  transform: translate(-10px, 10px);
}
</style>
