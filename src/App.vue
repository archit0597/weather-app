<template>
<div id="app">
  <v-app>
    <v-app-bar app color="#ff9400" dark>
        <router-link to="/" style="color:white;text-decoration: none"><strong>Weather Forecast</strong></router-link>
    </v-app-bar>
    <v-content>
      <app-dashboard></app-dashboard>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import appDashboard from './components/Dashboard.vue';

export default {
  name: 'App',

  components: {
    appDashboard,
  },

  data: () => ({
    //
  }),
};
</script>
<style>

</style>
