import { createApp } from "vue";
import TDesign from "tdesign-vue-next";
import { createPinia } from "pinia";
import "./style.css";
import "tdesign-vue-next/es/style/index.css";

import App from "./App.vue";

const app = createApp(App);
app.use(TDesign);
app.use(createPinia());
app.mount("#app");
