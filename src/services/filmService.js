import { APIMethod } from './apiMethod';

export class FilmService extends APIMethod {
   constructor() {
      super();
   }
   getFilmList = () => {
      return this.get(`/QuanLyPhim/LayDanhSachPhim`);
   };
}

export const filmService = new FilmService();
