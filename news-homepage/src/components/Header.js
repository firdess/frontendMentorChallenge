'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  const [toggleButton, setToggleButton] = useState(false);
  const [showBackground, setShowBackground] = useState(false)

  const onClickOpen = () => {
    setToggleButton(!toggleButton)
    setShowBackground(!showBackground)
  }

  const onClickClose = () => {
    setToggleButton(false);
    setShowBackground(false);
  }

  return (
    <div className='container mx-auto lg:mt-10  lg:mb-9 max-w-[1110px] min-w-[375px]'>
      <div className='flex justify-between items-center px-5 relative py-4'>
        <Link href='/'>
          <img src='logo.svg' alt='logo' />
        </Link>
        <div>
          <button onClick={() => onClickOpen()} className='lg:hidden  bg-white z-20'>
            {toggleButton ? '' : <img  src='icon-menu.svg' />}
          </button>
          <div className='hidden lg:block'>
            <Navbar />
          </div>
          {
            toggleButton &&
            <div className='fixed h-full z-20 w-1/2 right-0 min-h-screen px-10 py-20 top-0  bg-gray-100 '>
              <button onClick={() => onClickClose()} className='absolute top-5 right-5'>
                <img src='icon-menu-close.svg' alt='close' />
              </button>
              <Navbar onClickClose={onClickClose} />
            </div>
          }
          {
            showBackground &&
            <div className=' w-full min-h-screen h-full fixed z-0 opacity-20 bg-dark-grayish-blue inset-0'
              onClick={() => onClickClose()}
            ></div>
          }

        </div>
      </div>
    </div>
  )
}
