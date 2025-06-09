'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Calendar } from 'lucide-react';

interface Props {
  value: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
}

const CustomDatePicker: React.FC<Props> = ({ value, onChange, error }) => {
  return (
    <>
      <div className="relative flex flex-col w-full">
        <DatePicker
          selected={value}
          onChange={onChange}
          placeholderText="Select a date"
          dateFormat="yyyy-MM-dd"
          className={`w-full rounded-[1.25rem] bg-[#e0e0e0] text-2xl md:text-xl py-3 px-9 text-black placeholder:text-2xl active:outline-none  placeholder:font-normal placeholder:text-[#9A9A9A] ${
            error ? 'border-2 border-red-500' : ''
          }`}
        />
        <Calendar className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9A9A9A] pointer-events-none" />
      </div>
      {/* {error && <p className="text-xl text-red-500 mt-1">{error}</p>} */}
    </>
  );
};

export default CustomDatePicker;
