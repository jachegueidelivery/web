import axios from "axios";
const os = require("os");

let index = 'server';

console.log(os.hostname());


const apiConfig = {
local: {
    baseURL: "http://127.0.0.1:3333"
  },
server: {
    baseURL: "https://api.rsvtelecom.com.br"
  }
};

if(os.hostname() === 'cryptopc' || os.hostname() === 'saude'){
	index = 'local';
}

const instance = axios.create(apiConfig[index]);

export default instance;


