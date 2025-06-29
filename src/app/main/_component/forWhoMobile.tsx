/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import Right from '@/assets/right copy';

interface Step {
  number: string;
  title: string;
  description: string;
}

const bookingSteps: Step[] = [
  {
    number: '01',
    title: 'Submit a request on the website',
    description: 'Specify which appliance is broken and briefly describe the problem.',
  },
  {
    number: '02',
    title: 'Pick date & time',
    description: 'Select a convenient day and time slot in the online calendar.',
  },
  {
    number: '03',
    title: 'Confirm details',
    description: 'Our manager will call you to confirm your appointment and answer any questions you may have beforehand.',
  },
  {
    number: '04',
    title: 'Pre-Arrival Call',
    description: 'You’ll get a heads-up call before your technician arrives.',
  },
  {
    number: '05',
    title: 'We Come. We Fix.',
    description: 'Fast, reliable service from certified professionals.',
  },
  {
    number: '06',
    title: 'Pay & warranty',
    description: 'The invoice will be issued on site right after the repair is done.',
  },
];

const BookingStepsMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === bookingSteps.length - 1 ? 0 : prev + 1,
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? bookingSteps.length - 1 : prev - 1,
    );

  return (
    <section
      id="booking-steps-mobile"
      className="flex flex-col items-center md:hidden"
    >
      <h2 className="mt-20 mb-16 text-[3.75rem] font-semibold leading-[84%] tracking-tighter">
        How it works
      </h2>

      {/* slider */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentSlide * 65}% + 15.5%))`,
          }}
        >
          {bookingSteps.map((step, index) => (
            <div
              key={step.number}
              className="mx-8 w-[55%] flex-shrink-0 transition-opacity duration-300"
              style={{ opacity: currentSlide === index ? 1 : 0.25 }}
            >
              <article className="flex flex-col items-center rounded-3xl border border-neutral-400 px-10 py-12" style={{ height: '26.875rem' }}>
                <p className="mb-4 text-[6rem] font-extrabold leading-none text-accent">
                  {step.number}
                </p>
                <h3 className="mb-6 text-center text-[2.5rem] font-semibold leading-[90%]">
                  {step.title}
                </h3>
                <p className="text-center text-lg leading-snug">
                  {step.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* nav + progress */}
      <div className="mt-8 flex w-full items-center justify-between px-16 gap-9">
        <button
          onClick={prevSlide}
          className="flex size-16 rotate-180 items-center justify-center rounded-lg bg-accent"
        >
          <Right color="white" />
        </button>

        <div className="relative h-3 w-60 rounded-full bg-[#DFDFDF]">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-white transition-transform duration-300"
            style={{
              width: `${100 / bookingSteps.length}%`,
              transform: `translateX(${currentSlide * 100}%)`,
            }}
          />
        </div>

        <button
          onClick={nextSlide}
          className="flex size-16 items-center justify-center rounded-lg bg-accent"
        >
          <Right color="white" />
        </button>
      </div>
    </section>
  );
};

export default BookingStepsMobile;
