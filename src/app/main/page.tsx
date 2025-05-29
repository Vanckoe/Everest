import React from 'react';
import Header from '@/components/layout/header';
import Hero from './_component/hero';
import RunningLine from './_component/runningLine';
import Services from './_component/services';

const Main = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <RunningLine />
      <Services/>
    </div>
  );
};

export default Main;
