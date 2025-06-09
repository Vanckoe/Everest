'use client';

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { z } from 'zod';
import CustomDatePicker from '../ui/CustomDatePicker';
import ServiceSelect from '../ui/ServiceSelect';
import { sendToTelegram } from '@/api/queries';

/* ---------- schema ---------- */
export const appointmentSchema = z.object({
  date: z.string({ required_error: 'Select a date' }),
  time: z.string({ required_error: 'Select a time' }),
  service: z.string({ required_error: 'Select a service' }),
  firstName: z.string().min(1, 'Enter your first name'),
  lastName: z.string().min(1, 'Enter your last name'),
  phone: z.string().min(6, 'Enter your phone number'),
  email: z.string().email('Enter a valid email'),
  street: z.string().min(1, 'Enter your street'),
  apt: z.string().optional(),
  city: z.string().min(1, 'Enter your city'),
  state: z.string().min(1, 'Enter your state'),
  zip: z.string().min(4, 'Enter your postal code').optional(),
});
export type AppointmentForm = z.infer<typeof appointmentSchema>;

type ModalProps = { isOpen: boolean; onClose: () => void };

const services = [
  { title: 'Refrigerator Repair', cost: '65.00 $', duration: '45 mins' },
  { title: 'Oven Repair', cost: '65.00 $', duration: '30 mins' },
  { title: 'Dryer Repair', cost: '65.00 $', duration: '30 mins' },
  { title: 'Washer Repair', cost: '65.00 $', duration: '30 mins' },
  { title: 'Dishwasher Repair', cost: '65.00 $', duration: '30 mins' },
  { title: 'Range Repair', cost: '65.00 $', duration: '30 mins' },
  { title: 'Garbage Disposal Repair', cost: '65.00 $', duration: '30 mins' },
  { title: 'Washer/Dryer Installation', cost: '160.00 $', duration: '1 hr 15 mins' },
  { title: 'Dryer Vent Cleaning', cost: '160.00 $', duration: '1 hr 15 mins' },
  { title: 'Built-in Oven Installation', cost: 'Price varies', duration: '1 hr 30 mins' },
  { title: 'Dishwasher Installation', cost: '160.00 $', duration: '1 hr 15 mins' },
  { title: 'Commercial Appliances Repair', cost: '100.00 $', duration: '1 hr 15 mins' },
];
const timeSlots = [
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
];

/* ───────────────────────────────────────────────────────── */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [errors, setErrors] = useState<Partial<AppointmentForm>>({});

  const resetAll = () => {
    setStep(1);
    setDate('');
    setTime('');
    setService('');
    setErrors({});
  };

  /* lock scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  /* validation step-1 */
  const validateStep1 = () => {
    const newErrors: Partial<AppointmentForm> = {};
    if (!date) newErrors.date = 'Select a date';
    if (!time) newErrors.time = 'Select a time';
    if (!service) newErrors.service = 'Select a service';
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  /* validation step-2 */
  const validateStep2 = (fields: Record<string, string>) => {
    const result = appointmentSchema.safeParse({ date, time, service, ...fields });
    if (!result.success) {
      const fieldErrors: Partial<AppointmentForm> = {};
      result.error.errors.forEach(err => {
        fieldErrors[err.path[0] as keyof AppointmentForm] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  /* submit */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    if (!validateStep2(data)) {
      toast.error('Check the highlighted fields');
      return;
    }

    // Combine step 1 and step 2 data
    const combinedData = {
      date,
      time,
      service,
      ...data,
    };

    console.log(combinedData);

    // Send data to Telegram
    await sendToTelegram(combinedData);

    await toast.promise(new Promise(res => setTimeout(res, 600)), {
      loading: 'Booking...',
      success: 'Appointment successfully created!',
      error: 'Error. Please try again.',
    });
    resetAll();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => e.target === e.currentTarget && (resetAll(), onClose())}
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white px-12 py-8 shadow-xl">
        <button
          onClick={() => (resetAll(), onClose())}
          className="absolute right-7 top-6 text-6xl md:text-4xl font-medium text-gray-600 hover:text-black"
        >
          ×
        </button>

        {/* -------- STEP 1 -------- */}
        {step === 1 && (
          <div className="flex flex-col gap-2 md:gap-0">
            <h2 className="text-4xl md:text-2xl font-bold mb-2">
              Request <br className="md:hidden" /> an appointment
            </h2>

            {/* date */}
            <label className="mt-4 mb-2 block text-3xl md:text-xl font-semibold text-gray-700">
              Select date
            </label>
            <CustomDatePicker
              value={date ? new Date(date) : null}
              onChange={d => d && setDate(d.toISOString())}
              error={errors.date}
            />
            {/* {errors.date && <p className="text-xl text-red-500 mt-1">{errors.date}</p>} */}

            {/* time */}
            <p className="mt-4 mb-2 block text-3xl md:text-xl font-semibold text-gray-700">
              Select time
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {timeSlots.map(slot => (
                <button
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={`rounded-[1.25rem] text-3xl md:text-xl py-3 flex items-center justify-center
                    ${time === slot ? 'bg-accent text-white' : 'bg-[#dfdddd] text-black'}
                    ${errors.time ? 'border-2 border-red-500' : ''} transition-colors`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {/* {errors.time && <p className="text-xl text-red-500 mt-1">{errors.time}</p>} */}

            {/* service */}
            <ServiceSelect
              options={services}
              value={service}
              onChange={setService}
              error={errors.service}
            />

            <button
              onClick={() => {
                if (validateStep1()) setStep(2);
                else toast.error('Select a date, time, and service');
              }}
              className="font-bold w-full mt-3 text-nowrap mx-auto text-3xl md:text-2xl
                         text-white flex justify-center items-center gap-6 bg-accent
                         rounded-[1.5rem] py-5 transition-all active:scale-[0.97]"
            >
              Continue
            </button>
          </div>
        )}

        {/* -------- STEP 2 -------- */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-3">
            <h2 className="text-3xl md:text-2xl font-bold mb-2">Enter your details</h2>

            {/* имя / фамилия */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              <input
                name="firstName"
                placeholder="First name"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.firstName ? 'border-2 border-red-500' : ''
                           }`}
              />
              <input
                name="lastName"
                placeholder="Last name"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.lastName ? 'border-2 border-red-500' : ''
                           }`}
              />
            </div>

            {/* phone / email */}
            <input
              name="phone"
              placeholder="Phone number"
              className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                         text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                           errors.phone ? 'border-2 border-red-500' : ''
                         }`}
            />
            <input
              name="email"
              placeholder="Email"
              className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                         text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                           errors.email ? 'border-2 border-red-500' : ''
                         }`}
            />

            {/* адрес */}
            <h3 className="text-3xl md:text-2xl font-semibold mt-2">Address</h3>
            <input
              name="street"
              placeholder="Street Address"
              className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                         text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                           errors.street ? 'border-2 border-red-500' : ''
                         }`}
            />
            <input
              name="apt"
              placeholder="Apt / Suite (optional)"
              className="w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                         text-black placeholder:text-2xl placeholder:text-[#9A9A9A]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                name="city"
                placeholder="City"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.city ? 'border-2 border-red-500' : ''
                           }`}
              />
              <input
                name="state"
                placeholder="State"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             errors.state ? 'border-2 border-red-500' : ''
                           }`}
              />
            </div>

            {/* кнопки */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="md:w-[30%] font-bold text-3xl md:text-2xl text-black border border-black
                           rounded-[1.5rem] py-5 active:scale-[0.97]"
              >
                Back
              </button>

              <button
                type="submit"
                className="md:w-[70%] font-bold text-3xl md:text-2xl text-white flex justify-center items-center
                           gap-6 bg-accent rounded-[1.5rem] py-5 active:scale-[0.97]"
              >
                Book Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
