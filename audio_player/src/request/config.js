import axios from "axios"
// import { Toast } from 'vant';

let httpRequest = axios.create({
    baseURL: "http://47.98.159.95/m-api",
    timeout: 5000
});


export default httpRequest