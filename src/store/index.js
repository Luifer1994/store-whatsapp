import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
/* import axios from "axios"; */

export default createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, product) {
      if (state.cart.length < 1) {
        state.cart.push(product);
      } else {
        let resultado = state.cart.find((item) => item.id === product.id);
        if (typeof resultado !== "undefined") {
          for (let index = 0; index < state.cart.length; index++) {
            if (state.cart[index].id === product.id) {
              state.cart[index] = product;
            }
          }
        } else {
          state.cart.push(product);
        }
      }
    },
    remove(state, product) {
      var newCart = state.cart.filter((item) => item.id !== product.id);
      state.cart = newCart;
    },
  },
  actions: {
    getProduct({ commit }, product) {
      commit("addToCart", product);
    },
  },
  plugins: [new VuexPersistence().plugin],
});
