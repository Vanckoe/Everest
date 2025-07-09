import React from 'react';
import Image from 'next/image';

const AboutRepairCompany = () => {
  return (
    <section
      id="about"
      className="w-full bg-accent text-white py-[6rem] px-10 md:px-10 mt-[2.5rem]"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-[1.875rem]">
        <div className="flex flex-col gap-[0.3125rem] md:w-1/2">
          <div className="text-2xl font-semibold italic md:text-base">
          </div>
          <h1 data-aos="fade-up" className="font-gloock mt-5 leading-[100%] text-5xl">
            Trusted Appliance Repair Company in Chicago
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay={300}
            className="font-inter-medium mt-6 text-xl text-[#A8ABB8]"
          >
            Investing in high-end home appliances is an investment in 
            comfort and convenience for years to come. At Everest, we understand the 
            importance of maintaining these valuable assets.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay={500}
            className="font-inter-medium text-xl my-5 text-[#A8ABB8]"
          >
            Our professional repair services are designed to ensure that your 
            luxury appliances receive the best care possible. Whether you need diagnostic
            and repair services, preventative maintenance, customer instruction, or factory updates,
            our team of highly-trained experts is here to help.
          </p>
          <p data-aos="fade-up" data-aos-delay={700} className="font-inter-medium text-xl text-[#A8ABB8]">
            {/* We work with all major brands and provide: <br /> ✅ Accurate diagnostics and
            professional repair <br />✅ Affordable pricing and transparent service <br />✅
            Preventative maintenance and installation help <br />✅ Warranty on labor and parts{' '}
            <br />*/}
            Trust your luxury appliances to the experts at Everest!
          </p>
        </div>
        <div className="flex md:w-1/2 gap-[0.375rem]">
          <div className="w-2/3">
            <Image
              src="/img/Subzero/AboutRepair-1.jpg"
              width={800}
              height={1000}
              alt="picture 1"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 flex flex-col gap-[0.375rem]">
            <Image
              src="/img/Subzero/AboutRepair-2.jpg"
              width={400}
              height={400}
              alt="picture 2"
              className="rounded-xl object-cover w-full h-[50%]"
            />
            <Image
              src="/img/Subzero/AboutRepair-3.jpg"
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

export default AboutRepairCompany;
