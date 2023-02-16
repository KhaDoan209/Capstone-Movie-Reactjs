import React from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';

const CardFilm = (props) => {
   return (
      <>
         <div className={`my-3 card-film col-${props.col}`}>
            <img
               className='img-fluid'
               src={props.item.hinhAnh}
               alt='img'
               style={{ height: '515px' }}
            />
            <div className='card-film-infor-before'>
               <div className='infor-before-inner text-center'>
                  <div className='film-name mb-3 text-wrap h3'>
                     {props.item.tenPhim}
                  </div>
                  <p className='film-rating text-wrap h4'>
                     Rating: {props.item.danhGia}/10{' '}
                     <i className=' text-warning fa-solid fa-star'></i>
                  </p>

                  <div className='film-trailer-btn'>
                     <a href={props.item.trailer}>
                        <i className='fa-solid fa-play'></i>
                     </a>
                  </div>

                  <div className='film-date text-wrap h5 '>
                     Khởi chiếu:{' '}
                     <div className=' text-wrap mt-2 h5'>
                        {props.item.ngayKhoiChieu}
                     </div>
                  </div>
                  <div className='film-action mt-4 d-flex text-center justify-content-around'>
                     <a
                        className='h6 card-link'
                        href=''
                     >
                        {' '}
                        Xem chi tiết
                     </a>
                     
                     <div
                        className='h6 card-link'
                        to = {`/detail/${props.item.maPhim}`}
                        onClick = {() => {
                           history.push(`/detail/${props.item.maPhim}`)
                        }}
                     >
                        {' '}
                        Đặt vé
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default CardFilm;
