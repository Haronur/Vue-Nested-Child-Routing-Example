import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import Home from './components/Home.vue';
import User from './components/User.vue';
import UserInfo from './components/UserInfo.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    {
      path: '/user', component: User,
      children: [
                  //UserInfo component is rendered when /user/:id is matched
                  { path: ':id', component: UserInfo, props: true }
                ]
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')