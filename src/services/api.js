import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8000/",
  baseURL: "https://dawii-backend-20242.glitch.me/",
  headers: {
    "Content-type": "application/json",
  },
});
