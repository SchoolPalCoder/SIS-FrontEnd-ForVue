import Vue from 'vue';
import moment from 'moment';

Vue.filter('date', (v) => {
  return moment(v).format('YYYY-MM-DD')
})
