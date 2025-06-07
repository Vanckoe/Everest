'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brandLogos = [
  '/img/brands/bosch.avif',
  '/img/brands/dacor.avif',
  '/img/brands/dsc.avif',
  '/img/brands/fisherpaykel.avif',
  '/img/brands/h.avif',
  '/img/brands/marvel.avif',
  '/img/brands/scotsman.avif',
  '/img/brands/subzero.avif',
  '/img/brands/thermador.avif',
  '/img/brands/viking.avif',
  '/img/brands/wolf.avif',
];

const BrandMarquee = () => {
  return (
    <div className="w-full bg-[#F7F8F9] py-5">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {brandLogos.map((src, idx) => (
          <div key={idx} className="mx-8">
            <Image
              src={src}
              alt={`brand-${idx}`}
              width={120}
              height={60}
              className="h-[2rem] w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
