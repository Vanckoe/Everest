import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-16 bg-white md:bg-transparent overflow-visible pt-0 md:pt-0 md:pb-[24rem] pb-10"
    >
      {/* Google Map — только на десктопе */}
      <div className="hidden md:block absolute inset-0 w-full h-[45rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10893.204857291254!2d-87.97797341402966!3d41.893787484473876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4cd0d3a0cdaf%3A0xe4cf871ca0d28d57!2zMTk3IFBpY2sgQXZlLCBFbG1odXJzdCwgSUwgNjAxMjYsINCh0KjQkA!5e1!3m2!1sru!2skz!4v1749482393973!5m2!1sru!2skz"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Card */}
      <div
        className="relative z-10 rounded-xl bg-[#d8e7ef]
          md:w-[25.625rem]
          md:min-h-[25rem]
          px-8 py-10 md:px-8 md:py-16
          mx-auto md:mx-0 
          mt-10 md:mt-[-4rem]"
      >
        <h2 className="text-4xl md:text-3xl font-semibold mb-6 text-black">Contact info:</h2>
        <ul className="space-y-4 text-xl">
          <li>
            <a href="tel:+18132901625" className="text-[#121212] underline text-2xl md:text-xl">
              +1(813) 290-1625
            </a>
          </li>
          <li>
            <a
              href="mailto:info@midweststandards.com"
              className="text-[#121212] hover:underline text-2xl md:text-xl"
            >
              everestprimeservices@gmail.com
            </a>
          </li>
          <li>
            <p>
              EVEREST APPLIANCE REPAIR <br /> 197 S Pick Ave <br /> ELMHURST, Illinois 60126
            </p>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/fYEYMsG6VknRK9zv6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#121212] font-bold hover:underline text-2xl md:text-xl"
            >
              → Open the map
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
