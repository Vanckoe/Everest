import React from 'react';
import Image from 'next/image';
import Line from '@/assets/line';

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-accent text-white py-[6rem] px-10 md:px-16 mt-[2.5rem]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-[1.875rem]">
        <div className="flex flex-col gap-[0.3125rem] md:w-1/2">
      <div className="flex items-center gap-4 text-2xl font-inter-semibold text-color md:text-base">
          <div className="flex-shrink-0">
            <Line color="#22C2A4" width="2" height="18"/>
          </div>
        <span className="text-2xl text-[#fff] font-inter-semibold italic md:text-xl">ABOUT US</span>
      </div>
          <h1 data-aos="fade-up" className="font-Merriweather mt-5 leading-[100%] text-[3rem]">
            A Family Business <br /> Built on Honor
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={300}
            className="font-inter mt-6 text-xl text-[#e5e5e5]"
          >
            Everest Appliance Repair is far more than just a repair company — 
            it’s a family business founded on integrity, fairness, and ethical service in everything we do.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay={500}
            className="font-inter text-xl my-5 text-[#e5e5e5]"
          >
            What makes us unique? We never put money first. Never ever. To us, nothing 
            is more valuable than our dignity and unwavering principles. No matter the 
            situation, we’ll always provide the right solution for our customers — and 
            that’s what we’re most proud of. Because that’s where trust begins.
          </p>
          <p data-aos="fade-up" data-aos-delay={700} className="font-inter text-xl text-[#e5e5e5]">
            {/* We work with all major brands and provide: <br /> ✅ Accurate diagnostics and
            professional repair <br />✅ Affordable pricing and transparent service <br />✅
            Preventative maintenance and installation help <br />✅ Warranty on labor and parts{' '}
            <br />*/} 
            We, Abzal and Arnur — two brothers who built this business from the ground up — stand by every word we say.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay={900}
            className="font-inter text-xl my-5 text-[#e5e5e5]"
          >
            Sincerely, <br />The Everest Team
          </p>
        </div>
        <div className="flex md:w-1/3">
          <div className="w-full">
            <Image
              src="/img/about/about-us-img.jpg"
              width={800}
              height={1000}
              alt="About Us"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
