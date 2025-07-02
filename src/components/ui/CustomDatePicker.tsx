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
    <div className={clsx('relative', variant === 'secondary' ? 'w-full' : 'w-fit')}>
      <div
        className={clsx('relative cursor-pointer', variant === 'secondary' ? 'w-full' : 'w-fit')}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          placeholder="Select a date"
          value={value ? value.toLocaleDateString() : ''}
          className={`focus:outline-none w-full rounded-[1.25rem] bg-[#dfdddd] py-3 pl-12 text-3xl md:text-2xl
                           text-black placeholder:text-2xl placeholder:text-[#9A9A9A] ${
                             error ? 'border-2 border-red-500' : ''
                           }`}
          readOnly
        />
        <div
          className={clsx(
            'absolute top-0 cursor-pointer',
            variant === 'primary' ? 'left-0 p-3 pl-4' : 'left-0 pl-5 pt-5'
          )}
        >
          <Calendar color="#9A9A9A" width={'1.5rem'} />
        </div>
      </div>

      {isOpen && (
        <div ref={calendarRef} className="z-50 absolute">
          <CustomCalendarPicker onDateSelect={handleSelectDate} />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
