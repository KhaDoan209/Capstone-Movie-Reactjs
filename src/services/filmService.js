import { MA_NHOM } from '../settings/settings';
import { APIMethod } from './apiMethod';

export class FilmService extends APIMethod {
   constructor() {
      super();
   }
   getFilmList = () => {
      return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}}`);
   };
}

export const filmService = new FilmService();
