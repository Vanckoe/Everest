'use client';
import React from 'react';
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

const RunningLine = () => {
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="w-full px-10">
      <div className="flex flex-row gap-5 w-full bg-[#F7F8F9] px-8 py-5 mt-5 rounded-xl overflow-hidden">
        <p className="mb-4 text-sm md:text-base font-medium">
          Our team repairs all world- <br className="md:hidden" />
          famous brands
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-10">
            {duplicatedLogos.map((src, index) => (
              <Image
                key={index}
                src={src}
                width={100}
                height={100}
                className="h-[2rem] w-auto object-contain"
                alt={`Brand logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningLine;
