import React from 'react';
import PlusIcon from '@/assets/PlusIcon';

const Issues = () => {
  return (
    <section className="px-10 md:px-10 py-10">
      {/* Заголовок и подзаголовок */}
      <h2 className="text-color text-5xl md:text-4xl font-gloock mb-6 text-left">
        Common Issues With Sub-Zero Appliances
      </h2>
      <p className="text-[#555555] text-2xl font-inter md:text-lg mb-8 text-left max-w-3xl">
        Even luxury appliances like Sub-Zero can experience wear and tear over time. While known for their quality and performance, certain problems may still arise due to usage, aging, or lack of maintenance.
      </p>

      {/* Список проблем с иконкой плюса */}
      <div className="flex flex-col gap-3 mb-8">
        {[
          "Temperature fluctuations. Refrigerators may fail to maintain a consistent internal temperature, putting food at risk of spoiling. Common causes include faulty sensors or compressor problems.",
          "Faulty Door Seals. Worn or damaged door gaskets lead to air leaks, reducing cooling efficiency and increasing energy consumption.",
          "Ice maker malfunctions. Your Sub-Zero ice maker may stop producing ice due to a clogged water line, malfunctioning valve, or defective internal component.",
          "Water leaks. Leaks often result from damaged hoses, cracked water tanks, or clogged drain lines, and can cause damage to flooring or cabinets.",
          "Defrost System Issues. Frost buildup inside the freezer usually indicates a problem with the defrost heater, thermostat, or control board.",
          "Control panel failure. If the digital control panel stops responding, it may be due to electrical faults, worn-out circuits, or power surges, requiring professional repair or replacement.",
        ].map((text, idx) => (
          <div key={idx} className="flex items-center font-inter gap-3 text-[#555555]">
            <PlusIcon className="w-6 h-6 md:w-4 md:h-4 flex-shrink-0" />
            <p className="text-[#888888] text-2xl md:text-base">{text}</p>
          </div>
        ))}
      </div>

      {/* Дополнительный текст */}
      <p className="text-[#555555] font-inter text-2xl md:text-sm mb-8 text-left">
        Even premium appliances like Sub-Zero can experience technical issues over time. While they are known for their reliability and advanced features, wear and tear, heavy usage, or lack of maintenance can lead to malfunctions.
      </p>

      <div className="flex flex-col md:flex-row md:items-center tracking-wide">
        {/* Item 01 */}
        <div className="flex flex-col gap-5 pb-7 pt-[1.125rem]">
          <p className="md:text-lg text-xl font-medium text-[#121212]">01</p>
          <div className="flex flex-row items-start">
            <div className="mt-1"></div>
            <div>
              <p className="md:text-lg text-3xl font-gloock text-color">
                Flexible Scheduling
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-inter text-[#888888]">
                We offer convenient appointment slots tailored to your busy lifestyle, so you get the help you need exactly when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Линия */}
        <div className="hidden md:block ml-[3.625rem] mr-[4.5rem] h-[10.625rem] w-px bg-[#F1F1F1]"></div>

        {/* Item 02 */}
        <div className="flex flex-col gap-5 pb-7 pt-[1.125rem]">
          <p className="md:text-lg text-xl font-medium text-[#121212]">02</p>
          <div className="flex flex-row items-start">
            <div className="mt-1"></div>
            <div>
              <p className="md:text-lg text-3xl font-gloock text-color">
                Genuine Parts
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-inter text-[#888888]">
                All repairs are performed using only original manufacturer parts, ensuring long-term performance, durability, and the preservation of your appliance’s value.
              </p>
            </div>
          </div>
        </div>

        {/* Линия */}
        <div className="hidden md:block ml-[3.625rem] mr-[4.5rem] h-[10.625rem] w-px bg-[#F1F1F1]"></div>

        {/* Item 03 */}
        <div className="flex flex-col gap-5 pb-7 pt-[1.125rem]">
          <p className="md:text-lg text-xl font-medium text-[#121212]">03</p>
          <div className="flex flex-row items-start">
            <div className="mt-1"></div>
            <div>
              <p className="md:text-lg text-3xl font-gloock text-color">
                Comprehensive Diagnostics
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-inter text-[#888888]">
                Our certified technicians perform a deep diagnostic assessment to identify the true cause of the issue, helping prevent future breakdowns and saving you time and money.
              </p>
            </div>
          </div>
        </div>

        {/* Линия */}
        <div className="hidden md:block ml-[3.625rem] mr-[4.5rem] h-[10.625rem] w-px bg-[#F1F1F1]"></div>

        {/* Item 04 */}
        <div className="flex flex-col gap-5 pb-7 pt-[1.125rem]">
          <p className="md:text-lg text-xl font-medium text-[#121212]">04</p>
          <div className="flex flex-row items-start">
            <div className="mt-1"></div>
            <div>
              <p className="md:text-lg text-3xl font-gloock text-color">
                Fast Response Times
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-inter text-[#888888]">
                We know that appliance problems can be stressful and disruptive. That’s why we prioritize rapid service to restore comfort and convenience to your home as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;