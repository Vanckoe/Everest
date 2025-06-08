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
          <div className="flex flex-col gap-6 md:gap-3">
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
              <p className="mt-4 mb-2 block text-3xl md:text-2xl font-semibold text-gray-700">Select time</p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {timeSlots.map(slot => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    className={`rounded-[1.25rem] text-3xl md:text-xl bg-[#dfdddd] py-4 px-9 text-black placeholder:text-base placeholder:font-normal placeholder:text-[#9A9A9A] ${
                      errors.time ? 'border-2 border-red-500' : ''
                    }`}
                  >
                    {slot}
                  </button>
                ))}
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
              onClick={() => setStep(2)}
              disabled={!date || !time || !service}
              className="font-bold w-full text-nowrap mx-auto text-3xl md:text-2xl text-[#FF0000] flex flex-row text-center justify-center items-center gap-6 bg-black rounded-[1.5rem] py-8 px-10 transition-all duration-200 active:scale-[0.97]"
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
                  className="w-full rounded-md border border-black px-6 py-3 text-black text-xl font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="font-bold text-nowrap mx-auto text-xl text-start md:text-2xl text-[#FF0000] flex flex-row items-center gap-6 bg-black rounded-[1.5rem] py-8 px-10 transition-all duration-200 active:scale-[0.97]"
                >
                  Book Appointment
                </button>
              </div>
            </div>
            {/* <div className="w-full h-fit mt-14 md:w-[30%] px-4 py-2 border border-gray-300 rounded-lg flex flex-col">
                <p className="text-2xl font-medium text-gray-700"> Oven repair</p>
                <p className="text-xl font-medium">65$ - 35mins</p>
            </div> */}
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
