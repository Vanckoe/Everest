import React, { FC } from 'react';
import AdvantagesMobile from './AdvantagesMobile';

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
    title: 'High-Qualitу and Reliable Service',
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

export default function Advantages() {
  return (
    <>
      {/* ПК версия */}
      <div className="hidden md:flex px-16 py-[4.5rem]">
        {/* Левая часть */}
        <div className="w-1/2 flex flex-col pr-[2rem]">
          <div className="md:sticky md:top-[6rem] flex flex-col gap-[1rem]">
            <div className="text-2xl font-semibold italic md:text-base">
              <span className="text-3xl md:text-xl text-[#FE5B2C]">//</span> 04 - Advantages
            </div>
            <h2 className="text-[#001f3f] text-[3rem] md:text-[2.75rem] font-bold leading-tight w-[28.125rem]">
              Why 92% of clients recommend us to their friends?
            </h2>
          </div>
        </div>

        {/* Правая часть - сетка 2x2 с линиями между элементами */}
        <div className="w-1/2 relative grid grid-cols-2 grid-rows-2">
          {/* Вертикальная линия между колонками */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#1212120F] transform -translate-x-1/2"></div>
          {/* Горизонтальная линия между рядами */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1212120F] transform -translate-y-1/2"></div>
          {/* Левая внешняя линия */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-[#1212120F]"></div>

          {advantages.map(({ Icon, title, subtitle }, idx) => (
            <div key={idx} className="flex flex-col items-start gap-[1rem] px-[3rem] py-[2rem]">
              <Icon className="text-[#001f3f] w-[2.5rem] h-[2.5rem]" />
              <h3 className="text-[1.5rem] font-semibold text-[#121212] leading-snug">{title}</h3>
              <p className="text-[#888888] text-[1.125rem] leading-normal">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Мобильная версия */}
      <div className="block md:hidden">
        <AdvantagesMobile />
      </div>
    </>
  );
}
