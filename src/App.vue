<template>
  <div id="app">

   <router-view></router-view>

   <!-- URL of the App :  http://localhost:8080/#/main -->
<!-- <Dashboard /> -->

      <!-- <Login /> -->
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";

import Login from "./components/Login";

export default {
  name: "app",
  components: {
    Dashboard,
    Login
  }
};
</script>

<style>
#app {
  font-family: "PT Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
