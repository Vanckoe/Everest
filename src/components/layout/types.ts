import { z } from 'zod';

export type ModalProps = { isOpen: boolean; onClose: () => void };

export const appointmentSchema = z.object({
  date: z.string({ required_error: 'Select a date' }),
  time: z.string({ required_error: 'Select a time' }),
  service: z.string({ required_error: 'Select a service' }),
  firstName: z.string().min(1, 'Enter your first name'),
  lastName: z.string().min(1, 'Enter your last name'),
  comments: z.string().min(1, 'Describe the problem'),
  phone: z.string().min(6, 'Enter your phone number'),
  email: z.string().email('Enter a valid email'),
  street: z.string().min(1, 'Enter your street'),
  apt: z.string().optional(),
  city: z.string().min(1, 'Enter your city'),
  state: z.string().min(1, 'Enter your state'),
  zip: z.string().min(4, 'Enter your postal code').optional(),
});
export type AppointmentForm = z.infer<typeof appointmentSchema>;

export const services = [
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
export const timeSlots = [
  '8 AM - 10 AM',
  '9 AM - 11 AM',
  '10 AM - 12 PM',
  '11 AM - 1 PM',
  '12 PM - 2 PM',
  '1 PM - 3 PM',
  '2 PM - 4 PM',
  '3 PM - 4 PM',
  '4 PM - 6 PM',
  '5 PM - 7 PM',
  '6 PM - 8 PM',
  '7 PM - 8 PM',
];
