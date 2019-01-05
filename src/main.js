// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaseInput from './components/BaseInput.vue'
import BaseButton from './components/BaseButton.vue'

Vue.config.productionTip = false
// 引入input组件
Vue.component('base-input', BaseInput)
Vue.component('base-button', BaseButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
