import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Item from "../components/Item.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/adicionar",
    name: "Adicionar",
    component: () => import("../views/Adicionar.vue"),
  },
  {
    path: "/item/:id",
    name: "Item",
    props: true,
    component: Item
  },
  // {
  //   path: "/teste",
  //   name: "Adicionar",
  //   component: () => import("../views/Adicionar.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
