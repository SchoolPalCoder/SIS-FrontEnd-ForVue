import EnrolStudents from './enrolStudents.vue';
import Clue from './clue.vue';
import From from './from.vue'
export default {
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
