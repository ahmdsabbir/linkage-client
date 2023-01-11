import axios from "axios";

const baseURL = "http://192.168.101.4:5000";
// const baseURL = "http://192.168.101.15:5000";

export default axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
