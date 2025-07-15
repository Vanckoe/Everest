'use client';
import React, { useState } from 'react';
import RightIcon from '@/assets/Right';
import Modal from '@/components/layout/modal';

export default function ApplianceRepairBlock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="w-full bg-btsecond text-white mt-[2.5rem]">
        <div className="flex flex-col md:flex-row min-h-[37.5rem]">
          {/* Левая часть — картинка */}
          <div className="md:w-1/2 w-full">
            <div className="w-full h-full">
              <img
                src="/img/Subzero/subzero-1.jpg"
                alt="Appliance repair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Правая часть — текст + кнопка */}
          <div
            className="md:w-1/2 w-full flex items-center px-6 py-10 md:px-[3.5rem] md:py-[2.5rem] h-[24.375rem] md:h-auto"
          >
            <div className="flex flex-col gap-[2.5rem]">
              <h2 className="text-white text-5xl md:text-[3rem] font-gloock leading-tight">
                Give a second life to your appliances with same day appliance repair expert
              </h2>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group cursor-pointer flex items-center w-fit"
              >
                {/* Левая иконка — появляется при hover */}
                <div
                  className="w-[3.75rem] h-[3.75rem] hidden md:flex bg-second rounded-full items-center justify-center 
                    opacity-0 translate-x-8 group-hover:ml-[4rem] group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-300 ease-in-out"
                >
                  <RightIcon color="#343a40" width="2rem" height="2rem" />
                </div>

                {/* Текст кнопки */}
                <p className="bg-second text-color w-[18.5rem] h-[4.75rem] md:w-[16.5rem] md:h-[3.75rem] flex items-center justify-center text-2xl rounded-[1.5rem] font-inter-semibold">
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
        </div>
      </section>
    </>
  );
}