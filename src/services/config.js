import axios from 'axios';
import { API_URL, MA_NHOM, TOKEN_CYBER } from '../settings/settings';
export const http = axios.create();

http.interceptors.request.use(
   function (config) {
      config.baseURL = API_URL;
      config.maNhom = MA_NHOM;
      config.headers = {
         TokenCybersoft: TOKEN_CYBER,
      };
      return { ...config };
   },
   function (error) {
      return Promise.reject(error);
   }
);

http.interceptors.response.use(
   function (response) {
      if (response.data.content) {
         return response.data.content;
      }
      return response;
   },
   function (error) {
      if (error.response.data) {
         return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
   }
);
