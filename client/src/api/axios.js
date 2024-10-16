import axios from "axios";
import { API_URL } from "../config";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Interceptor para agregar el token a las cabeceras de las solicitudes
instance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;