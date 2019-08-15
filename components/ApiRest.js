import axios from "axios";
const os = require("os");

let index = "server";
let host = os.hostname();

const apiConfig = {
  local: {
    baseURL: "http://127.0.0.1:3333"
  },
  server: {
    baseURL: "https://api.rsvtelecom.com.br"
  }
};

if (host  === "cryptopc" || host  === "saude") {
  index = "local";
}

const instance = axios.create(apiConfig['local']);

export default instance;
