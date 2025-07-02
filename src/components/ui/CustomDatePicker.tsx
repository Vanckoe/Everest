// CustomDatePicker.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import CustomCalendarPicker from './data-chooser';
import clsx from 'clsx';

interface Props {
  placeholder?: string;
  variant?: 'primary' | 'secondary';
  value: Date | null;
  onChange: (date: Date | null) => void;
  error?: string;
}

const CustomDatePicker: React.FC<Props> = ({
  placeholder,
  variant = 'primary',
  onChange,
  value,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  const handleSelectDate = (date: Date) => {
    onChange(date);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className=" relative w-full">
      <div className=" relative w-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          placeholder="Select a date"
          value={value ? value.toLocaleDateString() : ''}
          className={`focus:outline-none w-full rounded-[0.6rem] bg-[#dfdddd] py-3 pl-12 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             error ? 'border-2 border-red-500' : ''
                           }`}
          readOnly
        />
        <div className={clsx('absolute top-4 cursor-pointer left-4')}>
          <Calendar color="#9A9A9A" width={'1.5rem'} />
        </div>
      </div>

      {isOpen && (
        <div ref={calendarRef} className="z-50 absolute w-full">
          <CustomCalendarPicker onDateSelect={handleSelectDate} />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
