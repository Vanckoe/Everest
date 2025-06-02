'use client';

import Image from 'next/image';
import RightIcon from '@/assets/Right';

type Card = {
  image: string;
  title: string;
  subtitle: string;
};

const cards: Card[] = [
  {
    image: '/img/services/holodos.avif',
    title: 'Refrigerator and\nFreezer Repair',
    subtitle:
      'Comprehensive service for restoring performance and addressing issues with your refrigerators and freezers.',
  },
  {
    image: '/img/services/stiralka.avif',
    title: 'Oven\nRepair',
    subtitle:
      'Trust us for professional and efficient Built-in Oven Repair, addressing temperature discrepancies and malfunctioning controls to restore seamless baking and cooking functionality.',
  },
  {
    image: '/img/services/stiralka.avif',
    title: 'Oven\nRepair',
    subtitle:
      'Trust us for professional and efficient Built-in Oven Repair, addressing temperature discrepancies and malfunctioning controls to restore seamless baking and cooking functionality.',
  },
  {
    image: '/img/services/holodos.avif',
    title: 'Cooktop\nRepair',
    subtitle:
      'Experience precision and reliability as our skilled technicians diagnose and resolve issues with all types of cooktops, ensuring optimal performance for your kitchen.',
  },
  {
    image: '/img/services/holodos.avif',
    title: 'Microwave\nOven Repair',
    subtitle:
      'Diagnosis and resolution of issues in microwave ovens, restoring quick and efficient functionality.',
  },
];

export default function Services() {
  return (
    <section className="px-8 py-[7.5rem]">
      {/* Заголовок */}
      <div className="mb-10 flex flex-col gap-5">
        <div className="text-2xl font-semibold italic md:text-base">
          <span className="text-3xl md:text-xl text-[#FE5B2C]">//</span> 02 - Services
        </div>
        <p className="text-[3rem] md:text-[2.75rem] leading-[100%] font-semibold">
          Broken Appliance? <br className="md:hidden" />
          We’ll Fix It Today! <br />
          Choose Top-level <br className="md:hidden" />
          service at fair price
        </p>
      </div>

      {/* Сетка карточек с линиями */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-3 gap-0 md:w-[80%]         /* без внутренних отступов */
          divide-y divide-black/10                                 /* горизонтальные линии на мобиле  */
          md:divide-y md:divide-x md:divide-black/10               /* вертикальные линии на десктопе   */
          grid-auto-rows-fr                                        /* все ряды одинаковой высоты      */
        "
      >
        {cards.map(({ image, title, subtitle }, i) => (
          <div key={i} className="h-full flex flex-col gap-6 py-10 md:p-8">
            <div>
              <Image
                src={image}
                alt={title}
                width={400}
                height={240}
                className="h-[23rem] md:h-64 w-full object-cover rounded-[1.25rem]"
              />
              <h3 className="whitespace-pre-line mt-5 text-4xl md:text-3xl leading-[100%] font-semibold">{title}</h3>
              <p className="my-5 md:my-4 text-2xl md:text-base text-[#888]">{subtitle}</p>
            </div>

            <button className="group mt-auto md:-ml-12 flex w-fit items-center">
              <div
                className="
                  hidden md:flex size-12 bg-second rounded-full items-center justify-center
                  opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300 ease-in-out
                "
              >
                <RightIcon color="white" width="1.25rem" height="1.25rem" />
              </div>
              <span className="bg-second text-white px-10 md:px-4 py-5 md:py-3 rounded-full font-semibold text-3xl md:text-base">
                Schedule an appointment
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
        ))}
      </div>
    </section>
  );
}
