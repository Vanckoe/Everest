'use client';

import Marquee from 'react-fast-marquee';

const ServiceAreaMarquee = () => {
  return (
    <div className="w-full mt-20 md:mt-10 py-3 md:py-10">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <div className="text-3xl md:text-2xl font-inter-semibold text-color px-8 whitespace-nowrap">
          We serve all Chicago and all closest suburbs in 30 miles
        </div>
        <div className="text-3xl md:text-2xl font-inter-semibold text-color px-8 whitespace-nowrap">
          We serve all Chicago and all closest suburbs in 30 miles
        </div>
      </Marquee>
    </div>
  );
};

export default ServiceAreaMarquee;