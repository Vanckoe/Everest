import React from 'react';
import PlusIcon from '@/assets/PlusIcon';

const Issues = () => {
  return (
    <section className="px-10 md:px-10 py-10">
      {/* Заголовок и подзаголовок */}
      <h2 className="text-[#121212] text-4xl md:text-4xl font-bold mb-4 text-left">
        Common Issues With Sub-Zero Appliances
      </h2>
      <p className="text-[#555555] text-2xl md:text-lg mb-8 text-left max-w-3xl">
        Issues aren’t out of the ordinary even for luxury brands, so over time it’s possible to experience certain problems. Here’s a list of the most common issues:
      </p>

      {/* Список проблем с иконкой плюса */}
      <div className="flex flex-col gap-3 mb-8">
        {[
          "Temperature fluctuations. Refrigerators may fail to maintain a consistent temperature, which affects food storage.",
          "Faulty seals. Door seals may weaken, causing air leaks that reduce cooling efficiency.",
          "Ice maker malfunctions. The ice maker may stop producing ice due to a clogged water line, faulty components, and so on.",
          "Water leaks. Refrigerators often leak due to damaged hoses or clogged drain lines.",
          "Defrost problems. Frost buildup inside freezers occurs when systems malfunction or because of certain components.",
          "Control panel failure. The control panel may stop working due to electrical issues or worn-out circuits, which potentially need to be replaced.",
        ].map((text, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[#555555]">
            <PlusIcon className="w-6 h-6 md:w-4 md:h-4 flex-shrink-0" />
            <p className="text-[#888888] text-2xl md:text-base">{text}</p>
          </div>
        ))}
      </div>

      {/* Дополнительный текст */}
      <p className="text-[#555555] text-2xl md:text-sm mb-8 text-left">
        Other common issues include lightning inside the oven not working properly, the ignition system won’t set off, and so on. Therefore, if any of these problems arise, it’s best to contact professionals at Midwest Standards. We guarantee fast and high-quality repairs, so that you can continue cooking your favorite meals and keep them fresh.
      </p>

      <div className="flex flex-col md:flex-row md:items-center tracking-wide">
        {/* Item 01 */}
        <div className="flex flex-col gap-5 pb-7 pt-[1.125rem]">
          <p className="md:text-lg text-xl font-medium text-[#121212]">01</p>
          <div className="flex flex-row items-start">
            <div className="mt-1"></div>
            <div>
              <p className="md:text-lg text-3xl font-semibold text-[#121212]">
                Flexible Scheduling
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-light text-[#888888]">
                We offer flexible appointment times to fit your busy lifestyle, making it easy to get the help you need when you need it.
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
              <p className="md:text-lg text-3xl font-semibold text-[#121212]">
                Genuine Parts
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-light text-[#888888]">
                We use only genuine Sub-Zero replacement parts, ensuring that your appliances continue to operate at peak performance and maintain their value.
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
              <p className="md:text-lg text-3xl font-semibold text-[#121212]">
                Comprehensive Diagnostics
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-light text-[#888888]">
                Our thorough diagnostic process ensures that we identify the root cause of the problem, preventing future issues and saving you time and money.
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
              <p className="md:text-lg text-3xl font-semibold text-[#121212]">
                Fast Response Times
              </p>
              <p className="text-2xl md:text-sm mt-4 md:mt-4 font-light text-[#888888]">
                We understand that appliance issues can disrupt your daily life. That’s why we prioritize quick response times to get your appliances back in working order as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;