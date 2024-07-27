<script setup>
 import { ref } from 'vue';
 
 const form = ref({
   requestDate: '',
   firstName: '',
   lastName: '',
   requestTitle: '',
   requestDetails: ''
 });
 
 const submitForm = () => {
   console.log('Formulario enviado:', form.value);
 };

</script>

<template>

  <div class="consultaBox">
    <img class="user" src="../assets/icons/ConTech.png" height="200px" width="200px" alt="Consulta Image">
    <h3>NEW QUERY</h3>
    <form action="login" method="post">
      <div class="inputBox">
        <input id="requestDate" type="date" v-model="form.requestDate" placeholder="Request Date" class="inputbox"
          required>
      </div>
      <div class="inputBox">
        <input id="firstName" type="text" v-model="form.firstName" placeholder="First Name" class="inputbox" required>
      </div>
      <div class="inputBox">
        <input id="lastName" type="text" v-model="form.lastName" placeholder="Last Name" class="inputbox" required>
      </div>
      <div class="inputBox">
        <select id="requestTitle" v-model="form.requestTitle" class="inputbox" required>
          <option value="" disabled selected>Choose an option</option>
          <option value="Connection issues">Connection issues</option>
          <option value="peripheral failure">Peripherals failure</option>
          <option value="password error">Password error</option>
          <option value="printing problems">Printing problems</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div class="inputBox">
        <textarea id="requestDetails" v-model="form.requestDetails" placeholder="Write your request here"
          maxlength="2000" class="textarea-box" required></textarea>
      </div>
      <div class="text-center">
        <input type="submit" value="Submit" class="btn-primary">
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  background: url(https://i.ibb.co/VQmtgjh/6845078.png) no-repeat;
  height: 100vh;
  font-family: sans-serif;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

@media screen and (max-width: 600px) {
  body {
    background-size: cover fixed;
  }
}

.consultaBox {
  margin-top: 1%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 400px;
  max-height: max-content;
  background: #000000;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
}

.user {
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
}

h3 {
  margin: 0;
  padding: 0 0 20px;
  color: rgb(240, 10, 171);
  text-align: center;
}

.inputBox {
  margin-bottom: 20px;
}

.inputbox {
  background: none;
  border: none;
  outline: none;
  border-bottom: 2px solid #262626;
  font-size: 16px;
  color: #fff;
  padding-left: 20px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 0;
}

.inputbox:focus,
.inputbox:hover {
  color: #42F3FA;
  border: 1px solid #42F3FA;
  box-shadow: 0 0 5px rgba(0, 255, 0, .3), 0 0 10px rgba(0, 255, 0, .2), 0 0 15px rgba(0, 255, 0, .1), 0 2px 0 black;
}

.textarea-box {
  background-color: #fff;
  color: #000;
  height: 120px;
  width: 425px;
  padding-left: 20px;
  border: 2px solid #262626;
  box-shadow: none;

}

.btn-primary {
  border: none;
  outline: none;
  height: 40px;

  font-size: 16px;

  background: #59238F;

  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: none;

  width: 100%;

}

.btn-primary:hover {
  background-color: #42F3FA;
}

.text-center {
  text-align: center;
}

@media(max-width: 380px) {
  .consultaBox {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>