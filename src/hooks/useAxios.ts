import {useEffect, useState} from 'react';
import axios, {AxiosError, AxiosRequestConfig} from 'axios';

export const useAxios = <T>(axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = useState<T>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            const {data} = await axios.request<T>(params);
            setResponse(data);
        } catch (error) {
            setError(error as AxiosError)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    return {response, error, loading};
};