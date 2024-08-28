import { createRouter, createWebHistory } from "vue-router";


import NewRequestView from "@/views/NewRequestView.vue";
import HomeView from "@/views/HomeView.vue";
import RequestListView from "@/views/RequestListView.vue";
import LoginView from "@/views/LoginView.vue";
import RequestEditView from "@/views/RequestEditView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/newRequest",
      name: "newRequest",
      component: NewRequestView,
    },
    {
      path: "/requestList",
      name: "requestList",
      component: RequestListView
    },
    {
      path: "/requestEdit",
      name: "requestEdit",
      component: RequestEditView
    },
  ],
});

export default router;
