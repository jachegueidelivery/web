import axios from "axios";

const apiConfig = {
  local: {
    baseURL: "http://127.0.0.1:3333"
  },
  server: {
    baseURL: "https://api.rsvtelecom.com.br"
  }
}
const instance = axios.create(apiConfig.server);

export default instance;
