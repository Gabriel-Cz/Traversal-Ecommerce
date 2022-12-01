import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: (process.env.BASE_URL || 'https://traversal.vercel.app/api'),
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': "*"
	}
});

export default axiosInstance;