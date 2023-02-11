import React, { useState } from 'react';
import CardFilm from '../../components/CardFilm/CardFilm';
import Carousel from '../../components/Carousel/Carousel';
import { useEffect } from 'react';
import { apiMethod } from '../../services/apiMethod';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { pushCarouselToReducer } from '../../redux/reducers/carouselReducer';
import { filmService } from '../../services/filmService';
import { pushFilmListToReducer } from '../../redux/reducers/filmReducer';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
   const dispatch = useDispatch();
   const carousel = useSelector((state) => state.carousel.carouselArray);
   const film = useSelector((state) => state.film.filmList);

   useEffect(() => {
      filmService
         .getFilmList()
         .then((result) => dispatch(pushFilmListToReducer(result.data.content)))
         .catch((error) => console.log(error));
   }, []);

   useEffect(() => {
      apiMethod
         .get('/QuanLyPhim/LayDanhSachBanner')
         .then((result) => {
            dispatch(pushCarouselToReducer(result.data.content));
         })
         .catch((error) => console.log(error));
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
               carouselList={carousel}
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
               carouselList={carousel}
               carouselId={'HomeCommingSoon'}
            />
         </div>
      </div>
   );
};

export default Home;
