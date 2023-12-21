import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/owngroup",
      name: "owngroup",
      component: () => import("../views/OwnGroupView.vue"),
    },
    {
      path: "/joingroup",
      name: "joingroup",
      component: () => import("../views/JoinGroupView.vue"),
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("../views/LogoutView.vue"),
    },
    {
      path: "/personal",
      name: "personal",
      component: () => import("../views/PersonalView.vue"),
    },
    {
      path: "/personalchat",
      name: "personalchat",
      component: () => import("../views/PersonalChatView.vue"),
    },
  ],
});

export default router;
