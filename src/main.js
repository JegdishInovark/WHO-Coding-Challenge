import Vue from "vue";
import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { VBModal } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./main.scss";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VBModal);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
