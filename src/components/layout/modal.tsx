import React, { useState, useEffect } from 'react';
import { z } from 'zod';

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
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold mb-2">Select a time</h2>
            <div>
              <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                Select date
              </label>
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && <p className="text-sm text-red-500 mt-1">{errors.date}</p>}
            </div>
            <div className="">
              <p className="mt-4 mb-2 block text-sm font-medium text-gray-700">Select time</p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${
                      time === slot ? 'bg-black text-white' : 'bg-white text-black'
                    } ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {errors.time && <p className="text-sm text-red-500 mt-1">{errors.time}</p>}

            <div>
              <label className="mt-4 mb-2 block text-sm font-medium text-gray-700">
                Select service
              </label>
              <select
                value={service}
                onChange={e => setService(e.target.value)}
                className={`w-full rounded-lg border px-4 py-2 ${
                  errors.service ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map(({ title }) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-sm text-red-500 mt-1">{errors.service}</p>}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!date || !time || !service}
              className="mt-6 w-full rounded-md bg-black px-6 py-3 text-white text-lg font-semibold transition hover:opacity-90"
            >
              Continue
            </button>
          </div>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold mb-2">Enter your details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First name"
                  className={`w-full rounded-lg border px-4 py-3 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  className={`w-full rounded-lg border px-4 py-3 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              <input
                name="phone"
                placeholder="Phone number"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <input
                name="email"
                placeholder="Email"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />

              <h3 className="text-xl font-semibold mt-2">Address</h3>
              <input
                name="street"
                placeholder="Street Address"
                className={`w-full rounded-lg border px-4 py-3 ${
                  errors.street ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <input
                name="apt"
                placeholder="Apt / Suite (optional)"
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="city"
                  placeholder="City"
                  className={`w-full rounded-lg border px-4 py-3 ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <input
                  name="state"
                  placeholder="State"
                  className={`w-full rounded-lg border px-4 py-3 ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>

              {/* <input
              name="zip"
              placeholder="ZIP Code"
              className={`w-full rounded-lg border px-4 py-3 ${
                errors.zip ? 'border-red-500' : 'border-gray-300'
              }`}
            /> */}

              <div className="mt-6 flex flex-col md:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full rounded-md border border-black px-6 py-3 text-black text-lg font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-6 py-3 text-white text-lg font-semibold hover:opacity-90"
                >
                  Book Appointment
                </button>
              </div>
            </div>
            {/* <div className="w-full h-fit mt-14 md:w-[30%] px-4 py-2 border border-gray-300 rounded-lg flex flex-col">
                <p className="text-2xl font-medium text-gray-700"> Oven repair</p>
                <p className="text-sm font-medium">65$ - 35mins</p>
            </div> */}
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
