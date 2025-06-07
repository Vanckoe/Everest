'use client';
import React, { useState } from 'react';
import Modal from '@/components/layout/modal';
import Logo from '@/assets/Logo';
import CallIcon from '@/assets/CallIcon';
import Link from 'next/link';
import BurgerMenu from './burger';
import Image from 'next/image';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-row items-center justify-between px-10 md:px-10 pb-5 pt-8 md:pt-3">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-row items-center justify-between w-full gap-10">
        <Image
          src="/img/icons/logoBlack.png"
          width={100}
          height={100}
          alt="Logo"
          className="size-40 md:size-24 md:mt-0 -mt-4 mr-full"
        />

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
            href="tel:+11234567890"
            className="bg-accent text-white px-8 py-4 md:py-3 text-2xl md:text-base font-semibold md:font-medium rounded-2xl hover:bg-accent/90 transition inline-flex items-center"
          >
            {/* <CallIcon /> */}
            +1 123 456 78 90
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-second hidden md:block text-white px-8 py-3 rounded-2xl text-2xl md:text-base font-semibold md:font-medium hover:bg-second/90 transition"
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
