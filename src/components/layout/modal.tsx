'use client';

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import CustomDatePicker from '../ui/CustomDatePicker';
import ServiceSelect from '../ui/ServiceSelect';
import { sendToTelegram } from '@/api/queries';
import { parse } from 'date-fns';
import { format } from 'date-fns';
import {
  appointmentSchema,
  step1Schema,
  AppointmentForm,
  services,
  versServices,
  ModalProps,
  timeSlots,
} from './types';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [selectedVersService, setSelectedVersService] = useState('');
  const [errors, setErrors] = useState<Partial<AppointmentForm>>({});
  const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasTriedSubmitStep1, setHasTriedSubmitStep1] = useState(false);

  const resetAll = () => {
    setStep(1);
    setDate('');
    setTime('');
    setService('');
    setSelectedVersService('');
    setFirstName('');
    // setLastName('');
    setPhone('');
    setEmail('');
    setStreet('');
    setComments('');
    setErrors({});
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (!match) return value;

    const [, area, middle, last] = match;

    if (digits.length <= 3) return `(${area}`;
    if (digits.length <= 6) return `(${area}) ${middle}`;
    return `(${area}) ${middle}-${last}`;
  };

  const validateStep1 = () => {
    const step1Data = {
      firstName,
      // lastName,
      phone,
      email,
      street,
      service,
      versServices: selectedVersService,
      // comments,
    };

    const result = step1Schema.safeParse(step1Data);

    if (!result.success) {
      const fieldErrors: Partial<AppointmentForm> = {};
      result.error.errors.forEach(error => {
        const field = error.path[0] as keyof AppointmentForm;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };
  const validateStep2 = () => {
    const fullData = {
      date,
      time,
      service,
      versServices: selectedVersService,
      firstName,
      // lastName,
      phone,
      email,
      street,
      comments,
      city: 'dummy',
      state: 'dummy',
    };

    const result = appointmentSchema.safeParse(fullData);

    if (!result.success) {
      const fieldErrors: Partial<AppointmentForm> = {};
      result.error.errors.forEach(error => {
        const field = error.path[0] as keyof AppointmentForm;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validateStep2()) {
      toast.error('Please fill all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    const combinedData = {
      firstName,
      // lastName,
      phone,
      email,
      street,
      comments,
      service,
      versServices: selectedVersService,
      date,
      time,
    };

    console.log('✅ FINAL DATA SENT:', combinedData);
    await sendToTelegram(combinedData);
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(combinedData),
    });
    try {
      await toast.promise(new Promise(res => setTimeout(res, 600)), {
        loading: 'Booking...',
        success: 'Appointment successfully created!',
        error: 'Error. Please try again.',
      });

      resetAll();
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && (resetAll(), onClose())}
    >
      <div className="relative w-full max-w-[37.5rem] rounded-2xl bg-white px-10 py-16 md:py-8 shadow-xl">
        <button
          onClick={() => (resetAll(), onClose())}
          className="absolute right-7 top-6 text-6xl md:text-4xl font-medium text-gray-600 hover:text-black"
        >
          ×
        </button>

        {/* -------- STEP 1 -------- */}
        {step === 1 && (
          <form
            onSubmit={e => {
              e.preventDefault();
              if (validateStep1()) {
                setStep(2);
              } else {
                toast.error('Please fill all required fields correctly');
              }
            }}
            className="flex flex-col gap-4 md:gap-3"
          >
            <h2 className="text-4xl md:text-2xl font-bold mb-2 text-black">Enter your details</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
              <input
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Your name"
                className={`focus:outline-none w-full rounded-[0.6rem] bg-[#dfdddd] py-3 px-6 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.firstName ? 'border-2 border-red-500' : ''
                           }`}
              />
            </div>
            <input
              name="phone"
              value={phone}
              onChange={e => setPhone(formatPhoneNumber(e.target.value))}
              placeholder="Phone number"
              className={`focus:outline-none w-full rounded-[0.6rem] bg-[#dfdddd] py-3 px-6 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.phone ? 'border-2 border-red-500' : ''
                           }`}
            />
            <input
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className={`focus:outline-none w-full rounded-[0.6rem] bg-[#dfdddd] py-3 px-6 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.email ? 'border-2 border-red-500' : ''
                           }`}
            />
            <input
              name="street"
              value={street}
              onChange={e => setStreet(e.target.value)}
              placeholder="Address"
              className={`focus:outline-none w-full rounded-[0.6rem] bg-[#dfdddd] py-3 px-6 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.street ? 'border-2 border-red-500' : ''
                           }`}
            />

            {/* <div className="flex flex-row gap-3"> */}
            <ServiceSelect
              options={versServices}
              value={selectedVersService}
              onChange={setSelectedVersService}
              error={errors.versServices}
            />
            <ServiceSelect
              options={services}
              value={service}
              onChange={setService}
              error={errors.service}
              placeholder="Select appliances"
            />
            {/* </div> */}
            <textarea
              name="comments"
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Describe the problem"
              rows={2}
              className={`focus:outline-none w-full rounded-[0.6rem] bg-[#dfdddd] py-3 px-6 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.comments ? 'border-2 border-red-500' : ''
                           }`}
            />
            <button
              type="submit"
              className="font-bold w-full mt-3 text-nowrap mx-auto text-3xl md:text-2xl
               text-white flex justify-center items-center gap-6 bg-accent
               rounded-[0.6rem] py-4 transition-all active:scale-[0.97]"
            >
              Continue
            </button>
          </form>
        )}

        {/* -------- STEP 2 -------- */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-0">
            <h2 className="text-4xl md:text-2xl font-bold mb-2">
              Request <br className="md:hidden" /> an appointment
            </h2>

            <label className="mt-4 mb-2 block text-3xl md:text-xl font-semibold">Select date</label>
            <CustomDatePicker
              value={date ? parse(date, 'dd-MM-yyyy', new Date()) : null}
              onChange={(dateObj: Date | null) => {
                if (dateObj) {
                  const formatted = format(dateObj, 'MM-dd-yyyy');
                  setDate(formatted);
                } else {
                  setDate('');
                }
              }}
              error={errors.date}
            />
            <p className="mt-4 mb-2 block text-3xl md:text-xl font-semibold">Select time</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTime(slot)}
                  className={`rounded-[0.6rem] text-2xl md:text-base py-3 flex items-center justify-center
                    ${time === slot ? 'bg-accent text-white' : 'bg-[#dfdddd] text-black'}
                    ${errors.time ? 'border-2 border-red-500' : ''} transition-colors`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="md:w-[30%] font-bold text-3xl md:text-2xl text-black border border-black
                           rounded-[0.6rem] py-3 active:scale-[0.97]"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`md:w-[70%] font-bold text-3xl md:text-2xl flex justify-center items-center
              gap-4 text-white bg-accent rounded-[0.6rem] py-4 md:py-3 active:scale-[0.97]
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.372 0 0 5.372 0 12h4z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Book Appointment'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
