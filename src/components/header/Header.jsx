import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { GrCart } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import i18n from '../../language/i18next'

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const createUserData = useSelector(state => state)
  console.log(createUserData);

  return location.pathname === "/signin" ? <></> : (
    <header>
      <div className="header-left">
        <h2 className='header-hi'>Hi,
        {
          createUserData ? createUserData : <strong>
          <Link to="/signin"> Sign In </Link>
             or
          <Link to="/register"> register </Link>
        </strong>
        }
        </h2>
        <ul className='header_nav'>
          <li className='header-nav_li1'>
            <a className='header-nav_link1'>{t("header_1")}</a>
          </li>
          <li className='header-nav_li2'>
            <a className='header-nav_link2'>{t("header_2")}</a>
          </li>
          <li className='header-nav_li3'>
            <a className='header-nav_link3'>{t("header_3")}</a>
          </li>
        </ul>
      </div>


      <ul className='language-select'>
          <li onClick={() => i18n.changeLanguage("uz")}>O'Z</li>
          <span>|</span>
          <li onClick={() => i18n.changeLanguage("en")}>EN</li>
        </ul>
      <div className='header-right'>
        <h2>{t("header_8")}</h2>
        <select className="form-select header-right_select" aria-label="Default select example">
          <option value="Watchlist">{t("header_9")}</option>
            <option defaultValue="Summary" className='header-right_options' value="1">{t("header_4")}</option>
            <option defaultValue="Recently Viewed" className='header-right_options' value="2">{t("header_5")}</option>
            <option defaultValue="Bids | Offers" className='header-right_options' value="3">{t("header_6")}</option>
            <option defaultValue="WatchList" className='header-right_options' value="4">{t("header_7")}</option>
            <option defaultValue="Purchase History" className='header-right_options' value="5">{t("header_10")}</option>
            <option defaultValue="Buy Again" className='header-right_options' value="6">{t("header_11")}</option>
            <option defaultValue="Selling" className='header-right_options' value="7">{t("header_12")}</option>
            <option defaultValue="Saved Searches" className='header-right_options' value="8">{t("header_13")}</option>
            <option defaultValue="Saved Sellers" className='header-right_options' value="9">{t("header_14")}</option>
            <option defaultValue="Messages" className='header-right_options' value="10">{t("header_15")}</option>
        </select>

        <select className="form-select header-right_select-2" aria-label="Default select example">
          <option defaultValue="My eBAY">{t("header_16")}</option>
            <option defaultValue="Summary" className='header-right_options' value="1">{t("header_4")}</option>
            <option defaultValue="Recently Viewed" className='header-right_options' value="2">{t("header_5")}</option>
            <option defaultValue="Bids | Offers" className='header-right_options' value="3">{t("header_6")}</option>
            <option defaultValue="Purchase Hitory" className='header-right_options' value="4">{t("header_10")}</option>
            <option defaultValue="Buy Again" className='header-right_options' value="5">{t("header_11")}</option>
            <option defaultValue="Selling" className='header-right_options' value="6">{t("header_12")}</option>
            <option defaultValue="Saved Searches" className='header-right_options' value="7">{t("header_13")}</option>
            <option defaultValue="Saved Sellers" className='header-right_options' value="8">{t("header_14")}</option>
            <option defaultValue="Messages" className='header-right_options' value="9">{t("header_15")}</option>
        </select>

        <Link to="like">
          <FiHeart className='header-like'/>
        </Link>

        <Link to="cart">
          <GrCart className='header-cart'/>
        </Link>
      </div>
    </header>
    )
  }

  export default Header;