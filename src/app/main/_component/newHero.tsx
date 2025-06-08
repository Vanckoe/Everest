'use client';
import React, { useState } from 'react';
import Modal from '@/components/layout/modal';
import Image from 'next/image';
import RightIcon from '@/assets/Right';
import Header from '@/components/layout/header';
import { BadgeCheck, ShieldCheck, Lightbulb } from 'lucide-react';
import Right from '@/assets/right copy';

const items = [
  {
    id: '01',
    icon: <BadgeCheck className="text-[#31A301] size-10" />,
    boldText: '10+ Years Experience',
    fadedText: ' in appliance repair industry.',
  },
  {
    id: '02',
    icon: <ShieldCheck className="text-[#31A301] size-10" />,
    boldText: '12-month Labor Warranty',
    fadedText: ' on all completed jobs.',
  },
  {
    id: '03',
    icon: <Lightbulb className="text-[#31A301] size-10" />,
    boldText: 'Same-Day Repairs Available',
    fadedText: ' for most major brands.',
  },
];
const NewHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div
      className="w-full relative bg-no-repeat bg-[length:65%] md:bg-[length:55%] bg-[position:right_14rem] md:bg-right-top"
      style={{
        backgroundImage: "url('/bg/nemHeroBg-(1).png')",
      }}
    >
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="px-10 mt-10 md:mt-8">
        <div className="flex w-full flex-col md:w-[55.125rem]">
          <p
            data-aos="fade-up"
            className="text-xl md:text-base font-medium md:font-light uppercase leading-[150%] tracking-[0.1rem] text-[#929292] md:text-[#CACACA]"
          >
            [ Small Roots, Big Mission ]
          </p>
          <div data-aos="fade-up" className="mt-5 flex flex-row items-center gap-5">
            <p className="text-[6.125rem] md:text-[6.125rem] font-bold  leading-[82%] -tracking-wider">
              Chicago <br /> Appliance <br /> Repair, <br className="md:hidden" /> Fast{' '}
              <span className="md:hidden">&</span>
            </p>
          </div>
          {/* <p className="text-[8.125rem] font-bold lowercase leading-[82%] -tracking-wider">
          знання з <span className="-ml-2 text-[7.125rem] font-extralight text-[#31A301]">[</span>
          seo
          <span className="text-[7.125rem] font-extralight text-[#31A301]">]</span>
        </p> */}
          <div className="flex flex-row items-end">
            <p
              data-aos="fade-up"
              className="text-[6.125rem] md:text-[6.825rem] font-bold leading-[82%] -tracking-wider"
            >
              <span className="hidden md:inline">&</span> Local
            </p>
            <p
              data-aos="fade-right"
              className="hidden md:block ml-10 mt-2 text-xl font-normal opacity-40"
            >
              All specialists are licensed,
              <br /> insured, secured by collateral and
              <br /> have passed a background check.
            </p>
          </div>
          <div className="mt-[2rem] flex flex-row items-center gap-[1.875rem]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer md:-ml-16 flex flex-row  items-center"
            >
              {/* Левая иконка — скрыта по умолчанию, появляется при hover */}
              <div
                className="size-[4.5rem] hidden md:flex bg-accent rounded-full items-center justify-center 
                  opacity-0 translate-x-8 group-hover:ml-16 group-hover:opacity-100 group-hover:translate-x-0 
                  transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="2.5rem" height="2.5rem" />
              </div>

              {/* Текст */}
              <p className="bg-accent text-white px-8 w-full md:px-12 md:w-fit py-7 md:py-5 text-3xl rounded-2xl md:rounded-4xl font-semibold">
                Schedule Service
              </p>

              {/* Правая иконка — видна по умолчанию, исчезает при hover */}
              <div
                // data-aos="fade-right"
                // data-aos-delay={300}
                className="size-[4.5rem] bg-accent rounded-full hidden md:flex items-center justify-center 
                  opacity-100 translate-x-0 group-hover:opacity-0 group-hover:-translate-x-4 
                  transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="2.5rem" height="2.5rem" />
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col mt-16 md:mt-[5.75rem] gap-6">
          <p className=" md:hidden text-center mx-auto mt-2 text-[1.6rem] font-normal opacity-70">
            All specialists are licensed, insured, secured by <br /> collateral and have passed a
            background check.
          </p>
          <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-3 tracking-wide">
            {items.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 300}
                className="flex items-start border border-neutral-300 bg-white px-8 py-6 rounded-xl gap-6"
              >
                <div className="flex flex-row items-center gap-6 md:gap-4">
                  {item.icon}
                  <div className="flex flex-col">
                    <p className="text-3xl md:text-2xl font-semibold">{item.boldText}</p>
                    <p className="text-[1.625rem] md:text-2xl font-medium">{item.fadedText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
