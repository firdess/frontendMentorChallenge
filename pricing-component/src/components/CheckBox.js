
export default function CheckBox({ isChecked, handleCheckboxChange }) {
  return (
    <div className='inline-flex items-center mt-5 gap-2 text-light-grayish-blue'>
      <span>Annually</span>
      <label className='inline-flex cursor-pointer select-none items-center '>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className={` block h-8 w-14 rounded-full bg-gradient-linear `} ></div>
          <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center  rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''}`}></div>
        </div>
      </label>
      <span>Monthly</span>
    </div>



  )
}
