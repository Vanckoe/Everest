import React from 'react';
import PlusIcon from '@/assets/PlusIcon';

const Issues = () => {
  return (
    <section className="px-10 md:px-10 py-10">
      {/* Заголовок и подзаголовок */}
      <h2 className="text-[#121212] text-4xl md:text-3xl font-bold mb-4 text-left">
        Why do 10 out of 10 customers choose Midwest Standards?
      </h2>
      <p className="text-[#555555] text-2xl md:text-lg mb-8 text-left max-w-3xl">
        Thermador repair is a technically complex process that requires the involvement of 
        highly qualified specialists and the use of specialized equipment. 
        If your equipment refuses to work, contact Midwest Standards. 
        Skilled technicians will comprehensively diagnose the equipment, 
        determine the exact cause of its breakdown, and promptly fix it. <br /> When contacting Midwest Standards, you can count on:
      </p>

      {/* Список проблем с иконкой плюса */}
      <div className="flex flex-col gap-3 mb-8">
        {[
          "An effective solution to the problem. Our technicians have solid practical experience (more than 10 years). They quickly eliminate issues of any complexity.",
          "Original spare parts. When performing Thermador repair Chicago, we use only certified components, which guarantees the equipment's durability and uninterrupted operation.",
          "Speed. Midwest Standards technicians perform all work quickly without additional charges and delays.",
          "A personal approach. We take the equipment to the service center for complex repairs and bring it back. All details are agreed upon directly with the client.",
        ].map((text, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[#555555]">
            <PlusIcon className="w-6 h-6 md:w-4 md:h-4 flex-shrink-0" />
            <p className="text-[#888888] text-2xl md:text-base">{text}</p>
          </div>
        ))}
      </div>

      {/* Дополнительный текст */}
      <p className="text-[#555555] text-2xl md:text-base mb-8 text-left">
        If you want to use the Thermador repair Chicago service, contact Midwest Standards. We provide a 12-month warranty for all work. The technician’s visit and diagnostics of the device are free, subject to consent to further repairs.      
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
                We provide convenient appointment options that work around your schedule, so you can get expert help exactly when you need it.              
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
                Genuine Parts
              </p>
              <p className="text-2xl md:text-base mt-4 md:mt-4 font-light text-[#888888]">
                Only authentic Thermador parts are used in our repairs, guaranteeing optimal performance and long-term value for your appliances.              
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
                Our detailed diagnostics allow us to pinpoint the exact issue, helping to avoid repeat problems and saving you both time and money.              
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
                We know how disruptive a broken appliance can be, which is why we focus on fast response times to restore normalcy to your home quickly.              
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issues;