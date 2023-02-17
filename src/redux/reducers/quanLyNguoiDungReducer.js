import { userMovie,ACCESS_TOKEN } from "../../settings/settings"
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "../types/quanLyNguoiDungType"

let userLogin = null
if (localStorage.getItem(userMovie)) {
  userLogin = JSON.parse(localStorage.getItem(userMovie))
}
const initialState = {
  userLogin: userLogin,
  thongTinNguoiDung:{}
}
export const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {

    case DANG_NHAP:
      // console.log(action.userLogin)
      state.userLogin = action.userLogin
      return { ...state }
    case "DANG_XUAT":
      console.log(action.us)
      state.userLogin = action.usLogin
      localStorage.removeItem(userMovie);
      return { ...state }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung
      return {...state}
    }
    default:
      return state
  }
}
// console.log(initialState.userlogin)
