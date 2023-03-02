import React from 'react';
import { Link } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import './Categories.scss';
import { useTranslation } from 'react-i18next';


const Categories = () => {
  const { t } = useTranslation();


  const data = useFetchData("/categories")
  return (
    <section className='section'>
      <h2 className='categories-title'>{t("categories")}</h2>

      <div className='categories-wrapper'>
        {
          data?.slice(0, 7).map((category) => (
            <Link className='categories-link' to={`/category/${category.id}`}>
              <div className='none'>
                <div className='image-wrapper'>
                  <img src={category.image} alt="" />
                </div>
                <h3 className='category-title'>{category.name}</h3>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Categories