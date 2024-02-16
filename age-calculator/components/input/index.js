import React from 'react'

export default function Input({ type, placeholder, label, name, value, onChange, className }) {

  return (
    <div>
      <label className={`${className ? 'text-light-red ' : 'text-smokey-grey'} block  text-sm font-semibold mb-1`}>
        {label}
      </label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        className={`${className} md:w-[140px] w-[83px] pl-2.5 h-[55px] md:h-[60px] border rounded-md `} type={type} placeholder={placeholder} />
    </div>
  )
}
