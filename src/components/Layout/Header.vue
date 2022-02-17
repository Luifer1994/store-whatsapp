<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="d-flex justify-content-between align-items-center">
            <img
              src="https://www.megatiendas.co/static/media/logo-megatiendas.7b88c884.png"
              width="120"
              alt=""
            />
            <div class="d-flex flex-row">
              <a href="#" class="btn new">
                <i
                  style="font-size: 30px"
                  class="fa fa-shopping-cart"
                  aria-hidden="true"
                ></i>
                <span id="checkout_items" class="checkout_items">2</span>
              </a>
            </div>
          </div>
          <div class="mt-3 inputs">
            <i class="fa fa-search"></i>
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Buscar productos..."
            />
          </div>
          <div v-if="search">
            <div class="mt-3">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-end">
                  <img
                    width="100"
                    class="img-fluid"
                    src="https://acercate-files.s3.us-west-2.amazonaws.com/2619b4ef-1058-4976-bb6a-78f00bdde2d1_3622.png"
                    alt=""
                  />
                  <h5 class="name-product">Banano maduro *LB</h5>
                </div>
                <button class="btn btn-danger">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
    };
  },
};
</script>
<style>
.name-product {
  font-weight: bold;
  color: rgb(33, 33, 104);
}
</style>