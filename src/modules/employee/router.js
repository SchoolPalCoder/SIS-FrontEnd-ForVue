
export default {
  path: '/employee',
  name: '员工',
  component: () => import('./employee.vue'),
  redirect: '/employee/list',
  meta: {
    title: '员工'
  },
  children: [
    { path: '/employee/list', name: '员工管理', component: () => import('./employee-list.vue') },
    {
      path: '/employee/detail/:id', name: '员工详情', component: () => import('./employee-detail.vue'), children: [
        { path: '/employee/detail/:id/xxx', component: () => import('./xxx.vue') }
      ]
    }
  ]
}
