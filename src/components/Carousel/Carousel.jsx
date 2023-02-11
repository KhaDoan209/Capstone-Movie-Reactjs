import React from 'react';
import './Carousel.scss';
const Carousel = (props) => {
   return (
      <>
         <div
            id={props.carouselId}
            className='carousel slide carousel-movies'
            data-ride='carousel'
         >
            <div className='carousel-inner'>
               <div className='carousel-item active'>
                  <img
                     src='https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png'
                     className='d-block img-fluid w-100'
                     alt='...'
                  />
               </div>
               <div className='carousel-item'>
                  <img
                     src='https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png'
                     className='d-block img-fluid w-100'
                     alt='...'
                  />
               </div>
               <div className='carousel-item'>
                  <img
                     src='https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png'
                     className='d-block img-fluid w-100'
                     alt='...'
                  />
               </div>
            </div>
            <button
               className='carousel-control-prev'
               type='button'
               data-target={'#' + props.carouselId}
               data-slide='prev'
            >
               <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
               ></span>
               <span className='sr-only'>Previous</span>
            </button>
            <button
               className='carousel-control-next'
               type='button'
               data-target={'#' + props.carouselId}
               data-slide='next'
            >
               <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
               ></span>
               <span className='sr-only'>Next</span>
            </button>
         </div>
      </>
   );
};

export default Carousel;
