import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full bg-accent text-white py-24 px-6 md:px-24 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-30">
        <div className="flex flex-col gap-5 md:w-1/2">
          <p className="font-semibold text-xs">// 03 - ABOUT US</p>
          <h1 className="font-bold text-5xl">
            Trusted Appliance Repair Company in Chicago
          </h1>
          <p className="font-normal text-sm text-[#A8ABB8]">
            Investing in high-end home appliances is an investment in comfort and convenience for years to come. At Midwest Standards, we understand the importance of maintaining these valuable assets.
          </p>
          <p className="font-normal text-sm text-[#A8ABB8]">
            Our professional repair services are designed to ensure that your luxury appliances receive the best care possible. Whether you need diagnostic and repair services, preventative maintenance, customer instruction, or factory updates, our team of highly-trained experts is here to help.
          </p>
          <p className="font-normal text-sm text-[#A8ABB8]">
            Trust your luxury appliances to the experts at Midwest Standards!
          </p>
        </div>
        <div className="flex md:w-1/2 gap-6">

          <div className="w-2/3">
            <Image
              src="/img/about/1pic.jpg"
              width={800}
              height={1000}
              alt="picture 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 flex flex-col gap-6">
            <Image
              src="/img/about/2pic.jpg"
              width={400}
              height={400}
              alt="picture 2"
              className="object-cover w-full h-[50%]"
            />
            <Image
              src="/img/about/3pic.jpg"
              width={400}
              height={400}
              alt="picture 3"
              className="object-cover w-full h-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;