import axios from 'axios';

// define app API url
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// configure headers
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

export default {
    get: axios.get
};
