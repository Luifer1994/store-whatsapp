<template>
  <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4">
                  <img
                    src="https://acercate-files.s3.us-west-2.amazonaws.com/c226181a-8bb9-4f7e-8574-fef52586beb3_17725.jpg"
                    width="400"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <router-link to="/" style="color: rgb(230, 59, 59)">
                      <i class="fa fa-long-arrow-left"></i>
                      <span class="ml-1">Atras</span>
                    </router-link>
                  </div>
                </div>
                <div class="mt-4 mb-3">
                  <span class="text-uppercase text-muted brand">Frutas</span>
                  <h3 class="text-uppercase name-product">
                    Naranja vacile * LB
                  </h3>
                  <div class="price d-flex flex-row align-items-center">
                    <span class="act-price">$2000</span>
                    <div class="ml-2">
                      <small class="dis-price">$5900</small>
                      <span class="discount"> 40%</span>
                    </div>
                  </div>
                </div>
                <p class="about">
                  Shop from a wide range of t-shirt from orianz. Pefect for your
                  everyday use, you could pair it with a stylish pair of jeans
                  or trousers complete the look.
                </p>
                <div class="sizes mt-5">
                  <h6 class="text-uppercase quantity">Cantidad</h6>

                  <input type="number" min="1" />
                </div>
                <div class="cart mt-4 align-items-center">
                  <button class="btn btn-danger text-uppercase mr-2 px-4">
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
<style>
.card {
  border: none;
}

.brand {
  font-size: 13px;
}

.act-price {
  color: red;
  font-weight: 700;
}

.dis-price {
  text-decoration: line-through;
}

.about {
  font-size: 14px;
}

.color {
  margin-bottom: 10px;
}

label.radio {
  cursor: pointer;
}

label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}

label.radio span {
  padding: 2px 9px;
  border: 2px solid #ff0000;
  display: inline-block;
  color: #ff0000;
  border-radius: 3px;
  text-transform: uppercase;
}

label.radio input:checked + span {
  border-color: #ff0000;
  background-color: #ff0000;
  color: #fff;
}

.btn-danger {
  background-color: #ff0000 !important;
  border-color: #ff0000 !important;
}

.btn-danger:hover {
  background-color: #da0606 !important;
  border-color: #da0606 !important;
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
.dis-price {
  font-size: 20px;
  color: rgb(117, 117, 117);
}
.discount {
  color: #da0606;
  font-size: 20px;
}
.quantity {
  font-weight: bold;
}
input {
  font-weight: bold;
  width: 80px;
}
</style>
