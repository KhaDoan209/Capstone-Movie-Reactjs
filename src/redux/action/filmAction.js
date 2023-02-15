import { apiMethod } from '../../services/apiMethod';
import { GET_BANNER_LIST, GET_FILM_LIST } from '../types/filmTypes';

export const getFilmListAction = () => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get('QuanLyPhim/LayDanhSachPhim');
         let action = {
            type: GET_FILM_LIST,
            filmList: result,
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
            bannerList: result,
         };
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   };
};
