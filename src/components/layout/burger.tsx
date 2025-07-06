/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cursor from '@/assets/Cursor';
import XIcon from '@/assets/x';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/main') {
      window.location.href = `/main${id}`;
      setIsOpen(false);
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex md:hidden flex-row items-center gap-3">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-around items-end size-10 bg-transparent border-none cursor-pointer p-0  z-[99]"
        >
          <div
            className="w-10 h-0 border border-[#1C2C4C] opacity-15 rounded-lg transition-all duration-300 ease-linear relative origin-[1px]"
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
              opacity: isOpen ? '1' : '1',
            }}
          />
          <div
            className="w-10 h-0 border border-black rounded-lg transition-all duration-300 ease-linear relative origin-[1px]"
            style={{ opacity: isOpen ? '0' : '1' }}
          />
          <div
            className="w-10 h-0 border border-[#1C2C4C] opacity-15 rounded-lg transition-all duration-300 ease-linear relative origin-[1px]"
            style={{
              transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)',
              opacity: isOpen ? '1' : '1',
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  mt-3 pt-5 left-0 w-full h-lvh bg-white flex flex-col justify-start items-center z-[98]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="text-[#001F3F] mt-14 no-underline flex flex-row px-10 items-center justify-between w-full text-[1.625rem] transition-colors duration-500 hover:text-[#001F3F] py-2.5"
            >
              About
              <Cursor color='#001F3F'/>
            </button>
            <div className="w-[90%] my-5 h-[1px] bg-black opacity-20"></div>
            <button
              onClick={() => scrollToSection('#services')}
              className="text-[#001F3F] no-underline flex flex-row px-10 items-center justify-between w-full text-[1.625rem] transition-colors duration-300 hover:text-[#001F3F] py-2.5"
            >
              Services
              <Cursor color='#001F3F'/>
            </button>
            <div className="w-[90%] my-5 h-[1px] bg-black opacity-20"></div>
            <button
              onClick={() => scrollToSection('#brands')}
              className="text-[#001F3F] no-underline flex flex-row px-10 items-center justify-between w-full text-[1.625rem] transition-colors duration-300 hover:text-[#001F3F] py-2.5"
            >
              Brands
              <Cursor color='#001F3F'/>
            </button>
            <div className="w-[90%] my-5 h-[1px] bg-black opacity-20"></div>
            <button
              onClick={() => scrollToSection('#booking-steps-mobile')}
              className="text-[#001F3F] no-underline flex flex-row px-10 items-center justify-between w-full text-[1.625rem] transition-colors duration-300 hover:text-[#001F3F] py-2.5"
            >
              Steps
              <Cursor color='#001F3F'/>
            </button>
            <div className="w-[90%] my-5 h-[1px] bg-black opacity-20"></div>
            <button
              onClick={() => scrollToSection('#faq')}
              className="text-[#001F3F] no-underline flex flex-row px-10 items-center justify-between w-full text-[1.625rem] transition-colors duration-300 hover:text-[#001F3F] py-2.5"
            >
              FAQ
              <Cursor color='#001F3F'/>
            </button>
            <div className="w-[90%] my-5 h-[1px] bg-black opacity-20"></div>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-[#001F3F] no-underline flex flex-row px-10 items-center justify-between w-full text-[1.625rem] transition-colors duration-300 hover:text-[#001F3F] py-2.5"
            >
              Contacts
              <Cursor color='#001F3F'/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenu;
