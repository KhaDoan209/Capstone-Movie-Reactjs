import React, { useState } from 'react';
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
import {
   getLichChieuHeThongRapAction,
   getRapFilmAction,
} from '../../redux/action/rapFilmAction';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Grid, GridItem } from '@chakra-ui/react';
const Home = () => {
   const dispatch = useDispatch();
   const film = useSelector((state) => state.filmReducer.filmList);
   const banner = useSelector((state) => state.filmReducer.filmBanner);
   const rapFilm = useSelector((state) => state.rapPhimReducer.heThongRap);
   const lichChieuHeThongRap = useSelector(
      (state) => state.rapPhimReducer.lichChieuHeThongRap
   );
   useEffect(() => {
      dispatch(getFilmListAction());
      dispatch(getFilmBannerAction());
      dispatch(getRapFilmAction());
   }, []);

   useEffect(() => {
      rapFilm.map((item) => {
         if (item.maHeThongRap == 'BHDStar') {
            dispatch(getLichChieuHeThongRapAction(`${item.maHeThongRap}`));
         }
      });
   }, [rapFilm]);

   let getLichChieuHeThongRap = (maHeThongRap) => {
      console.log(maHeThongRap);
      rapFilm.map((item) => {
         if (item.maHeThongRap == maHeThongRap) {
            dispatch(getLichChieuHeThongRapAction(`${item.maHeThongRap}`));
         }
      });
   };
   let renderCumRap = () => {
      return lichChieuHeThongRap.map((item) => {
         return item.lstCumRap.map((ele) => {
            return (
               <TabPanels>
                  <TabPanel>
                     <div className='rap-phim'>
                        <p className='text-wrap'>{ele.tenCumRap}</p>
                        <img
                           src={ele.hinhAnh}
                           className='logo'
                        />
                     </div>
                  </TabPanel>
               </TabPanels>
            );
         });
      });
   };

   let renderRapFilm = () => {
      return rapFilm.map((item) => {
         return (
            <Tab key={item.maHeThongRap}>
               <img
                  onClick={() => {
                     getLichChieuHeThongRap(item.maHeThongRap);
                  }}
                  src={item.logo}
                  className='logo'
               />
            </Tab>
         );
      });
   };

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
            <Tabs>
               <TabList>{renderRapFilm()}</TabList>
               <div className='row'>
                  <div className='col-3 text-center'>{renderCumRap()}</div>
                  <div className='col-9'></div>
               </div>
            </Tabs>
         </div>
      </div>
   );
};

export default Home;
