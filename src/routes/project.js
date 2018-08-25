export default [{
    path: '/projectDetail',
    component: resolve => require(['../views/project/projectDetail'], resolve),
    meta: {
        title: '项目详情'
    }
}];