// main.js
import Vue from 'vue'
// 引入rem适配
import './utils/rem'

// 引入组件
import './components/common/_export';
import './components/progress-bar/index.js';

import progressBar from './components/progress-bar/index';

// 引入插件
import router from './routes/app'
import inject from './plugins/inject'
// import store from 'Plugins/store'

// 引入根组件
import App from './App'
// 挂载 window 上的全局对象,减少命名空间冲突的可能
window.GLOBAL = {};
GLOBAL.vbus = new Vue();
Vue.use(progressBar, { autoFinish: false });

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