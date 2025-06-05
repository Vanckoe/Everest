import React from 'react';
import RightIcon from '@/assets/Right';

const Appliances = () => {
  return (
    <section className="flex flex-col gap-20 md:flex-row md:items-center justify-between w-full bg-accent text-white py-32 md:py-24 px-12 md:px-16">
      <p className="font-semibold text-[2.6rem] md:text-[3rem] leading-[120%]">
        Give a second life to your <br />
        appliances with same day <br />
        appliance repair expert
      </p>
      <button className="group md:-ml-12 flex w-fit items-center">
        <div
          className="
                  hidden md:flex size-14 min-w-14 bg-second rounded-full items-center justify-center
                  opacity-0 translate-x-8 group-hover:ml-12 group-hover:opacity-100 group-hover:translate-x-0
                  transition-all duration-300 ease-in-out
                "
        >
          <RightIcon color="white" width="1.5rem" height="1.5rem" />
        </div>
        <span className="bg-second text-white px-10 md:px-4 py-5 md:py-3 rounded-full font-semibold text-3xl md:text-3xl">
          Schedule an appointment
        </span>
        <div
          className="
                  flex size-20 min-w-20 md:size-14 md:min-w-14 bg-second rounded-full items-center justify-center
                  opacity-100 translate-x-0 group-hover:-mr-12 group-hover:opacity-0 group-hover:-translate-x-4
                  transition-all duration-300 ease-in-out
                "
        >
          <RightIcon color="white" width="1.5rem" height="1.5rem" />
        </div>
      </button>
    </section>
  );
};

export default Appliances;
