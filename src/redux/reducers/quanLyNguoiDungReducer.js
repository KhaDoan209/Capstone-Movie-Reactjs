import { array } from "yup"
import { history } from "../../App"
import { userMovie } from "../../utils/setting"
import { DANG_NHAP, DANG_XUAT, LAY_DS, LAY_TT } from "../types/quanLyNguoiDungType"

let userLogin = null
if (localStorage.getItem(userMovie)) {
  userLogin = JSON.parse(localStorage.getItem(userMovie))
}
const initialState = {
  useLogin: userLogin,
  arrayUser: [

  ],
  thongTinuser: {

  }
}
export const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP:

      state.useLogin = action.userLogin
      return { ...state }
    case DANG_XUAT:

      state.useLogin = action.usLogin
      localStorage.removeItem(userMovie);
      history.push("/")
      return { ...state }
    case LAY_DS:
      state.arrayUser = action.arrayUser
      return { ...state }
    case LAY_TT:
      state.thongTinuser=action.thongTinUser
      return {...state}


    default:
      return state
  }
}
// console.log(initialState.userlogin)
