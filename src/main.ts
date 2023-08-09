import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import ComponentA from "./components/GlobalComponent/ComponentA.vue";
import ComponentB from "./components/GlobalComponent/ComponentB.vue";
import ComponentC from "./components/GlobalComponent/ComponentC.vue";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    return { top: 0 };
  },
});
const app = createApp(App);

// 挂载全局组件，需要在mount前
app
  .component("ComponentA", ComponentA)
  .component("ComponentB", ComponentB)
  .component("ComponentC", ComponentC);

app.use(router);
app.mount("#app");
