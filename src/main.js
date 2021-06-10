import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
createApp(App)
  .use(store)
  .use(router)
  .use(Toast)
  .use(VueAxios, axios)
  .mount("#app");
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
// Import the CSS or use your own!
