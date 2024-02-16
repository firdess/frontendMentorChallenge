import Link from 'next/link'
import React from 'react'
const navList = [
  {
    id: 1,
    title: 'Home',
    path: '/'
  },
  {
    id: 2,
    title: ' New',
    path: '#'
  },
  {
    id: 3,
    title: ' Popular',
    path: '#'
  },
  {
    id: 4,
    title: 'Trending',
    path: '#'
  },
  {
    id: 5,
    title: 'Categories',
    path: '#'
  }

]

export default function Navbar({onClickClose}) {
  return (
    <nav >
      <div className='flex gap-8  text-dark-grayish-blue md:text-grayish-blue lg:flex-row flex-col '>
        {
          navList.map((nav) => {
            return <Link
            onClick={onClickClose}
              key={nav.id}
              href={nav.path}
              className='cursor-pointer hover:text-soft-red text-sm lg:px-3 lg:py-1'>{nav.title}</Link>
          })
        }
      </div>
    </nav>
  )
}
