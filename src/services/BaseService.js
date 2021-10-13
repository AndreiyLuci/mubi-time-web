import axios from 'axios';
import { getAccessToken } from '../storage/AccessTokenStorage';

// export const create = (useAccessToken = true, baseURL, accessToken) => {
//   const http = axios.create({
//     baseURL: baseURL || 'http://localhost:3001'
    
//   });

//   http.interceptors.request.use((request) => {
//     if (useAccessToken && getAccessToken()) {
//       request.headers.common.Authorization = `Bearer ${accessToken || getAccessToken()}`
//     }
//     return request;
//   })

//   http.interceptors.response.use((response) => response.data);

//   return http;
// }


export const create = (isExternalAPI = false, useAccessToken = true) => {
  const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTQ4MDMyZGQyMGI2MDZhNTg0MTExODkyOTkzMWM4YiIsInN1YiI6IjYxNTU3ZTU0ZDFjYTJhMDA2NzNmNGI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fWbU-UuA424hSWRzXXHgSJhfLigl54JoKO1tPBNuU5o"

  const http = axios.create({
    baseURL: isExternalAPI ? "https://api.themoviedb.org/3" : 'https://mubitime-api.herokuapp.com/'
    
  });

  http.interceptors.request.use((request) => {
    if (useAccessToken && (getAccessToken() || isExternalAPI)) {
      request.headers.common.Authorization = `Bearer ${isExternalAPI ? API_TOKEN : getAccessToken()}`
    }
    return request;
  })

  http.interceptors.response.use((response) => response.data);

  return http;
}