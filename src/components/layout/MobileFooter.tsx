'use client';
import React from 'react';
import WhatsAppIcon from '@/assets/WhatsAppIcon';
import GoUpIcon from '@/assets/GoUp';
import CustomIcon from '@/assets/Google-footer';
import Logo from '@/assets/Logo';

const MobileFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full block md:hidden bg-[#000913] text-white pb-10 pt-[3.75rem] px-10 rounded-tl-3xl rounded-tr-3xl">
      {/* Логотип и описание */}
      <div className="flex flex-col pb-[1rem] items-start">
        {/* <img src="/img/footer/logo-footer.png" alt="Logo" className="w-[12rem] h-[12rem] mb-4" /> */}
        <Logo className="md:size-28 rounded-2xl mb-9" />
        <p className="text-3xl text-[#9FAEB6]">
          We are always here to assist you with any questions or requests. Reach out to us in the
          way that suits you best.
        </p>
      </div>

      {/* Ссылки */}
      <div className="flex flex-col pt-[4rem] gap-16 mb-8">
        <div>
          <h3 className="text-4xl font-semibold mb-7">Company</h3>
          <ul className="grid grid-cols-2 space-y-2 text-3xl text-[#9FAEB6]">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#brands">Brands</a>
            </li>
            <li>
              <a href="#reviews">Reviews</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#booking-steps-mobile">Steps</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms of use</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-4xl font-semibold mb-7">Brands</h3>
          <ul className="space-y-2 text-3xl text-[#9FAEB6]">
            <li>
              <a href="/subzero">
                Sub-Zero appliance repair
              </a>
            </li>
            <li>
              <a href="/Thermador">
                Thermador appliance repair
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Иконки */}
      <div className="flex gap-4 mt-[2.5rem] mb-[2.5rem]">
        <a
          href="https://www.yelp.com/biz/midwest-standards-schaumburg"
          target="_blank"
          className="w-[5.125rem] h-[5.125rem] bg-[#af0606] rounded-md flex items-center justify-center"
        >
          <GoUpIcon color="white" width="25" height="25" />
        </a>
        <a
          href="https://www.google.com/maps/place/Midwest+Standards"
          target="_blank"
          className="w-[5.125rem] h-[5.125rem] bg-white rounded-md flex items-center justify-center"
        >
          <CustomIcon color="#4285F4" width="25" height="25" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=12246299583&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[5.125rem] h-[5.125rem] bg-[#075E54] rounded-md flex items-center justify-center"
        >
          <WhatsAppIcon className="w-16 h-16 text-[#25D366]" />
        </a>
      </div>

      <div className="w-full h-px bg-[#234151] mb-16"></div>

      {/* WhatsApp и копирайт */}
      <div className="flex flex-col items-center space-y-2 gap-4">
        <p className="text-[#9FAEB6] text-2xl pb-[3.5rem] font-medium text-center">
          © 2025 EVEREST APPLIANCE REPAIR
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;
