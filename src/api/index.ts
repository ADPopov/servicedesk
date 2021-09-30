import {AxiosRequestConfig} from "axios";


export const api  = {
    getToken: (username: string, password: string) : AxiosRequestConfig => {
        return {
            method: "POST",
            url: `http://140.82.32.146/oauth/token?grant_type=password&username=${username}&password=${password}&scope=read`,
            auth: {
                username: 'client',
                password: 'secret'
            },
        }
    },
    getUser: () : AxiosRequestConfig => {
        return {
            method: "POST",
            url: 'http://140.82.32.146/oauth/token?grant_type=password&username=user2&password=321&scope=read',
        }
    }
}