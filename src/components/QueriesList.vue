<script setup>
import { ref, onMounted, computed } from 'vue';

const queries = ref([]);

const fetchQueries = async () => {
  try {
    // Datos simulados
    queries.value = [
      {
        "_id": "1",
        "createdAt": "2024-07-27",
        "firstName": "John",
        "lastName": "Doe",
        "requestTitle": "Connection issues",
        "requestDetails": "Unable to connect to the internet."
      },
      {
        "_id": "2",
        "createdAt": "2024-07-26",
        "firstName": "Jane",
        "lastName": "Smith",
        "requestTitle": "Printing problems",
        "requestDetails": "Printer is out of ink."
      }
    ];
  } catch (error) {
    console.error('Error fetching queries:', error);
  }
};

// Fetch queries when the component is mounted
onMounted(() => {
  fetchQueries();
});

// Computed property to sort queries by date
const sortedQueries = computed(() => {
  return [...queries.value].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
});

// Placeholder methods for editing and deleting queries
const editQuery = (id) => {
  console.log('Edit query with id:', id);
  // Implement edit functionality
};

const deleteQuery = (id) => {
  console.log('Delete query with id:', id);
  // Implement delete functionality
};
</script>

<template>
  <div class="queriesList">
    <h3>Queries List</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Request Title</th>
          <th>Request Details</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="query in sortedQueries" :key="query._id">
          <td>{{ query._id }}</td>
          <td>{{ query.createdAt }}</td>
          <td>{{ query.firstName }}</td>
          <td>{{ query.lastName }}</td>
          <td>{{ query.requestTitle }}</td>
          <td>{{ query.requestDetails }}</td>
          <td>
            <button @click="editQuery(query._id)" class="btn-edit">Edit</button>
            <button @click="deleteQuery(query._id)" class="btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>

.queriesList {
  margin-top: 2%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background: #000000;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
}

h3 {
  margin: 0;
  padding: 0 0 20px;
  color: rgb(240, 10, 171);
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #333;
}

th {
  background-color: #444;
  color: #fff;
}

td {
  background-color: #1a1a1a;
}

button {
  margin-left: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-edit {
  background-color:#59238F;
  color: white;
}

.btn-delete {
  background-color:rgb(240, 10, 171);
  color: #fff;
}

.btn-edit:hover {
  background-color: #31d3dd;
}

.btn-delete:hover {
  background-color: #c62828;
}

@media (max-width: 768px) {
  .queriesList {
    width: 90%;
    padding: 15px;
  }

  table {
    font-size: 0.9em;
  }
}
</style>

