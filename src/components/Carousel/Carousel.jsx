import React from 'react';
const Carousel = (props) => {
   let { carouselId, carouselList } = props;

   return (
      <>
         <div
            id={carouselId}
            className='carousel slide carousel-movies'
            data-ride='carousel'
         >
            <div className='carousel-inner'>
               {carouselList.map((item) => {
                  if (item.maBanner === 1) {
                     return (
                        <div
                           key={item.maBanner}
                           className='carousel-item active'
                        >
                           <img
                              src={item.hinhAnh}
                              className='d-block w-100'
                           />
                        </div>
                     );
                  }
               })}
               {carouselList.map((item) => {
                  if (item.maBanner > 1) {
                     return (
                        <div
                           key={item.maBanner}
                           className='carousel-item'
                        >
                           <img
                              src={item.hinhAnh}
                              className='d-block w-100'
                           />
                        </div>
                     );
                  }
               })}
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
               />
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
               />
               <span className='sr-only'>Next</span>
            </button>
         </div>
      </>
   );
};

export default Carousel;
