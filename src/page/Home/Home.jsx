import React from 'react';
import './Home.scss';
import CardFilm from '../../components/CardFilm/CardFilm';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
   return (
      <div className='home'>
         <Carousel carouselId={'HomeBanner'} />
         <div className='container'>
            <h2 className='title h2 mt-3'>Danh sách phim</h2>
            <div className='row'>
               <CardFilm />
               <CardFilm />
               <CardFilm />
            </div>
         </div>
         <div className='container'>
            <h2 className='title h2 mt-3'>Sắp chiếu</h2>
            <Carousel carouselId={'HomeCommingSoon'} />
         </div>
      </div>
   );
};

export default Home;
