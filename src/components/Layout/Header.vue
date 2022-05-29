<template>
  <div style="width: 100%" class="sticky-top">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card">
            <div class="d-flex justify-content-between align-items-center">
              <router-link to="/">
                <img
                  src="https://www.evertecinc.com/wp-content/uploads/2020/07/logo-evertec.png"
                  width="150"
                  alt=""
                />
              </router-link>
              <div class="d-flex flex-row mr-2">
                <router-link to="/cart" class="new">
                  <i
                    style="font-size: 40px; color: #FF6C0C"
                    class="fas fa-shopping-bag"
                  ></i>

                  <span id="checkout_items" class="checkout_items">
                    {{ val }}
                  </span>
                </router-link>
              </div>
            </div>
            <div class="mt-3 inputs">
              <i class="fa fa-search"></i>
              <input
                @keyup="searchProduct()"
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Buscar productos..."
              />
            </div>
            <div v-if="search">
              <div class="mt-3" v-for="product in products" :key="product.id">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-row align-items-end">
                    <img
                      width="60"
                      class="img-fluid"
                      :src="product.image"
                      alt=""
                    />
                    <h5 class="name-product">{{ product.name }}</h5>
                  </div>
                  <button
                    @click="add(product.id)"
                    class="btn btn-sm btn-danger"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      search: null,
      val: this.$store.state.cart.length,
      products: [],
      urlApi: process.env.VUE_APP_URL_API,
    };
  },
  mounted() {
    this.emitter.on("add", () => {
      this.val = this.$store.state.cart.length;
    });
  },
  methods: {
    async searchProduct() {
      const res = await axios.get(
        this.urlApi + "products-by-name?search=" + this.search
      );
      this.products = res.data.data.data;
    },
    add(id) {
      this.search = null;
      this.$router.push("/detail-product/" + id);
    },
  },
};
</script>
<style>
.name-product {
  font-weight: bold;
  color: rgb(33, 33, 104);
}
</style>