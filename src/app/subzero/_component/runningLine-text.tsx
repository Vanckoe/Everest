'use client';

import Marquee from 'react-fast-marquee';

const phoneNumber = '+1 (331) 219 8690';

const ServiceAreaMarquee = () => {
  return (
    <div className="w-full mt-32 md:mt-5 py-3 md:py-10">
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="px-8">
            {/* Мобильная версия */}
            <a
              href="tel:+13312198690"
              className="block md:hidden text-2xl font-semibold text-[#171717] whitespace-nowrap underline"
            >
              {phoneNumber}
            </a>

            {/* Десктопная версия */}
            <span className="hidden md:block text-2xl font-semibold text-[#171717] whitespace-nowrap">
              {phoneNumber}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ServiceAreaMarquee;