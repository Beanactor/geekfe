import Vue from 'vue';
import progressBar from './progress-bar.vue';

export default {
  install(Vue, options = {}) {
  // 注册组件
    Vue.component(progressBar.name, progressBar)
  }
}