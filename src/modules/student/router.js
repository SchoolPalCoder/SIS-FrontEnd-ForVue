
export default {
  path: '/student',
  name: '学员',
  component: () => import("./student.vue"),
  redirect: '/student/list',
  meta: {
    title: '学员'
  },
  children: [
    {
      path: '/student/list',
      name: '学员管理',
      component: () => import("./student-list.vue")
    },
    { path: '/student/edit', name: '学员编辑', component: () => import("./student-edit.vue") }
  ]
}
