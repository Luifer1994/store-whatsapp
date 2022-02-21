import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetailProduct from "@/components/Products/DetailProduct";
import Cart from "@/components/Cart/Cart";

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
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
