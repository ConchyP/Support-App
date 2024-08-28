<script setup>
import { ref, onMounted, computed } from 'vue';


const requests = ref([]);


const fetchRequests = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/v1/requests/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    requests.value = await response.json();
    console.log(requests.value);
  } catch (error) {
    console.error('Error fetching requests:', error);
  }
};


onMounted(() => {
  fetchRequests();
});


const sortedRequests = computed(() => {
  return [...requests.value].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
});


const editRequest = (idRequest) => {
  console.log('Edit request with id:', idRequest);
};


const deleteRequest = (idRequest) => {
  console.log('Delete request with id:', idRequest);
};


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>

<template>
  <div class="requests">
    <h3>REQUESTS</h3>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>NAME</th>
          <th>TYPE</th>
          <th>DESCRIPTION</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in sortedRequests" :key="request.id">
          <td>{{ request.id }}</td>
          <td>{{ formatDate(request.dateRequest) }}</td>
          <td>{{ request.name }}</td>
          <td>{{ request.typeRequest }}</td>
          <td>{{ request.description }}</td>
          <td>
            <button @click="editRequest(request.idRequest)" class="btn-edit">EDIT</button>
            <button @click="deleteRequest(request.idRequest)" class="btn-delete">DELETE</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style  scoped>

.request {
  margin-top: 10%;
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
  color: white;
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
  width: 80px;
}

.btn-delete {
  background-color:rgb(240, 10, 171);
  color: #fff;
  width: 80px;
}

.btn-edit:hover {
  background-color: #31d3dd;
}

.btn-delete:hover {
  background-color: #c62828;
}

@media (max-width: 768px) {
  .request {
    width: 90%;
    padding: 15px;
  }

  table {
    font-size: 0.9em;
  }
}
</style>

