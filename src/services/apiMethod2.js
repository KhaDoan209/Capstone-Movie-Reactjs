import { API_URL } from '../settings/settings';
import { TOKEN_CYBER,ACCESS_TOKEN } from '../settings/settings';
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
     }

   post = (url,model) => {
      return axios({
         method: 'POST',
         url: `${API_URL}${url}`,
         maNhom: 'GP01',
         data: model,
         headers: {
            Authorization : 'Bearer ' + ACCESS_TOKEN,
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   }

   put = (url,model) => {
      return axios({
         method: 'PUT',
         url: `${API_URL}${url}`,
         maNhom: 'GP01',
         data: model,
         headers: {
            TokenCybersoft: TOKEN_CYBER,
         },
      });
   }

}
export const apiMethod2 = new APIMethod2();
