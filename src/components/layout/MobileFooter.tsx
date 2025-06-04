'use client';
import React from 'react';
import WhatsAppIcon from '@/assets/WhatsAppIcon';
import GoUpIcon from '@/assets/GoUp';
import CustomIcon from '@/assets/Google-footer';

const MobileFooter = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full block md:hidden bg-[#000913] text-white pt-[3.75rem] px-6 rounded-tl-3xl rounded-tr-3xl">
      {/* Логотип и описание */}
      <div className="flex flex-col pb-[4rem] items-start">
        <img src="/img/footer/logo-footer.png" alt="Logo" className="w-[12rem] h-[12rem] mb-4" />
        <p className="text-3xl text-[#9FAEB6] mb-6">
          We are always here to assist you with any <br /> questions or requests. Reach out to us in <br />the way that suits you best.
        </p>
      </div>

      {/* Ссылки */}
      <div className="flex flex-col pt-[4rem] gap-16 mb-8">
        <div>
          <h3 className="text-5xl font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-3xl text-[#9FAEB6]">
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#brands">Brands</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of use</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-5xl font-semibold mb-2">Brands</h3>
          <ul className="space-y-1 text-3xl text-[#9FAEB6]">
            <li><a href="/sub-zero-appliance-repair" target="_blank">Sub-Zero appliance repair</a></li>
            <li><a href="/thermador-appliance-repair" target="_blank">Thermador appliance repair</a></li>
          </ul>
        </div>
      </div>

      {/* Иконки */}
      <div className="flex gap-4 mt-[2.5rem] mb-[2.5rem]">
        <a href="https://www.yelp.com/biz/midwest-standards-schaumburg" target="_blank" className="w-[5.125rem] h-[5.125rem] bg-[#af0606] rounded-md flex items-center justify-center">
          <GoUpIcon color="white" width="25" height="25" />
        </a>
        <a href="https://www.google.com/maps/place/Midwest+Standards" target="_blank" className="w-[5.125rem] h-[5.125rem] bg-[#69727d] rounded-md flex items-center justify-center">
          <CustomIcon color="white" width="25" height="25" />
        </a>
      </div>

      <div className="w-full h-px bg-[#234151] mb-6"></div>

      {/* WhatsApp и копирайт */}
      <div className="flex flex-col items-center space-y-2 gap-4">
        <a
          href="https://api.whatsapp.com/send/?phone=12246299583&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="w-16 h-16 text-[#9FAEB6]" />
        </a>
        <p className="text-[#9FAEB6] text-2xl pb-[2.5rem] font-medium text-center">
          © 2025 Midwest Standards
        </p>
      </div>
    </footer>
  );
};

export default MobileFooter;