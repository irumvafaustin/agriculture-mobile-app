import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://172.31.42.22:5000/signup',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;