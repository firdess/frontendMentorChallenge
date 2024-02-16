'use client'
import React from 'react'
import Form from '../form'
import OutputDate from '../output'
import { DateProvider, useDateContext } from '@/contextProvider'

export default function HomePage() {
  const { years, days, months } = useDateContext()
  return (

    <div className='flex items-center justify-center min-h-screen mx-4  '>
      <div className='bg-white min-w-[375px] w-[337px] md:w-[760px] mx-auto  px-12 py-10 rounded-md rounded-br-[150px] '>
        <Form />
        <div>
          <OutputDate label='years' value={years} />
          <OutputDate label='months' value={months} />
          <OutputDate label='days' value={days} />
        </div>
      </div>
    </div>

  )
}
