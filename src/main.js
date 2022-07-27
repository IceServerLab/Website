import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';

import '@/assets/base.css';
import '@/assets/base.js';

const app = createApp(App);

app.use(router);
app.mount("#app");
