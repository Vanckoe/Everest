import React, { FC } from 'react';
import AdvantagesMobile from './AdvantagesMobile';
import {
  BadgeCheck,
  PiggyBank,
  ShieldCheck,
  UserCog,
} from 'lucide-react';

type Advantage = {
  Icon: FC<any>;
  title: string;
  subtitle: string;
};

const advantages: Advantage[] = [
  {
    Icon: BadgeCheck,
    title: 'Reliable Appliance Repair with Quality Parts',
    subtitle:
      'Our certified technicians use only genuine parts to provide reliable and high-quality appliance repair services that extend the life of your devices.',
  },
  {
    Icon: PiggyBank,
    title: 'Affordable Appliance Service with Transparent Pricing',
    subtitle:
      'We offer competitive and upfront pricing with no hidden costs, making professional appliance repair accessible and budget-friendly for every household.',
  },
  {
    Icon: ShieldCheck,
    title: 'One-Year Warranty on All Repairs and Parts',
    subtitle:
      'Every repair is backed by a 1-year warranty on both labor and parts, ensuring long-term peace of mind and customer satisfaction.',
  },
  {
    Icon: UserCog,
    title: 'Certified and Experienced Appliance Technicians',
    subtitle:
      'Our licensed experts receive continuous training to stay updated on the latest repair methods and technologies, guaranteeing expert service every time.',
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
            <h2
              data-aos="fade-up"
              // data-aos-delay={500}
              className="text-[#001f3f] text-[3rem] md:text-[2.75rem] font-bold leading-tight w-[28.125rem]"
            >
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
            <div
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              key={idx}
              className="flex flex-col items-start gap-[1rem] px-[3rem] py-[2rem]"
            >
              <Icon className="text-[#31A301] w-[2.5rem] h-[2.5rem]" />
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
