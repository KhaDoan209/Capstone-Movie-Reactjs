import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Header() {
   const dispatch = useDispatch();
   const { useLogin } = useSelector((state) => state.quanLyNguoiDungReducer);
   const renderLogin = () => {
      if (useLogin !== null) {
         return (
            <>
               <p className='text-white'>
                  {useLogin != null ? useLogin.taiKhoan : ''}
               </p>
               <button
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
                     login
                  </NavLink>
               </button>
            </>
         );
      }
   };
   return (
      <>
         <header className='container'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
               <a
                  className='navbar-brand'
                  href='#'
               >
                  Navbar
               </a>
               <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon' />
               </button>
               <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
               >
                  <ul className='navbar-nav mr-auto'>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link'
                           to='/login'
                        >
                           Login
                        </NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link'
                           to='/registers'
                        >
                           Registers
                        </NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link'
                           to='/admin/user'
                        >
                           adminuser
                        </NavLink>
                     </li>
                  </ul>
                  {/*TODO: binding tên user đã login */}
                  {renderLogin()}
               </div>
            </nav>
         </header>
      </>
   );
}
