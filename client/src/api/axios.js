import axios from "axios";
import { API_URL } from "../config";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // Esto permite el envío de cookies de autenticación
});

// Añade un interceptor para agregar el token en cada solicitud si es necesario
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // O donde almacenes tu token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
