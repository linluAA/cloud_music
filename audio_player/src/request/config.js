import axios from "axios"

let httpRequest = axios.create({
    baseURL: "/api",
    timeout: 5000
});


export default httpRequest