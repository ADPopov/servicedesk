import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://140.82.32.146/apiv1/',
})