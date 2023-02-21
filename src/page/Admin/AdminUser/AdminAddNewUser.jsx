
import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { themUser } from '../../redux/action/quanLyNguoiDungaction';

export default function AdminAddNewUser() {
    let dispatch = useDispatch()
    const formik = useFormik({

        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "",
            hoTen: ""
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống"),
            matKhau: Yup.string().required("Mật khẩu không được để trống").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/, "Mật khẩu từ 6-10 ký tự, phải có ký tự thường, in hoa, đặc biệt, số"),
            email: Yup.string().required("Email không được để trống").email("Email không đúng định dạng"),
            hoTen: Yup.string().required("Họ tên không được để trống"),
            soDt: Yup.string().required("Số điện thoại không được để trống").min(10, "Số điện thoại ít nhất phải 10 số "),
            
        }),
        onSubmit: values => {
           

              let action = themUser(values);
              dispatch(action)

        },
    });
    return (
        <div className='formdk container'>
            <h2 className='text-center ' style={{ fontSize: 50, fontWeight: 500 }}>Thêm Người Dùng</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Tài khoản</label>
                    <input type="text" className="form-control" name='taiKhoan' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    // value={formik.values.taiKhoan}
                    />
                    {formik.errors.taiKhoan ? (
                        <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
                    ) : null}

                </div>
                <div className="form-group">
                    <label htmlFor="">Mật Khẩu</label>
                    <input type="password" className="form-control" name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur}
                    // value={formik.values.taiKhoan}
                    />

                    {formik.errors.matKhau ? (
                        <div className='alert alert-danger'>{formik.errors.matKhau}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Họ tên</label>
                    <input type="text" className="form-control" name="hoTen" onChange={formik.handleChange} />
                    {formik.errors.hoTen ? (
                        <div className='alert alert-danger'>{formik.errors.hoTen}</div>
                    ) : null}

                </div>
                <div className="form-group">
                    <label htmlFor="">Email </label>
                    <input type="email" className="form-control" name="email" onChange={formik.handleChange} />
                    {formik.errors.email ? (
                        <div className='alert alert-danger'>{formik.errors.email}</div>
                    ) : null}

                </div>
                <div className="form-group">
                    <label htmlFor="">Số Điện Thoại</label>
                    <input type="text" className="form-control" name="soDt" onChange={formik.handleChange} />
                    {formik.errors.soDt ? (
                        <div className='alert alert-danger'>{formik.errors.soDt}</div>
                    ) : null}

                </div>
                <div className="form-group">
                    <label htmlFor="maNhom">Mã Loại</label>
                    <select onChange={formik.handleChange} className='form-control ' name="maLoaiNguoiDung" id="">
                        <option value="">Chọn Loại</option>
                        <option value="KhachHang"> Khách Hàng</option>
                        <option value="QuanTri"> Quản Trị</option>
                    </select>
                    {formik.errors.soDt ? (
                        <div className='alert alert-danger'>{formik.errors.maLoaiNguoiDung}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <button className='btn btn-info'>Thêm
                    </button>

                </div>


            </form>

        </div>
    )
}
