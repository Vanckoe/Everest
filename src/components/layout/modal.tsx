import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import CustomDatePicker from '../ui/CustomDatePicker';
import ServiceSelect from '../ui/ServiceSelect';

export const appointmentSchema = z.object({
  date: z.string({ required_error: 'Выберите дату' }),
  time: z.string({ required_error: 'Выберите время' }),
  service: z.string({ required_error: 'Выберите услугу' }),
  firstName: z.string().min(1, 'Введите имя'),
  lastName: z.string().min(1, 'Введите фамилию'),
  phone: z.string().min(6, 'Введите номер телефона'),
  email: z.string().email('Введите корректный email'),
  street: z.string().min(1, 'Введите улицу'),
  apt: z.string().optional(),
  city: z.string().min(1, 'Введите город'),
  state: z.string().min(1, 'Введите регион'),
  zip: z.string().min(4, 'Введите почтовый индекс'),
});

export type AppointmentForm = z.infer<typeof appointmentSchema>;

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [errors, setErrors] = useState<Partial<AppointmentForm>>({});
  const validateStep1 = () => {
    const newErrors: Partial<AppointmentForm> = {};

    if (!date) newErrors.date = 'Выберите дату';
    if (!time) newErrors.time = 'Выберите время';
    if (!service) newErrors.service = 'Выберите услугу';

    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateStep2 = (fields: Record<string, string>) => {
    const result = appointmentSchema.safeParse({
      date,
      time,
      service,
      ...fields,
    });
    if (!result.success) {
      const fieldErrors: Partial<AppointmentForm> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof AppointmentForm] = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries()) as Record<string, string>;
    if (validateStep2(data)) {
      alert('Appointment booked!');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed text-black inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white px-12 py-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-7 top-7 text-4xl font-medium text-gray-600 hover:text-black"
        >
          ×
        </button>
        {step === 1 && (
          <div className="flex flex-col gap-4 md:gap-3">
            <h2 className="text-3xl font-bold mb-2">Request an appointment</h2>
            <div>
              <label className="mt-4 mb-2 block text-3xl md:text-2xl  font-semibold text-gray-700">
                Select date
              </label>
              <CustomDatePicker
                value={date ? new Date(date) : null}
                onChange={(date: Date | null) => date && setDate(date.toISOString())}
                error={errors.date}
              />
              {errors.date && <p className="text-xl text-red-500 mt-1">{errors.date}</p>}
            </div>
            <div className="">
              <p className="mt-4 mb-2 block text-3xl md:text-2xl font-semibold text-gray-700">
                Select time
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {timeSlots.map(slot => {
                  const isSelected = time === slot;
                  return (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={`rounded-[1.25rem] text-3xl md:text-xl py-4 flex items-center justify-center ${
                        isSelected ? 'bg-accent text-white' : 'bg-[#dfdddd] text-black'
                      } ${
                        errors.time ? 'border-2 border-red-500' : ''
                      } transition-colors duration-200`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
            </div>

            {errors.time && <p className="text-xl text-red-500 mt-1">{errors.time}</p>}

            <ServiceSelect
              options={services}
              value={service}
              onChange={setService}
              error={errors.service}
            />

            <button
              onClick={() => {
                if (validateStep1()) setStep(2);
              }}
              className="font-bold w-full mt-3 text-nowrap mx-auto text-3xl md:text-2xl
             text-white flex justify-center items-center gap-6 bg-accent
             rounded-[1.5rem] py-5 transition-all duration-200 active:scale-[0.97]"
            >
              Continue
            </button>
          </div>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-3">
            <h2 className="text-3xl md:text-2xl font-bold mb-2">Enter your details</h2>

            {/* ------- ИМЯ / ФАМИЛИЯ ------- */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              <input
                name="firstName"
                placeholder="First name"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                  errors.firstName ? 'border-2 border-red-500' : ''
                }`}
              />
              <input
                name="lastName"
                placeholder="Last name"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                  errors.lastName ? 'border-2 border-red-500' : ''
                }`}
              />
            </div>

            {/* ------- ТЕЛЕФОН / E-MAIL ------- */}
            <input
              name="phone"
              placeholder="Phone number"
              className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                errors.phone ? 'border-2 border-red-500' : ''
              }`}
            />
            <input
              name="email"
              placeholder="Email"
              className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                errors.email ? 'border-2 border-red-500' : ''
              }`}
            />

            {/* ------- АДРЕС ------- */}
            <h3 className="text-3xl md:text-2xl font-semibold mt-2">Address</h3>
            <input
              name="street"
              placeholder="Street Address"
              className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                errors.street ? 'border-2 border-red-500' : ''
              }`}
            />
            <input
              name="apt"
              placeholder="Apt / Suite (optional)"
              className="w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A]"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                name="city"
                placeholder="City"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                  errors.city ? 'border-2 border-red-500' : ''
                }`}
              />
              <input
                name="state"
                placeholder="State"
                className={`w-full rounded-[1.25rem] bg-[#dfdddd] py-4 px-9 text-3xl md:text-2xl text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                  errors.state ? 'border-2 border-red-500' : ''
                }`}
              />
            </div>

            {/* --- КНОПКИ --- */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="md:w-[30%] font-bold text-3xl md:text-2xl text-black border border-black rounded-[1.5rem] py-5 transition-all duration-200 active:scale-[0.97]"
              >
                Back
              </button>

              <button
                type="submit"
                className="md:w-[70%] font-bold text-3xl md:text-2xl text-white flex items-center justify-center gap-6 bg-accent rounded-[1.5rem] py-5 transition-all duration-200 active:scale-[0.97]"
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
