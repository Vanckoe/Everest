'use client';
import React from 'react';
import WhatsAppIcon from '@/assets/WhatsAppIcon';
import CustomIcon from '@/assets/Google-footer';
import Image from 'next/image';

const MobileFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full block md:hidden bg-[#000913] text-white pb-10 pt-[3.75rem] px-10 rounded-tl-3xl rounded-tr-3xl">
      {/* Логотип и Контакты */}
      <div className="flex flex-col gap-8 mb-12">
        {/* Логотип и слоган */}
        <div className="flex items-center gap-4">
          <Image
            src="/img/icons/logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="h-[3.5rem] w-[7rem]"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl mt-7 font-inter-bold text-white">
              EVEREST APPLIANCE REPAIR
            </h1>
            <p className="text-xl text-white font-inter leading-snug">
              Above and Beyond – Only with Everest.
            </p>
          </div>
        </div>

        {/* Контактная информация */}
        <div>
          <h2 className="text-3xl font-Merriweather mb-4">Contact info:</h2>
          <ul className="space-y-2 text-[#9FAEB6] text-2xl">
            <li>
              <a
                href="tel:+18132901625"
                className="underline text-3xl font-inter-medium transition-colors"
              >
                +1(331) 219-8690
              </a>
            </li>
            <li>
              <a
                href="mailto:everestprimeservices@gmail.com"
                className="underline text-2xl font-inter-medium hover:text-[#fff] transition-colors"
              >
                everestprimeservices@gmail.com
              </a>
            </li>
            <li>
              <p className="font-inter-medium">
                EVEREST APPLIANCE REPAIR <br />
                197 S Pick Ave <br />
                ELMHURST, Illinois 60126
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Ссылки */}
      <div className="flex flex-col pt-[2.8rem] gap-16 mb-4">
        <div>
          <h3 className="text-3xl font-Merriweather mb-4">Company</h3>
          <ul className="grid grid-cols-2 space-y-2 font-inter text-2xl text-[#9FAEB6]">
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#brands">Brands</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#booking-steps-mobile">Steps</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of use</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-Merriweather mb-4">Brands</h3>
          <ul className="space-y-2 text-2xl font-inter text-[#9FAEB6]">
            <li>
              <a href="/subzero">
                Sub-Zero appliance repair
              </a>
            </li>
            <li>
              <a href="/Thermador">
                Viking appliance repair
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Иконки */}
      <div className="flex gap-4 mt-[2.5rem] mb-[2.5rem]">
        <a
          href="https://maps.app.goo.gl/CKSmWpotoRx98ASA8?g_st=ipc"
          target="_blank"
          className="w-[5.125rem] h-[5.125rem] bg-white rounded-md flex items-center justify-center"
        >
          <CustomIcon color="#4285F4" width="25" height="25" />
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[5.125rem] h-[5.125rem] bg-[#075E54] rounded-md flex items-center justify-center"
        >
          <WhatsAppIcon className="w-16 h-16 text-[#25D366]" />
        </a>
      </div>

      <div className="w-full h-px bg-[#234151] mb-16"></div>

      {/* Copyright */}
      <div className="flex flex-col items-center space-y-2 gap-4">
        <p className="text-[#9FAEB6] text-2xl pb-[3.5rem] font-medium text-center">
          © 2025 EVEREST APPLIANCE REPAIR
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;