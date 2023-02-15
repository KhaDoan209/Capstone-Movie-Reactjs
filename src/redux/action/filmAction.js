import { apiMethod } from '../../services/apiMethod';
import { GET_BANNER_LIST, GET_FILM_LIST, SET_CHI_TIET_PHIM, SET_CHI_TIET_PHONG_VE } from '../types/filmTypes';
import { filmService } from '../../services/filmService';
import {ThongTinDatVe} from '../../_core/models/ThongTinDatVe'
export const getFilmListAction = () => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get('/QuanLyPhim/LayDanhSachPhim');
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
         let result = await apiMethod.get('/QuanLyPhim/LayDanhSachBanner');
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

export const layThongTinChiTietPhim = (id) => {
   return async dispatch => {
      try {
         let result = await apiMethod.get(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`);
         console.log("result", result)
         //lay du lieu tu api ve => reducer
         dispatch({
            type: SET_CHI_TIET_PHIM,
            filmDetail: result.data.content
         })
      } catch (error) {
         console.log(error);
      }
   }
}
export const layChiTietPhongVeAction = (maLichChieu) => {
   return async dispatch => {
      try {
         let result = await apiMethod.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
         // console.log("result", result)
         if (result.status === 200) {
            dispatch({
               type: SET_CHI_TIET_PHONG_VE,
               chiTietPhongVe: result.data.content
            })
         }
      } catch (error) {
         console.log(error);
      }
   }
}

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
   return async dispatch => {
      try {
         let result = await apiMethod.post(`QuanLyDatVe/DatVe`,thongTinDatVe);
         console.log(result.data.content)
      } catch (error) {
         console.log(error);
      }
   }
}

