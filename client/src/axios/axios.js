import axios from 'axios';
import { BASE_API_PATH } from '../config';
// import authService from '../services/authService';
// import Cookies from 'universal-cookie';

import { TOKEN_NAME } from '../config';

const API = axios.create({
    baseURL: BASE_API_PATH,
    headers: { 'Content-Type': 'application/json' }
});

// API.interceptors.request.use(
//     (config) => {
//         if (config.url !== 'login' && config.url !== 'refresh_token') {
//             authService.checkToken();
//         }
//         const cookies = new Cookies();
//         config.headers['Authorization'] = `Calendar__ ${cookies.get(TOKEN_NAME)}`;
//         return config;
//     },
//     function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     }
// );

API.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        if (response.data.success && response.data.token !== undefined && response.data.token !== '') {
            const cookies = new Cookies();
            cookies.set(TOKEN_NAME, response.data.token, { path: '/' });
            if (response.config.url !== 'refresh_token') {
                localStorage.setItem(TOKEN_NAME, JSON.stringify(response.data.data.userData));
            }
        }
        if (
            response.data.success === false &&
            response.data.status !== undefined &&
            response.data.status === 'logged-out'
        ) {
            authService.logout();
        }
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        console.log('API call error :', error.response);
        if (
            error.response &&
            error.response.data.success === false &&
            error.response.data.status !== undefined &&
            error.response.data.status === 'logged-out'
        ) {
            authService.logout();
        }
        return Promise.reject(error);
    }
);

export default API;