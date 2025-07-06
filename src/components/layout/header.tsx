'use client';
import React, { useState, useEffect } from 'react';
import Modal from '@/components/layout/modal';
import Logo from '@/assets/Logo';
import CallIcon from '@/assets/CallIcon';
import Link from 'next/link';
import BurgerMenu from './burger';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      // data-aos="fade-down"
      className="flex flex-row items-center justify-between px-2 md:px-10 pb-5 pt-10 md:pt-5"
    >
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-row items-center justify-between w-full gap-">
        <div className="flex items-center gap-2">
      <Image
        src="/img/icons/logoBlack.png"
        width={100}
        height={100}
        alt="Logo"
        className="h-[4rem] w-[8rem] md:h-[3rem] md:w-[4.8rem] -ml-2 md:ml-0 md:mt-0 -mt-4"
      />
        <div className="flex flex-col leading-tight">
          <h1 className="text-[1.75rem] font-inter-bold md:text-xs font-bold text-color">
            EVEREST APPLIANCE REPAIR
          </h1>
        <p className="text-[1.45rem] font-inter md:text-xs text-[#555]">
          Above and Beyond – Only with Everest.
        </p>
        </div>
      </div>
        <div className="hidden md:flex flex-row text-base font-semibold gap-7">
          <button
            onClick={() => handleScrollToSection('about')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            About
          </button>
          <button
            onClick={() => handleScrollToSection('services')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            Services
          </button>
          <button
            onClick={() => handleScrollToSection('brands')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            Brands
          </button>
          <button
            onClick={() => handleScrollToSection('reviews')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            Reviews
          </button>
          <button
            onClick={() => handleScrollToSection('booking-steps')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            Steps
          </button>
          <button
            onClick={() => handleScrollToSection('faq')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            FAQ
          </button>
          <button
            onClick={() => handleScrollToSection('contact')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            Contacts
          </button>
        </div>

        <div className="flex flex-row items-center gap-10 md:gap-2">
        <Link
          href="tel:+18132901625"
          className="hidden md:inline-flex bg-[#1C2C4C] text-white px-8 py-3 text-base font-medium rounded-2xl hover:bg-accent/90 transition items-center"
        >
          +1 (813) 290-1625
        </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:block text-[#171717] border border-[#171717] px-8 py-3 rounded-2xl text-2xl md:text-base font-semibold md:font-medium hover:bg-second/90 transition"
          >
            Schedule Service
          </button>
          <div className="md:hidden">
            <BurgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
