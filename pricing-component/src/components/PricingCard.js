import React from 'react'

export default function PricingCard({ pricing, isChecked }) {
  const { title, price, content } = pricing;


  return (
    <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row items-center justify-center relative mt-[70px] z-10'>
      {
        pricing.map((item, index) => {
          const bgClass = index === 0 || index === 2 ? 'bg-white md:pt-6 md:pb-5 text-grayish-blue' : 'bg-gradient-linear  md:pt-[44px] md:pb-[42px]  text-white';
          const calculatedPrice = isChecked ? item.price : (item.price * 10).toFixed(2);
          return <div key={item.id}
            className={` px-5 w-[340px]  ${bgClass} py-4 rounded-md`}>
            <h3 className='pb-8'>{item.title}</h3>
            <span className={index === 1 ? 'text-white text-6xl' : ' text-dark-grayish-blue text-6xl'}>${calculatedPrice}</span>
            <div className='py-8'>
              {
                item.content.map((item, index) => {
                  return <div key={index} className='py-3 text-sm first:border-t border-b border-light-grayish-blue border-opacity-40 '>{item}</div>
                })
              }
            </div>
            <button
              className={index === 1 ? 'bg-white hover:border-white hover:bg-transparent hover:text-white  text-grayish-blue btn' : 'btn-dark  btn'}>Learn More</button></div>
        })
      }
    </div>
  )
}
