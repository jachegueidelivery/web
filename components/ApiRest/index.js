import axios from "axios";
const apiConfig = [
 {
    baseURL: "http://localhost:3300"
  },
{
    baseURL: "http://192.168.129.171:3300"
  },
  {
    baseURL: "https://api.rsvtelecom.com.br/"
  }
];
const instance = axios.create(apiConfig[2]);
export default instance;
