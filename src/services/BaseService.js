import axios from 'axios';

export const create = () => {
  const http = axios.create({
    baseURL: 'http://localhost:3001'
  });

  http.interceptors.response.use((response) => response.data);

  return http;
}