import React from 'react';
import Header from '@/components/layout/header';
import Hero from './_component/hero';
import About from './_component/about';
import RunningLine from './_component/runningLine';
import Reviews from './_component/reviews';

const Main = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Reviews/>
      <RunningLine />
    </div>
  );
};

export default Main;
