import React from 'react'

export default function Button({title}) {
  return (
    <button className={`px-5 py-3 text-sm tracking-widest hover:bg-very-dark-blue bg-soft-red text-off-white uppercase font-bold`} > {title}</button>
  )
}
