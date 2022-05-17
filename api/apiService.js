import axios from 'axios';

const BASE_URL = "https://raw.githubusercontent.com/";

const callAPI = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json'
    },
});

callAPI.interceptors.request.use((config) =>
{
    return config;
}, (error) =>
{
    return Promise.reject(error);
});

callAPI.interceptors.response.use((response) =>
{
    return response;
}, async (error) =>
{
    return Promise.reject(error);
});

export default callAPI;