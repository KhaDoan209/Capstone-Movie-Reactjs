import {
   GET_BANNER_LIST,
   GET_FILM_LIST,
   SET_CHI_TIET_PHIM, DAT_VE,
   LAY_THONG_TIN_PHIM_THEO_MA, SET_CHI_TIET_PHONG_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB
} from '../types/filmTypes';
import { apiMethod } from '../../services/apiMethod';
import { apiMethod2 } from '../../services/apiMethod2';
import { history } from '../../App';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { displayLoadingAction, hideLoadingAction } from './loadingAction';
import { connection } from '../../index';



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
   return async (dispatch, getState) => {
      try {

         dispatch(displayLoadingAction)


         let result = await apiMethod2.post(`QuanLyDatVe/DatVe`, thongTinDatVe);
         console.log(result.data.content)
         //Đặt vé thành công thì gọi lap API LOADING LẠI PHÒNG VÉ

         await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
         await dispatch({ type: DAT_VE_HOAN_TAT })
         await dispatch(hideLoadingAction)

         let userLogin = getState().quanLyNguoiDungReducer.userLogin;
         connection.invoke('datGheThanhCong', userLogin.taiKhoan, thongTinDatVe.maLichChieu);

         dispatch({ type: CHUYEN_TAB })

      } catch (error) {
         dispatch(hideLoadingAction)
         console.log(error);
      }
   }
}

export const datGheAction = (ghe, maLichChieu) => {
   return async (dispatch, getState) => {
      // Dua thong tyin ghe len reducer
      await dispatch({
         type: DAT_VE,
         gheDuocChon: ghe
      })

      //cal api ve backend
      let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
      let taiKhoan = getState().quanLyNguoiDungReducer.userLogin.taiKhoan;

      console.log('danhSachGheDangDat', danhSachGheDangDat)
      console.log('taiKhoan', taiKhoan)
      console.log('maLichChieu', maLichChieu)
      //biến mảng thành chuỗi do cơ sở dữ liệu setup là kiểu string

      danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);



      // call api signalR
      connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);
   }
}
