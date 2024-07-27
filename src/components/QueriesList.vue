<script setup>

import { ref } from 'vue';

const queries = ref([]);

// Function to fetch queries from the backend
const fetchQueries = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/queries');
    queries.value = await response.json();
  } catch (error) {
    console.error('Error fetching queries:', error);
  }
};

// Fetch queries when the component is mounted
fetchQueries();

</script>

<template>
  <div class="queriesList">
    <h3>Queries List</h3>
    <ul>
      <li v-for="query in queries" :key="query._id">
        {{ query.createdAt }} - {{ query.firstName }} {{ query.lastName }}: {{ query.requestTitle }} - {{ query.requestDetails }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

</style>
