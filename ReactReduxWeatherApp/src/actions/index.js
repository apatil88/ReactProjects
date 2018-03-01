import axios from 'axios'

const API_KEY  = 'c60596606b9c7eb8c6ac2dae9bf89f9c'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` 

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);  //AJAX request using Axios library. Returns a promise.

    //console.log('Request : ', request);
    
    return {
        type : FETCH_WEATHER,
        payload : request   //Returning the promise as the payload
    };
}