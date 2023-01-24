import axios from "axios";
// const baseURL = "http://192.168.101.14:5000";
// const baseURL = "http://127.0.0.1:5000";
// const baseURL = "http://localhost:5000";
const baseURL = "https://linkages.io";

export default axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
