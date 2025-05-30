import React from 'react';
import Header from '@/components/layout/header';
import Hero from './_component/hero';
import About from './_component/about';
import RunningLine from './_component/runningLine';
import Services from './_component/services';
import Appliances from './_component/appliances';
import BrandGrid from './_component/logoGrid';

const Main = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <RunningLine />
      <Services />
      <About />
      <BrandGrid />
      <Appliances />
    </div>
  );
};

export default Main;
