import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css';

import {router} from './router'; 
import {store} from './store'; 

Vue.config.productionTip = false

const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


new Vue({
  render: h => h(App),
  router,
  store

}).$mount('#app')
