<script setup>

</script>

<template>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
    <div class="container-fluid">
      <a class="navbar-brand" href="../views/HomeView.vue">CONTECH</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/NewRequest">New Request</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/RequestList">Requests List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

<style  scoped>

.nav-item {
  margin-left: 50px;
}
</style>
