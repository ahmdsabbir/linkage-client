import axios from "axios";

const baseURL = " http://192.168.101.70:5000";

export default axios.create({
  baseURL,
});

export const privateAPI = axios.create({
  baseURL,
  withCredentials: true,
});
