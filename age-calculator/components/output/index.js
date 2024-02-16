import React from 'react'

export default function OutputDate({ label, value }) {

  return (
    <div className='flex items-center gap-6'>
      {
        value ? <div className='text-purple font-bold text-[48px] md:text-[72px] italic'>{value}</div>
          : <div className='flex gap-3'>
            <span className='bg-purple w-10 h-3 block '></span>
            <span className='bg-purple w-10 h-3 block '></span>
          </div>
      }
      <p className='text-[48px] md:text-[72px] font-bold text italic'>
        {label}
      </p>
    </div>
  )
}
