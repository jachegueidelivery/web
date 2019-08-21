import axios from "axios";
const os = require("os");

let index = "server";
let host = os.hostname();

const apiConfig = [
 {
    baseURL: "http://127.0.0.1:3333"
  },
  {
    baseURL: "https://api.rsvtelecom.com.br"
  }
];

if (host  === "cryptopc" || host  === "saude") {
  index = "local";
}

const instance = axios.create(apiConfig[0]);

export default instance;
