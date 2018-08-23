// main.js
import Vue from 'vue'

// 挂载 window 上的全局对象,减少命名空间冲突的可能
window.GLOBAL = {};
GLOBAL.vbus = new Vue()

// import 'Components'// 全局组件注册
//import 'Directives' // 指令

// 引入插件
import router from './plugins/router'
import inject from './plugins/inject'
//import store from 'Plugins/store'
// 引入组件库及其组件库样式 
// 不需要配置的库就在这里引入 
// 如果需要配置都放入 plugin 即可
//import VueOnsen from 'vue-onsenui'
//import 'onsenui/css/onsenui.css'
//import 'onsenui/css/onsen-css-components.css'
// 引入根组件
import App from './App'
Vue.use(inject)
//Vue.use(VueOnsen)

// render
new Vue({
    el: '#app',
    router,
//  store,
    template: '<App/>',
    components: { App }
})