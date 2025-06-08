'use client';
import React, { useState, useMemo } from 'react';
import Logo from '@/assets/Logo';
import Image from 'next/image';
import RightIcon from '@/assets/Right';

const cards = [
  {
    number: '01',
    title: '$30off',
    subtitle: 'New customers discount Book a repair service day online and get $30 welcome discount for your first service call',
    Icon: Logo,
  },
  {
    number: '02',
    title: '$15off',
    subtitle: 'For returning customers Book a repair service day online and get $15 discount for returning service call',
    Icon: Logo,
  },
  {
    number: '03',
    title: '$30off',
    subtitle: 'Senior customer discount Book a repair service day online and get $30 senior costumer discount',
    Icon: Logo,
  },
] as const;

type Card = (typeof cards)[number];

// Компонент одной карточки
const Card = ({ number, title, subtitle, Icon }: Card) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full flex-none px-4 md:w-1/3">
      <div className="relative z-10 flex flex-col items-center rounded-2xl border border-[#001f3f] pt-12 px-6 text-center pb-8">
        <p className="text-lg font-medium text-[#001F3F]">{number}</p>
        <p className="mt-5 text-3xl font-semibold text-[#001F3F]">{title}</p>
        <p className="mt-2 text-lg font-light text-[#979797]">{subtitle}</p>

        <div className="my-6 flex h-[4.75rem] w-[5.375rem] items-center justify-center bg-[url('/bg/forIconBg.png')] bg-cover bg-center bg-no-repeat">
          <Icon width="2rem" />
        </div>

        {/* Кнопка внутри карточки */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="group mt-auto md:-ml-12 flex w-full items-center justify-center"
        >
          <div
            className="
              hidden md:flex size-20 min-w-20 md:size-12 md:min-w-12 bg-second rounded-full items-center justify-center
              opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 ease-in-out
            "
          >
            <RightIcon color="white" width="1.25rem" height="1.25rem" />
          </div>
          <span className="bg-second w-full text-white px-10 md:px-4 py-5 md:py-3 rounded-full font-semibold text-3xl md:text-base text-center">
            Use Coupon
          </span>
          <div
            className="
              flex size-20 min-w-20 md:size-12 md:min-w-12 bg-second rounded-full items-center justify-center
              opacity-100 translate-x-0 group-hover:-mr-12 group-hover:opacity-0 group-hover:-translate-x-4
              transition-all duration-300 ease-in-out
            "
          >
            <RightIcon color="white" width="1.25rem" height="1.25rem" />
          </div>
        </button>
      </div>

      <div className="pointer-events-none absolute -bottom-16">
        <Image
          width={241}
          height={68}
          src="/draws/greenShadow.png"
          alt="green shadow"
          className="h-auto w-[130rem] select-none"
        />
      </div>
    </div>
  );
};

const ForWho = () => {
  const visibleCount = 3;
  const maxIndex = Math.max(cards.length - visibleCount, 0);
  const [index, setIndex] = useState(0);

  const translate = useMemo(() => `translateX(-${index * (112.5 / visibleCount)}%)`, [index]);

  return (
    <div className="px-8 mt-[8.125rem] flex flex-col">
      {/* Заголовок секции */}
      <div className="mb-12 flex flex-row items-center">
        <span className="text-[1.875rem] md:text-[1.25rem] font-semibold">
          <span className="text-[#FE5B2C]">//</span>{' '}
          <span className="text-[#001f3f]">06 - Best Offers</span>
        </span>
      </div>

      {/* Карточки */}
      <div className="overflow-hidden">
        <div
          className="flex max-w-[87.5rem] transition-transform duration-500 ease-out"
          style={{
            transform: translate,
            width: `${(cards.length / visibleCount) * 100}%`,
          }}
        >
          {cards.map(card => (
            <Card key={card.number} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForWho;