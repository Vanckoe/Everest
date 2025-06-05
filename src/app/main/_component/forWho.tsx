'use client';
import React, { useState, useMemo } from 'react';

import Right from '@/assets/right copy';
import MouseEmpty from '@/assets/MouseEmpty';
import Logo from '@/assets/Logo';
import Image from 'next/image';
import Micsher from '@/assets/micsher';

/* --------------------------------------------------------------------------
   Данные карточек: номер, текст, SVG-иконка
   -------------------------------------------------------------------------- */
const cards = [
  {
    number: '01',
    text: 'Неприбуткові організації\n та фонди, яким складно\n залучати донорів та\n волонтерів онлайн',
    Icon: Logo,
  },
  {
    number: '02',
    text: 'Малі підприємці-\nпочатківці, які не мають\nдосвіду в цифровому\nпросуванні',
    Icon: Logo,
  },
  {
    number: '03',
    text: 'Громадські ініціативи,\nяким бракує ресурсів на\nефективний онлайн-\nмаркетинг',
    Icon: Logo,
  },
  {
    number: '04',
    text: 'Представники бізнесу,\nякі хочуть навчитись\nсамостійно просуватись\nонлайн',
    Icon: Logo,
  },
  {
    number: '05',
    text: 'Неприбуткові організації\n та фонди, яким складно\n залучати донорів та\n волонтерів онлайн',
    Icon: Logo,
  },
  {
    number: '06',
    text: 'Малі підприємці-\nпочатківці, які не мають\nдосвіду в цифровому\nпросуванні',
    Icon: Logo,
  },
  {
    number: '07',
    text: 'Громадські ініціативи,\nяким бракує ресурсів на\nефективний онлайн-\nмаркетинг',
    Icon: Logo,
  },
  {
    number: '08',
    text: 'Представники бізнесу,\nякі хочуть навчитись\nсамостійно просуватись\nонлайн',
    Icon: Logo,
  },
] as const;

type Card = (typeof cards)[number];

/* --------------------------------------------------------------------------
   Компонент одной карточки (переиспользуемый)                                   
   -------------------------------------------------------------------------- */
const Card = ({ number, text, Icon }: Card) => (
  <div className="relative w-full  flex-none px-4 md:max-w-[22.25rem]">
    {/* Карточка */}
    <div className="relative z-10 flex flex-col items-center rounded-2xl border border-neutral-300 pt-12">
      <p className="text-lg font-medium text-[#001F3F]">{number}</p>
      <p className="mb-10 mt-5 whitespace-pre-line text-center text-lg font-light text-[#979797]">
        {text}
      </p>
      <div className="mb-[1.875rem] flex h-[4.75rem] w-[5.375rem] items-center justify-center bg-[url('/bg/forIconBg.png')] bg-cover bg-center bg-no-repeat">
        <Icon width="2rem" />
      </div>
      <div className="mb-8 ml-auto mr-8">
        <Micsher color='black'/>
      </div>
    </div>

    {/* Тень — за пределами карточки */}
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

/* --------------------------------------------------------------------------
   Основной блок "Для кого працює наша спільнота"                                
   -------------------------------------------------------------------------- */
const ForWho = () => {
  const visibleCount = 4; // количество карточек, видимое одновременно (на desktop)
  const maxIndex = Math.max(cards.length - visibleCount, 0);
  const [index, setIndex] = useState(0);

  /* pre-вычислим translate-value в %, чтобы не считать в JSX */
  const translate = useMemo(() => `translateX(-${index * (112.5 / visibleCount)}%)`, [index]);

  const next = () => setIndex(i => Math.min(i + 1, maxIndex));
  const prev = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <div className="px-16 mx-auto mt-[16.125rem] flex flex-col">
      {/* ───────────── Заголовок + описание + кнопки ───────────── */}
      <div className="mb-20 flex flex-row items-center">
        <p className="text-[4rem] font-bold lowercase leading-[94%]">
          Для кого працює <br /> наша спільнота
        </p>

        <div className="flex flex-col gap-3 pl-[5.625rem]">
          <MouseEmpty color="#FFFFFF" />
          <p className="text-xs font-light text-[#979797]">
            Регулярно публікуємо практичні
            <br /> матеріали, статті та кейси{' '}
            <span className="font-medium text-white">
              для <br /> покращення ваших навичок у сфері <br /> цифрового маркетингу
            </span>
          </p>
        </div>

        {/* ──────────── Кнопки слайдера ──────────── */}
        <div className="ml-auto flex flex-row items-stretch gap-4 rounded-xl border border-[#191919] p-3.5">
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
      </div>

      {/* ───────────── Слайдер карточек ───────────── */}
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
