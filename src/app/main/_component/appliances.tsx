'use client';
import React, { useState } from 'react';
import Modal from '@/components/layout/modal';
import RightIcon from '@/assets/Right';

const Appliances = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col gap-20 md:flex-row md:items-center justify-between w-full bg-accent text-white py-32 md:py-24 px-12 md:px-16">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <p
        data-aos="fade-up"
        className="font-semibold text-[2.6rem] md:text-[3rem] leading-[120%]"
      >
        Any questions left? <br />
        Give us a call <br />
        and we’ll be happy to help.
      </p>

      <a
        href="tel:+13312198690"
        className="group md:-ml-12 flex w-fit items-center"
      >
        <div
          className="
            hidden md:flex size-14 min-w-14 bg-second rounded-full items-center justify-center
            opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-300 ease-in-out
          "
        >
          <RightIcon color="black" width="1.5rem" height="1.5rem" />
        </div>

        <span className="bg-second text-black px-10 md:px-4 py-5 md:py-3 rounded-full font-semibold text-3xl md:text-3xl">
          +1 (331) 219 8690
        </span>

        <div
          className="
            flex size-20 min-w-20 md:size-14 md:min-w-14 bg-second rounded-full items-center justify-center
            opacity-100 translate-x-0 group-hover:-mr-12 group-hover:opacity-0 group-hover:-translate-x-4
            transition-all duration-300 ease-in-out
          "
        >
          <RightIcon color="black" width="1.5rem" height="1.5rem" />
        </div>
      </a>
    </section>
  );
};

export default Appliances;
