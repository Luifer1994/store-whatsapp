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

                <div
                  v-if="product.with_discount"
                  class="
                    product_bubble product_bubble_right product_bubble_red
                    d-flex
                    flex-column
                    align-items-center
                  "
                >
                  <span>-{{ product.percentage_discount }} %</span>
                </div>
                <div class="product_info">
                  <h5 class="product_name text-uppercase">
                    {{ product.name }}
                  </h5>
                  <h6>SKU: {{ product.reference }}</h6>
                  <h6>{{ product.pum }}</h6>
                  <div class="product_price">
                    <span v-if="product.with_discount" class="price">
                      ${{ product.price_with_discount }}
                    </span>
                    <span v-else class="price"> ${{ product.price }} </span>

                    <span
                      v-if="product.with_discount"
                      class="product_price_discount"
                    >
                      ${{ product.price_discount }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="red_button add_to_cart_button">
                <a href="#">
                  <i class="fas fa-shopping-bag"></i>
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
  created() {
    this.emitter.on("categoryFilter", (id) => {
      this.category_id = id;
      this.page = 1;
      this.products = [];
      this.noResult = false;
      this.getProducts();
    });
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
              this.page +
              "&category=" +
              this.category_id
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
    height: 425px;
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
  margin-top: 45px;
}
</style>