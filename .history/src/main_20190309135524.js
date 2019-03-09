// main.js
import Vue from 'vue'
// 引入rem适配
import './utils/rem'

// 引入组件
import './components/common/_export';

import progressBar from './components/progress-bar';

// 引入插件
import router from './routes/app'
import inject from './plugins/inject'
// import store from 'Plugins/store'

// 引入根组件
import App from './App'
Vue.use(progressBar, { autoFinish: false });
// 挂载 window 上的全局对象,减少命名空间冲突的可能
window.global = {};
global.vbus = new Vue();

Vue.use(inject)

// render
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  //  store,
  template: '<App/>',
  components: { App }
})