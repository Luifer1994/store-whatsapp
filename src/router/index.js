import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import DetailProduct from "@/components/Products/DetailProduct";
import Cart from "@/components/Cart/Cart";
import CreateOrder from "@/components/Orders/Create";

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
  {
    path: "/create-order",
    name: "CreateOrder",
    component: CreateOrder,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
