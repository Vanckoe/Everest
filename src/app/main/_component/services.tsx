import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="py-[7.5rem] flex flex-col gap-5">
      <div className="text-xl md:text-base italic text-black">
        <span className="text-2xl md:text-xl text-[#FE5B2C] ">//</span> 02 - Services
      </div>
      <p className="text-[2.75rem] leading-[100%] font-semibold">
        Broken Appliance? <br className='md:hidden'/> We’ll Fix It Today! <br />
        Choose Top-level <br className='md:hidden'/> service at fair price
      </p>
      {/* <div className="grid grid-row-3 "></div> */}
      <div className="flex flex-col ">
        <Image src={'/img/services/fridge.avif'} width={300} height={200} alt='Holodos' className='h-[20rem] object'/>
      </div>
    </div>
  );
};

export default Services;
