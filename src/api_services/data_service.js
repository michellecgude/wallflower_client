import axios from "axios";

const baseURL = "https://wall-flower-api.herokuapp.com";

export default axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
