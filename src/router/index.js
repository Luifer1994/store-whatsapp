import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetailProduct from "@/components/Products/DetailProduct";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/detail-product/:id",
    name: "DetailProdut",
    component: DetailProduct,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
