import React from 'react';
import Header from '@/components/layout/header';
import Terms from '@/app/terms/_component/terms';
import Footer from '@/components/layout/footer';


const Subzero = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Terms />
      <Footer />
    </div>
  );
};

export default Subzero;