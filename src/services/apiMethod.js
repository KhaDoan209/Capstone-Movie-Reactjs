import { http } from './config';
export class APIMethod {
   get = (url) => {
      return http.get(url);
   };
}
export const apiMethod = new APIMethod();
