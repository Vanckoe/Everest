'use client';

import { useState, useRef, useEffect } from 'react';

/* ---------- Данные FAQ ---------- */
const faqs = [
  {
    q: 'How much will an Appliances Repair Service cost?',
    a: 'This is likely the most common question we get asked, but unfortunately, we can’t give a specific answer on this FAQ page. When you call us +1 (312) 489-8606 and let us know what type of issues your appliance is having, we can offer you an estimate on what the total price may be.',
  },
  {
    q: 'Is it worth repairing my appliance?',
    a: 'In many situations, repairing your appliance is both more cost-effective and environmentally friendly than replacing it. Most appliance problems can be resolved at a fraction of the cost of purchasing a new one. Additionally, a quality repair can extend the appliance’s service life for many years, making it a smart and valuable choice.',
  },
  {
    q: 'How long does it take to repair an appliance?',
    a: 'Our team offers same-day service because we understand how important some household appliances are. Our technicians have most of the parts with them, but sometimes specific models or cases will require details that must be ordered. Due to experience, on average, our techs carry out repairs in 45- 60 minutes if they have the part with them.',
  },
  {
    q: 'What area do you service?',
    a: 'We provide our services to residents of Chicago.',
  },
  {
    q: 'Do I need to be at home during my appointment?',
    a: 'Yes. It is a requirement for all our customers to be present during the time of a service appointment. If you are not able to be present, make sure to give us a call and we will reschedule to a more suitable time.',
  },
  {
    q: 'What kind of warranty do we provide?',
    a: 'Midwest Standards company offers a 12-month warranty on both labor and replacement parts. What does this mean? It means that for up to 12 months, we stand by our work and the parts we`ve replaced, provided any issues are not caused by misuse, neglect, or insufficient maintenance of the appliance. Keep in mind that cosmetic damage and some electronic failures resulting from improper handling may not fall under this warranty.',
  },
  {
    q: 'Is there a service call fee, and is it waived if I proceed with the repair?',
    a: 'Yes, we charge a service call fee, which is typically waived if you approve the repair during the visit.',
  },
  {
    q: 'Are your repairs covered by a warranty?',
    a: 'Absolutely! We offer a warranty on both parts and labor. Specific terms depend on the type of repair.',
  },
  {
    q: 'Do you provide estimates before starting a repair?',
    a: 'Yes, we offer detailed upfront estimates so you know the cost before we begin any work.',
  },
  {
    q: 'How can I prevent my appliance from breaking down again?',
    a: 'Our technicians will provide maintenance tips and recommendations to keep your appliance running efficiently. Regular care is key!',
  },



] as const;

/* ---------- SVG иконка + / – ---------- */
const Icon = ({ open }: { open: boolean }) => (
  <svg
    id='faq'
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
        <p className=" max-w-[90%] text-left text-2xl md:text-xl font-semibold">{q}</p>
        <Icon open={open} />
      </button>

      {/* анимируем max-height */}
      <div
        style={{ maxHeight: open ? maxH : 0 }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <p ref={ref} className="pb-6 -mt-1 text-2xl md:text-base text-neutral-600">
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
    <section className="w-full px-12 md:px-16 pt-[9.375rem] pb-[8.125rem] md:gap-5">
      <div className="grid border-t border-neutral-200 gap-20 md:gap-12 md:grid-cols-[minmax(0,20.5rem)_1fr]">
        {/* Левый заголовок */}
        <h2 className="text-5xl py-5 font-bold leading-[100%] text-[#0E203D]">
          Frequently <br className="hidden md:block" />
          Asked <br />
          Question
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
