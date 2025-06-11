import React from 'react';

const advantages = [
  {
    title: (
      <>
        Sub-Zero Full-Size<br />
        Refrigerators
      </>
    ),
    subtitle: (
      <>
        The range includes customizable models with <br /> 
        innovative cooling mechanisms.
      </>
    ),
  },
  {
    title: (
      <>
        Sub-Zero Wine Storage
      </>
    ),
    subtitle: (
      <>
        The selection has energy-efficient freezers with <br /> 
        different temperature settings.
      </>
    ),
  },
  {
    title: (
      <>
        Sub-Zero Undercounter <br />
        Refrigerators
      </>
    ),
    subtitle: (
      <>
        The company also has a wide range of <br /> 
        customizable refrigerators that fit perfectly into <br /> 
        the interior of the kitchen.
      </>
    ),
  },
  {
    title: (
      <>
        Sub-Zero Outdoor <br />
        Refrigerators
      </>
    ),
    subtitle: (
      <>
        The brand produces compact outdoor <br /> refrigerators.
      </>
    ),
  },
];

export default function AdvantagesMobile() {
  return (
    <div className="block md:hidden px-6 py-[7.5rem]">
      {/* Заголовок и описание */}
      <div className="mb-10">
        <h2 className="text-[#001f3f] text-[3.65rem] font-bold leading-tight mb-4">
          We repair all types <br />
          of Sub-Zero Appliances
        </h2>
        <p className="text-[#001f3f] text-[1.65rem] leading-relaxed">
          If your Sub-Zero appliance isn’t working right, <br />
          don’t replace it; fix it instead! To learn more <br /> 
          about our services or if you do not see your <br /> 
          appliance listed above, please reach out online <br /> 
          today.
        </p>
      </div>

      {/* Карточки преимуществ */}
      <div className="flex flex-col gap-6">
        {advantages.map(({ title, subtitle }, idx) => (
          <div
            key={idx}
            className="border-t border-[#E5E5E5] pt-6"
          >
            <div className="flex flex-col items-start gap-6">
              <span className="text-[#1E2B3C] font-semibold text-[1.45rem] mb-1">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-black text-[2.45rem] font-semibold leading-tight">
                {title}
              </h3>
              <p className="text-[#7D7D7D] text-[1.75rem] leading-relaxed mt-1">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}