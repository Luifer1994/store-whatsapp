<template>
  <Header></Header>
  <Categories v-if="this.$route.name !== 'DetailProdut'"></Categories>
  <router-view />
  <Footer></Footer>
</template>
<script>
import Header from "@/components/Layout/Header";
import Categories from "@/components/Categories/Categories";
import Footer from "@/components/Layout/Footer";
export default {
  components: {
    Header,
    Categories,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
}

.btn {
  border-radius: 25px;
}

.new {
  font-size: 12px;
}

.card {
  padding: 20px;
  border: none;
}

.active {
  background: #f6f7fb !important;
  border-color: #f6f7fb !important;
  color: #000 !important;
  font-size: 12px;
}

.inputs {
  position: relative;
}

.form-control {
  text-indent: 15px;
  border: none;
  height: 45px;
  border-radius: 0px;
  border-bottom: 1px solid #eee;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #eee;
  outline: 0;
  box-shadow: none;
  border-bottom: 1px solid blue;
}

.form-control:focus {
  color: blue;
}

.inputs i {
  position: absolute;
  top: 14px;
  left: 4px;
  color: #b8b9bc;
}

.star {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  margin-right: 10px;
  border-radius: 5px;
}

.time-text {
  font-size: 12px;
  color: #989898;
}

.dots {
  height: 7px;
  width: 7px;
  background-color: #eee;
  display: flex;
  border-radius: 50%;
  margin-left: 7px;
  margin-right: 7px;
}

.yellow {
  color: #ffab2e;
}

.content-text-1 {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffe7cc;
  color: #ffa03a;
  font-weight: 700;
}

.blue {
  color: #6ecce6;
}

.content-text-2 {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e2f5fa;
  color: #6ecce6;
  font-weight: 700;
}

.dark-blue {
  color: #572ce8;
}

.content-text-3 {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #572ce86b;
  color: #572ce8;
  font-weight: 700;
}

* {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}

body {
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: 400;
  background: #f6f6f6;
  color: #000000;
}

div {
  display: block;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.bbb_viewed {
  padding-top: 20px;
  padding-bottom: 60px;
}

.bbb_main_container {
  background-color: #fff;
  padding: 11px;
}

.bbb_viewed_title_container {
  border-bottom: solid 1px #dadada;
}

.bbb_viewed_title {
  margin-bottom: 16px;
  margin-top: 8px;
}

.bbb_viewed_nav_container {
  position: absolute;
  right: -5px;
  bottom: 14px;
}

.bbb_viewed_nav {
  display: inline-block;
  cursor: pointer;
}

.bbb_viewed_nav i {
  color: #dadada;
  font-size: 18px;
  padding: 5px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.bbb_viewed_nav:hover i {
  color: #606264;
}

.bbb_viewed_prev {
  margin-right: 15px;
}

.bbb_viewed_slider_container {
  padding-top: 13px;
}

.bbb_viewed_item {
  width: 100%;
  background: #ffffff;
  border-radius: 2px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
}

.bbb_viewed_image {
  width: 150px;
  height: 150px;
}

.bbb_viewed_image img {
  display: block;
  max-width: 100%;
}

.bbb_viewed_content {
  width: 100%;
  margin-top: 25px;
}

.bbb_viewed_price {
  font-size: 16px;
  color: #000000;
  font-weight: 500;
}

.bbb_viewed_item.discount .bbb_viewed_price {
  color: #df3b3b;
}

.bbb_viewed_price span {
  position: relative;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 8px;
}

.bbb_viewed_price span::after {
  display: block;
  position: absolute;
  top: 6px;
  left: -2px;
  width: calc(100% + 4px);
  height: 1px;
  background: #8d8d8d;
  content: "";
}

.bbb_viewed_name {
  margin-top: 3px;
}

.bbb_viewed_name a {
  font-size: 14px;
  color: #000000;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}

.bbb_viewed_name a:hover {
  color: #0e8ce4;
}

.item_marks {
  position: absolute;
  top: 18px;
  left: 18px;
}

.item_mark {
  display: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  line-height: 36px;
  text-align: center;
}

.item_discount {
  background: #df3b3b;
  margin-right: 5px;
}

.item_new {
  background: #0e8ce4;
}

.bbb_viewed_item.discount .item_discount {
  display: inline-block;
}

.bbb_viewed_item.is_new .item_new {
  display: inline-block;
}

.product-item {
  background-color: #fff;
  border: none;
  margin: auto;
  margin-bottom: 5px;
}

.benefit_item {
  background-color: #fff;
}
</style>
