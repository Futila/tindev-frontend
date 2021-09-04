import axios from 'axios';

const api = axios.create({
    baseURL:"https://tindev-backendd.herokuapp.com",
    headers:{
        'Pragma': 'public',
        'Content-type': 'application/json', 
        'Access-Control-Allow-Origin': '*'
    }
});

export default api;