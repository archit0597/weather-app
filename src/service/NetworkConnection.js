import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5';


export const searchWeatherInfo = (query) => {
    return axios.get(`${baseUrl}/forecast?id=${query}&appid=099a7c33c1be08ed21d565feaedb1fd4`)
}