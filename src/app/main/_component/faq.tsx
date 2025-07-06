'use client';

import { useState, useRef, useEffect } from 'react';

/* ---------- Данные FAQ ---------- */
const faqs = [
  {
    q: 'What areas do you cover?',
    a: 'We have a team of 6 technicians covering all of Chicago and suburbs within about a 35-mile radius. Driving is part of our job — just let us know your zip code and we’ll confirm we can help you!',
  },
  {
    q: 'How fast can you come out?',
    a: 'We offer same-day and next-day service whenever possible. Call early in the day and we’ll do everything we can to get to you the same day.',
  },
  {
    q: 'How much does a typical repair cost?',
    a: 'Every repair is different, but most service visits start with a flat diagnostic fee. Once we identify the issue, we’ll give you a clear, upfront estimate before we start any work — no surprises. ',
  },
  {
    q: 'How is the service call fee waived?',
    a: 'When you approve the repair estimate after inspection of the unit, the diagnostic/service call fee of $79 is applied toward the total repair cost — effectively waiving it. If you decide not to proceed with the repair, the $79 fee simply covers our time and expertise for diagnosing the problem.',
  },
  {
    q: 'What forms of payment do you accept?',
    a: 'We accept all major forms of payment, including credit cards, debit cards, cash, checks, and Zelle. Invoice is sent on site and completed job has to be paid right after the repair. ',
  },
  {
    q: 'Do you require upfront payment for parts?',
    a: 'Yes — when a repair requires ordering parts, we collect 50% of the total balance upfront to cover the parts cost. The remaining balance is due after the repair is completed.',
  },
  {
    q: 'I’m a landlord and don’t live there. How should we proceed?',
    a: 'No problem — we work with many landlords and property managers. Just provide us with your tenant’s contact information and get their permission for entry. We’ll schedule directly with them and keep you updated every step of the way. Payment can be handled remotely after the repair.',
  },
  {
    q: 'Do you repair all brands?',
    a: 'Yes — our technicians are experienced with all major appliance brands and models, and we stock common parts to avoid delays.',
  },
  {
    q: 'Is your work guaranteed?',
    a: 'Absolutely — all our repairs come with a 12-month labor warranty, so you can feel confident the job is done right.',
  },


] as const;

/* ---------- SVG иконка + / – ---------- */
const Icon = ({ open }: { open: boolean }) => (
  <svg
    
    className="h-6 w-6 shrink-0 stroke-[3] transition-transform duration-200"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    {/* горизонтальная линия */}
    <line x1="5" y1="12" x2="19" y2="12" />
    {/* вертикальная линия (прячем при open) */}
    <line
      x1="12"
      y1="5"
      x2="12"
      y2="19"
      className={`origin-center transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}
    />
  </svg>
);

/* ---------- Один элемент аккордеона ---------- */
const Item = ({
  i,
  open,
  toggle,
  q,
  a,
}: {
  i: number;
  open: boolean;
  toggle: (i: number) => void;
  q: string;
  a: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  // при открытии/resize пересчитываем высоту
  useEffect(() => {
    if (open && ref.current) setMaxH(ref.current.scrollHeight);
  }, [open]);

  return (
    <li className="border-b border-neutral-200 last:border-none">
      <button onClick={() => toggle(i)} className="flex w-full items-center justify-between  py-5 ">
        <p className=" max-w-[90%] text-left text-2xl md:text-xl text-color font-inter-semibold">{q}</p>
        <Icon open={open} />
      </button>

      {/* анимируем max-height */}
      <div
        style={{ maxHeight: open ? maxH : 0 }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <p ref={ref} className="pb-6 -mt-1 text-2xl md:text-base text-inter text-neutral-600">
          {a}
        </p>
      </div>
    </li>
  );
};

/* ---------- Основной компонент ---------- */
export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<null | number>(0);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <section id='faq' className="w-full px-18 pt-[9.375rem] pb-[5rem] md:gap-5">
      <div className="grid border-t border-neutral-200 gap-8 md:gap-12 md:grid-cols-[minmax(0,20.5rem)_1fr]">
        {/* Левый заголовок */}
        <h2 className="text-7xl md:text-7xl py-5 font-gloock leading-[100%] text-color">
          FAQ <br className="hidden md:block" />
        </h2>

        {/* Правый аккордеон */}
        <ul className="divide-y">
          {faqs.map(({ q, a }, i) => (
            <Item key={`faq-${i}`} i={i} q={q} a={a} open={openIndex === i} toggle={toggle} />
          ))}
        </ul>
      </div>
    </section>
  );
}
