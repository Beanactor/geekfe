export default [{
  path: '/',
  component: resolve => require(['../views/home'], resolve),
  meta: {
    title: '主页'
  }
}, {
  path: '/home',
  component: resolve => require(['../views/home'], resolve),
  meta: {
    title: '主页'
  }
}, {
  path: '/projectDetail',
  component: resolve => require(['../views/projectDetail'], resolve),
  meta: {
    title: '项目详情'
  }
}];