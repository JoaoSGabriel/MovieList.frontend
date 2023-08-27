import axios from "axios";

const instance = axios.create({
  baseURL: "https://movielistdeploy.onrender.com",
});

export default instance;
