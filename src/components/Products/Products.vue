<template>
  <infinite-scroll @infinite-scroll="getProducts" :noResult="noResult">
    <div class="container">
      <div class="row items">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-6 col-sm-6 col-md-3 col-lg-3"
        >
          <router-link :to="'/detail-product/' + product.id">
            <div class="product-item men">
              <div class="product discount product_filter">
                <div class="product_image">
                  <img :src="product.image" alt="" />
                </div>
                <div class="product_info">
                  <h5 class="product_name text-uppercase">
                    {{ product.name }}
                  </h5>
                 
                 
                  <div class="product_price">
                    <span class="price"> ${{ product.price }} </span>

                   
                  </div>
                </div>
              </div>
              <div class="red_button add_to_cart_button">
                <a href="#">
                  <i class="fas fa-shopping-bag m-1"></i>
                  Agregar al carrito
                </a>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </infinite-scroll>
</template>
<script>
import axios from "axios";
import InfiniteScroll from "infinite-loading-vue3";
export default {
  name: "Products",
  components: {
    InfiniteScroll,
  },
  data() {
    return {
      urlApi: process.env.VUE_APP_URL_API,
      products: [],
      page: 1,
      noResult: false,
      message: "",
      category_id: 0,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        if (!this.noResult) {
          const result = await axios.get(
            this.urlApi +
              "products-list?page=" +
              this.page
          );
          if (result.data.data.data.length) {
            this.products.push(...result.data.data.data);
            this.page++;
          } else {
            this.noResult = true;
          }
        }
      } catch (err) {
        this.noResult = true;
      }
    },
  },
};
</script>
<style>
@media only screen and (min-width: 360px) {
  .product_image {
    width: 150px;
  }
  .product-item {
    width: 160px;
    height: 320px;
  }
}
@media only screen and (min-width: 390px) {
  .product_image {
    width: 180px;
  }

  .product-item {
    width: 180px;
    height: 310px;
  }
}
@media only screen and (min-width: 414px) {
  .product_image {
    width: 185px;
  }

  .product-item {
    width: 190px;
    height: 310px;
  }
}
@media only screen and (min-width: 700px) {
  .product_image {
    width: 260px;
  }

  .product-item {
    width: 260px;
    height: 390px;
  }
}
.product_name {
  color: rgb(35, 35, 153);
  font-weight: bold;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
}
.add_to_cart_button {
  margin-top: 10px;
  background-color: #FF6C0C;
}
</style>