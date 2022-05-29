<template>
  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4">
                  <img :src="product.image" width="400" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <router-link to="/" style="color:#FF6C0C">
                      <i class="fas fa-arrow-left"></i>
                      <span class="ml-1">Atras</span>
                    </router-link>
                  </div>
                </div>
                <div class="mt-4 mb-3">
                  <h3 class="text-uppercase name-product">
                    {{ product.name }}
                  </h3>
                  <div class="price d-flex flex-row align-items-center">
                    <span class="act-price"> $ {{ product.price }} </span>
                  </div>
                </div>
                <ul>
                  <li>Descripción: {{ product.description }}</li>
                </ul>

                <div class="sizes mt-5">
                  <h6 class="text-uppercase quantity">Cantidad</h6>

                  <input type="number" min="1" v-model="quantity" />
                </div>
                <div class="cart mt-4 align-items-center">
                  <button
                    @click="add()"
                    class="btn btn-warning text-uppercase text-white mr-2 px-4"
                  >
                    <i class="fas fa-shopping-bag"></i>
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
  beforeMount() {
    this.getProduct();
  },
  data() {
    return {
      urlApi: process.env.VUE_APP_URL_API,
      product: {},
      quantity: 1,
      category: "",
    };
  },
  methods: {
    async getProduct() {
      this.exist();
      const res = await axios.get(
        this.urlApi + "products-detail/" + this.$route.params.id
      );
      this.product = res.data.data;
      this.category = res.data.data.category.name;
    },
    add() {
      var item = new Object();
      item.id = this.product.id;
      item.name = this.product.name;
      item.image = this.product.image;
      item.price = this.product.price;
      item.quantity = this.quantity;
      this.$store.dispatch("getProduct", item);
      this.emitter.emit("add");
    },
    exist() {
      if (this.$store.state.cart) {
        this.$store.state.cart.forEach((element) => {
          if (element.id == this.$route.params.id) {
            this.quantity = element.quantity;
          }
        });
      }
    },
  },
};
</script>


<style>
.card {
  border: none;
}

.brand {
  font-size: 13px;
}

.act-price {
  color: #FF6C0C;
  font-weight: 700;
}

.btn-danger:focus {
  box-shadow: none;
}

.cart i {
  margin-right: 10px;
}
.ml-1 {
  font-weight: bold;
}
.act-price {
  font-weight: bold;
  font-size: 30px;
}
.quantity {
  font-weight: bold;
}
input {
  font-weight: bold;
  width: 80px;
}
</style>
