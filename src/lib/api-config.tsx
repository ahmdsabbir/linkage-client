/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";
// const baseURL = "http://192.168.101.14:5000";
// const baseURL = "http://127.0.0.1:5000";
// const baseURL = "http://localhost:5000";
const baseURL = "https://linkages.io";

// const baseURL = "https://jsonplaceholder.typicode.com";
export const primaryClient = axios.create({
  baseURL,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateClient = axios.create({
  baseURL: baseURL,
  /*  headers: {
    "Content-Type": "application/json",
    Authorization: auth.token ? `Bearer ${auth?.token}` : "",
  }, */

  // withCredentials: true,
});

/* export async function authClient(endpoint: string, data: unknown) {
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return window
    .fetch(`${baseURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
} */
