import Link from 'next/link'
import React from 'react'

export default function NewsCard({ img, title, content, id }) {
  return (
    <div className='flex gap-4'>
      <img width={100} height={120} src={img} />
      <div className='flex flex-col gap-3'>
        <span className='font-semibold text-3xl text-grayish-blue'>0{id}</span>
        <Link href='#' className='font-bold text-very-dark-blue hover:text-soft-orange'>{title}</Link>
        <p className='text-dark-grayish-blue text-xs '>{content}</p>
      </div>
    </div>
  )
}
