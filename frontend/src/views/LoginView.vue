<template>
  <div>
    <h2>Login</h2>

    <template v-if="!auth.isAuthenticated">
      <form @submit.prevent="Login">
      <input type="text" v-model="user.email" name="email" placeholder="Tu email">
      <input type="password" v-model="user.password" name="password" placeholder="Tu Contraseña">
      <button type="submit">Login</button>
    </form>
    </template>

    <template v-else>
      <p>Por fin!</p>
    </template>
  </div>
</template>

<script setup>

import http from '@/services/http.js';
import { reactive } from 'vue';
import { useAuth } from '@/store/auth.js';

const auth = useAuth();

const user = reactive({
  email:'',
  password:''
});

async function Login(){
  try {
   const {data} = await http.post('/auth', user); 
   console.log(data);
   auth.setToken(data.token);
   auth.setUser(data.user);
  } catch (error) {
    console.log(error?.response?.data);
  }
}
</script>

<style>

</style>