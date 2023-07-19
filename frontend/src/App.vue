<template>
<div>
  <ul>
    <li>
      <router-link :to="{ name:'home'}">Home</router-link>
    </li>

    <li>
      <router-link :to="{ name:'login'}">Login</router-link>
    </li>

    <li>
      <router-link :to="{ name:'dashboard'}">Dashboard</router-link>
    </li>

    <li>
      <template v-if="auth.isAuthenticated">
        <p>Bienvenido! {{ auth.fullname }}</p> <button @click="Logout">Cerrar Sesión</button>
      </template>

      <template v-else>
        <p>Hola! Ingresa por favor</p>
      </template>
    </li>
  </ul>


<router-view></router-view>
</div>
</template>

<script setup>
import { useAuth } from './store/auth';
import { useRouter } from 'vue-router';

const auth = useAuth();
const router = useRouter();

function Logout() {
  auth.clear();
  router.push({name:'login'});
}
</script>