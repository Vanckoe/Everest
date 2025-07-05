'use client';
import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative hidden md:block w-full px-4 md:px-16 bg-white md:bg-transparent overflow-hidden min-h-[40rem] pb-10 md:pb-[40rem]"
    >
      {/* Google Map – только на десктопе */}
      <div className="absolute inset-0 w-full h-[40rem]">
        <iframe
          title="Company location on map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10893.204857291254!2d-87.97797341402966!3d41.893787484473876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4cd0d3a0cdaf%3A0xe4cf871ca0d28d57!2zMTk3IFBpY2sgQXZlLCBFbG1odXJzdCwgSUwgNjAxMjYsINCh0KjQkA!5e1!3m2!1sru!2skz!4v1749482393973!5m2!1sru!2skz"
          allowFullScreen
          loading="lazy"
          className="w-full h-full border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactSection;
