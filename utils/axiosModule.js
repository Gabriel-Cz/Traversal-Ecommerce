import axios from 'axios'

let axiosInstace = axios.create({
    baseURL: 'http://localhost:3000/api'
});

module.exports = axiosInstace;