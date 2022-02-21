<template>
  <div class="container mt-5 mb-5">
    <div class="card">
      <div class="col-lg-12 col-md-12 col-12 table-responsive p-0">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 60%">Producto</th>
              <th style="width: 12%">Precio</th>
              <th style="width: 15%">Cantidad</th>
              <th style="width: 18%">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td data-th="Product">
                <div class="row">
                  <div class="col-md-3 text-left">
                    <img
                      :src="product.image"
                      alt=""
                      class="img-fluid d-md-block rounded mb-2 shadow"
                    />
                  </div>
                  <div class="col-md-9 text-left mt-sm-2">
                    <h5 class="product-name">{{ product.name }}</h5>
                  </div>
                </div>
              </td>
              <td data-th="Price">
                <h5 class="price">${{ product.price }}</h5>
              </td>
              <td data-th="Quantity">
                <input
                  style="width: 50px"
                  type="number"
                  class="text-center"
                  v-model="quantitys[products.indexOf(product)].quantity"
                  min="1"
                />
              </td>
              <td class="actions">
                <div class="btn-group btn-group-sm" role="group">
                  <button
                    type="button"
                    @click="update(product)"
                    class="btn btn-success"
                  >
                    <i class="fas fa-sync"></i>
                  </button>
                  <button
                    type="button"
                    @click="remove(product)"
                    class="btn btn-danger"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="float-right text-right">
          <h5>Total:</h5>
          <h3>$ {{ total }}</h3>
        </div>
      </div>
    </div>
    <div class="mt-4 d-flex justify-content-end">
      <button class="btn btn-danger">Realizar pedido</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      products: {},
      quantitys: [],
      total: null,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.products = this.$store.state.cart;
      this.products.forEach((element) => {
        this.quantitys.push(element);
        this.total += element.price * element.quantity;
      });
    },
    update(item) {
      this.$store.dispatch("getProduct", item);
      this.getProducts();
      this.emitter.emit("add");
    },
    remove(product) {
      this.$store.commit("remove", product);
      this.getProducts();
      this.emitter.emit("add");
    },
  },
};
</script>
<style>
.product-name {
  font-weight: bold;
}
.price {
  font-weight: bold;
  font-size: 20px;
}
.btn {
  cursor: pointer;
  border-radius: 5px;
}
</style>