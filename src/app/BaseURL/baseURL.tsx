import axios from "axios";



const axiosInstance = axios.create({
  baseURL: 'https://futurelabs-manager-be.onrender.com/api/v1',
});

export default axiosInstance;