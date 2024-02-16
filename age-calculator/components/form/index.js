'use client'
import React, { useEffect, useState } from 'react'
import DateInput from '../date'
import { useDateContext } from '@/contextProvider'


export default function Form() {
  const { updateYears, updateMonths, updateDays } = useDateContext();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [emptyInput, setEmptyInput] = useState({ day: false, month: false, year: false });
  const [invalidError, setInvalidError] = useState({ day: false, month: false, year: false })


  const handleDayChange = (e) => {
    setDay(e.target.value);
    setEmptyInput({ ...emptyInput, day: e.target.value === '' });
  }
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setEmptyInput({ ...emptyInput, month: e.target.value === '' });
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setEmptyInput({ ...emptyInput, year: e.target.value === '' })
  }

  const onSubmitForm = (e) => {

    e.preventDefault();

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const dayValue = parseInt(day);
    const monthValue = parseInt(month);
    const yearValue = parseInt(year);

    let ageDay = currentDay - dayValue;
    let ageMonth = currentMonth - monthValue;
    let ageYear = currentYear - yearValue;

    if (ageDay < 0) {
      ageMonth -= 1;
      ageDay += daysInMonth(monthValue, dayValue);
    }

    if (ageMonth < 0) {
      ageYear -= 1;
      ageMonth += 12;
    }


    function daysInMonth(month, year) {
      const days30 = [4, 6, 9, 11];
      const days31 = [1, 3, 5, 7, 8, 10, 12];

      if (days30.includes(month)) {
        return 30;
      } else if (days31.includes(month)) {
        return 31;
      } else if (month === 2) {
        if ((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))) {
          return 29;
        } else {
          return 28;
        }
      }

    }

    const newEmptyInputs = {
      day: day.trim() === '',
      month: month.trim() === '',
      year: year.trim() === '',
    }
    setEmptyInput(newEmptyInputs);

    if (newEmptyInputs.day || newEmptyInputs.month || newEmptyInputs.year) {
      return;
    }

    ;
    const invalidMonth = monthValue < 1 || monthValue > 12;
    const invalidYear = yearValue < 1900 || yearValue > currentYear;

    if (dayValue < 1 || dayValue > daysInMonth(monthValue, yearValue)) {
      setInvalidError({ ...invalidError, day: true });
      return;
    };

    const newError = {
      day: false,
      month: invalidMonth,
      year: invalidYear
    };
    setInvalidError(newError);

    if (newError.day || newError.month || newError.year) {
      return;
    };

    updateDays(ageDay);
    updateMonths(ageMonth);
    updateYears(ageYear);
    setDay('');
    setMonth('');
    setYear('')

  }


  useEffect(() => { }, [updateDays, updateMonths, updateYears])

  return (
    <form onSubmit={onSubmitForm} className='flex gap-2 md:gap-5 pb-12 w-full md:w-3/4 border-b  border-b-light-grey relative  mb-[60px]'>
      <DateInput
        day={day}
        year={year}
        month={month}
        handleDayChange={handleDayChange}
        handleMonthChange={handleMonthChange}
        handleYearChange={handleYearChange}
        emptyInput={emptyInput}
        invalidError={invalidError}
      />
      <button className='bg-purple rounded-full w-[63px] h-[63px] right-1/3 bottom-[-25px]  md:w-[93px] md:h-[93px] flex items-center justify-center hover:bg-off-black absolute md:bottom-[-50px] md:right-[-50px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg>
      </button>
    </form>
  )
}
