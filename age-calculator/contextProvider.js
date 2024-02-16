'use client'
import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const useDateContext = () => {
  return useContext(DateContext);
}

export function DateProvider({ children }) {

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  const updateYears=(value)=>setYears(value);
  const updateMonths=(value)=>setMonths(value);
  const updateDays=(value)=>setDays(value);

  return (
    <DateContext.Provider value={{ years, months, days,updateDays,updateMonths,updateYears }}>
      {children}
    </DateContext.Provider>
  )
}