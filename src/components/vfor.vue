<template>
  <div class="vfor">
    <h1>{{msg}}</h1>
    <p v-for="item in sortItems">{{item}}</p>
    <ul>
      <li v-for></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vfor',
  data() {
    return {
      msg: [54, 12, 32, 45, 67, 89],
      stu: [
        {
          name: 'liming',
          age: 12,
          lang: 'java'
        },
        {
          name: 'xiaoli',
          age: 15,
          lang: 'php'
        },
        {
          name: 'huahua',
          age: 23,
          lang: 'python'
        }
      ],
      s1: { '1': '2' }
    }
  },
  computed: {
    sortItems: function () {
      return this.msg.sort(sortNumber)
    }
  },
  methods: {

  }

}
function sortNumber(a, b) {
  return a - b
}
</script>

<style>
</style>

