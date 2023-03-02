import React from 'react';
import './Carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowRightShort } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


const Carousel = () => {
  const { t } = useTranslation();
  return (
    <div className='carousel'>
      <Swiper
      className='swiper'
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='slide-1'>
        <div className='slide_first'>
          <div className='first-slide_1'>
            <h1 className='first-slide_h1'>{t("carousel_1")}</h1>
            <p className='first-slide_p'>{t("carousel_2")}</p>
            <button className='first-slide_btn'>{t("carousel_3")} <BsArrowRightShort/></button>
          </div>

          <div className='first-slide_2'>
            <img src="https://s3-alpha-sig.figma.com/img/5997/5451/2df26621f9dec73c76a381c75f6d7279?Expires=1678665600&Signature=KZP8Sv5Ft8OoeH2BHrv4RZRB7TRw0YcKJOkqXd-lxJ~JCi-lipubXs3eyIjqTGvxvjfAM9KdJyosG-HDKxjbNSnrMKaPL7kpfQmYSPiOEJy11hMtUYMRx~IXW7Wqzjpq3q6p3CmVhRKVdSgelXZvGrDGyF1Adlr3SI1xm2cgesxOA4g13mTqHLnMr6olVpxAtJKek0yNjSCXD-YJwel5T2Kz6nQmSNKwLhMVg6OH2U9iZcjdAEXzZlHxqnVxJ3OfOP7qP4ui1pvSN7H60dUw6U7RyG-b0-qnR~VDrOfcZWPwMnfXXBzk2cysvYytVEwcwtlnBNFDvw7XyKKmI9QVKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>

          <div className='first-slide_3'>
            <img src="https://s3-alpha-sig.figma.com/img/5cc8/59b2/9f959b456f28ace7ff53430ba661a425?Expires=1678665600&Signature=doTwOj6v71dSmopTlrFakXMbZm4futAQAmm1IawQ~ipIHwVsMd9UucX4unoARjIpPl73IyJO5xAZgpd1MAsBhQjzldLKbHeQbQm2~57XwAPEGyA6dxoVP5Qs2nGibhowdwK7y6HLs4DXe1rBJ87Q4ZsvUVC9e6DRWv~e1ltrIgZaLFHkZDdP-xPf6e2bDPSTNSn4DrsQFLkk~VbETxVGeqYz51zhWWPTEhtk6nI3lxZO3GLJ1I3iQQpQ8lQrPnIwJTV1hGYu842zRsNZYVOK60bkxymhv80SwDwxVhkWK98LIwWB24tjirPsspk00MdZoJPHtpEybWXoAsehE1WLrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>

          <div className='first-slide_4'>
            <img src="https://s3-alpha-sig.figma.com/img/3dd3/b3d0/8e1fe2c38b56152681f9746fcfa79ceb?Expires=1678665600&Signature=EI8~cVZpIzR7ZcnuG1E5yJzWSZcHsZZ-fqJ0ifkm9CFxiPk-zjDdUe0rSnaFZB2GLyBrMJXoFbOru1lpRvbOHgosT4KhPyMnQsLQ1NKTSfB5b~8dg2ISz4RvWgumJX6-hGYdc6LyH0Uho3LArj7g2mr~aW0~8U4KwJZcZpSuKmIV9-oGmllo6UjFJL8ii9yruhnd~3yfg-2c6VnK3OUutLb-GGMaNFxbEqlwRgkBTEqgcwKnXOIMC~sfJ9qd1XkXNmVO8aoWx-BPiojuurmJ8zliD2Axwyi56pOKK4HgzZUEMbhY5Yt41~Y7Kiycb2ghc~SlwZOijR6vPuUJ95a6Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Carousel