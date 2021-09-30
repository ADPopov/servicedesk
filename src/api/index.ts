import {AxiosRequestConfig} from "axios";


export const api = {
    getToken: (username: string, password: string): AxiosRequestConfig => {
        return {
            method: "POST",
            url: process.env.REACT_APP_BASE_URL + `/oauth/token?grant_type=password&username=${username}&password=${password}&scope=read`,
            auth: {
                username: 'client',
                password: 'secret'
            },
        }
    }
}