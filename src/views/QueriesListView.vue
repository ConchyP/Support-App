<!-- <script setup>
import RequestList from '@/components/RequestList.vue';
</script>

<template>
  <main>
    <RequestList />
  </main>
</template>

<style lang="css" scoped>

</style> -->

<!-- <script>
  export default {
    data() {
      return {
        incidencias: [],
      }
    },
    async created() {
      try {
        const response = await fetch('http://localhost:8080/api/v1/incidence');
        if (!response.ok) {
          alert(`HTTP error! status: ${response.status}`);
        } else {
          this.incidencias = await response.json();
        }
      } catch (error) {
        alert(`Fetch error: ${error}`);
      }
    },
    methods: {
        createIncidence() {
            this.$router.push('/createincidence');
      },
        editarIncidencia(id) {
           this.$router.push({ name: 'editIncidence', params: { id: id } });
      },

      async deleteIncidence(id) {
        try {
          const response = await fetch(`http://localhost:8080/api/v1/incidence/deleteIncidence/${id}`, {
            method: 'DELETE',
          });
          if (!response.ok) {
            alert(`HTTP error! status: ${response.status}`);
          } else {
            this.incidencias = this.incidencias.filter(incidencia => incidencia.idIncidence !== id);
          }
        } catch (error) {
          alert(`Fetch error: ${error}`);
        }
      },
      verIncidencia(id) {
        this.$router.push({ name: 'incidenceView', params: { id: id } });
      }
    }
  }
</script>

<template>
  <div class="incidencias">
    <h1>LISTA DE INCIDENCIAS</h1>
    <button @click="createIncidence">CREAR NUEVA</button>
    <div class="incidencia" v-for="incidencia in incidencias" :key="incidencia.idIncidence">
      <h2>{{ incidencia.titleIncidence }}</h2>
      <div class="iconos">
        <img src="../assets/icons/MdiPen.svg" alt="Editar" @click="editarIncidencia(incidencia.idIncidence)">
        <img src="../assets/icons/MdiTrashCan.svg" alt="Borrar" @click="deleteIncidence(incidencia.idIncidence)">
        <img src="../assets/icons/MdiEye.svg" alt="Ver" @click="verIncidencia(incidencia.idIncidence)">
      </div>
    </div>
  </div>
</template> -->
<script setup>


import QueriesList from '@/components/QueriesList.vue';


</script>

<template>

  <main>

    <QueriesList />

  </main>

</template>

<style lang="scss" scoped>
 
</style>