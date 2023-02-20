import { API_URL } from '../settings/settings';
import {
   TOKEN_CYBER,
   ACCESS_TOKEN,
   ACCESS_TOKEN_ADMIN,
} from '../settings/settings';
import axios from 'axios';
export class APIMethod2 {
   get = (url) => {
      return axios({
         method: 'GET',
         url: `${API_URL}${url}`,
         maNhom: 'GP01',
         headers: {
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   };

   post = (url, model) => {
      return axios({
         method: 'POST',
         url: `${API_URL}${url}`,
         maNhom: 'GP00',
         data: model,
         headers: {
            Authorization: 'Bearer ' + ACCESS_TOKEN,
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   };

   postAdmin = (url, model) => {
      return axios({
         method: 'POST',
         url: `${API_URL}${url}`,
         data: model,
         headers: {
            Authorization: 'Bearer ' + ACCESS_TOKEN_ADMIN,
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   };

   put = (url, model) => {
      return axios({
         method: 'PUT',
         url: `${API_URL}${url}`,
         data: model,
         headers: {
            TokenCybersoft: TOKEN_CYBER,
            Authorization: ACCESS_TOKEN_ADMIN,
         },
      });
   };

   delete = (url) => {
      return axios({
         method: 'DELETE',
         url: `${API_URL}${url}`,
         headers: {
            Authorization: 'Bearer ' + ACCESS_TOKEN_ADMIN,
            TokenCyberSoft: TOKEN_CYBER,
         },
      });
   };
}
export const apiMethod = new APIMethod2();
