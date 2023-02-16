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
import 'swiper/css';
import 'swiper/css/pagination';
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
         if (rapFilm.indexOf(item) == 0) {
            dispatch(getLichChieuHeThongRapAction(`${item.maHeThongRap}`));
         }
      });
   }, [rapFilm]);

   let getLichChieuHeThongRap = (maHeThongRap) => {
      dispatch(getLichChieuHeThongRapAction(`${maHeThongRap}`));
   };

   let renderFilmList = () => {
      return film.map((item) => {
         return (
            <SwiperSlide key={item.maPhim}>
               <CardFilm
                  col={12}
                  item={item}
               />
            </SwiperSlide>
         );
      });
   };

   let renderRapFilm = () => {
      return rapFilm.map((item) => {
         let isFirst = rapFilm.indexOf(item) === 0;
         return (
            <a
               key={item.maHeThongRap}
               className={
                  isFirst
                     ? 'list-group-item list-group-item-action active'
                     : 'list-group-item list-group-item-action'
               }
               data-toggle='list'
               onClick={() => {
                  getLichChieuHeThongRap(item.maHeThongRap);
               }}
            >
               <img
                  className='img-fluid logo'
                  src={item.logo}
               />
            </a>
         );
      });
   };

   let renderCumRap = () => {
      if (lichChieuHeThongRap.length > 0) {
         let heThongRap = lichChieuHeThongRap[0].lstCumRap;
         return heThongRap.map((item) => {
            return (
               <div
                  key={item.tenCumRap}
                  className='col-3'
                  data-toggle='list'
                  href={`#${item.tenCumRap}`}
                  role='tab'
               >
                  <img
                     src={item.hinhAnh}
                     className='card-img-top img-fluid'
                  />
                  <div className='card-body text-center'>
                     <h5 className='card-title'>{item.tenCumRap}</h5>
                     <p className='card-text'>{item.diaChi}</p>
                  </div>
               </div>
            );
         });
      }
   };

   // let renderLichChieuTheoCum = () => {
   //    if (lichChieuHeThongRap.length > 0) {
   //       let heThongRap = lichChieuHeThongRap[0].lstCumRap;
   //       return heThongRap.map((item) => {
   //          console.log(item);
   //          let isFirst = heThongRap.indexOf(item) === 0;
   //          return (
   //             <div
   //                class='tab-pane active'
   //                id={item.tenCumRap}
   //                role='tabpanel'
   //             >
   //                {item.danhSachPhim.map((item) => {
   //                   return <p>{item.tenPhim}</p>;
   //                })}
   //             </div>
   //          );
   //       });
   //    }
   // };

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
            <div className='row'>
               <div className='col-3'>
                  <div
                     className='list-group'
                     id='list-tab'
                     role='tablist'
                  >
                     {renderRapFilm()}
                  </div>
               </div>
               <div className='col-9'>
                  <div
                     className='row'
                     id='listRap'
                     role='tablist'
                  >
                     {renderCumRap()}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
