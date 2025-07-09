'use client';
import React, { useState } from 'react';
import RightIcon from '@/assets/Right';
import Modal from '@/components/layout/modal';

export default function ApplianceRepairBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ПК версия */}
      <div className="hidden md:flex md:h-[600px]">
        <div className="shrink-0">
          <img
            src="/img/Subzero/subzero-1.jpg"
            alt="Appliance repair"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-btsecond px-30 py-30 flex flex-col">
          <h2 className="text-[#fff] text-4xl font-gloock mb-6 leading-tight">
            Give a second life to your appliances with same day appliance repair expert
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group cursor-pointer flex"
          >
            {/* Левая иконка — появляется при hover */}
            <div
              className="w-[3.75rem] h-[3.75rem] hidden md:flex bg-second rounded-full items-center justify-center 
                opacity-0 translate-x-8 group-hover:ml-[4rem] group-hover:opacity-100 group-hover:translate-x-0 
                transition-all duration-300 ease-in-out"
            >
              <RightIcon color="#343a40" width="2rem" height="2rem" />
            </div>

            {/* Текст */}
            <p className="bg-second text-color w-[14.5rem] h-[3.75rem] flex items-center justify-center text-[1.125rem] rounded-[1.5rem] font-inter-semibold">
              Schedule Service
            </p>

            {/* Правая иконка — исчезает при hover */}
            <div
              className="w-[3.75rem] h-[3.75rem] bg-second rounded-full hidden md:flex items-center justify-center 
                opacity-100 translate-x-0 group-hover:opacity-0 group-hover:-translate-x-4 
                transition-all duration-300 ease-in-out"
            >
              <RightIcon color="#343a40" width="2rem" height="2rem" />
            </div>
          </button>
        </div>
      </div>

{/* Мобильная версия */}
<div className="md:hidden w-full">
  <img
    src="/img/Subzero/subzero-1.jpg"
    alt="Appliance repair"
    className="w-full h-[300px] object-cover rounded-t-lg"
  />
  <div className="bg-[#d8e7ef] w-full h-[350px] flex flex-col px-6">
    <h2 className="text-[#001f3f] text-[3rem] py-20 font-bold mb-6 leading-tight text-left">
      Give a second life to <br /> your appliances with <br /> same day appliance <br /> repair expert
    </h2>

<button
  onClick={() => setIsModalOpen(true)}
  className="group cursor-pointer flex items-center md:hidden max-w-[17,5rem] w-full"
>
  {/* Текст кнопки */}
  <p className="bg-[#fe5b2c] text-white px-10 py-5 text-3xl rounded-2xl font-semibold whitespace-nowrap">
    Schedule Service
  </p>
</button>

  </div>
</div>
    </>
  );
}
