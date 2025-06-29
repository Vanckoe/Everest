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
import ForWho from './_component/forWho';
import ForWhoMobile from './_component/forWhoMobile';
// import ColorPalettes from '@/components/layout/ColorPalettes';
import NewHero from './_component/newHero';
import ServiceAreaMarquee from './_component/runningLine-text';

const Main = () => {
  return (
    <div className="flex flex-col">
      {/* <ColorPalettes /> */}
      <Header />
      {/* <Hero /> */}
      <div className="md:hidden">
        <RunningLine />
      </div>
      <NewHero />
      <div className="hidden mt-12 md:block">
        <RunningLine />
        <ServiceAreaMarquee />
      </div>
      <Services />
      <About />
      <Reviews />
      <Advantages />
      <BrandGrid />
      <Appliances />
      <ForWho />
      <ForWhoMobile />
      {/* <OffersBlock /> */}
      <FaqAccordion />
      {/* <Reception /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
