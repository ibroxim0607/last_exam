import React from 'react';
import './Footer.scss';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className='footer'>
      <div className='footer-wrapper'>
        <div className='footer-wrapper-1'>
          <h3>{t("footer_1")}</h3>
          <div className='links'>
            <p>{t("footer_2")}</p>
            <p>{t("footer_3")}</p>
            <p>{t("footer_4")}</p>
            <p>{t("footer_5")}</p>
            <p>{t("footer_6")}</p>
            <p>{t("footer_7")}</p>
            <p>{t("footer_8")}</p>
          </div>
        </div>

        <div className='footer-wrapper-2'>
          <div>
            <h3>{t("footer_9")}</h3>
            <div className='links'>
              <p>{t("footer_10")}</p>
              <p>{t("footer_11")}</p>
              <p>{t("footer_12")}</p>
              <p>{t("footer_13")}</p>
            </div>
          </div>
          <div className='b2-link'>
            <h3>{t("footer_14")}</h3>
            <div className='links'>
              <p>{t("footer_15")}</p>
              <p>{t("footer_16")}</p>
              <p>{t("footer_17")}</p>
            </div>
          </div>
        </div>


        <div className='footer-wrapper-3'>
          <div className='titles'>
            <h3>{t("footer_18")}</h3>
            <div className='facebook'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VawklDlq_j4Uov5N2p9Iw1U39caGuDQxBw&usqp=CAU" alt="" />
              <p>{t("footer_19")}</p>
            </div>
            <div className='twitter'>
              <img src="https://png.pngitem.com/pimgs/s/391-3910665_twitter-icon-black-svg-hd-png-download.png" alt="" />
              <p>{t("footer_20")}</p>
            </div>
          </div>
        </div>


        <div className='footer-wrapper-4'>
          <div className='wrapper-4-title'>
            <h3>{t("footer_21")}</h3>
          </div>
          <div className='links'>
            <p>{t("footer_22")}</p>
            <p>{t("footer_23")}</p>
            <p>{t("footer_24")}</p>
            <p>{t("footer_25")}</p>
            <p>{t("footer_26")}</p>
            <p>{t("footer_27")}</p>
            <p>{t("footer_28")}</p>
            <p>{t("footer_29")}</p>
            <p>{t("footer_30")}</p>
            <p>{t("footer_31")}</p>
            <p>{t("footer_32")}</p>
          </div>
        </div>


        <div className='footer-wrapper-5'>
          <div className='wrapper-5-1'>
            <h3>{t("footer_33")}</h3>
            <div className='links'>
              <p>{t("footer_34")}</p>
              <p>{t("footer_35")}</p>
              <p>{t("footer_36")}</p>
            </div>
          </div>

          <div className='wrapper-5-2'>
            <h3>{t("footer_37")}</h3>
            <div className='links'>
              <p>{t("footer_38")}</p>
              <p>{t("footer_39")}</p>
              <p>{t("footer_40")}</p>
            </div>
          </div>


          <div className='wrapper-5-4'>
            <h3>{t("footer_41")}</h3>
            <div>
              <button className='footer_btn'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png" alt="" />
                {t("footer_42")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer