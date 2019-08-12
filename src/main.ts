import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import PortalVue from 'portal-vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { LayoutPlugin } from 'bootstrap-vue';
import { ModalPlugin } from 'bootstrap-vue';
import { CardPlugin } from 'bootstrap-vue';
import { VBScrollspyPlugin } from 'bootstrap-vue';
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue';


Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
