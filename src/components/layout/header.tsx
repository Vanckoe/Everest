import React from 'react';
import Logo from '@/assets/Logo';
import CallIcon from '@/assets/CallIcon';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between py-8">
      <div className="flex flex-row items-center gap-10">
        <Logo />
        <div className="flex flex-row text-base font-semibold gap-7">
          <p className="">About</p>
          <p className="">Company</p>
          <p className="">Services</p>
          <p className="">Brands</p>
          <p className="">Reviews</p>
          <p className="">FAQ</p>
          <p className="">Contacts</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center size-[3rem] rounded-full bg-[#001F3F]">
          <CallIcon color="white" width="2rem" />
        </div>
        <button className="bg-[#001F3F] text-white px-8 py-3 rounded-4xl font-medium">
          +1 123 456 78 90
        </button>
        <button className="bg-[#FE5B2C] text-white px-8 py-3 rounded-4xl font-medium">
          Schedule Service
        </button>
      </div>
    </div>
  );
};

export default Header;
