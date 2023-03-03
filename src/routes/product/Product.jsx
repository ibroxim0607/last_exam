import React, { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import './Product.scss';
import { Link, useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import { useTranslation } from 'react-i18next';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import instance from '../../api/instance';

const Product = () => {
  const { t } = useTranslation();
  const productIdData = useParams();
  const [categoryData, setCategoryData] = useState([]);

  const productData = useParams();
  const data = useFetchData(`/products/${productData.id}`)

  function trimDescription (str){
    return str.split(" ").splice(0, 10).join(" ") + "..."
  }

  useEffect(() => {
    instance.get(`/products/?categoryId=${productIdData.id}`)
      .then(response => {
        setCategoryData(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [data?.category?.id])

  return (
    <section>
      <Search/>
      <h2 className='product-heading'>{t("product_1")}</h2>
      <div className='product-wrapper'>
        <div className='image'>
            <img className='product-image' src={data.images} alt="" />
        </div>
        <div className='product-right'>
          <h1 className='product-title'>{t("product_2")}: {data.title}</h1>
          <h2 className='product-desc'>{t("product_3")}: {data.description}</h2>
          <h3 className='product-update'>{t("product_4")}: <strong>{data.updatedAt}</strong></h3>
          <h3 className='product-create'>{t("product_5")}: <strong>{data.creationAt}</strong></h3>
          <div className='buy-product'>
            <h3 className='product-price'>{t("product_6")}: <strong>$ {data.price}</strong></h3>
            <div className='product-buttons'>
              <button className='buy-btn'>{t("product_7")}</button>
              <button className='cart-btn'>{t("product_8")}</button>
              <button className='watch-btn'>{t("product_9")}</button>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='first-div'>
            <h2 className='div-title'>{t("product_10")}</h2>
            <div className='div-other'>
              <div className='other-img'>
                <img src="https://cdn.icon-icons.com/icons2/2760/PNG/512/save_bookmark_icon_176403.png" alt="" />
              </div>
              <div className='other-desc'>
              <h3>{t("product_11")}</h3>
              <p>{t("product_12")}</p>
              <a>{t("product_13")}</a>
              </div>
            </div>

            <div className='second-div'>
              <div className='img-wrapper'>
                <img src="https://i.pinimg.com/564x/7d/e7/43/7de743eb2098874bb8310f402f75693d.jpg" alt="" />
              </div>
              <div className='desc-wrapper'>
                <h3>{t("product_14")}</h3>
                <p>{t("product_15")}</p>
                <a>{t("product_16")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='footer'>
        <div className='footer-top'>
          <div className='top-left'>
            <div className='top-left_img'>
              <img src="https://s3-alpha-sig.figma.com/img/bae9/ef80/df508e1aa9c6b65f8ee6a17e3979c2e5?Expires=1678665600&Signature=I2Ud9w-Chzbi70~HMaAEVCIOm-RixoX1VlYxqHE0Vtyea-eO1r1XwwNk94tJ7zCbFmAGZOPy8oaDR59BfTio24a2Gbb6WoGTweSc4gY~nEbw6Ioo2IGAW1ijecL7YkgpipbQbUY09lDuSKvmMI7dY4nP60n~b9lmIfyqhRbLRCilMfrsOJVQ8gcmS49A4POae~vn8daLgXoWEz9HKblSMV-Ne8a3Kp5KCIChRu8zRoksLJC5NcLLdF5mnNJH9YOXNckatSRqBghV6~BOFpqTBw-xsB14QIz06L9TltShmAdZCuzWJHTvyCbnYDY7Sd1Eblg0JdB-J0AHcHSUqy3rFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
              <h1 className='h1'>Tech Hobbies</h1>
              <p className='first-p'><strong>99.7% </strong>Positive Feedback</p>
              <p className='second-p'><strong>21K </strong>Items sold</p>
          </div>
          <div className='top-right'>
            <button className='visit-btn'>Visit store</button>
            <button className='contact-btn'>Contact</button>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='bottom-left'>
            <h2 className='left-title'>Detailed seller ratings</h2>
            <h4 className='p'>Average for the last 12 months</h4>
            <h4 className='p-2'>Accurate description</h4>
            <h4 className='default'>Reasonable shipping cost</h4>
            <h4 className='default'>Shipping speed</h4>
            <h4 className='default'>Communication</h4>
            <h2></h2>

            <h2 className='bottom-title'>Popular categories from this store</h2>
            <p className='bottom-p'>Cell Phones & Accessories</p>
          </div>
        </div>


        <div className='last-footer'>
          <div className='last-top'>
            <ul className='top-ul'>
              <li>About eBay, </li>
              <li>Announcements, </li>
              <li>Community, </li>
              <li>Security Center, </li>
              <li>Seller Center, </li>
              <li>Policies, </li>
              <li>Affiliates, </li>
              <li>Help & Contact, </li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className='last-end'>
            <p className='last-text'><strong>Copyright © 1995-2023 eBay Inc. All Rights Reserved. </strong> Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
export default Product