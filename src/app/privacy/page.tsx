import React from 'react';
import Header from '@/components/layout/header';
import PrivacyPolicy from '@/app/privacy/_component/privacy';
import Footer from '@/components/layout/footer';


const Subzero = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default Subzero;