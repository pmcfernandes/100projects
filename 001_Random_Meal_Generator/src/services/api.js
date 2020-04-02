import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.themealdb.com'
})

export default api;