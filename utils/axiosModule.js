import axios from 'axios'

let axiosInstace = axios.create({
    baseURL: 'https://traversal.vercel.app/api'
});

module.exports = axiosInstace;