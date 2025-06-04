'use client';
import React from 'react';
import GoUpIcon from '@/assets/GoUp';
import CustomIcon from '@/assets/Google-footer';
import WhatsAppIcon from '@/assets/WhatsAppIcon';
import MobileFooter from './MobileFooter';

const DesktopFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000913] w-full text-white hidden md:block">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row px-6 md:pl-8 relative">

        {/* Кнопка "GO UP" */}
        <button
          onClick={handleScrollToTop}
          className="
            absolute 
            top-1/2 
            left-[32.125rem] 
            -translate-y-1/2
            -translate-x-[0.3]
            w-[2.375rem] 
            h-[7.1875rem]
            rounded-[1.875rem] 
            bg-[#001f3f] 
            border border-[#234151] 
            text-white 
            hover:bg-[#003366] 
            transition 
            z-30
            flex 
            items-center 
            justify-center
            flex-col
          "
          style={{ transformOrigin: 'center' }}
        >
          <span className="text-white text-base font-semibold tracking-wider writing-vertical">
            GO UP
          </span>
        </button>

        {/* Левая секция */}
        <div className="w-[33.125rem] h-[31rem] pr-8 border-r border-[#234151] flex flex-col justify-start md:pt-20 z-10">
          <div className="mb-6">
            <img src="/img/footer/logo-footer.png" alt="Logo" className="w-[7rem] h-[7rem]" />
          </div>
          <p className="text-lg leading-relaxed text-[#9FAEB6] mb-8">
            We are always here to assist you with any <br />
            questions or requests. Reach out to us in the <br />
            way that suits you best.
          </p>
        </div>

        {/* Правая секция */}
        <div className="w-[56.25rem] h-[31rem] pl-20 flex flex-col justify-between md:pt-20 z-10">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Первый столбец */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-base text-[#9FAEB6]">
                <li><a href="#about" className="hover:underline">About us</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#brands" className="hover:underline">Brands</a></li>
                <li><a href="#reviews" className="hover:underline">Reviews</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:underline">Terms of use</a></li>
              </ul>
            </div>

            {/* Второй столбец */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Brands</h3>
              <ul className="space-y-2 text-base text-[#9FAEB6]">
                <li>
                  <a href="/sub-zero-appliance-repair" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Sub-Zero appliance <br /> repair
                  </a>
                </li>
                <li>
                  <a href="/thermador-appliance-repair" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    Thermador appliance <br /> repair
                  </a>
                </li>
              </ul>
            </div>

            {/* Иконки */}
            <div className="flex items-start gap-4">
              <a
                href="https://www.yelp.com/biz/midwest-standards-schaumburg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[3.125rem] h-[3.125rem] bg-[#af0606] rounded-md flex items-center justify-center"
              >
                {/* 50px = 3.125rem */}
                <GoUpIcon color='white' width="25" height="25" />
              </a>
              <a
                href="https://www.google.com/maps/place/Midwest+Standards"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[3.125rem] h-[3.125rem] bg-[#69727d] rounded-md flex items-center justify-center"
              >
                <CustomIcon color='white' width="25" height="25" />
              </a>
            </div>
          </div>

          {/* Горизонтальная линия */}
          <div className="h-px bg-[#234151] my-6"></div>

          {/* Нижняя строка */}
          <div className="flex justify-between items-start text-sm">
            <a
              href="https://api.whatsapp.com/send/?phone=12246299583&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:mb-10"
            >
              <WhatsAppIcon className="w-10 h-10 text-[#9FAEB6]" />
            </a>
            <p className="text-[#9FAEB6] text-base font-medium">© 2025 Midwest Standards</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default Footer;