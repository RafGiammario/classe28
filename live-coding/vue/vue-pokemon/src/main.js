import Vue from "vue";
import App from "./App.vue";
import AxiosPlugin from "./plugins/AxiosPlugin.js";

Vue.use(AxiosPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
