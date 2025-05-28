import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-between">
      <div className="flex flex-col text-white  gap-5 pl-16 pt-20 pb-20 bg-[#001F3F] rounded-[2rem] md:w-1/2">
        <p className="font-semibold text-lg px-5 py-1 border border-neutral-300 rounded-3xl opacity-90 w-fit">
          Your Local Appliance Repair Сompany
        </p>
        <h1 className="font-bold text-5xl">Same Day Appliance Repair Services in Chicago</h1>
        <p className="text-lg font-normal">
          Schedule your service today and enjoy <br /> peace of mind with Midwest Standards expert care
        </p>
      </div>
    </section>
  );
};

export default Hero;
