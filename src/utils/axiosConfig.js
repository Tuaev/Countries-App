// Axios config. Returns response or Promise reject (Error) with message.
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
