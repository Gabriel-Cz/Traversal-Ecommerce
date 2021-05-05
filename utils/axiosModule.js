import axios from 'axios'

/* let axiosInstace = axios.create({
    baseURL: 'https://traversal.vercel.app/api',
    mode: 'cors', 
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
    }
}); */

let axiosInstace = axios.create({
    baseURL: 'http://localhost:3000/api',
    mode: 'cors', 
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
    }
});

module.exports = axiosInstace;