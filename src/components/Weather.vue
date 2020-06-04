<template>
<v-row>
    <v-col v-for="item in cityWeatherInfo" :key="item.dt" cols="4">
        <v-card class="mx-auto" elevation="5" max-width="300" color="#7ab8ff">
            <v-card-text align="center">{{ item.dt_txt  | dateFilter(item.dt_txt)}}</v-card-text>
            <v-img :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"></v-img>        
            <v-card-subtitle class="pb-0" align="center"><strong>{{item.main.temp_max | temperatureCelcius}}&deg;C /</strong>{{item.main.temp_min | temperatureCelcius}}&deg;C</v-card-subtitle>
            <v-card-text>
                <div>Humidity: {{item.main.humidity}}</div>
                <div>Weather: {{item.weather[0].description}}</div>   
            </v-card-text>
        </v-card>
    </v-col>
</v-row>
</template>
<script>
import { searchWeatherInfo } from "@/service/NetworkConnection.js";
import temperatureCelcius from '@/filters/temperature-filter.js';
export default {
    data() {
        return{
            cityId: '',
            cityWeatherInfo: []
        }
    },        
    created(){
        this.cityId = this.$store.getters.cityID;
        if(!this.cityId){
            return
        } 
        searchWeatherInfo(this.cityId).then(response=>{
            this.cityWeatherInfo = response.data.list;
        })
    },
    filters:{
        temperatureCelcius,
        dateFilter:(value)=>{
            let today = new Date(value);
            let month = today.toLocaleString('default', { month: 'long' })
            let date = today.getDate();
            return date+' '+month;
        },
    }  
}
</script>