import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
  });
  //https://tmdt-server.herokuapp.com/
  axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default axiosClient