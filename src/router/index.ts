import { createWebHistory, createRouter } from "vue-router";

// Views
import Home from "../views/Home.vue";
import SuakoDownload from "../views/Projects/SuakoDownload.vue";

const routes: any = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/suako-download",
    name: "Suako Download",
    component: SuakoDownload,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
