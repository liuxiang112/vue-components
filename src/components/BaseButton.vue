<template>
  <div>
    <button
      v-bind="$attrs"
      v-on="$listeners"
      :class="['button-class',
      disabled ? 'button-disabled' : '',
      type ? ('button-' + type) : '',
      round ? 'button-round' : '',
      size ? 'button-' + size : '']"
      :disabled="disabled">
      <span>
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BsaeButton',
  // inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    }
  },
  data () {
    return {}
  },
  directives: {},
  methods: {
    // 向父组件传递
    // 法一，绑定$linsteners
    // 法二：$emit向父组件传递
    // handleClick (e) {
    //   this.$emit('click', e)
    // }
  },
  computed: {}
}
</script>

<style scoped>
  .button-class {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .button-disabled {
    /* color: #c0c4cc; */
    cursor: not-allowed;
    background-image: none;
    /* background-color: #fff; */
    border-color: #ebeef5;
    opacity: 0.8;
  }

  .button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  .button-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }

  .button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }

  .button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }

  .button-round {
    border-radius: 20px;
  }

  .button-mudium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }

  .button-small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

  .button-mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

</style>
