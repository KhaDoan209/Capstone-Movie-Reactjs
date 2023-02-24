import { array } from "yup"
import { history } from "../../App"
import { userMovie } from "../../utils/setting"
import { DANG_NHAP, DANG_XUAT, LAY_DS, LAY_TT,SET_THONG_TIN_NGUOI_DUNG } from "../types/quanLyNguoiDungType"

let userLogin = null
if (localStorage.getItem(userMovie)) {
  userLogin = JSON.parse(localStorage.getItem(userMovie))
}
const initialState = {
  userLogin: userLogin,
  arrayUser: [

  ],
  thongTinuser: {

  },
  thongTinNguoiDung: {},
}
export const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP:

      state.userLogin = action.userLogin
      return { ...state }
    case DANG_XUAT:
      state.userLogin = action.usLogin
      localStorage.removeItem(userMovie);
      history.push("/")
      return { ...state }
    case LAY_DS:
      state.arrayUser = action.arrayUser
      return { ...state }
    case LAY_TT:
      state.thongTinuser = action.thongTinUser
      return { ...state }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung
      return { ...state }
    }


    default:
      return state
  }
}
// console.log(initialState.userlogin)
