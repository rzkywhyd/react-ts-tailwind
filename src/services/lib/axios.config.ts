import axios from "axios";
export const axiosInstance_store = axios.create({
  baseURL: "https://fakestoreapi.com",
});
