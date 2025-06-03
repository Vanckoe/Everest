import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full px-6 md:px-16 bg-white md:bg-transparent overflow-visible pt-0 md:pt-0"
    >
      {/* Google Map — только на десктопе */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0187803672154!2d-88.132977!3d42.046494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa998eea9166f%3A0x87398fc03cfbc714!2sMidwest%20Standards!5e0!3m2!1sen!2sus!4v1717244999!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        className="hidden md:block absolute inset-0 w-full h-[45rem] rounded-[2rem]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Card */}
      <div
        className="relative z-10 rounded-[2rem] bg-[#d8e7ef]
          w-[24.0625rem] md:w-[25.625rem]
          min-h-[17.5rem] md:min-h-[25rem]
          px-8 py-10 md:px-8 md:py-16
          mx-auto md:mx-0 
          mt-10 md:mt-[-4rem]"
      >
        <h2 className="text-4xl md:text-3xl font-semibold mb-6 text-black">Contact info:</h2>
        <ul className="space-y-4 text-xl">
          <li>
            <a href="tel:+13124898566" className="text-[#121212] hover:underline text-2xl md:text-xl">
              +1 (312) 489-8566
            </a>
          </li>
          <li>
            <a href="mailto:info@midweststandards.com" className="text-[#121212] hover:underline text-2xl md:text-xl">
              info@midweststandards.com
            </a>
          </li>
          <li>
            <p>
              1918 Morning Song Ct, <br /> Schaumburg, IL 60194
            </p>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Midwest+Standards/@42.046494,-88.132977,17z"
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
