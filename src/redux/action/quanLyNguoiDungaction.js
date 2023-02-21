import axios from "axios";
import { ACCESS_TOKEN, Bearer, BearerToken, URL_API, userMovie } from "../../utils/setting";
import { DANG_NHAP, LAY_DS, LAY_TT } from "../types/quanLyNguoiDungType";
import { history } from "../../App";
import { array } from "yup";
import { MA_NHOM, TOKEN_CYBER } from "../../settings/settings";
export const dangkyAction = (thongTinND) => {

    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: `${URL_API}QuanLyNguoiDung/DangKy`,
            data: thongTinND,
            headers: {
                "TokenCybersoft ": TOKEN_CYBER
            }
        });
        promise.then((result) => {
            alert("đăng ký thành công")
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
            url: `${URL_API}QuanLyNguoiDung/DangNhap`,
            data: thongTinLogin,
            headers: {
                'TokenCybersoft': TOKEN_CYBER
            }
        });
        promise.then((result) => {
            alert("Đăng nhập thành công");
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
export const layDanhsachuser = (tenUser) => {
    return (dispatch2) => {
        let promise = axios({
            method: "GET",
            url: `${URL_API}QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${MA_NHOM}`,
            headers: {
                'TokenCybersoft': TOKEN_CYBER
            }
        });
        promise.then((result) => {
            console.log(result.data.content)
            let action = {
                type: LAY_DS,
                arrayUser: result.data.content
            }
            dispatch2(action)
        })
    }
}
export const themUser = (User) => {
    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: ` ${URL_API}QuanLyNguoiDung/ThemNguoiDung`,
            data: User,
            headers: {
                Authorization: Bearer + BearerToken,
                TokenCybersoft: TOKEN_CYBER
            }
        });
        promise.then((result) => {
            alert("Thêm thành công")
            console.log(result.data.content)
        });
        promise.error((err) => {
            console.log(err)
        })
    }
}
export const layThongtinuser = (id) => {
    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: `${URL_API}QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${id}`,
            headers: {
                Authorization: Bearer + BearerToken,
                TokenCybersoft: TOKEN_CYBER
            }
        });
        promise.then((result) => {
            let action = {
                type: LAY_TT,
                thongTinUser: result.data.content
            }
            dispatch2(action)

        });
        promise.catch((err) => {
            console.log(err)
        })
    }

}
export const capNhatuser = (Usercn) => {
    return (dispatch2) => {
        let promise = axios({
            method: "POST",
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: Usercn,
            headers: {
                Authorization: Bearer + BearerToken,
                TokenCybersoft: TOKEN_CYBER
            }
        });
        promise.then((result) => {
            alert("Cập nhật thành công")
        });
        promise.catch((err) => {
            console.log(err)
        })
    }
}
export const xoaUser = (id) => {
    return (dispatch2) => {
        let promise = axios({
            method: "DELETE",
            url: `${URL_API}QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
            headers: {
                Authorization: Bearer + BearerToken,
                TokenCybersoft: TOKEN_CYBER
            }
        });
        promise.then((result) => {
            alert('Xóa Thành Công')

        });
        promise.catch((err) => {
            console.log(err)
        })
    }
}
export const timKiemnguoidung = (tenUser) => {
    return (dispatch2) => {
        let promise = axios({
            method: "GET",
            url: `${URL_API}QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${MA_NHOM}&tuKhoa=${tenUser}
            `,
            headers: {
                'TokenCybersoft': TOKEN_CYBER
            }
        });
        promise.then((result) => {
            console.log(result.data.content)
            let action = {
                type: LAY_DS,
                arrayUser: result.data.content
            }
            dispatch2(action)
        })
    }
}
