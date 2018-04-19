import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home'
import Student from '@/modules/student/student'
import StudentList from '@/modules/student/student-list'
import StudentEdit from '@/modules/student/student-edit'
import Employee from '@/modules/employee/employee'
import EmployeeList from '@/modules/employee/employee-list'
import EmployeeDetail from '@/modules/employee/employee-detail'
import EnrolStudents from '@/modules/enrolStudents/enrolStudents'
import Clue from '@/modules/enrolStudents/clue'
import From from '@/modules/enrolStudents/from'
import xxx from '../modules/employee/xxx.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // 重定向
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: '首页',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/student',
      name: '学员',
      component: Student,
      redirect: '/student/list',
      meta: {
        title: '学员'
      },
      children: [
        { path: '/student/list', name: '学员管理', component: StudentList },
        { path: '/student/edit', name: '学员编辑', component: StudentEdit }
      ]
    },
    {
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
    },
    {
      path: '/enrolStudents',
      name: '招生',
      component: EnrolStudents,
      redirect: '/clue',
      meta: {
        title: '招生'
      },
      children: [
        { path: '/clue', name: '线索', component: Clue },
        { path: '/from', name: '表单', component: From }
      ]
    }
  ]
})
