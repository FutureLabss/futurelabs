import axios from "axios";



const axiosInstance = axios.create({
  baseURL: 'https://nest-auth-68hy.onrender.com/api/v1',
});

export default axiosInstance;