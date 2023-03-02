import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import  { Link } from 'react-router-dom';
import "./SecondSlide.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


const FirstSlide = () => {
  const data = useFetchData('/categories/4/products')
  return (
    <div className='slider'>
      <Swiper
      spaceBetween={1}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >


      {
        data.slice(0, 9).map((p) => (
            <SwiperSlide>
              <div className='p-wrapper' key={p.id}>
              <Link to={`/product/${p.id}`}>
                <div className='p-wrapper_img'>
                  <img src={p.images} alt="" />
                </div>
                <div className='p-wrapper_title'>
                  <h3>{p.title}</h3>
                </div>
              </Link>
            </div>
            </SwiperSlide>
        ))
      }

    </Swiper>
      </div>
  )
}

export default FirstSlide;