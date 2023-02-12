import React, { useState } from 'react';
import CardFilm from '../../components/CardFilm/CardFilm';
import Carousel from '../../components/Carousel/Carousel';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import {
   getFilmBannerAction,
   getFilmListAction,
} from '../../redux/action/filmAction';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
   const dispatch = useDispatch();
   const film = useSelector((state) => state.filmReducer.filmList);
   const banner = useSelector((state) => state.filmReducer.filmBanner);
   useEffect(() => {
      dispatch(getFilmListAction());
      dispatch(getFilmBannerAction());
   }, []);

   let renderFilmList = () => {
      return film.map((item) => {
         return (
            <SwiperSlide key={item.maPhim}>
               <CardFilm
                  key={item.maPhim}
                  item={item}
               />
            </SwiperSlide>
         );
      });
   };

   return (
      <div className='home'>
         <div className='container'>
            <Carousel
               carouselList={banner}
               carouselId={'HomeBanner'}
            />
            <h2 className='title h2 mt-3'>Danh sách phim</h2>
            <Swiper
               pagination={(true, { clickable: true })}
               className='mySwiper'
               slidesPerView={3}
               spaceBetween={30}
               modules={[Pagination]}
            >
               {renderFilmList()}
            </Swiper>
         </div>
         <div className='container'>
            <h2 className='title h2 mt-3'>Sắp chiếu</h2>
            <Carousel
               carouselList={banner}
               carouselId={'HomeCommingSoon'}
            />
         </div>
      </div>
   );
};

export default Home;
