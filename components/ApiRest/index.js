import axios from "axios";
const apiConfig = [
 {
    baseURL: "http://localhost:3300"
  },
{
    baseURL: "http://192.168.129.171:3300"
  },
{
    baseURL: "http://192.168.11.32:3300"
  },
  {
    baseURL: "https://api.rsvtelecom.com.br"
  }
];
const instance = axios.create(apiConfig[3]);
export default instance;
