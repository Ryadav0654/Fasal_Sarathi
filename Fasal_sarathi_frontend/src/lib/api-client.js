import axios from "axios";
import store from "../redux/store"
import { loginSuccess, logout } from "../redux/slice/AuthSlice";
import { HOST } from "../utils/constrants";

console.log("HOST: ", HOST);
const apiClient = axios.create({
    baseURL: HOST,
    withCredentials: true
})

apiClient.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh access token
        const {data} = await axios.post(
          "/api/v1/auth/refresh-token",
          {},
          { withCredentials: true }
        );

        const newAccessToken = data.newAccessToken;
        store.dispatch(loginSuccess(newAccessToken)); // update Redux
        axios.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export {apiClient};