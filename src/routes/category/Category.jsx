import React from 'react';
import './Category.scss';
import useFetchData from '../../hooks/useFetchData';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Category = () => {
  const { t } = useTranslation();

  function trimDescription(str){
    return str.split(" ").slice(0, 8).join(" ") + "..."
  }

  const categoryId = useParams();
  const data = useFetchData(`categories/${categoryId.id}/products`)
  return (
    <section className='section'>
      <div className='single-product-wrapper'>
        {
          data?.map((single) => (
            <div className='product-item'>
              <Link to={`/product/${single.id}`}>
                <div className='product-img'>
                  <img src={single.images} alt="" />
                </div>
                <div>
                  <h3>{single.title}</h3>
                </div>
              </Link>
              <div className='product-info'>
                <p>{trimDescription(single.description)}</p>
                <strong>${single.price}</strong>
                <p className='free'>{t("category_1")}</p>
              </div>
              <div className='others'>
                <p>{t("category_2")}</p>
                <FiHeart/>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Category;