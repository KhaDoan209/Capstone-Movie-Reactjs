import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { useSelector } from 'react-redux';
import { history } from '../App';
export const AdminTemplate = (props) => {
   const { userLogin } = useSelector((state) => state.quanLyNguoiDungReducer);

   if (userLogin.maLoaiNguoiDung !== 'QuanTri') {
      alert('Bạn không có quyền truy cập vào trang này');
      history.push('/');
   }
   return (
      <Route
         exact
         path={props.path}
         render={(propsRoute) => {
            return (
               <div className='container-fluid admin-navigation bg-light'>
                  <div className='row'>
                     <div className='col-2 px-4 menu-col-2'>
                        <div className='admin-nav'>
                           <div className='container '>
                              <img
                                 className='py-0 img-fluid mx-auto mt-5'
                                 src={logo}
                                 style={{ width: '150px' }}
                              />
                              <div role='tabpanel mt-3'>
                                 <div
                                    className='list-group text-center h-100'
                                    id='myList'
                                    role='tablist'
                                 >
                                    <NavLink
                                       className='list-group-item list-group-item-action p-0 mx-auto mt-4'
                                       data-toggle='list'
                                       role='tab'
                                       to='/admin-user'
                                    >
                                       <div className='d-flex align-items-center px-3 pb-2'>
                                          <i className='fa-solid fa-user'></i>
                                          <p className='ml-2'>User</p>
                                       </div>
                                    </NavLink>
                                    <div className='my-2'></div>
                                    <NavLink
                                       className='list-group-item list-group-item-action p-0 mx-auto'
                                       data-toggle='list'
                                       role='tab'
                                       to='/admin-film'
                                    >
                                       <div className='d-flex align-items-center px-3 pb-2'>
                                          <i className='fa-solid fa-film'></i>
                                          <p className='ml-2'>Film</p>
                                       </div>
                                    </NavLink>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-10 px-0'>
                        <nav className='navbar navbar-light py-4'>
                           <div className='header d-flex justify-content-between mx-auto text-white'>
                              <p className='title-2'>Hello, username</p>
                              <i className='fa-solid fa-right-from-bracket'></i>
                           </div>
                        </nav>
                        <props.component {...propsRoute} />
                     </div>
                  </div>
               </div>
            );
         }}
      />
   );
};

export default AdminTemplate;
