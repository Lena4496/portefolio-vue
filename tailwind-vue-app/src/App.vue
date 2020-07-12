<template>
  <div id="app">
    <Nav class="mb-6" />
    <HelloWorld msg="Welcome to Your Vue.js App" class ="text-center"/>
  </div>
</template>

<script>

import Nav from "./components/Nav.vue";
import Vue from "vue";
import "@advanced-data-machines/tailwindcss-vue/dist/tailwindcss-vue.css";
import TailwindcssVue from "@advanced-data-machines/tailwindcss-vue";

export default {
  name: "App",
  components: {
    
    Nav
  }
};

Vue.use(TailwindcssVue)
</script>

<style>