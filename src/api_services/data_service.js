import axios from "axios";

const baseURL = "https://wall-flower-api.herokuapp.com";

const axiosDataAPI = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
