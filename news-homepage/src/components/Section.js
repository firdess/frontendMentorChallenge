import React from 'react'
import Button from './Button'
import { news, newsCard } from '../../new'
import Link from 'next/link'
import NewsCard from './NewsCard'

export default function Section() {

  return (
    <div className='container mx-auto px-5 w-full  h-full max-w-[1110px] min-w-[375px]'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className=' lg:w-2/3 w-full flex flex-col gap-10'>
          <img src='image-web-3-desktop.jpg' />
          <div className='flex flex-col lg:flex-row w-full gap-10'>
            <div className='lg:w-1/2'>
              <h2 className='font-extrabold  text-5xl '>The Bright Future of Web 3.0?</h2>
            </div>
            <div className='md:w-1/2 flex flex-col'>
              <p className='mb-4 text-dark-grayish-blue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hand of the people.But is it really fulfilling its proise?</p>
              <div className='flex-shrink-0'>
                <Button title='Read More' />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/3 h-full w-full'>
          <div className='bg-very-dark-blue text-white p-5'>
            <h2 className='text-soft-orange font-bold text-3xl mb-5'>New</h2>
            <div>
              {
                news.map(item => {
                  return <div className='my-6 text-lg border-b-dark-grayish-blue border-b pb-5 last:pb-0 last:border-b-0'>
                    <Link href='#' className='mb-2 block hover:text-soft-orange font-bold text-off-white'>{item.title}</Link>
                    <p>{item.content}</p>

                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6 lg:flex-row w-full my-12'>
          {newsCard.map(card => {
            return <div key={card.id}>
              <NewsCard id={card.id} title={card.title} content={card.content} img={card.img}/>
            </div>
          })}
        </div>

    </div>
  )
}
