import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wallflowerserver.herokuapp.com/",
  timeout: 5000,
  headers: {
    Authorization: "JWT " + localStorage.getItem("access_token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
