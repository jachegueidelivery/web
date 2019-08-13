import axios from "axios";
const os = require("os");

console.log(os.hostname());

const apiConfig = [
{
    baseURL: "http://127.0.0.1:3333"
  },
 {
    baseURL: "https://api.rsvtelecom.com.br"
  }
];

const instance = axios.create(apiConfig[1].baseURL);

export default instance;
