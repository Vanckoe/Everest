'use client';
import React, { useState } from 'react';
import RightIcon from '@/assets/Right';
import Modal from '@/components/layout/modal';
import Image from 'next/image';

type Card = {
  image: string;
  title: string;
  subtitle: string;
  cost: string;
  time: string;
};

const cards: Card[] = [
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/dfe47dac23521864db1a02a58632d4e1fc86d74c/original.png?width=2400&optimize=medium',
    title: 'Refrigerator Repair',
    subtitle:
      'Get your refrigerator back to top-notch condition with our expert repair service. Our skilled technicians will conduct a thorough inspection, leak test, and swiftly identify the issue.',
    cost: '65.00 $',
    time: '45 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/2741ae895171e4da704a89cd417b939f217f45f2/original.png?width=2400&optimize=medium',
    title: 'Oven Repair',
    subtitle:
      'Is your oven failing to preheat, leaving you in a panic before your big party? Book our expert oven repair service now for a quick inspection and efficient solution.',
    cost: '65.00 $',
    time: '30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/6e30faeff02ab93d8c145ca22ab56d168ebc574f/original.png?width=2400&optimize=medium',
    title: 'Dryer Repair',
    subtitle:
      'Is your dryer not heating or spinning properly? Book our expert dryer repair service for a thorough inspection and a quick estimate.',
    cost: '65.00 $',
    time: '30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/0ccabc12e5557fb1665fd48aa5e02c8abddc211f/original.png?width=2400&optimize=medium',
    title: 'Washer Repair',
    subtitle:
      'Is your washer not draining, spinning, or starting the cycle? Our expert technicians will inspect your unit thoroughly and provide the best solution.',
    cost: '65.00 $',
    time: '30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/153604123c940153b50fdcaf97d3ade0705f9a47/original.png?width=2400&optimize=medium',
    title: 'Dishwasher Repair',
    subtitle:
      'Is your dishwasher not draining properly or leaving your dishes less than sparkling clean? Schedule an appointment now to have it expertly repaired.',
    cost: '65.00 $',
    time: '30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/7a93244173ed7100e864d993c68896bdc8568383/original.png?width=2400&optimize=medium',
    title: 'Range Repair',
    subtitle:
      'Is your burner clicking but not igniting? Our expert technicians fix these issues daily. Book now for a thorough inspection and repair.',
    cost: '65.00 $',
    time: '30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/4363f2a313dd9d16ffcb52ed1f3ab010d7bd3bee/original.png?width=2400&optimize=medium',
    title: 'Garbage Disposal Repair',
    subtitle:
      'Is your garbage disposal not running or just humming? Book now to get it back up and running smoothly.',
    cost: '65.00 $',
    time: '30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/adff9685dfc295ff506d521340c10c0b027d75f6/original.png?width=2400&optimize=medium',
    title: 'Washer/Dryer Installation',
    subtitle:
      'Includes inspection after install, gas and water leak tests, and diagnostics. Reliable and thorough.',
    cost: '160.00 $',
    time: '1 hr 15 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/37291d6fc4fbf5a30d5e3f63bf5ee37bbd2da995/original.png?width=2400&optimize=medium',
    title: 'Dryer Vent Cleaning',
    subtitle:
      "Filter trap cleaning isn't enough! Prevent lint buildup and fires with a thorough vent cleaning.",
    cost: '160.00 $',
    time: '1 hr 15 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/74a0167a9c2b16eafe6f659fe75b261b1834fd65/original.png?width=2400&optimize=medium',
    title: 'Built-in Oven Installation',
    subtitle:
      'We ensure no scratches on your floors or cabinets. A team of two will install your oven professionally.',
    cost: 'Price varies',
    time: '1 hr 30 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/2df1e076c95354eecde187459597e245f7c51cf4/original.png?width=2400&optimize=medium',
    title: 'Dishwasher Installation',
    subtitle:
      'Includes water leak test, outlet connection, and stabilizing the unit to prevent movement.',
    cost: '160.00 $',
    time: '1 hr 15 ',
  },
  {
    image:
      'https://items-images-production.s3.us-west-2.amazonaws.com/files/12d57cb16b410d35bb1e5c2cbfa22b05da782d0a/original.png?width=2400&optimize=medium',
    title: 'Commercial Appliances Repair',
    subtitle:
      'We service commercial appliances in restaurants and stores. Schedule now to avoid business disruption.',
    cost: '100.00 $',
    time: '1 hr 15 ',
  },
];

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <section id="services" className="px-10 py-[4.5rem]">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Заголовок */}
      <div className="mb-10 flex flex-col gap-5">
        <div className="text-2xl font-semibold italic md:text-base">
          <span className="text-3xl md:text-xl text-[#FE5B2C]">//</span> SERVICES
        </div>
        <p
          data-aos="fade-up"
          className="text-[3rem] md:text-[2.75rem] leading-[100%] font-semibold"
        >
          Select Your Service Below - <br />
          Schedule in minutes - Fixed Today!  <br />
        </p>
      </div>

      {/* Сетка карточек с линиями */}
      <div
        className="
          grid grid-cols-1 md:grid-cols-4 gap-0
          [&>*:not(:first-child)]:border-t [&>*:not(:first-child)]:border-black/10
          md:[&>*:not(:first-child):not(:nth-child(4n+1))]:border-l
          md:[&>*:nth-child(-n+4)]:border-t-0
          grid-auto-rows-fr
        "
      >
        {cards.map(({ image, title, subtitle, cost, time }, i) => (
          <div
            // data-aos="fade-up"
            // data-aos-offset="50"
            // data-aos-delay={i * 50}
            key={i}
            className="h-full flex flex-row-reverse items-center md:flex-col md:p-8"
          >
            <div className="relative min-w-40 md:mr-5 -mt-5">
              <Image
                src={image}
                alt={title}
                width={400}
                height={240}
                className="w-[20rem]  md:h-64 md:w-full object-contain rounded-[1.25rem]"
              />
            </div>
            <div className="h-full flex flex-col gap-3 md:gap-6">
              <div className="">
                <h3 className="whitespace-pre-line mt-5 text-4xl md:text-3xl leading-[100%] font-semibold">
                  {title}
                </h3>
                <div className="flex flex-row items-center gap-2 my-5 md:my-4 text-2xl md:text-base text-[#888]">
                  {/* <p className="">Book now</p>
                <div className="size-1 rounded-full bg-black"></div> */}
                  <p className="">{cost}</p>
                  <div className="size-1 rounded-full bg-black"></div>
                  <p className="">{time} mins</p>
                </div>
                <p className="my-5 md:my-4 text-2xl w-[90%] md:w-full md:text-base text-[#888]">
                  {subtitle}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group mt-auto md:-ml-12 flex w-full items-center"
              >
                <div
                  className="
                  hidden md:flex size-20 min-w-20 md:size-12 md:min-w-12 bg-second rounded-full items-center justify-center

                  opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300 ease-in-out
                "
                >
                  <RightIcon color="white" width="1.25rem" height="1.25rem" />
                </div>
                <span className="bg-second w-full text-white px-10 md:px-4 py-5 md:py-3 rounded-full font-semibold text-3xl md:text-base">
                  Book now
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
          </div>
        ))}
      </div>
    </section>
  );
}
