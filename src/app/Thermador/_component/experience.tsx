import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="mt-16 mb-10 px-10">
      {/* ПК версия */}
      <div className="relative hidden md:block w-full overflow-hidden rounded-[1.25rem]">
        {/* Картинка для ПК */}
        <img
          src="/img/Subzero/experience-img.jpg"
          alt="Experience"
          className="w-full h-[43.75rem] object-cover rounded-[1.25rem]"
        />

        {/* Градиент — слева направо */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#053644]/50 to-transparent rounded-[1.25rem]"></div>

        {/* Блок поверх картинки — снизу справа */}
        <div className="absolute bottom-0 right-10 w-[20rem] h-[14rem] z-20">
          <img
            src="/img/Subzero/bg-shape.png"
            alt="Shape"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center transform -translate-x-10 text-white font-semibold">
            <span className="text-6xl font-bold">10+</span>
            <span className="text-3xl font-bold mt-2">Years</span>
            <span className="text-3xl font-bold">Experience</span>
          </div>
        </div>
      </div>

      {/* Мобилка */}
      <div className="block md:hidden">
        <div className="relative w-full overflow-hidden">
          <img
            src="/img/Subzero/experience-img.jpg"
            alt="Experience"
            className="w-full h-full object-cover rounded-[1.25rem]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#053644]/50 to-transparent rounded-[1.25rem]"></div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[24rem] h-[12rem] flex flex-col items-center justify-center text-white font-semibold">
            <img
              src="/img/Subzero/bg-shape.png"
              alt="Shape"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-md"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[10rem] h-[10rem] flex items-center justify-center">
              <img
                src="/img/Subzero/bg-shape.png"
                alt="Shape"
                className="absolute inset-0 w-full h-full object-cover z-0 rounded-md"
              />
              <div className="relative z-10 flex flex-col items-start text-white whitespace-nowrap">
                <span className="text-6xl font-bold">10+</span>
                <span className="text-2xl font-bold">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;