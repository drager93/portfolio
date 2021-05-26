import Vue from 'vue'
import App from './App.vue'

import Antd from "ant-design-vue";
import VueRouter from "vue-router";

import routes from "./routes.js";

Vue.config.productionTip = false

Vue.use(Antd);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
