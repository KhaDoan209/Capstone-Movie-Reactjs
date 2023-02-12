import { APIMethod } from './apiMethod';

export class RapFilmService extends APIMethod {
   constructor() {
      super();
   }
   getHeThongRap = () => {
      return this.get('QuanLyRap/LayThongTinHeThongRap');
   };
}

export const rapFilmService = new RapFilmService();
