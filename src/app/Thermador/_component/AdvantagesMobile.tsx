import React from 'react';

const advantages = [
  {
    title: (
      <>
        Viking Refrigerators
      </>
    ),
    subtitle: (
      <>
        Built-in units designed to maintain consistent
        temperature and humidity, with customizable
        storage and panel-ready doors for
        seamless integration into your
        kitchen.
      </>
    ),
  },
  {
    title: (
      <>
        Viking Ranges
      </>
    ),
    subtitle: (
      <>
        High-performance cooking
        appliances featuring Star® Burners
        for even heat, large-capacity ovens,
        and durable construction suited for
        frequent use.
      </>
    ),
  },
  {
    title: (
      <>
        Viking Cooktops
      </>
    ),
    subtitle: (
      <>
        Available in gas and induction
        models, offering precise
        temperature control and easy-clean
        surfaces, ideal for a variety of
        cooking styles.
      </>
    ),
  },
  {
    title: (
      <>
        Viking Ovens
      </>
    ),
    subtitle: (
      <>
        Equipped with convection
        technology and smart features
        these ovens ensure even baking
        and roasting, with smooth-glide
        racks and user-friendly controls.
      </>
    ),
  },
];

export default function AdvantagesMobile() {
  return (
    <div className="block md:hidden px-10 py-[7.5rem]">
      {/* Заголовок и описание */}
      <div className="mb-10">
        <h2 className="text-[#001f3f] text-[3.25rem] font-bold leading-tight mb-4">
          We repair all types of <br />
          Viking Appliances
        </h2>
        <p className="text-[#001f3f] text-[1.65rem] leading-relaxed">
            If your Viking appliance isn’t functioning properly, don’t rush to replace 
            it—repair it! To find out more about our services or if your appliance isn’t listed above, 
            feel free to contact us online today.
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