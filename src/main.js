import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false;

// vue devtool에서 상세 정보 보이게 하는 구문
Vue.config.devtools = process.env.NODE_ENV === 'development';

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


