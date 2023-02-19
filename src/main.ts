import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { VueShowdown } from "vue-showdown";

import "@tabler/core/dist/css/tabler.min.css";
import "@tabler/core/dist/js/tabler.min.js";

const app = createApp(App);

app.component("VueShowdown", VueShowdown);
app.use(router);

app.mount("#app");
