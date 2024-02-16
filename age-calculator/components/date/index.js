import React from 'react'
import Input from '../input'


export default function DateInput({ invalidError, emptyInput, year, month, day, handleDayChange, handleMonthChange, handleYearChange, emptyDay, emptyMonth, emptyYear }) {



  return (
    <>
      <div>
        <Input
          label='DAY'
          value={day}
          type='number'
          name='day'
          placeholder="DD"
          onChange={handleDayChange}
          className={`${emptyInput.day ? 'empty' : ''}`}
        />

        {invalidError.day && <div className='empty-text'>Must be a valid date</div>}
        {emptyInput.day && !invalidError.day && <div className='empty-text'>This field is required</div>}
      </div>

      <div>
        <Input
          label='MONTH'
          value={month}
          type='number'
          name='month'
          placeholder="MM"
          onChange={handleMonthChange}
          className={`${emptyInput.month || invalidError.month ? 'empty' : ''}`}
        />
        {invalidError.month && <div className='empty-text'>Must be a valid month</div>}
        {emptyInput.month && !invalidError.month && <div className='empty-text'>This field is required</div>}
      </div>
      <div>
        <Input
          label='YEAR'
          value={year}
          type='number'
          name='year'
          placeholder="YYYY"
          onChange={handleYearChange}
          className={`${emptyInput.year || invalidError.year ? 'empty' : ''}`}
        />
        {invalidError.year && <div className='empty-text'>Must be a valid month</div>}
        {emptyInput.year && !invalidError.year && <div className='empty-text'>This field is required</div>}
      </div>
    </>
  )
}
