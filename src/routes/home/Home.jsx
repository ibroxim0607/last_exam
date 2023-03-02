import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Search from '../../components/search/Search';
import FirstSlide from '../../components/fistslide/FirstSlide';
import SecondSlide from '../../components/secondslide/SecondSlide';
import Categories from '../../components/categories/Categories';
import ThirdSlide from '../../components/thirdslide/ThirdSlide';
import FourthSlide from '../../components/fourthslide.jsx/FourthSlider';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
      <Search/>
      <Carousel/>
      <FirstSlide/>
      <SecondSlide/>
      <Categories/>
      <ThirdSlide/>
      <FourthSlide/>
      <Footer/>
    </div>
  )
}

export default Home;