'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';
import { format, parse } from 'date-fns';

interface Props {
  value: Date | null;
  onChange: (formattedDate: string | null) => void;
  error?: string;
}

const CustomDatePicker: React.FC<Props> = ({ value, onChange, error }) => {
  return (
    <>
      <div className="relative flex flex-col w-full">
        <DatePicker
          selected={value}
          onChange={(date: Date | null) => {
            if (date) {
              const formatted = format(date, 'dd-MM-yyyy'); 
              onChange(formatted);
            } else {
              onChange(null);
            }
          }}
          placeholderText="Select a date"
          dateFormat="dd-MM-yyyy" 
          className={`focus:outline-none w-full rounded-[1.25rem] bg-[#e0e0e0] text-2xl md:text-xl py-4 md:py-3 px-9 text-black placeholder:text-2xl active:outline-none ${
            error ? 'border-2 border-red-500' : ''
          }`}
        />
        <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9A9A9A] pointer-events-none" />
      </div>
    </>
  );
};

export default CustomDatePicker;
