import axios from "axios";

const apiConfig = [
 {
    baseURL: "http://127.0.0.1:3333"
  },
  {
    baseURL: "https://api.rsvtelecom.com.br"
  }
];

const instance = axios.create(apiConfig[0]);

export default instance;
