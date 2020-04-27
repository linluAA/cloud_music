import axios from "axios"

// import { Toast } from 'vant';

let httpRequest = axios.create({
    baseURL: "/api",
    timeout: 5000
});


export default httpRequest