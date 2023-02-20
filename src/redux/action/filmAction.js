import { apiMethod } from '../../services/apiMethod';
import {DAT_VE,CHUYEN_TAB, DAT_VE_HOAN_TAT, GET_BANNER_LIST, GET_FILM_LIST, SET_CHI_TIET_PHIM, SET_CHI_TIET_PHONG_VE } from '../types/filmTypes';
import { filmService } from '../../services/filmService';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { apiMethod2 } from '../../services/apiMethod2';
import { displayLoadingAction, hideLoadingAction } from './loadingAction';
import { connection } from '../../index';
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

export const layThongTinChiTietPhim = (id) => {
   return async dispatch => {
      try {
         let result = await apiMethod2.get(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`);
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
         let result = await apiMethod2.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
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

         dispatch(displayLoadingAction)


         let result = await apiMethod2.post(`QuanLyDatVe/DatVe`, thongTinDatVe);
         console.log(result.data.content)
         //Đặt vé thành công thì gọi lap API LOADING LẠI PHÒNG VÉ

         await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
         await dispatch({ type: DAT_VE_HOAN_TAT })
         await dispatch(hideLoadingAction)
         dispatch({ type: CHUYEN_TAB })

      } catch (error) {
         dispatch(hideLoadingAction)
         console.log(error);
      }
   }
}

export const datGheAction = (ghe,maLichChieu) => {
   return async (dispatch,getState) => {
      // Dua thong tyin ghe len reducer
      await dispatch({
         type: DAT_VE,
         gheDuocChon: ghe
      })

      //cal api ve backend
      let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
      let taiKhoan = getState().quanLyNguoiDungReducer.userLogin.taiKhoan;
   
      console.log('danhSachGheDangDat',danhSachGheDangDat)
      console.log('taiKhoan',taiKhoan)
      console.log('maLichChieu',maLichChieu)
      //biến mảng thành chuỗi do cơ sở dữ liệu setup là kiểu string
      
      danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
      // taiKhoan =JSON.stringify(taiKhoan)



      // call api signalR
      connection.invoke("datGhe",taiKhoan,danhSachGheDangDat,maLichChieu );
   }
}

