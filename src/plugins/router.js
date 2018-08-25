import Vue from 'vue'
import Router from 'vue-router'
import indexRouter from '../routes/index'
import projectRouter from '../routes/project'
import {ROUTER_DEFAULT_CONFIG} from '../config/index'
import {routerBeforeEachFunc} from '../config/interceptors/router'

Vue.use(Router)

// 注入默认配置和路由表
let routerInstance = new Router({
    ...ROUTER_DEFAULT_CONFIG,
    routes: [].concat(indexRouter, projectRouter),
})
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)

export default routerInstance;
