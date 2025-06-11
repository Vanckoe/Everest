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
        Sub-Zero Full-<br />
        Size<br />
        Refrigerators
      </>
    ),
    subtitle: (
      <>
        The range includes customizable <br />
        models with innovative cooling <br />
        mechanisms.
      </>
    ),
  },
  {
    title: (
      <>
        Sub-Zero <br />
        Wine Storage
      </>
    ),
    subtitle: (
      <>
        The selection has energy-efficient <br />
        freezers with different temperature <br />
        settings.
      </>
    ),
  },
  {
    title: (
      <>
        Sub-Zero <br />
        Undercounter <br />
        Refrigerators
      </>
    ),
    subtitle: (
      <>
        The company also has a wide range <br />
        of customizable refrigerators that <br />
        fit perfectly into the interior of the <br />
        kitchen.
      </>
    ),
  },
  {
    title: (
      <>
        Sub-Zero <br />
        Outdoor <br />
        Refrigerators
      </>
    ),
    subtitle: (
      <>
        The brand produces compact <br />
        outdoor refrigerators.
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
              We repair all <br /> types of Sub- <br />Zero Appliances
            </h2>
            <p
              data-aos="fade-up"
              className="text-[#001f3f] text-base leading-relaxed mt-4"
            >
              If your Sub-Zero appliance isn’t working right, don’t replace it; fix it instead! To learn more about our
              services or if you do not see your appliance listed above, please reach out online today.
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