import { createApp } from "vue";
import App from "./App.vue";
import ComponentA from "./components/GlobalComponent/ComponentA.vue";
import ComponentB from "./components/GlobalComponent/ComponentB.vue";
import ComponentC from "./components/GlobalComponent/ComponentC.vue";

const app = createApp(App);

// 挂载全局组件，需要在mount前
app
  .component("ComponentA", ComponentA)
  .component("ComponentB", ComponentB)
  .component("ComponentC", ComponentC);

app.mount("#app");
