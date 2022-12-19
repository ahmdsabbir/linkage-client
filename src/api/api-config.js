import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export default axios.create({
  baseURL,
});

export const privateAPI = axios.create({
  baseURL,
  withCredentials: true,
});
