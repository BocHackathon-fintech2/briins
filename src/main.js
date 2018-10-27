import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Routes from './routes';


const router = new VueRouter({
    routes: Routes
});
Vue.config.productionTip = false


Vue.use(VueRouter);
new Vue({
  render: h => h(App),
  // router: router
}).$mount('#app')
