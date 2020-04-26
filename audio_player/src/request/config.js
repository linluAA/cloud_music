import axios from "axios"
import { Toast } from 'vant';

let httpRequest = axios.create({
    baseURL: "https://www.fastmock.site/mock/8c727b92326a7762a4a057ba753456d3/80ys",
    timeout: 5000
});


export default httpRequest