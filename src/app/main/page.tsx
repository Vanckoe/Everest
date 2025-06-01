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
import OffersBlock from './_component/OffersBlock';

const Main = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Reviews/>
      <RunningLine />
      <Services />
      <Advantages />
      <BrandGrid />
      <Appliances />
      <OffersBlock/>
    </div>
  );
};

export default Main;
