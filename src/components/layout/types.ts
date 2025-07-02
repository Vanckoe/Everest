import { z } from 'zod';

export type ModalProps = { isOpen: boolean; onClose: () => void };

export const appointmentSchema = z.object({
  date: z.string({ required_error: 'Select a date' }),
  time: z.string({ required_error: 'Select a time' }),
  versServices: z.string({ required_error: 'Select a appliances' }),
  service: z.string({ required_error: 'Select a service' }),
  firstName: z.string().min(1, 'Enter your first name'),
  lastName: z.string().min(1, 'Enter your last name'),
  comments: z.string().min(1, 'Describe the problem'),
  phone: z.string().min(6, 'Enter your phone number'),
  email: z.string().email('Enter a valid email'),
  street: z.string().min(1, 'Enter your street'),
  apt: z.string().optional(),
  city: z.string().min(1, 'Enter your city').optional(),
  state: z.string().min(1, 'Enter your state').optional(),
  zip: z.string().min(4, 'Enter your postal code').optional(),
});
export type AppointmentForm = z.infer<typeof appointmentSchema>;

export const step1Schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  phone: z.string().min(10, 'Invalid phone'),
  email: z.string().email('Invalid email'),
  street: z.string().min(1, 'Required'),
  comments: z.string().min(1, 'Describe the problem'),
  service: z.string().min(1, 'Select a service'),
  versServices: z.string().min(1, 'Select an appliance'),
});

export const versServices = [
  { title: 'Repair', cost: '0', duration: '0' },
  { title: 'Installation', cost: '0', duration: '0' },
  { title: 'Maintenance', cost: '0', duration: '0' },
  { title: 'Commercial', cost: '0', duration: '0' },
];

export const services = [
  { title: 'Refrigerator', cost: '65.00 $', duration: '45 mins' },
  { title: 'Oven', cost: '65.00 $', duration: '30 mins' },
  { title: 'Dryer', cost: '65.00 $', duration: '30 mins' },
  { title: 'Washer', cost: '65.00 $', duration: '30 mins' },
  { title: 'Dishwasher', cost: '65.00 $', duration: '30 mins' },
  { title: 'Range', cost: '65.00 $', duration: '30 mins' },
  { title: 'Garbage Disposal', cost: '65.00 $', duration: '30 mins' },
  { title: 'Dryer Vent', cost: '160.00 $', duration: '1 hr 15 mins' },
  { title: 'Built-in Oven', cost: 'Price varies', duration: '1 hr 30 mins' },
  { title: 'Commercial Appliances', cost: '100.00 $', duration: '1 hr 15 mins' },
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
