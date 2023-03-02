import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../../utils/Container";
import { Link } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
// import { useTranslation } from 'react-i18next';
import { FiHeart } from "react-icons/fi";
import { BsFillSuitHeartFill } from "react-icons/bs";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

export default () => {
  const dispatch = useDispatch();
  const { likedProducts } = useSelector((state) => state.likeReducer);
  // const { t } = useTranslation();
  const [data, isLoading] = useFetchData("/products?offset=0&limit=20");

  function trimDescription(str) {
    return str.split(" ").slice(0, 8).join(" ") + "...";
  }

  function addToLike(swiper) {
    dispatch({ swiper, type: "LIKE_PRODUCT" });
  }

  function removeFromlikedproducts(swiper) {
    dispatch({ id: swiper.id, type: "REMOVE_FROM_LIKED" });
  }

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Container>
            <div className="single-product_wrapper"></div>
          </Container>
        </SwiperSlide>
      </Swiper>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {!isLoading ? (
          data.map((swiper) => (
            <SwiperSlide>
              <div className="product-item" key={swiper.id}>
                <Link to={`/product/${swiper.id}`}>
                  {swiper.images?.at(0) &&
                  swiper.images?.at(0).startsWith("https://") ? (
                    <img
                      className="product-item__image"
                      width={500}
                      height={300}
                      src={swiper.images?.at(0)}
                      alt=""
                    />
                  ) : (
                    <img
                      className="product-item__image"
                      width={500}
                      height={300}
                      src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                      alt=""
                    />
                  )}
                  <h3>{swiper.title}</h3>
                </Link>
                <div className="product-info">
                  <div>
                    <p>{trimDescription(swiper.description)}</p>
                    <strong>${swiper.price}</strong>
                  </div>
                  {likedProducts.find((p) => p?.id === swiper?.id) ? (
                    <BsFillSuitHeartFill
                      onClick={() => removeFromlikedproducts(swiper)}
                      style={{ color: "red" }}
                    />
                  ) : (
                    <FiHeart onClick={() => addToLike(swiper)} />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}

      </Swiper>
    </>
  );
};
