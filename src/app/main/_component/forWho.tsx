/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useMemo } from 'react';
import Right from '@/assets/right copy';
import Image from 'next/image';
import Logo from '@/assets/Logo';
/* --------------------------------------------------------------------------
   Шаги бронирования/ремонта
   -------------------------------------------------------------------------- */
interface Step {
  number: string;
  title: string;
  description: string;
}

const bookingSteps: Step[] = [
  {
    number: '01',
    title: 'Submit a request on the website',
    description: 'Specify which appliance is broken and briefly describe the problem.',
  },
  {
    number: '02',
    title: 'Pick date & time',
    description:
      'Select a convenient day and time slot in the online calendar.',
  },
  {
    number: '03',
    title: 'Confirm details',
    description:
      'Our manager will call you to confirm your appointment and answer any questions you may have beforehand.',
  },
  {
    number: '04',
    title: 'Pre-Arrival Call',
    description:
      'You’ll get a heads-up call before your technician arrives.',
  },
  {
    number: '05',
    title: 'We Come. We Fix.',
    description:
      'Fast, reliable service from certified professionals.',
  },
  {
    number: '06',
    title: 'Pay & warranty',
    description:
      'The invoice will be issued on site right after the repair is done.',
  },
] as const;

/* --------------------------------------------------------------------------
   Переиспользуемая карточка одного шага                                        
   -------------------------------------------------------------------------- */
const StepCard = ({ number, title, description }: Step) => (
  <div className="relative w-full flex-none px-4 md:max-w-[22.25rem]">
    {/* Карточка */}
    <div className="relative z-10 flex flex-col items-center rounded-2xl border border-neutral-300 pt-12 pb-14 bg-white shadow-sm h-[23rem]">
      <Image
        src="/img/icons/logoBlack.png"
        width={100}
        height={100}
        alt="Logo"
        className="size-16 rounded-xl"
      />
      <h3 className="mb-5 text-center text-2xl font-semibold text-[#001F3F] leading-snug">
        {title}
      </h3>
      <p className="mb-8 whitespace-pre-line text-center text-lg font-light text-[#979797] max-w-[16rem]">
        {description}
      </p>
    </div>
  </div>
);

/* --------------------------------------------------------------------------
   Desktop-only слайдер «Как это работает?»                                     
   -------------------------------------------------------------------------- */
const BookingStepsDesktop = () => {
  const visibleCount = 4; // одновременно видимых карточек
  const maxIndex = Math.max(bookingSteps.length - visibleCount, 0);
  const [index, setIndex] = useState(0);

  const translate = useMemo(
    () => `translateX(-${index * (125 / visibleCount)}%)`,
    [index, visibleCount]
  );

  const next = () => setIndex(i => Math.min(i + 1, maxIndex));
  const prev = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <section className="hidden md:flex mx-auto mt-20 flex-col px-16" id="booking-steps">
      {/* ───────── Заголовок + описание + кнопки ───────── */}
      <header className="order-1 mb-14 flex flex-row items-center">
        <div className="flex flex-col gap-2">
          <h2
            data-aos="fade-up"
            data-aos-delay={300}
            className="text-[4rem] font-bold leading-[94%]"
          >
            How it works
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay={300}
            className="hidden flex-col gap-3 text-xl font-light text-[#979797] md:flex"
          >
            A step-by-step diagram of your service order <br />
            from online booking to warranty after repair.
          </p>
        </div>

        {/* ──────── Кнопки навигации ──────── */}
        <div className="order-3 ml-auto flex flex-row items-stretch gap-4 rounded-xl border border-[#191919] p-3.5 md:order-2">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`rotate-180 rounded-lg px-20 py-[1.875rem] transition-opacity ${
              index === 0 ? 'cursor-not-allowed' : 'bg-[#001F3F]'
            }`}
          >
            <Right color={index === 0 ? '#001F3F' : '#FFFFFF'} />
          </button>
          <div className="h-20 w-0 border border-[#191919]" />
          <button
            onClick={next}
            disabled={index === maxIndex}
            className={`rounded-lg px-20 py-[1.875rem] transition-opacity ${
              index === maxIndex ? 'cursor-not-allowed' : 'bg-[#001F3F]'
            }`}
          >
            <Right color={index === maxIndex ? '#001F3F' : '#FFFFFF'} />
          </button>
        </div>
      </header>

      {/* ───────── Слайдер карточек ───────── */}
      <div className="order-2 overflow-hidden md:order-3">
        <div
          className="flex max-w-[87.5rem] transition-transform duration-500 ease-out"
          style={{
            transform: translate,
            width: `${(bookingSteps.length / visibleCount) * 100}%`,
          }}
        >
          {bookingSteps.map(step => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingStepsDesktop;
