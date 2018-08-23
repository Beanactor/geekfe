export default [{
  path: '/home',
  component: resolve => require(['../views/home'], resolve),
  meta: {
    title: '主页'
  }
}];