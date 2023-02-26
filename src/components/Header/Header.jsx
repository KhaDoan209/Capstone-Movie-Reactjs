import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { DANG_XUAT } from '../../redux/types/quanLyNguoiDungType';
const Header = () => {
   const dispatch = useDispatch();
   const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);

   const renderLogin = () => {
      if (userLogin !== null) {
         return (
            <>
               <li className='nav-item'>
                  <NavLink
                     className='nav-link'
                     to='/admin-film'
                  >
                     Quản lý phim
                  </NavLink>
               </li>
               <li className='nav-item'>
                  <div className='nav-link'>
                     <span style={{ color: 'black', marginRight: '4px' }}>
                        {userLogin != null ? userLogin.taiKhoan : ''}
                     </span>
                  </div>
               </li>
               <li className='nav-item'>
                  <div className='nav-link'>
                     <span
                        onClick={() => {
                           let action = {
                              type: DANG_XUAT,
                              usLogin: null,
                           };
                           dispatch(action);
                        }}
                     >
                        Đăng xuất{' '}
                     </span>
                  </div>
               </li>
            </>
         );
      } else {
         return (
            <>
               <li className='nav-item'>
                  <NavLink
                     className='nav-link'
                     to='/login'
                  >
                     Đăng nhập
                  </NavLink>
               </li>
               <li className='nav-item'>
                  <NavLink
                     className='nav-link'
                     to='/registers'
                  >
                     Đăng ký
                  </NavLink>
               </li>
            </>
         );
      }
   };
   return (
      <header className='header'>
         <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light d-flex justify-content-between p-0'>
               <a
                  className='navbar-brand'
                  href='#'
               >
                  <img
                     className='img-fluid'
                     src={logo}
                     style={{ width: '100px' }}
                  />
               </a>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarNavDropdown'
                  aria-controls='navbarNavDropdown'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon' />
               </button>
               <div
                  className='collapse navbar-collapse flex-grow-0'
                  id='navbarNavDropdown'
               >
                  <ul className='navbar-nav text-white'>
                     <li className='nav-item active'>
                        <NavLink
                           className='nav-link'
                           to='/home'
                        >
                           Home
                        </NavLink>
                     </li>

                     <li className='nav-item'>
                        <NavLink
                           className='nav-link'
                           to='/admin/user'
                        >
                           Quản lý người dùng
                        </NavLink>
                     </li>
                     {renderLogin()}
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
