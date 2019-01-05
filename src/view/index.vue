<template>
  <div>
    <!-- 输入框 -->
    <div>
      <base-input></base-input>
    </div>
    <!-- 按钮 -->
    <div>
      <base-button type="warning" @click="handleClick">按钮</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      name: '主要按钮'
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  methods: {
    handleClick () {
      console.log('1111')
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
div {
  margin: 20px 0;
}
</style>
