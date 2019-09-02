import axios from "axios";
const apiConfig = [
 {
    baseURL: "http://localhost:3300"
  },
{
    baseURL: "http://192.168.129.171:3300"
  },
  {
    baseURL: "http://deliverytest-com-br.umbler.net"
  }
];
const instance = axios.create(apiConfig[0]);
export default instance;
