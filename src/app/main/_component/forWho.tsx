/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState, useMemo } from 'react';
import Right from '@/assets/right copy';

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
    title: 'Choose service',
    description:
      'Укажите, какая техника сломалась и опишите проблему в нескольких словах.',
  },
  {
    number: '02',
    title: 'Pick date & time',
    description:
      'Выберите удобный день и временной слот в онлайн-календаре (доступна «сегодня/завтра»).',
  },
  {
    number: '03',
    title: 'Confirm details',
    description:
      'Мы пришлём SMS / e-mail с именем мастера, временем прибытия и фиксированной ценой выезда.',
  },
  {
    number: '04',
    title: 'On-site diagnosis',
    description:
      'Сертифицированный техник приезжает, проводит диагностику и называет окончательную смету.',
  },
  {
    number: '05',
    title: 'Repair & test',
    description:
      'После вашего одобрения мастер выполняет ремонт (или приезжает с деталями позже) и тестирует работу.',
  },
  {
    number: '06',
    title: 'Pay & warranty',
    description:
      'Оплата картой/наличными на месте. Вы получаете квитанцию и гарантию 90 дней на работу и запчасти.',
  },
] as const;

/* --------------------------------------------------------------------------
   Переиспользуемая карточка одного шага                                        
   -------------------------------------------------------------------------- */
const StepCard = ({ number, title, description }: Step) => (
  <div className="relative w-full flex-none px-4 md:max-w-[22.25rem]">
    {/* Карточка */}
    <div className="relative z-10 flex flex-col items-center rounded-2xl border border-neutral-300 pt-12 pb-14 bg-white shadow-sm">
      <p className="text-lg font-medium text-accent">{number}</p>
      <h3 className="mt-4 mb-5 text-center text-2xl font-semibold text-[#001F3F] leading-snug">
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
    [index, visibleCount],
  );

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="hidden md:flex mx-auto mt-64 flex-col px-16" id="booking-steps-desktop">
      {/* ───────── Заголовок + описание + кнопки ───────── */}
      <header className="order-1 mb-20 flex flex-row items-center">
        <h2 className="text-[4rem] font-bold lowercase leading-[94%]">
          How it works
        </h2>

        <p className="ml-24 hidden max-w-sm flex-col gap-3 text-xs font-light text-[#979797] md:flex">
          Пошаговая схема вашего сервис-заказа
          <br /> от онлайн-бронирования до гарантии после ремонта.
        </p>

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
          {bookingSteps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingStepsDesktop;
