import axios from 'axios';
import { getAccessToken } from '../storage/AccessTokenStorage';

export const create = (useAccessToken = true) => {
  const http = axios.create({
    baseURL: 'http://localhost:3001',
    
  });

  http.interceptors.request.use((request) => {
    if (useAccessToken) {
      request.headers.common.Authorization = `Bearer ${getAccessToken()}`
    }
    return request;
  })

  http.interceptors.response.use((response) => response.data);

  return http;
}