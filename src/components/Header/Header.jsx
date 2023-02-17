import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/logo.png';
const Header = () => {
   const dispatch = useDispatch();
   const useLogin = useSelector(
      (state) => state.quanLyNguoiDungReducer.useLogin
   );

   // const renderHeaderByRole = () => {
   //    if (useLogin.maLoaiNguoiDung === 'KhachHang') {
   //       return (
   //          <>
   //             <li className='nav-item'>
   //                <p className='nav-link text-dark text-muted'>
   //                   Hello {useLogin != null ? useLogin.taiKhoan : ''}
   //                </p>
   //             </li>
   //          </>
   //       );
   //    } else {
   //       return (
   //          <>
   //             <li className='nav-item'>
   //                <NavLink
   //                   className='nav-link'
   //                   to='/admin-film'
   //                >
   //                   Quản lý phim
   //                </NavLink>
   //             </li>
   //             <li className='nav-item'>
   //                <NavLink
   //                   className='nav-link'
   //                   to='/admin-film'
   //                >
   //                   Quản lý user
   //                </NavLink>
   //             </li>
   //          </>
   //       );
   //    }
   // };
   const renderLogin = () => {
      if (useLogin !== null) {
         return (
            <>
               <li className='nav-item'>
                  <p className='nav-link text-dark text-muted'>
                     Hello {useLogin != null ? useLogin.taiKhoan : ''}
                  </p>
               </li>
               <li className='nav-item'>
                  <NavLink
                     className='nav-link'
                     to='/admin-film'
                  >
                     Quản lý phim
                  </NavLink>
               </li>
               {/* {renderHeaderByRole} */}
               <li className='nav-item'>
                  <button
                     className='btn btn-danger'
                     onClick={() => {
                        let action = {
                           type: 'DANG_XUAT',
                           usLogin: null,
                        };
                        dispatch(action);
                     }}
                  >
                     Đăng xuất{' '}
                  </button>
               </li>
            </>
         );
      } else {
         return (
            <>
               <button>
                  <NavLink
                     className='nav-link'
                     to='/registers'
                  >
                     Registers
                  </NavLink>
               </button>
               <button>
                  <NavLink
                     className='nav-link'
                     to='/login'
                  >
                     Login
                  </NavLink>
               </button>
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

                     {renderLogin()}
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
