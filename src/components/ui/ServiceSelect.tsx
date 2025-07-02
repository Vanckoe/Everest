'use client';

import { Listbox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Service = {
  title: string;
  cost: string;
  duration: string;
};

interface Props {
  options: Service[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string; // можно передавать кастомный текст, например: "Выберите услугу"
}

const ServiceSelect = ({
  options,
  value,
  onChange,
  error,
  placeholder = 'Select a service',
}: Props) => {
  const selected = options.find(option => option.title === value);

  return (
    <div className="w-full">
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button
            className={`w-full rounded-[0.6rem] bg-[#dfdddd] py-4 px-6 pr-12 text-left text-black text-2xl md:text-xl border-2 ${
              error ? 'border-red-500' : 'border-transparent'
            }`}
          >
            {selected ? selected.title : placeholder}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b7280]">
              <ChevronDown size={20} />
            </span>
          </Listbox.Button>

          <Listbox.Options className="absolute -top-[16rem] left-0 z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white py-1 shadow-xl ring-1 ring-black/5 focus:outline-none">
            {options.map(option => (
              <Listbox.Option
                key={option.title}
                value={option.title}
                className={({ active }) =>
                  `cursor-pointer select-none px-6 py-3 text-2xl md:text-xl ${
                    active ? 'bg-gray-100 text-black' : 'text-gray-800'
                  }`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between">
                    <span>{option.title}</span>
                    {selected && <Check className="h-5 w-5 text-[#31A301]" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default ServiceSelect;
