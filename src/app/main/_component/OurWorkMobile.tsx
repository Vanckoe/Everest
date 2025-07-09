'use client';
import React, { useState } from 'react';
import Right from '@/assets/right copy';
import Image from 'next/image';

const imageSlides = [
  '/img/forWho/img7.jpg',
  '/img/forWho/img8.jpg',
  '/img/forWho/img1.jpg',
  '/img/forWho/img2.jpg',
  '/img/forWho/img3.jpg',
  '/img/forWho/img4.jpg',
  '/img/forWho/img5.jpg',
  '/img/forWho/img6.jpg',
  '/img/forWho/img9.jpg',
  '/img/forWho/img10.jpg',
  '/img/forWho/img11.jpg',
  '/img/forWho/img12.jpg',
  '/img/forWho/img13.jpg',
];

const OurWorkMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === imageSlides.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? imageSlides.length - 1 : prev - 1
    );

  return (
    <section id="booking-steps-mobile" className="flex flex-col items-center mb-20 md:hidden">
      <h2 className="mt-20 mb-16 text-[4.75rem] font-Merriweather leading-[84%] tracking-tighter">
        Our Work
      </h2>

      {/* Слайдер */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentSlide * 65}% + 15.5%))`,
          }}
        >
          {imageSlides.map((src, index) => (
            <div
              key={index}
              className="mx-8 w-[55%] flex-shrink-0 transition-opacity duration-300"
              style={{ opacity: currentSlide === index ? 1 : 0.25 }}
            >
              <div className="overflow-hidden rounded-3xl border border-neutral-400">
                <Image
                  src={src}
                  alt={`Step ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-[26.875rem] object-cover rounded-3xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигация + Индикатор */}
      <div className="mt-8 flex w-full items-center justify-between px-16 gap-9">
        <button
          onClick={prevSlide}
          className="flex size-16 rotate-180 items-center justify-center rounded-lg bg-btsecond"
        >
          <Right color="white" />
        </button>

        <div className="relative h-3 w-60 rounded-full bg-[#DFDFDF]">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-white transition-transform duration-300"
            style={{
              width: `${100 / imageSlides.length}%`,
              transform: `translateX(${currentSlide * 100}%)`,
            }}
          />
        </div>

        <button
          onClick={nextSlide}
          className="flex size-16 items-center justify-center rounded-lg bg-accent"
        >
          <Right color="white" />
        </button>
      </div>
    </section>
  );
};

export default OurWorkMobile;