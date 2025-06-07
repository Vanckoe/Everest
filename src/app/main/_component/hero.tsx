'use client';
import React, { useState } from 'react';
import Modal from '@/components/layout/modal';
import Image from 'next/image';
import RightIcon from '@/assets/Right';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  return (
    <section className="w-full flex px-10 gap-5 flex-col md:flex-row">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-col text-white px-10 md:px-20 pt-10 md:p-24 pb-20 bg-accent rounded-xl md:w-1/2">
        <p className="font-semibold text-base px-5 py-1 border border-neutral-300 rounded-xl opacity-90 w-fit">
          Your Local Appliance Repair Сompany
        </p>
        <h1 className="font-bold text-[3.125rem] leading-[100%] mt-8">
          Home appliance repair services in Chicago and the surrounding area
        </h1>
        <p className="text-lg font-normal mt-3">
          Schedule your service today and enjoy <br /> peace of mind with Midwest Standards expert
          care
        </p>
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
      <div className="hidden md:flex flex-col md:w-1/2 gap-5">
        <Image
          src={'/img/about/2pic.jpg'}
          width={300}
          height={300}
          alt="hero image"
          className="w-full h-[30rem] object-cover rounded-xl"
        />
        <div className="flex flex-col md:flex-row gap-5 text-neutral-800">
          <div className="w-full flex flex-col gap-3 pl-10 py-10 items-start rounded-xl bg-[#D8E7EF]">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={'/img/icons/calendar.png'}
                width={30}
                height={30}
                alt="calendar icon"
                className="size-[2rem]"
              />
              <p className="text-5xl font-semibold">10+</p>
            </div>
            <p className="font-semibold text-3xl  leading-[100%]">
              Years <br /> Experience
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 pl-10 py-10 items-start rounded-xl bg-[#D8E7EF]">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={'/img/icons/document.png'}
                width={30}
                height={30}
                alt="calendar icon"
                className="size-[2rem]"
              />
              <p className="text-5xl font-semibold">
                12<span className="text-4xl font-medium">month</span>
              </p>
            </div>
            <p className="font-semibold text-3xl  leading-[100%]">
              Labor <br /> Warranty
            </p>
          </div>{' '}
        </div>
      </div>
    </section>
  );
};

export default Hero;
