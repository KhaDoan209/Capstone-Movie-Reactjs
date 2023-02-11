import React, { useState } from 'react';
import './Home.scss';
import CardFilm from '../../components/CardFilm/CardFilm';
import Carousel from '../../components/Carousel/Carousel';
import { filmService } from '../../services';
import { useEffect } from 'react';

const Home = () => {
   
   const [filmList, setFilmList] = useState([]);

   useEffect(() => {
      filmService.getFilmList().then((result) => {
         setFilmList(result.data.content);
      });
   }, []);

   let renderFilmList = () => {
      return filmList.map((item) => {
         return (
            <CardFilm
               key={item.maPhim}
               item={item}
            />
         );
      });
   };

   return (
      <div className='home'>
         <Carousel carouselId={'HomeBanner'} />
         <div className='container'>
            <h2 className='title h2 mt-3'>Danh sách phim</h2>
            <div className='row'>{renderFilmList()}</div>
         </div>
         <div className='container'>
            <h2 className='title h2 mt-3'>Sắp chiếu</h2>
            <Carousel carouselId={'HomeCommingSoon'} />
         </div>
      </div>
   );
};

export default Home;
