import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://futurelabs-manager-be-api.onrender.com/api/v1',
  headers: {
    'x-api-key': 'NKa4Do2rjKnhYhmHHXIyw9nGEG3o7fNvCGoS9s0VFRQ',
  },

});

export default axiosInstance;