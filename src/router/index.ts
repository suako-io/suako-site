import { createWebHistory, createRouter } from "vue-router";

// Views
import Home from "../views/Home.vue";

const routes: any = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
