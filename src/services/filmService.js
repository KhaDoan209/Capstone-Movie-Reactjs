import { APIMethod } from './apiMethod';

export class FilmService extends APIMethod {
   constructor() {
      super();
   }
   getFilmList = () => {
      return this.get(`/QuanLyPhim/LayDanhSachPhim`);
   };
   // layThongTinLichChieuPhim = (maPhim) => {
   //    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
   // }
}

export const filmService = new FilmService();
