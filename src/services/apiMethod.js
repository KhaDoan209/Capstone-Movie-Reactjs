import { API_URL } from '../settings/settings';
import { TOKEN_CYBER } from '../settings/settings';
import axios from 'axios';
export class APIMethod {
   get = (url) => {
      let promise = axios({
         method: 'GET',
         url: `${API_URL}${url}`,
         maNhom: 'GP01',
         headers: {
            TokenCybersoft: TOKEN_CYBER,
         },
      });
      return promise;
   };
}
export const apiMethod = new APIMethod();
