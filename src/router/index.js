import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home'
import Student from '@/modules/student/router'
import Employee from '../modules/employee/router';
import EnrolStudents from '@/modules/enrolStudents/router';
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
    Student,
    Employee,
    EnrolStudents
  ]
})
