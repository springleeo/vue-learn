<template>
  <div>
    <p v-for="(item,index) in msg" :key="index">{{item}}-{{index}}</p>
    <p v-for="item in sortItems">{{item.name}}-{{item.age}}</p>
  </div>
</template>

<script>
export default {
  name: "vfor1",
  data() {
    return {
      msg: ['a', 'b', 'c'],
      stu: [
        {
          name: 'liming',
          age: 16,
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
      ]
    }
  },
  computed: {
    sortItems: function () {
      return this.stu.sort(this.sortNumber)
    }
  },
  methods: {
    sortNumber(a, b) {
      return a.age - b.age
    }
  }

}



</script>

<style>
</style>
