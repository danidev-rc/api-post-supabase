import axios from "axios";
import { API_URL } from "../config";
import Cookies from 'js-cookie';

const token = Cookies.get('authToken');

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Authorization": `Bearer ${token}`
  }
})

export default instance;