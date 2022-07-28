import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RuleView from "../views/RuleView.vue"
import NotFound from "../views/NotFound.vue";

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 };
  }
};

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/rule', component: RuleView },
  { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior
});

export default router;