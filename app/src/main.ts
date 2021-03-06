import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/index";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import i18n from "./i18n";
import "./styles/custom.scss";
import BaseSpinner from "./components/BaseSpinner.vue";

createApp(App)
  .use(i18n)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(i18n)
  .component("BaseSpinner", BaseSpinner)
  .mount("#app");
