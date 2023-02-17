import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { dangnhapAction } from '../../redux/action/quanLyNguoiDungaction';

export default function Login() {
   let dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         taiKhoan: '',
         matKhau: '',
      },

      validationSchema: Yup.object({
         taiKhoan: Yup.string()
            .required('Tài khoản không được để trống')
            .min(6, 'tối thiểu 6 ký tự ')
            .max(15, 'tối đà 15 ký tự'),
         matKhau: Yup.string().required('Mật khẩu không được để trống'),
      }),
      onSubmit: (values) => {
         console.log(values);
         let action = dangnhapAction(values);
         dispatch(action);
      },
   });
   return (
      <div
         className='formdk'
         style={{ height: '100%' }}
      >
         <h2 className='text-center'>Đăng nhập</h2>
         <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
               <label htmlFor=''> Tài Khoản</label>
               <input
                  type='text'
                  className='form-control'
                  id=''
                  name='taiKhoan'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.errors.taiKhoan ? (
                  <div className='alert alert-danger'>
                     {formik.errors.taiKhoan}
                  </div>
               ) : null}
            </div>
            <div className='form-group'>
               <label htmlFor=''>Password</label>
               <input
                  type='password'
                  className='form-control'
                  id=''
                  name='matKhau'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               />
               {formik.errors.matKhau ? (
                  <div className='alert alert-danger'>
                     {formik.errors.matKhau}
                  </div>
               ) : null}
            </div>
            <div className='form-group'>
               <button
                  type='submit'
                  className='btn btn-danger mr-2'
               >
                  Đăng nhập
               </button>
               <NavLink
                  className='btn btn-info'
                  to='/registers'
               >
                  Đăng Ký
               </NavLink>
            </div>
         </form>
      </div>
   );
}
