import React from 'react'
import { SlOptions } from 'react-icons/sl'

const EachGroup = () => {
  return (
    <div>
        <div className='bg-white rounded-[12px] px-2 py-2'>
<div className='flex justify-between items-center'>
    <div className='flex flex-col gap-1'>
<h4 className='font-semibold'>Group Name</h4>
<h4 className='text-[#969696]'>25 Students</h4>
    </div>
    <img
              aria-hidden
              src="/images/schoolHome/group.png"
              alt="Window icon"
            //   className='w-[120px] h-[120px] '
              // width={140}
              // height={140}
            />

            <div className='flex flex-col justify-between'>
            <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-primary my-4 bg-[#D9D9D9] border-gray-300 rounded focus:ring-primary"
                />

                <SlOptions />
            </div>

</div>
        </div>
    </div>
  )
}

export default EachGroup