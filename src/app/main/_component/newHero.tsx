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
    icon: <BadgeCheck className="text-[#31A301] size-8" />,
    boldText: '10+ Years Experience',
    fadedText: ' in appliance repair industry.',
  },
  {
    id: '02',
    icon: <ShieldCheck className="text-[#31A301] size-8" />,
    boldText: '12-month Labor Warranty',
    fadedText: ' on all completed jobs.',
  },
  {
    id: '03',
    icon: <Lightbulb className="text-[#31A301] size-8" />,
    boldText: 'Same-Day Repairs Available',
    fadedText: ' for most major brands.',
  },
];
const NewHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div
      className="w-full relative bg-right-bottom md:bg-right bg-gradient-to-b from-[#f5f5f5] to-[#FBFAFB] bg-no-repeat bg-[length:55%]"
      style={{ backgroundImage: "url('/bg/nemHeroBg-(1).png')" }}
    >
      <Header />
      <div className="px-10  mt-10">
        <div className="flex w-full flex-col md:w-[55.125rem]">
          <p className="text-base font-light uppercase leading-[150%] tracking-[0.1rem] text-[#CACACA]">
            [ Small Roots, Big Mission ]
          </p>
          <div className="mt-5 flex flex-row items-center gap-5">
            <p className="text-[7.125rem] font-bold  leading-[82%] -tracking-wider">
              Chicago Appliance <br /> Repair, Fast <span className="md:hidden">&</span>
            </p>
          </div>
          {/* <p className="text-[8.125rem] font-bold lowercase leading-[82%] -tracking-wider">
          знання з <span className="-ml-2 text-[7.125rem] font-extralight text-[#31A301]">[</span>
          seo
          <span className="text-[7.125rem] font-extralight text-[#31A301]">]</span>
        </p> */}
          <div className="mt-2 flex flex-row items-center">
            <p className="text-[8.125rem] font-bold leading-[82%] -tracking-wider">
              <span className="hidden md:inline">&</span> Local
            </p>
            <p className="mt-5 ml-10 text-xl font-normal opacity-40">
              All specialists are licensed,
              <br /> insured, secured by collateral and
              <br /> have passed a background check.
            </p>
          </div>
          <div className="mt-[3.625rem] flex flex-row items-center gap-[1.875rem]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group cursor-pointer mt-10 -ml-12 flex flex-row w-fit items-center"
            >
              {/* Левая иконка — скрыта по умолчанию, появляется при hover */}
              <div
                className="size-12 bg-second rounded-full flex items-center justify-center 
                  opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0 
                  transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="1.5rem" height="1.5rem" />
              </div>

              {/* Текст */}
              <p className="bg-second text-white px-8 w-fit py-3 rounded-4xl font-semibold">
                Schedule Service
              </p>

              {/* Правая иконка — видна по умолчанию, исчезает при hover */}
              <div
                className="size-12 bg-second rounded-full flex items-center justify-center 
                  opacity-100 translate-x-0 group-hover:opacity-0 group-hover:-translate-x-4 
                  transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="1.5rem" height="1.5rem" />
              </div>
            </button>
          </div>
        </div>
        <div className=" ml-3 mt-[4.75rem] grid grid-cols-3 tracking-wide">
          {items.map(item => (
            <div key={item.id} className="flex items-start gap-6">
              <div className="flex flex-row items-center gap-4">
                {item.icon}
                <div className="flex flex-col">
                  <p className="text-lg font-medium">{item.boldText}</p>
                  <p className="text-lg font-medium">{item.fadedText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewHero;
