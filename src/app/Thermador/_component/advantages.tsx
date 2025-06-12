import React from 'react';
import AdvantagesMobile from './AdvantagesMobile';

type Advantage = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
};

const advantages: Advantage[] = [
  {
    title: (
      <>
        Thermador<br />
        Refrigerators<br />
      </>
    ),
    subtitle: (
      <>
        Built-in units designed to maintain <br />
        consistent temperature and <br />
        humidity, with customizable <br />
        storage and panel-ready doors for <br />
        seamless integration into your <br />
        kitchen.
      </>
    ),
  },
  {
    title: (
      <>
        Thermador <br />
        Ranges
      </>
    ),
    subtitle: (
      <>
        High-performance cooking <br />
        appliances featuring Star® Burners <br />
        for even heat, large-capacity ovens, <br />
        and durable construction suited for <br />
        frequent use.
      </>
    ),
  },
  {
    title: (
      <>
        Thermador <br />
        Cooktops <br />
      </>
    ),
    subtitle: (
      <>
        Available in gas and induction <br />
        models, offering precise <br />
        temperature control and easy-clean <br />
        surfaces, ideal for a variety of <br />
        cooking styles.
      </>
    ),
  },
  {
    title: (
      <>
        Thermador <br />
        Ovens <br />
      </>
    ),
    subtitle: (
      <>
        Equipped with convection <br />
        technology and smart features,<br />
        these ovens ensure even baking <br />
        and roasting, with smooth-glide <br />
        racks and user-friendly controls.
      </>
    ),
  },
];

export default function Advantages() {
  return (
    <>
      {/* ПК версия */}
      <div className="hidden md:flex px-10 py-[4.5rem]">
        {/* Левая часть */}
        <div className="w-1/2 flex flex-col pr-[10rem]">
          <div className="md:sticky md:top-[6rem] flex flex-col gap-[1rem]">
            <h2
              data-aos="fade-up"
              className="text-[#001f3f] text-[2.75rem] font-bold leading-tight w-[28.125rem]"
            >
              We repair all <br /> types of Thermador <br />Appliances
            </h2>
            <p
              data-aos="fade-up"
              className="text-[#001f3f] text-base leading-relaxed mt-4"
            >
              If your Thermador appliance isn’t functioning properly, don’t rush to replace 
              it—repair it! To find out more about our services or if your appliance isn’t listed above, 
              feel free to contact us online today.
            </p>
          </div>
        </div>

        {/* Правая часть — карточки */}
        <div className="w-full flex flex-col">
          {advantages.map(({ title, subtitle }, idx) => (
            <div
              key={idx}
              className="flex border-t border-[#E5E5E5] py-6 px-4 items-start gap-6"
            >
              {/* Номер */}
              <span className="text-[#1E2B3C] font-semibold text-base w-[2rem] shrink-0 mt-1">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Контент: title + subtitle */}
              <div className="flex items-start justify-between gap-30">
                {/* Заголовок */}
                <h3 className="text-black text-2xl font-semibold leading-snug max-w-[22rem]">
                  {title}
                </h3>

                {/* Подзаголовок */}
                <p className="text-[#7D7D7D] text-base max-w-[24rem] leading-relaxed text-left">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Мобильная версия */}
      <div className="block md:hidden">
        <AdvantagesMobile />
      </div>
    </>
  );
}