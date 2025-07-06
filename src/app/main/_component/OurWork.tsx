'use client';
import React, { useState, useMemo } from 'react';
import Right from '@/assets/right copy';
import Image from 'next/image';

const imageSlides = [
  '/img/forWho/img1.jpg',
  '/img/forWho/img2.jpg',
  '/img/forWho/img3.jpg',
  '/img/forWho/img4.jpg',
  '/img/forWho/img5.jpg',
  '/img/forWho/img6.jpg',
  '/img/forWho/img7.jpg',
  '/img/forWho/img8.jpg',
  '/img/forWho/img9.jpg',
  '/img/forWho/img10.jpg',
  '/img/forWho/img11.jpg',
  '/img/forWho/img12.jpg',
  '/img/forWho/img13.jpg',
];

const OurWork = () => {
  const visibleCount = 4;
  const maxIndex = Math.max(imageSlides.length - visibleCount, 0);
  const [index, setIndex] = useState(0);

  const translate = useMemo(
    () => `translateX(-${index * (100 / imageSlides.length)}%)`,
    [index]
  );

  const next = () => setIndex(i => Math.min(i + 1, maxIndex));
  const prev = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <section className="hidden md:flex mx-auto mt-20 flex-col px-16" id="our-work">
      {/* Заголовок и описание */}
      <header className="order-1 mb-14 flex flex-row items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-[4rem] font-gloock text-color leading-[94%]">Our Work</h2>
        </div>

        {/* Кнопки навигации */}
        <div className="order-3 ml-auto flex flex-row items-stretch gap-4 rounded-xl border border-[#191919] p-3.5 md:order-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`rotate-180 rounded-lg px-20 py-[1.875rem] transition-opacity ${
              index === 0 ? 'cursor-not-allowed' : 'bg-btsecond'
            }`}
          >
            <Right color={index === 0 ? '#001F3F' : '#FFFFFF'} />
          </button>
          <div className="h-20 w-0 border border-[#191919]" />
          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`rounded-lg px-20 py-[1.875rem] transition-opacity ${
              index === maxIndex ? 'cursor-not-allowed' : 'bg-btsecond'
            }`}
          >
            <Right color={index === maxIndex ? '#001F3F' : '#FFFFFF'} />
          </button>
        </div>
      </header>

      {/* Слайдер */}
      <div className="order-2 overflow-hidden md:order-3">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: translate,
            width: `${(imageSlides.length / visibleCount) * 118}%`,
          }}
        >
          {imageSlides.map((src, i) => (
            <div
              key={i}
              className="px-4 w-full md:max-w-[22.25rem] flex-none"
            >
              <Image
                src={src}
                alt={`Work ${i + 1}`}
                width={400}
                height={300}
                className="rounded-2xl w-full h-[23rem] object-cover border border-neutral-300 shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;