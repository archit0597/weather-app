<template>
  <v-container>
    <v-row justify="center">
      <v-form>
          <v-text-field @input="handleChange" class="customInput" solo dense label="Search City" v-model="searchQuery">
          </v-text-field>
        </v-form>
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
    </v-row>
    <div v-if="searchQuery.length && !showInfo">
        <v-row>
          <v-col v-for="item in filteredList" :key=item.id cols="3">
            <v-btn color="#c275b8" @click="searchResults(item.id)">{{item.name}}</v-btn>
          </v-col>
        </v-row>
    </div>
    <div v-if="showInfo">
      <v-content>
        <app-weather></app-weather>
      </v-content>
    </div>
  </v-container>
</template>
<script>
import json from '@/assets/city.list.json';

export default {
  cityList: json,
  data: ()=>({
    searchQuery: '',
    showInfo: false
  }),  
  components:{
    appWeather :() => import('./Weather.vue')
  },
  methods: {
    handleChange(){
      this.showInfo = false;
    },
    searchResults(value){
      this.showInfo = true;
      this.$store.dispatch('changeCityId',value);
      this.$router.push({path:'/weather'})
    }
  },
  computed: {
    filteredList() {
      return this.$options.cityList.filter(city => {
        return city.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      }).slice(0,50)
    }
  }
}
</script>