import Employee from './employee.vue'
import EmployeeDetail from './employee-detail.vue';
import EmployeeList from './employee-list.vue';
import xxx from './xxx.vue';
export default {
  path: '/employee',
  name: '员工',
  component: Employee,
  redirect: '/employee/list',
  meta: {
    title: '员工'
  },
  children: [
    { path: '/employee/list', name: '员工管理', component: EmployeeList },
    {
      path: '/employee/detail/:id', name: '员工详情', component: EmployeeDetail, children: [
        { path: '/employee/detail/:id/xxx', component: xxx }
      ]
    }
  ]
}
