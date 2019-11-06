import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3005/api"
});

client.interceptors.response.use(response => response);

export default client;
