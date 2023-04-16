import getCookie from "@/utils/getCookie";
import axios from "axios";

const BASE_URL = "http://api.taskamo.com/api";

const Axios = axios.create({
  baseURL: BASE_URL,
});

Axios.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (config.headers && token) {
    config.headers["authorization"] = `Bearer ${token}`;
  }
  return config;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(
      error.request.responseURL,
      error.request.responseURL.search("/login")
    );
    if (error.response.status === 401) {
      if (error.request.responseURL.search("/login") === -1) {
        window.location.replace("/login");
      }
      // if (error.config.url !== '/auth/student/login') {
      // }
    }
    return Promise.reject(error);
  }
);

export default Axios;
