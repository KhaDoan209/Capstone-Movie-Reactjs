import axios from "axios";
import { ACCESS_TOKEN, userMovie } from "../../utils/setting";
import { DANG_NHAP } from "../types/quanLyNguoiDungType";
import { history } from "../../App";
export const dangkyAction = (thongTinND) => {

    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: thongTinND,
            headers: {
                "TokenCybersoft ": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNiIsIkhldEhhblN0cmluZyI6IjE0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4OTI5MjgwMDAwMCIsIm5iZiI6MTY2MDE1MDgwMCwiZXhwIjoxNjg5NDQwNDAwfQ.nvrySbONO7THMJnLTWgEwiGszUF7VXjBUnn36QUuwsQ"
            }
        });
        promise.then((result) => {
            console.log(result.data)
            alert("đăng ký thành công")
            // chuyển hướng trang về trang login
            // history.push('/login');
        });
        promise.error((err) => {
            console.log(err)
        })
    }
}
export const dangnhapAction = (thongTinLogin) => {
    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: thongTinLogin,
            headers: {
                'TokenCybersoft': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNiIsIkhldEhhblN0cmluZyI6IjE0LzA3LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4OTI5MjgwMDAwMCIsIm5iZiI6MTY2MDE1MDgwMCwiZXhwIjoxNjg5NDQwNDAwfQ.nvrySbONO7THMJnLTWgEwiGszUF7VXjBUnn36QUuwsQ"
            }
        });
        promise.then((result) => {
            console.log(result.data.content);

            //đăng nhập thành công
            alert("Đăng nhập thành công");
            //lưu dữ liệu đăng nhập xuông localstorage
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
            let userJSON = JSON.stringify(result.data.content)
            localStorage.setItem(userMovie, userJSON);
            history.push('/')
            let action = {
                type: DANG_NHAP,
                userLogin: result.data.content
            }
            dispatch2(action)


        })

        promise.catch((error) => {
            console.log(error.response.content)
        })
    }
}