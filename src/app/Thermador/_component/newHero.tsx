'use client';
import React, { useState } from 'react';
import Modal from '@/components/layout/modal';
import RightIcon from '@/assets/Right';
import { Medal, ShieldCheck, Handshake, Wrench } from 'lucide-react';

const items = [
  {
    id: '01',
    icon: <Wrench className="text-[#339AF0] size-10" />,
    boldText: 'Stop Googling. Start Fixing.',
    fadedText: ' One quick call, and we’re on our way today.',
  },
  {
    id: '02',
    icon: <ShieldCheck className="text-[#FCC419] size-10" />,
    boldText: 'Licensed, Insured, Vetted',
    fadedText: ' Technicians you can trust with peace of mind',
  },
  {
    id: '03',
    icon: <Medal className="text-[#63B4B8] size-10" />,
    boldText: 'Not Just Fixed — Guaranteed.',
    fadedText: ' A year-long warranty on all repairs',
  },
  {
    id: '04',
    icon: <Handshake className="text-[#FF6B6B] size-10" />,
    boldText: 'Not Just Today — For Years to Come.',
    fadedText: ' We’ll stand by your family for every repair.',
  },
];

const NewHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <div
      className="w-full relative bg-no-repeat bg-[length:65%] md:bg-[length:55%] bg-[position:right_15rem] md:bg-right-top"
      style={{
        backgroundImage: "url('/bg/nemHeroBg-(1).png')",
      }}
    >
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="px-10 mt-10 md:mt-8">
        <div className="flex w-full flex-col md:w-[55.125rem]">
          <p
            data-aos="fade-up"
            className="text-xl md:text-base font-inter-medium md:font-light uppercase leading-[150%] tracking-[0.1rem] text-[#929292] md:text-[#CACACA]"
          >
            [ Brand appliance service ]
          </p>
          <div data-aos="fade-up" className="mt-5 flex flex-row items-center gap-5">
            <p className="text-[5.125rem] md:text-[6.125rem] font-gloock text-color leading-[85%] -tracking-normal">
              Viking <br /> appliance repair <br />
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
              className="text-[5.125rem] md:text-[6.825rem] font-gloock text-color leading-[85%] -tracking-normal"
            >
              <span className="hidden md:inline"></span> in Chicago
            </p>
            <p
              data-aos="fade-right"
              className="hidden md:block ml-10 mt-8 text-xl font-inter opacity-40"
            >
              Fast, Reliable Service
              <br /> by EVEREST <br />
              Appliance Experts
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
                  opacity-0 translate-x-8 group-hover:ml-16 group-hover:opacity-100 group-hover:translate-x-4 
                  transition-all duration-300 ease-in-out"
              >
                <RightIcon color="white" width="2.5rem" height="2.5rem" />
              </div>

              {/* Текст */}
              <p className="bg-accent text-white px-8 w-full md:px-12 md:w-fit py-7 md:py-5 text-3xl rounded-2xl md:rounded-4xl font-semibold">
                Get a consultation
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
        <div className="flex flex-col gap-6">
        <div className="flex flex-col mt-16 md:mt-[2.75rem] gap-6">
          <div className="grid gap-5 md:gap-4 grid-cols-1 md:grid-cols-2 tracking-wide">
            {items.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 300}
                className="flex items-start border border-neutral-300 bg-white px-8 py-6 rounded-xl"
              >
                <div className="flex flex-row items-center gap-6 md:gap-4">
                  {item.icon}
                  <div className="flex flex-col">
                    <p className="text-3xl md:text-xl text-color font-Merriweather">{item.boldText}</p>
                    <p className="text-[1.625rem] md:text-xl text-color font-inter">{item.fadedText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
