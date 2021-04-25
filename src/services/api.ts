import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.102:3334",
  // baseURL: "http://192.168.0.26:3334",
});

export default api;
