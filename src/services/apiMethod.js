import { http } from './config';
export class APIMethod {
   get = (url) => {
      return http.get(url);
   };
}
export const apiMethod = new APIMethod();
// return axios({
//    method: 'GET',
//    url: `${API_URL}${url}`,
//    maNhom: 'GP01',
//    headers: {
//       TokenCybersoft: TOKEN_CYBER,
//    },
// });
