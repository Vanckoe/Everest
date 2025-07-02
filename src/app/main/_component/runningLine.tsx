'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const brandLogos = [
  '/img/brands/subzero.avif',
  '/img/brands/viking.avif',
  '/img/brands/thermador.avif',
  '/img/brands/Kitchenaid.png',
  '/img/brands/bosch.avif',
  '/img/brands/dacor.avif',
  '/img/brands/Fisherpaykel.png',
  '/img/brands/h.avif',
  '/img/brands/wolf.avif',
  '/img/brands/samsung.avif',
  '/img/brands/Whirlpool.png',
];

const BrandMarquee = () => {
  return (
    <div className="w-full bg-[#F7F8F9] py-5 md:py-10">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {brandLogos.map((src, idx) => (
          <div key={idx} className="mx-8">
            <Image
              src={src}
              alt={`brand-${idx}`}
              width={120}
              height={60}
              className="h-[2rem] md:h-[2.5rem] w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandMarquee;