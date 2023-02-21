import {
   GET_BANNER_LIST,
   GET_FILM_LIST,
   SET_CHI_TIET_PHIM,
   LAY_THONG_TIN_PHIM_THEO_MA,
} from '../types/filmTypes';
import { apiMethod } from '../../services/apiMethod';
import { history } from '../../App';

export const getFilmListAction = (tenFilm = '') => {
   return async (dispatch) => {
      try {
         if (tenFilm != '') {
            let result = await apiMethod.get(
               `QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenFilm}`
            );
            console.log(result.data.content);
            let action = {
               type: GET_FILM_LIST,
               filmList: result.data.content,
            };
            return dispatch(action);
         }
         let result = await apiMethod.get('QuanLyPhim/LayDanhSachPhim');
         let action = {
            type: GET_FILM_LIST,
            filmList: result.data.content,
         };
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   };
};

export const getFilmBannerAction = () => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get('QuanLyPhim/LayDanhSachBanner');
         let action = {
            type: GET_BANNER_LIST,
            bannerList: result.data.content,
         };
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   };
};

export const themPhimUploadHinhAction = (data) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.post(
            'QuanLyPhim/ThemPhimUploadHinh',
            data
         );
         alert('Them phim thanh cong');

         console.log(result.data.content);
      } catch (error) {
         console.log(error);
      }
   };
};

export const layThongTinPhimTheoMaPhim = (id) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get(
            `/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
         );
         let action = {
            type: LAY_THONG_TIN_PHIM_THEO_MA,
            filmDetail: result.data.content,
         };
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   };
};

export const capNhatPhimUpload = (data) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.postAdmin(
            'QuanLyPhim/CapNhatPhimUpload',
            data
         );
         alert('Cap nhat phim thanh cong');
         history.push('/admin-film');
         dispatch(getFilmListAction());
      } catch (error) {
         console.log(error);
      }
   };
};

export const xoaPhimAction = (id) => {
   return async (dispatch) => {
      try {
         await apiMethod.delete(`QuanLyPhim/XoaPhim?MaPhim=${id}`);
         alert('Xóa phim thành công');
         dispatch(getFilmListAction());
      } catch (error) {
         console.log(error);
      }
   };
};
