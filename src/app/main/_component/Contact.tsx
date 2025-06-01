import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full h-[600px] mt-20 px-6 md:px-16">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0187803672154!2d-88.132977!3d42.046494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa998eea9166f%3A0x87398fc03cfbc714!2sMidwest%20Standards!5e0!3m2!1sen!2sus!4v1717244999999!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0 rounded-[2rem]"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact card */}
      <div className="relative z-10 max-w-md bg-white p-6 md:p-8 rounded-[2rem] shadow-lg mt-[-40px] mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact info:</h2>
        <ul className="space-y-3 text-base text-gray-700">
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:+13124898566" className="text-blue-600 hover:underline">
              +1 (312) 489-8566
            </a>
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@midweststandards.com" className="text-blue-600 hover:underline">
              info@midweststandards.com
            </a>
          </li>
          <li>
            <strong>Address:</strong> 1918 Morning Song Ct, Schaumburg, IL 60194
          </li>
          <li>
            <a
              href="https://www.google.com/maps/place/Midwest+Standards/@42.046494,-88.132977,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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