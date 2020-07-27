import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import Vue2Editor from "vue2-editor";
import vuetify from './plugins/vuetify';

// logger 
import Logger from './helpers/loger';
Vue.use(Logger, {
  setGlobal: true
})


let vm = new Vue({
  router,
  vuetify,
  Vue2Editor,
  render: h => h(App),

}).$mount('#app')