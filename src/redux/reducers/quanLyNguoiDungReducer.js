import { userMovie,ACCESS_TOKEN } from "../../settings/settings"
import { DANG_NHAP } from "../types/quanLyNguoiDungType"

let userLogin = null
if (localStorage.getItem(userMovie)) {
  userLogin = JSON.parse(localStorage.getItem(userMovie))
}
let access_Token = ''
 if (localStorage.getItem(ACCESS_TOKEN)) {
    access_Token = localStorage.getItem(ACCESS_TOKEN);
 }

 console.log("access token",access_Token);

const initialState = {
  userLogin: userLogin
}
export const quanLyNguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {

    case DANG_NHAP:
      // console.log(action.userLogin)
      state.useLogin = action.userLogin
      return { ...state }
    case "DANG_XUAT":
      console.log(action.us)
      state.useLogin = action.usLogin
      localStorage.removeItem(userMovie);
      return { ...state }

    default:
      return state
  }
}
// console.log(initialState.userlogin)
