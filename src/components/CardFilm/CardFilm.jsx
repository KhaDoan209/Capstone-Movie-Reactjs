import React from 'react';
import './CardFilm.scss';
const CardFilm = () => {
   return (
      <>
         <div className='col-4 '>
            <div className='my-3 card-film'>
               <img
                  className='img-fluid'
                  src='https://movienew.cybersoft.edu.vn/hinhanh/nguoi-nhen-khong-con-nha_gp01.jpg'
                  alt='img'
               />
               <div className='card-film-infor-before'>
                  <div className='infor-before-inner text-center'>
                     <div className='film-name mb-3 text-wrap h3'>
                        NGƯỜI NHỆN: KHÔNG CÒN NHÀ
                     </div>
                     <p className='film-rating text-wrap h4'>
                        Rating: 8/10{' '}
                        <i className=' text-warning fa-solid fa-star'></i>
                     </p>

                     <div className='film-trailer-btn'>
                        <a href='https://youtu.be/o4NzWTNqSto'>
                           <i className='fa-solid fa-play'></i>
                        </a>
                     </div>

                     <div className='film-date text-wrap h5 '>
                        Khởi chiếu:{' '}
                        <div className=' text-wrap mt-2 h5'>
                           2023-02-01T18:03:00.373
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
                        <a
                           className='h6 card-link'
                           href=''
                        >
                           {' '}
                           Đặt vé
                        </a>
                     </div>
                  </div>
               </div>
               {/* <div className='card-film-infor-after'>
               <div className='infor-before-inner'>
                  <div className='film-name'>Trải nghiệm cùng Adam</div>
                  <div className='film-rating'>8/10</div>
                  <div className='film-date'>2023-02-01T18:03:00.373</div>
               </div>
            </div> */}
            </div>
         </div>
      </>
   );
};

export default CardFilm;
