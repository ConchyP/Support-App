<script setup>

import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
 <header>
    <NavBar />
    <Nav></Nav>
 </header>

 <RouterView />
<Footer />
<footer></footer>

</template>

<style scoped>


</style>
