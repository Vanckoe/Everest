import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="w-full flex gap-5 flex-col md:flex-row">
      <div className="flex flex-col text-white  gap-5 pl-16 pt-20 pb-20 bg-[#001F3F] rounded-[2rem] md:w-1/2">
        <p className="font-semibold text-lg px-5 py-1 border border-neutral-300 rounded-3xl opacity-90 w-fit">
          Your Local Appliance Repair Сompany
        </p>
        <h1 className="font-bold text-[3.125rem] leading-[100%]">
          Same Day Appliance Repair Services in Chicago
        </h1>
        <p className="text-lg font-normal">
          Schedule your service today and enjoy <br /> peace of mind with Midwest Standards expert
          care
        </p>
      </div>
      <div className="flex flex-col md:w-1/2 gap-5">
        <Image
          src={'/img/stok-image.jpeg'}
          width={300}
          height={300}
          alt="hero image"
          className="w-full h-[30rem] object-cover rounded-[2rem]"
        />

        <div className="flex flex-col md:flex-row gap-5 text-neutral-800">
          <div className="w-full flex flex-col gap-3 pl-10 py-10 items-start rounded-[2rem] bg-[#D8E7EF]">
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
          <div className="w-full flex flex-col gap-3 pl-10 py-10 items-start rounded-[2rem] bg-[#D8E7EF]">
            <div className="flex flex-row items-center gap-2">
              <Image
                src={'/img/icons/document.png'}
                width={30}
                height={30}
                alt="calendar icon"
                className="size-[2rem]"
              />
              <p className="text-5xl font-semibold">12month</p>
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
