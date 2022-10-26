import { createApp } from "vue";
import { createPinia } from "pinia";

import { vIntersectionObserver } from "@vueuse/components";

import "./style.scss";
import App from "./App.vue";
const pinia = createPinia();

const app = createApp(App);
app.directive("intersection-observer", vIntersectionObserver);

app.use(pinia);
app.mount("#app");
