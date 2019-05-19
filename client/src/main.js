import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { createProvider } from "./vue-apollo";
import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
