import React from 'react';
import './ThirdSlide.scss';
import { useTranslation } from 'react-i18next';


const ThirdSlide = () => {
  const { t } = useTranslation();

  return (
    <div className='slide-ebay'>
      <div className='left'>
        <div className='left_left'>
          <p className='left_p'>{t("thirdslide_1")}</p>
          <img className='left_img' src="https://s3-alpha-sig.figma.com/img/28b9/3c8c/f7713d7ca3d664d7e3ef490955871a71?Expires=1678665600&Signature=hLgeLsiebaE9~vDe4PaZPxDnYsmiVgRkhPgFnuhOhxN2rjJD-gGSUE1oYMK5ufATsyFqISyq0nCu0wrrCIgUS91wkok0hFESSTXIe7nfbAawnakpg~EDTOFskFNU1Eg6V~m7OghVHNJ1-a5goCijuPzmqoJN2drSlpZt4WkYZEmY9Hqyr9yVci1J7X71Ef8EX1dATBtF83Tmg6-vYy9V67k4L2pz5jB38AIlttKCbLQAU219C5ePeauO2BA3WddKbK5UL5l3tdYiYtYDi0gsIYNGtesaKqdXA8bbYCi2P92SCSO~gxcupa9kDrOpbnC8NIwYnWZSm-4pSiI3uYn54A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <h3 className='left_h3'>{t("thirdslide_2")}</h3>
          <p className='left_p2'>{t("thirdslide_3")}</p>
          <button className='left_btn'>{t("thirdslide_4")}</button>
        </div>
        <div className='images'>
          <img className='img' src="https://s3-alpha-sig.figma.com/img/ac99/77a6/41016fa87e1fd60495ca202c1231990a?Expires=1678665600&Signature=jq9gLldbd7brIKOz2U~lyWuFlyC55EEtBPTaWod13Qj~1lQw-LEnHDw~c0d5YqhLObkqbAWjIEXkaZqLXCHnLxSjFT001TF1rYkLYLAyuOM~LgSaaS9fL~~~4SgkeK455rURFM2RJhLCWnvriZq8Q~f0d8SdMpuomCW8Brz0hDp2wGBSVOygxuKNdpZXrEuFBsa5tovcWQAa8qW4To5PUgZ-YziA3sm9raDwB1ItNMZ5eI8DLOQ~7vbDH0CL8AyJKZ9kylTnHpQsexrUZWH5tHV3tLfoInkzfyzlKCV1LltRsCG6CkJfD7euJuR-qx8Edc57BqwvmqI4cBlj7AMoxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ThirdSlide