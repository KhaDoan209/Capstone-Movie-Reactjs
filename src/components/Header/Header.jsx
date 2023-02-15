import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
const Header = () => {
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
                           to='/showing-movie'
                        >
                           Showing Movies
                        </NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link'
                           to='/admin-film'
                        >
                           Quản lý phim
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default Header;
