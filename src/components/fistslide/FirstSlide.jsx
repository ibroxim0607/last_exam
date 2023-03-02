import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import  { Link } from 'react-router-dom';
import "./FirstSlide.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { useTranslation } from 'react-i18next';


const Slide = () => {
  const { t } = useTranslation();
  const data = useFetchData('/categories/1/products')
  return (
    <div className='slider'>
      <Swiper
      spaceBetween={1}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        <h1 className='h1'>{t("firstslide")}</h1>
      {
        data.slice(0, 12).map((product) => (
            <SwiperSlide>
              <div className='wrapper' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <div className='wrapper_img'>
                  <img src={product.images} alt="" />
                </div>
              </Link>
              <div className='wrapper_strong'>
                <strong>$ {product.price}</strong>
              </div>
            </div>
            </SwiperSlide>
        ))
      }

    </Swiper>
      </div>
  )
}

export default Slide