import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import './Product.scss';
import { useParams } from 'react-router-dom';
import Search from '../../components/search/Search';
import { useTranslation } from 'react-i18next';

const Product = () => {
  const { t } = useTranslation();

  const productData = useParams();
  const data = useFetchData(`/products/${productData.id}`)
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
    </section>
  )
}

export default Product