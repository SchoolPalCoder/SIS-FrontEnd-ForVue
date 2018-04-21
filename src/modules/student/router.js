import Student from './student.vue';
import StudentList from './student-list.vue';
import StudentEdit from './student-edit.vue';

export default {
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
}
