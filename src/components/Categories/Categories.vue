<template>
  <div class="container mb-4 mt-4">
    <div class="row">
      <div class="col">
        <div class="bbb_main_container">
          <div class="bbb_viewed_title_container">
            <h5 class="bbb_viewed_title">Categorias</h5>
          </div>
          <Carousel
            v-if="categories.length > 0"
            :itemsToShow="3.95"
            :wrapAround="true"
            :autoplay="2000"
          >
            <Slide v-for="category in categories" :key="category.id">
              <div
                class="carousel__item"
                :class="{ selected: category.id === active }"
                @click="selected(category.id)"
              >
                <img :src="category.icon" alt="" width="30" class="img-fluid" />
                <div class="category-name">
                  {{ category.name }}
                </div>
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
export default {
  name: "Categories",
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.getCategories();
  },
  data() {
    return {
      urlApi: process.env.VUE_APP_URL_API,
      categories: [],
      active: "",
      // carousel settings
    };
  },
  methods: {
    async getCategories() {
      try {
        const result = await axios.get(this.urlApi + "category-list");
        this.categories.push(...result.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    selected(category) {
      this.emitter.emit("categoryFilter", category);
      this.active = category;
    },
  },
};
</script>
<style>
.carousel__item {
  width: 120px;
  background-color: rgb(251, 251, 251);
  font-size: 60px;
  border-radius: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  padding: 5px;
}

.selected {
  background-color: rgb(250, 76, 76);
  color: rgb(255, 255, 255);
  font-weight: bold;
}
svg {
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background-color: white;
}

.blackbg {
  background-color: black;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
.category-name {
  width: 100%;
  font-size: 15px;
}
</style>
