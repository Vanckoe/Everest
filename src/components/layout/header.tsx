'use client';
import React from 'react';
import Logo from '@/assets/Logo';
import CallIcon from '@/assets/CallIcon';

const Header = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-row items-center justify-between px-10 md:px-10 py-8">
      <div className="flex flex-row items-center gap-10">
        <Logo />
        <div className="hidden md:flex flex-row text-base font-semibold gap-7">
          <button 
            onClick={() => handleScrollToSection('about')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            About
          </button>
          <button 
            onClick={() => handleScrollToSection('company')}
            className="hover:text-accent transition opacity-80 hover:opacity-100"
          >
            Company
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
      </div>
      <div className="flex flex-row items-center gap-2">
        <button className="bg-accent text-white px-8 py-3 rounded-xl font-medium hover:bg-accent/90 transition">
          +1 123 456 78 90
        </button>
        <button className="bg-second text-white px-8 py-3 rounded-xl font-medium hover:bg-second/90 transition">
          Schedule Service
        </button>
      </div>
    </div>
  );
};

export default Header;
