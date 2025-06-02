import React from 'react';
import Header from '@/components/layout/header';
import Hero from './_component/hero';
import About from './_component/about';
import RunningLine from './_component/runningLine';
import Reviews from './_component/reviews';
import Services from './_component/services';
import Advantages from './_component/advantages';
import Appliances from './_component/appliances';
import BrandGrid from './_component/logoGrid';
import FaqAccordion from './_component/faq';
import OffersBlock from './_component/OffersBlock';
import Reception from './_component/Reception';
import Contact from './_component/Contact';
import Footer from '@/components/layout/footer';
import ColorPalettes from '@/components/layout/ColorPalettes';

const Main = () => {
  return (
    <div className="flex flex-col">
      <ColorPalettes />
      <Header />
      <Hero />
      <About />
      <Reviews />
      <RunningLine />
      <Services />
      <Advantages />
      <BrandGrid />
      <Appliances />
      <FaqAccordion />
      <OffersBlock />
      <Reception />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
