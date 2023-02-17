import { userMovie } from "../../utils/setting"
import { DANG_NHAP } from "../types/quanLyNguoiDungType"

let userLogin = null
if (localStorage.getItem(userMovie)) {
  userLogin = JSON.parse(localStorage.getItem(userMovie))
}
const initialState = {
  useLogin: userLogin
}
export const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {

    case DANG_NHAP:
      // console.log(action.userLogin)
      state.useLogin = action.userLogin
      return { ...state }
    case "DANG_XUAT":
      state.useLogin = action.usLogin
      localStorage.removeItem(userMovie);
      return { ...state }

    default:
      return state
  }
}
// console.log(initialState.userlogin)
