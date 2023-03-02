import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import  { Link } from 'react-router-dom';
import "./FourthSlide.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useTranslation } from 'react-i18next';


const FourthSlide = () => {
  const { t } = useTranslation();

  const data = useFetchData('/categories/3/products')
  return (
    <div className='slider'>
      <h1 className='title'>{t("fourthslide")}</h1>
      <Swiper
      spaceBetween={1}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {
        data.slice(0, 7).map((p) => (
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

export default FourthSlide;