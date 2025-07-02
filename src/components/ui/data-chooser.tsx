'use client';

import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/en';

dayjs.extend(localizedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.locale('en');

const generateMonths = () => {
  const today = dayjs();
  return [today, today.add(1, 'month'), today.add(2, 'month')];
};

const renderDays = (
  month: Dayjs,
  handleDayClick: (day: Dayjs) => void,
  selectedDate: Dayjs | null
) => {
  const today = dayjs();
  const startOfMonth = month.startOf('month');
  const endOfMonth = month.endOf('month');
  const startDayOfWeek = startOfMonth.day() === 0 ? 7 : startOfMonth.day();
  const days = [];

  for (let i = 1; i < startDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className="flex h-5 items-center justify-center"></div>);
  }

  for (
    let date = startOfMonth;
    date.isBefore(endOfMonth) || date.isSame(endOfMonth, 'day');
    date = date.add(1, 'day')
  ) {
    const isPast = date.isBefore(today, 'day');
    const isSelected = selectedDate?.isSame(date, 'day');

    days.push(
      <div
        key={date.format('YYYY-MM-DD')}
        className={`flex h-9 items-center justify-center cursor-pointer rounded-md transition-all ${
          isPast
            ? 'opacity-30 cursor-not-allowed'
            : isSelected
            ? 'bg-blue-600 text-white'
            : 'hover:bg-gray-200'
        }`}
        onClick={() => !isPast && handleDayClick(date)}
      >
        <div className="text-base font-medium">{date.date()}</div>
      </div>
    );
  }

  return days;
};

const renderMonth = (
  month: Dayjs,
  handleDayClick: (day: Dayjs) => void,
  selectedDate: Dayjs | null
) => (
  <div key={month.format('YYYY-MM')} className="mb-6">
    <div className="mb-3 text-center text-lg font-semibold text-gray-800">
      {month.format('MMMM YYYY')}
    </div>
    <div className="grid grid-cols-7 gap-0">{renderDays(month, handleDayClick, selectedDate)}</div>
  </div>
);

const CustomCalendarPicker = ({ onDateSelect }: { onDateSelect: (date: Date) => void }) => {
  const months = generateMonths();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDayClick = (day: Dayjs) => {
    setSelectedDate(day);
    onDateSelect(day.toDate());
  };

  return (
    <div className="absolute z-50 mt-2 w-[25rem] max-h-[22rem] overflow-y-scroll rounded-xl border border-gray-200 bg-white p-4 shadow-md scrollbar-hide">
      <div className="sticky top-0 z-10 grid grid-cols-7 border-b bg-white py-2 text-center text-sm font-semibold text-gray-700">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {months.map(month => renderMonth(month, handleDayClick, selectedDate))}
    </div>
  );
};

export default CustomCalendarPicker;
