'use client'
import PricingCard from './PricingCard'
import CheckBox from './CheckBox'
import { useState } from 'react'

const pricing = [{
  id: 1,
  title: 'Basic',
  price: 19.99,
  content: ['500 GB Storage', '2 Users Allowed', 'Send up to 3 GB']
},
{
  id: 2,
  title: 'Professional',
  price: 24.99,
  content: ['1 TB Storage', '5 Users Allowed', 'Send up to 10 GB']
},
{
  id: 3,
  title: 'Master',
  price: 39.99,
  content: ['2 TB Storage', '10 Users Allowed', 'Send up to 20 GB']
}
]

export default function Main() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div className='container  mx-auto pt-16 pb-16 max-w-[1440px] min-w-[375px] text-center '>
      <h1 className='text-center text-3xl relative z-10 text-grayish-blue'>Our Pricing</h1>
      <CheckBox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange}/>
      <PricingCard pricing={pricing} isChecked={isChecked}/>
    </div>
  )
}
