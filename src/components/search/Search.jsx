import React from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';
import useFetchData from '../../hooks/useFetchData';
import { useTranslation } from 'react-i18next';
import instance from '../../api/instance';


const Search = () => {
  const { t } = useTranslation();
  const categoriesData = useFetchData("/categories")

  const giveSearchSuggestions = (e) => {
    instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }

  return (
    <main className='search'>
      <div className='search_logo'>
        <img className='search_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2560px-EBay_logo.svg.png" alt=""/>
      </div>
      <div>
        <select selected className='search-select'>
          <option value={""}>{t("search_1")}</option>
          {
            categoriesData?.map(category =>
              <option key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </option>
            )
          }
        </select>
      </div>


      <div className='search-center'>
        <form className='form'>
          <div className='search-center_input search-elements'>
            <input onChange={giveSearchSuggestions} className='search_input' type="text" placeholder={t("search_5")} />
            <div className='search-suggestions'></div>
          </div>
        </form>
      </div>


      <div>
        <select className='search-select-second'>
          <option value={""} className='all-categories' selected>{t("search_2")}</option>
          {
            categoriesData?.map(category =>
              <option value={""} key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </option>
            )
          }
        </select>
      </div>

      <div>
        <button className='search-btn'>{t("search_3")}</button>
      </div>

      <div className='search-end'>
        <p className='search-end_p'>{t("search_4")}</p>
      </div>
    </main>
  )
}

export default Search;