import React from 'react'
import BreadscrumbDisplay from './BreadscrumbDisplay'
import { BiSolidBell } from "react-icons/bi";
import { RiSettings4Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="">
      {/* desktop screen */}
      <div className="lg:flex hidden justify-between items-center w-full gap-[150px] ">
  <div>
        <BreadscrumbDisplay />
        </div>
        <div className="flex md:mt-0 mt-2  gap-4 items-center">
     
        <BiSolidBell className='text-[#969696]'/>

        <RiSettings4Line className='text-[#969696]'/>
<div className='flex items-center gap-3'>
        <div className='h-10 w-10 rounded-full bg-[#D9D9D9]'></div>
       <div className=''>
<h5 className='text-black text-[14px] '>M. Adebayo</h5>
<h5 className='text-[#969696] text-[14px]'>Admin</h5>
       </div>
        </div>
        </div>
      </div>

      {/* mobile screen */}
      <div className=" lg:hidden ">
        <div className="flex w-full justify-between">
        {/* <div className="flex items-center gap-2">
          <Image
            src="/dashboard/690a1755bbf9435e00568b362bdf02e6.jpeg"
            alt="person icon"
            className="rounded-full"
            width={40}
            height={40}
          />
          <div className="flex flex-col leading-[24px]">
            <h4 className="text-[#1A1A1A]  text-[18px] font-light ">Hello</h4>
            <h4 className="text-primary font-[400] text-[18px]">
              Oluwagbemiro
            </h4>
          </div>
        </div> */}
        <BreadscrumbDisplay />


        {/* <div className="bg-white relative flex justify-center rounded-full h-9 w-9">
            <div className="h-[8px] w-[8px]  absolute rounded-full left-1 -top-[0.5px] bg-primary"></div>
            <Image
              src="/dashboard/bell-alt.svg"
              alt="person icon"
              className="rounded-full"
              width={28}
              height={28}
            />
          </div> */}
               
        <BiSolidBell className='text-[#969696]'/>

<RiSettings4Line className='text-[#969696]'/>
<div className='flex items-center gap-3'>
<div className='h-6 w-6 rounded-full bg-[#D9D9D9]'></div>
<div className=''>
<h5 className='text-black text-[14px] '>M. Adebayo</h5>
<h5 className='text-[#969696] text-[14px]'>Admin</h5>
</div>
</div>
          </div>

        {/* <div className="flex md:mt-0 mt-2  gap-4 items-center">
        <div className="rounded-full w-full bg-[#6CC56C30]/[19%]  px-2 py-2  ">
            <div className="flex gap-2 items-center">
            <IoIosInformationCircle className="w-5 h-5 text-primary" />
        
              <h5 className="text-primary text-[14px] font-light">
                Account is yet to be Approved
              </h5>
            </div>
          </div>

       
        </div> */}
      </div>
    </div>
  )
}

export default Header