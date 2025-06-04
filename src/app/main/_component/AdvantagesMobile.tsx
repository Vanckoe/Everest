import React, { FC } from 'react';

type Advantage = {
  Icon: FC<any>;
  title: string;
  subtitle: string;
};

import AdvantagesLogo1 from '@/assets/Advantages-logo-1';
import AdvantagesLogo2 from '@/assets/Advantages-logo-2';
import AdvantagesLogo3 from '@/assets/Advantages-logo-3';
import AdvantagesLogo4 from '@/assets/Advantages-logo-4';

const advantages: Advantage[] = [
  {
    Icon: AdvantagesLogo1,
    title: 'High-Quality and Reliable Service',
    subtitle:
      'We are committed to delivering top-notch service with genuine parts and highly-trained technicians, ensuring your appliances are in the best hands.',
  },
  {
    Icon: AdvantagesLogo2,
    title: 'Affordable and Fair Prices',
    subtitle:
      'We offer transparent, hassle-free quotes with no hidden fees, ensuring you get the best value for your money.',
  },
  {
    Icon: AdvantagesLogo3,
    title: 'Warranty on Parts and Labor',
    subtitle:
      'We stand behind our work with a full One-Year Parts and Labor warranty, giving you peace of mind and confidence in our services.',
  },
  {
    Icon: AdvantagesLogo4,
    title: 'Highly Trained Licensed Technicians',
    subtitle:
      'Our team undergoes extensive training to stay up-to-date with the latest industry standards and techniques, ensuring expert service.',
  },
];

export default function AdvantagesMobile() {
  return (
    <section className="flex flex-col px-[2.5rem] py-[2rem] gap-[2rem] w-full">
      {/* Заголовок сверху */}
      <span className="text-[1.875rem] font-semibold text-left">
        <span className="text-[#FE5B2C]">//</span>{' '}
        <span className="text-[#001f3f]">04 - Advantages</span>
      </span>

      {/* Основной заголовок */}
      <h2 className="text-[#001f3f] text-[2rem] font-bold leading-tight text-left w-full max-w-3xl">
        Why 92% of clients recommend us to their friends?
      </h2>

      {/* Контейнер преимуществ */}
      <div className="w-full mx-auto grid grid-rows-4 grid-cols-1 relative">
        {/* Внешние линии */}
        <div className="absolute top-0 left-0 w-full h-px bg-[#1212120F]"></div> {/* top */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#1212120F]"></div> {/* bottom */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-[#1212120F]"></div> {/* left */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-[#1212120F]"></div> {/* right */}

        {/* Внутренние горизонтальные линии */}
        <div className="absolute top-[25%] left-0 w-full h-px bg-[#1212120F]"></div>
        <div className="absolute top-[50%] left-0 w-full h-px bg-[#1212120F]"></div>
        <div className="absolute top-[75%] left-0 w-full h-px bg-[#1212120F]"></div>

        {/* Элементы преимуществ */}
        {advantages.map(({ Icon, title, subtitle }, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col gap-[1rem] px-[1.875rem] py-[1.5625rem] items-start
              box-border
              w-full
              border-l border-r border-[#1212120F]
              ${idx === 0 ? 'border-t' : ''}
              border-b
            `}
          >
            <Icon className="w-[2.5rem] h-[2.5rem] text-[#001f3f]" />
            <h3 className="text-[1.5rem] font-semibold text-[#121212] leading-snug">{title}</h3>
            <p className="text-[#888888] text-[1.25rem] leading-snug">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}