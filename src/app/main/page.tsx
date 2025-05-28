import React from 'react';
import Header from '@/components/layout/header';
import Hero from './_component/hero';
import RunningLine from './_component/runningLine';

const Main = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <RunningLine />
    </div>
  );
};

export default Main;
