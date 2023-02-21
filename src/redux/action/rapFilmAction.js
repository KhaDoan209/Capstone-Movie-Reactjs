import { apiMethod } from '../../services/apiMethod';
import { GET_RAP_FILM, GET_LICH_CHIEU_HE_THONG_RAP } from '../types/rapTypes';
export const getRapFilmAction = () => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get('QuanLyRap/LayThongTinHeThongRap');
         let action = {
            type: GET_RAP_FILM,
            rapList: result.data.content,
         };
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   };
};

export const getLichChieuHeThongRapAction = (maHeThongRap) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get(
            `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`
         );
         let action = {
            type: GET_LICH_CHIEU_HE_THONG_RAP,
            lichChieuHeThongRap: result.data.content,
         };
         dispatch(action);
      } catch (error) {
         console.log(error);
      }
   };
};
