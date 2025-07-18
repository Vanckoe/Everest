"use client";
import React from 'react';
import GoUpIcon from '@/assets/GoUp';
import CustomIcon from '@/assets/Google-footer';
import WhatsAppIcon from '@/assets/WhatsAppIcon';
import MobileFooter from './MobileFooter';
import Image from 'next/image';

const DesktopFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#000913] w-full text-white hidden md:block">
      <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row px-16 md:pl-8 relative">
        {/* Кнопка "GO UP" */}
        <button
          onClick={handleScrollToTop}
          className="
            absolute 
            top-1/2 
            left-[30.75rem] 
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
            <div className="flex items-center gap-4">
              <Image
                src="/img/icons/logo.png"
                width={100}
                height={100}
                alt="Logo"
                className="h-[4rem] w-[8rem] md:h-[3rem] md:w-[5.5rem] -ml-2 md:ml-0 md:mt-0 -mt-4"
              />
              <div className="flex flex-col leading-tight">
                <h1 className="text-xl md:text-xl font-bold text-[#fff]">
                  EVEREST APPLIANCE REPAIR
                </h1>
                <p className="text-lg md:text-base text-[#fff]">
                  Above and Beyond – Only with Everest.
                </p>
              </div>
            </div>
          </div>
          <div>
          <h2 className="md:text-3xl text-[#fff] font-Merriweather mb-2">Contact info:</h2>
          <ul className="space-y-2 text-white md:text-xl">
            <li>
              <a
                href="tel:+18132901625"
                className="underline font-inter transition-colors"
              >
                +1 (813) 290-1625
              </a>
            </li>
            <li>
              <a
                href="mailto:everestprimeservices@gmail.com"
                className="underline font-inter transition-colors"
              >
                everestprimeservices@gmail.com
              </a>
            </li>
            <li className="text-white font-inter md:text-base">
              <p>
                EVEREST APPLIANCE REPAIR <br />
                197 S Pick Ave <br />
                ELMHURST, Illinois 60126
              </p>
            </li>
          </ul>
        </div>        
        </div>
        {/* Правая секция */}
        <div className="w-[56.25rem] h-[31rem] pl-20 flex flex-col justify-between md:pt-20 z-10">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Первый столбец */}
            <div>
              <h3 className="text-xl font-Merriweather mb-4">Company</h3>
              <ul className="space-y-2 text-base font-inter text-[#9FAEB6]">
                <li><a href="#about" className="hover:underline">About us</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#brands" className="hover:underline">Brands</a></li>
                <li><a href="#reviews" className="hover:underline">Reviews</a></li>
                <li><a href="#booking-steps" className="hover:underline">Steps</a></li>
                <li><a href="#faq" className="hover:underline">FAQ</a></li>
                <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:underline">Terms of use</a></li>
              </ul>
            </div>

            {/* Второй столбец */}
            <div>
              <h3 className="text-xl font-Merriweather mb-4">Brands</h3>
              <ul className="space-y-2 text-base text-[#9FAEB6]">
                <li>
                  <a href="/subzero" className="hover:underline font-inter" rel="noopener noreferrer">
                    Sub-Zero appliance <br /> repair
                  </a>
                </li>
                <li>
                  <a href="/Thermador" className="hover:underline font-inter" rel="noopener noreferrer">
                    Viking Appliance <br /> repair
                  </a>
                </li>
              </ul>
            </div>

            {/* Иконки */}
            <div className="flex items-start gap-4">
              <a
                href="https://maps.app.goo.gl/CKSmWpotoRx98ASA8?g_st=ipc"
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
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:mb-10"
            >
              <WhatsAppIcon className="w-10 h-10 text-[#9FAEB6]" />
            </a>
            <p className="text-[#9FAEB6] text-base font-inter-medium">© 2025 EVEREST APPLIANCE REPAIR </p>
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