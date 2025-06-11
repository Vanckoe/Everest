import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-6 md:px-16 bg-white md:bg-transparent overflow-visible md:pt-0 md:pb-[24rem] py-[4.5rem]"
    >
      {/* Google Map — только на десктопе */}
      <div className="hidden md:block absolute inset-0 w-full h-[45rem]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0187803672154!2d-88.132977!3d42.046494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa998eea9166f%3A0x87398fc03cfbc714!2sMidwest%20Standards!5e0!3m2!1sen!2sus!4v1717244999!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      
      {/* Контактная карточка по центру */}
      <div className="relative z-10">
        <div
          className="
            w-full md:w-[25.625rem]
            bg-[#d8e7ef] rounded-xl
            px-4 sm:px-6 md:px-8
            py-12 md:py-8
            md:mt-[-3.85rem]
          "
        >
          <h2 className="text-5xl md:text-3xl font-semibold mb-6 text-black">
            Contact info:
          </h2>
          <ul className="space-y-4 text-xl">
            <li>
              <a
                href="tel:+18132901625"
                className="text-[#121212] hover:underline text-3xl md:text-xl"
              >
                +1(813) 290-1625
              </a>
            </li>
            <li>
              <a
                href="mailto:info@midweststandards.com"
                className="text-[#121212] hover:underline text-3xl md:text-xl"
              >
                everestprimeservices@gmail.com
              </a>
            </li>
            <li>
              <p className="text-2xl md:text-xl">
                EVEREST APPLIANCE REPAIR <br />
                197 S Pick Ave <br />
                ELMHURST, Illinois 60126
              </p>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Midwest+Standards/@42.046494,-88.132977,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#121212] font-bold hover:underline text-3xl md:text-xl"
              >
                → Open the map
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;