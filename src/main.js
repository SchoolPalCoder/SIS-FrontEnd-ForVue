// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import App from './App'
import router from './router'
import store from './store'
import '../src/assets/reset.css'
Vue.config.productionTip = false
import ElementUi from 'element-ui'//这里我们仅引用了Button, Select这两个组件
import 'element-ui/lib/theme-chalk/index.css'
import i18n from 'vue-i18n';
import './filters';
/* eslint-disable no-new */
import '../src/components/directives'
Vue.use(ElementUi);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 1 };

router.afterEach((to, from) => {
  if (to.matched[0].meta.title) {
    document.title = to.matched[0].meta.title;
  }
});

Vue.prototype.$http = axios;
let a = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (from.fullPath.indexOf("edit") > -1) {
    a.$confirm("当前操作将离开该页面，确定离开吗？", "提示", {
      confirmButtonText: "确定离开",
      cancelButtonText: "继续编辑",
      type: "warning"
    })
      .then(() => {
        next();
      })
      .catch(() => {
        next(false);
      });
  } else {
    next();
  }
});
