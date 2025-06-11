import React from 'react';
import Header from '@/components/layout/header';
import About from './_component/about';
import Reviews from './_component/reviews';
import Advantages from './_component/advantages';
import Appliances from './_component/appliances';
import BrandGrid from './_component/logoGrid';
import FaqAccordion from './_component/faq';
import Contact from './_component/Contact';
import Footer from '@/components/layout/footer';
import ForWho from './_component/forWho';
import ForWhoMobile from './_component/forWhoMobile';
import NewHero from './_component/newHero';
import Repair from './_component/repair';
import AboutRepairCompany from './_component/AboutRepairCompany';

const Subzero = () => {
  return (
    <div className="flex flex-col">
      {/* <ColorPalettes /> */}
      <Header />
      {/* <Hero /> */}
      <div className="md:hidden">
      </div>
      <NewHero />
      <div className="hidden mt-12 md:block">
      </div>

      <Reviews />
      <Advantages />
      <About />
      <Repair/>
      <AboutRepairCompany/>
      <BrandGrid />
      <FaqAccordion />
      <Appliances />
      <Contact />
      <Footer />
    </div>
  );
};

export default Subzero;