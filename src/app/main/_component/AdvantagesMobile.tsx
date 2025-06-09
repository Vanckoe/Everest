import React, { FC } from 'react';
import { BadgeCheck, PiggyBank, ShieldCheck, UserCog } from 'lucide-react';

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

export default function AdvantagesMobile() {
  return (
    <section className="flex flex-col px-[2.5rem] py-[2rem] gap-[2rem] w-full">
      <span className="text-[1.875rem] font-semibold text-left">
        <span className="text-[#FE5B2C]">//</span>{' '}
        <span className="text-[#001f3f]">04 - Advantages</span>
      </span>
      <h2
        data-aos="fade-up"
        className="text-[#001f3f] text-[2rem] font-bold leading-tight text-left w-full max-w-3xl"
      >
        Why 92% of clients recommend us to their friends?
      </h2>
      <div className="w-full mx-auto grid grid-rows-4 grid-cols-1 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-[#1212120F]"></div> {/* top */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#1212120F]"></div> {/* bottom */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-[#1212120F]"></div> {/* left */}
        <div className="absolute top-0 bottom-0 right-0 w-px bg-[#1212120F]"></div> {/* right */}
        <div className="absolute top-[25%] left-0 w-full h-px bg-[#1212120F]"></div>
        <div className="absolute top-[50%] left-0 w-full h-px bg-[#1212120F]"></div>
        <div className="absolute top-[75%] left-0 w-full h-px bg-[#1212120F]"></div>

        {advantages.map(({ Icon, title, subtitle }, idx) => (
          <div
            data-aos="fade-up"
            data-aos-delay={idx * 100}
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
              <Icon className=" size-[3rem] text-[#31A301]" />
              <h3 className=" text-[1.5rem] font-semibold text-[#121212] leading-snug">{title}</h3>
            <p className="text-[#888888] text-[1.25rem] leading-snug">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
