import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll);

import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

Vue.component(
  CursorFx.name,
  CursorFx
);

library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  vueSmoothScroll,
  render: h => h(App)
}).$mount('#app')
