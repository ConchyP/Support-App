<script setup>

import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router'
import QueriesList from './components/QueriesList.vue';


</script>

<template>
 <div id="app">
    <NavBar />
    <router-view />
  </div>


<main>

  

</main>

<div id="app">
  <!-- <Footer /> -->
  <router-view />
</div>

</template>

<style lang="scss" scoped>


</style>
