import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import QueriesList from "@/components/QueriesList.vue";
import NewQueryView from "@/views/NewQueryView.vue";
import QueryEdit from "@/components/QueryEdit.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/newQuery",
      name: "newQuery",
      component: NewQueryView,
    },
    {
      path: "/queriesList",
      name: "queriesList",
      component: QueriesList
    },
    {
      path: "/queryEdit",
      name: "queryEdit",
      component: QueryEdit
    },
  ],
});

export default router;
