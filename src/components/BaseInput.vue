<template>
  <div>
    {{ label }}
    <div class="input-box">
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-model="inputValue"
        v-on="inputListeners"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :autofocus="autofocus"
        ref='input'
        class="input-class" />
      <i
        class="iconfont icon-qingchu2 clear-class"
        v-show="isClearShow"
        @click="handleClear">
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-input',
  inheritAttrs: false,
  // props: ['label', 'value', 'length'],
  props: {
    label: { type: String },
    value: { type: String },
    size: {
      type: Number,
      default: 150
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.inputValue = this.value || ''
    })
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    handleClear () {
      if (this.inputValue) {
        this.inputValue = ''
        this.$refs.input.focus()
      }
    }
  },
  computed: {
    inputListeners: function () {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    },
    isClearShow () {
      if (this.inputValue) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style scoped>
  .input-box {
    display: inline-block;
    position: relative;
  }

  .input-class {
    height: 20px;
    line-height: 20px;
    padding: 6px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    color: #606266;
    outline: none;
  }

  .input-class:hover {
    border: 1px solid #c0c4cc;
  }

  .clear-class {
    position: absolute;
    right: 10px;
    top: 9px;
    color: rgba(153, 153, 153, 0.8);
  }
</style>
