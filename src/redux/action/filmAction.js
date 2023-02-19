import {
   GET_BANNER_LIST,
   GET_FILM_LIST,
   SET_CHI_TIET_PHIM,
   SET_CHI_TIET_PHONG_VE,
   LAY_THONG_TIN_PHIM_THEO_MA,
} from '../types/filmTypes';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { apiMethod } from '../../services/apiMethod2';
export const getFilmListAction = () => {
   return async (dispatch) => {
      try {
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

export const layThongTinChiTietPhim = (id) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get(
            `QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`
         );
         console.log('result', result);
         dispatch({
            type: SET_CHI_TIET_PHIM,
            filmDetail: result.data.content,
         });
      } catch (error) {
         console.log(error);
      }
   };
};
export const layChiTietPhongVeAction = (maLichChieu) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.get(
            `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
         );
         // console.log("result", result)
         if (result.status === 200) {
            dispatch({
               type: SET_CHI_TIET_PHONG_VE,
               chiTietPhongVe: result.data.content,
            });
         }
      } catch (error) {
         console.log(error);
      }
   };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
   return async (dispatch) => {
      try {
         let result = await apiMethod.post(`QuanLyDatVe/DatVe`, thongTinDatVe);
         console.log(result.data.content);
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
