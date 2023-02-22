import axios from "axios";

const HOST_API = "http://localhost:8080/admin/api/v1";

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

export default axiosInstance;
