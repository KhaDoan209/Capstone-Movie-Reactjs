import React from 'react';
import CardFilm from '../../components/CardFilm/CardFilm';
import Carousel from '../../components/Carousel/Carousel';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
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
                  col={12}
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
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={(true, { clickable: true })}
               className='mySwiper'
               slidesPerView={3}
               spaceBetween={30}
               modules={[Autoplay, Pagination]}
            >
               {renderFilmList()}
            </Swiper>
         </div>
         <div className='container'>
            <h2 className='title h2 mt-3'>Danh Sách Cụm Rạp</h2>
         </div>
      </div>
   );
};

export default Home;
