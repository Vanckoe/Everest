import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-accent text-white py-[6rem] px-10 md:px-16 mt-[2.5rem]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-[1.875rem]">
        <div className="flex flex-col gap-[0.3125rem] md:w-1/2">
          <div className="text-2xl font-semibold italic md:text-base">
            <span className="text-3xl md:text-xl text-[#FE5B2C]">//</span> 03 - About us
          </div>
          <h1 data-aos="fade-up" className="font-bold mt-5 leading-[100%] text-[3rem]">
            Trusted Appliance Repair Company in Chicago
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={300}
            className="font-medium mt-6 text-xl text-[#A8ABB8]"
          >
            At Everest Appliance Repair, we specialize in fast and reliable appliance repair
            services in Chicago and surrounding areas. With years of hands-on experience, we help
            homeowners restore the performance of their most essential appliances.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay={500}
            className="font-medium text-xl my-5 text-[#A8ABB8]"
          >
            Whether you need refrigerator repair, washer and dryer repair, oven or stove repair, or
            dishwasher troubleshooting, our certified technicians are here to help — often with
            same-day appliance service.
          </p>
          <p data-aos="fade-up" data-aos-delay={700} className="font-medium text-xl text-[#A8ABB8]">
            {/* We work with all major brands and provide: <br /> ✅ Accurate diagnostics and
            professional repair <br />✅ Affordable pricing and transparent service <br />✅
            Preventative maintenance and installation help <br />✅ Warranty on labor and parts{' '}
            <br />*/}
             Don’t let a broken appliance disrupt your day — choose Everest Appliance Repair, 
            your trusted local expert in home appliance repairs in Chicago.
          </p>
        </div>
        <div className="flex md:w-1/2 gap-[0.375rem]">
          <div className="w-2/3">
            <Image
              src="/img/about/1pic.jpg"
              width={800}
              height={1000}
              alt="picture 1"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 flex flex-col gap-[0.375rem]">
            <Image
              src="/img/about/2pic.jpg"
              width={400}
              height={400}
              alt="picture 2"
              className="rounded-xl object-cover w-full h-[50%]"
            />
            <Image
              src="/img/about/3pic.jpg"
              width={400}
              height={400}
              alt="picture 3"
              className="rounded-xl object-cover w-full h-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
