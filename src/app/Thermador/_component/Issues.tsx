import React from 'react';
import PlusIcon from '@/assets/PlusIcon';

const Issues = () => {
  return (
    <section className="px-10 md:px-10 py-10">
      {/* Заголовок и подзаголовок */}
      <h2 className="text-[#121212] text-4xl md:text-3xl font-bold mb-4 text-left">
        Why Do 10 Out of 10 Customers Choose EVEREST?
      </h2>
      <p className="text-[#555555] text-2xl md:text-lg mb-8 text-left max-w-3xl">
        Because EVEREST sets the standard for premium appliance repair — especially when it comes to high-end 
        brands like Viking. Our clients trust us for our expertise, precision, and commitment to long-term results. <br />
        Viking repair is a technically complex process that demands the attention of 
        highly qualified technicians and the use of specialized diagnostic equipment. That's why, when your 
        Viking appliance stops working, customers in Chicago turn to Everest, the certified service provider 
        trusted by EVEREST.
      </p>

      {/* Список проблем с иконкой плюса */}
      <div className="flex flex-col gap-3 mb-8">
        {[
          "An effective solution to the problem. Our technicians have over 10 years of hands-on experience with Viking appliances. We quickly diagnose and repair issues of any complexity, restoring your equipment to perfect working condition.",
          "Original spare parts. We use only genuine Viking replacement parts for every repair. This ensures the long-term durability and reliable operation of your appliance — no low-quality substitutes.",
          "Fast Service Without Extra Fees. Speed matters. Our experts work efficiently and without delays, delivering fast Viking repair in Chicago with no hidden charges or unnecessary wait times.",
          "Personalized Approach. For complex repairs, we offer pickup and return service — transporting your appliance to our service center and back. Every detail is coordinated directly with the client, ensuring clear communication and full transparency at every stage.",
        ].map((text, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[#555555]">
            <PlusIcon className="w-6 h-6 md:w-4 md:h-4 flex-shrink-0" />
            <p className="text-[#888888] text-2xl md:text-base">{text}</p>
          </div>
        ))}
      </div>

      {/* Дополнительный текст */}
      <p className="text-[#555555] text-2xl md:text-base mb-8 text-left">
        If you’re looking for reliable Viking repair in Chicago, contact Ereverst today. We stand behind our work with a 12-month warranty on all repairs.      
      </p>
      <div className="flex flex-col md:flex-row md:items-center tracking-wide">
        {/* Item 01 */}
        <div className="flex flex-col gap-5 pb-7 pt-[1.125rem]">
          <p className="md:text-lg text-xl font-medium text-[#121212]">01</p>
          <div className="flex flex-row items-start">
            <div className="mt-1"></div>
            <div>
              <p className="md:text-2xl text-3xl font-semibold text-[#121212]">
                Flexible <br />Scheduling
              </p>
              <p className="text-2xl md:text-base mt-4 md:mt-4 font-light text-[#888888]">
                We offer convenient appointment slots tailored to your availability — get expert Viking repair when it works best for you.              
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
              <p className="md:text-2xl text-3xl font-semibold text-[#121212]">
                Genuine Viking Parts
              </p>
              <p className="text-2xl md:text-base mt-4 md:mt-4 font-light text-[#888888]">
                Every repair is completed using authentic Viking components, ensuring optimal performance, manufacturer-grade quality, and extended appliance life.              
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
              <p className="md:text-2xl text-3xl font-semibold text-[#121212]">
                Comprehensive Diagnostics
              </p>
              <p className="text-2xl md:text-base mt-4 md:mt-4 font-light text-[#888888]">
                Our certified technicians conduct in-depth diagnostics to identify the precise cause of the issue — reducing the risk of repeat problems and saving you time and money.
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
              <p className="md:text-2xl text-3xl font-semibold text-[#121212]">
                Fast Response Times
              </p>
              <p className="text-2xl md:text-base mt-4 md:mt-4 font-light text-[#888888]">
                We understand the urgency of a broken appliance. That’s why we provide quick response times to restore comfort and functionality to your home as fast as possible. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;