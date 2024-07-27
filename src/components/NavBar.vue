<script setup>


</script>

<template>
  
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
    <div class="container-fluid">
      <img src="../assets/icons/image.png" height= 60px; width= 200px; alt="logo CONTECH">
      <a class="navbar-brand" href=./TheWelcome.vue>HOLA</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span> 
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/Login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/NewQuery">New Query</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/QueriesList">Queries list</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/QueryEdit">Query edit</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 
</template>

<style lang="scss" scoped>

ul {
  margin-left: 600px;
}

</style>
