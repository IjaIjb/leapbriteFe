import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink, useLocation } from 'react-router-dom'

type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

const Sidebar = (props:Props) => {
  const url = useLocation();
  const { pathname } = url;
  const pathnames = pathname.split("/").filter((x:any) => x);
  return (
    <aside
      className={`${
        props.DrawerOpen ? "" : ""
      } relative w-[250px] bg-white z-[100] scrollbar-hide overflow-y-auto pl-8 pr-3  border-[#ECEDEF] h-screen`}
    >
      
      <div className="flex items-center  bg-white justify-between px-2 md:px-4">
        <div className='lg:hidden block'></div>
        <div className="flex justify-center ">
          <Link href={"/dashboard/home"}>
            <img
              aria-hidden
              src="/images/logo.svg"
              alt="Window icon"
              className='w-[120px] h-[120px] '
              // width={140}
              // height={140}
            />
            {/* <img src={logo} alt="Logo" className="w-[100px] h-[37px]" /> */}
          </Link>
        </div>
        <button
          onClick={() => {
            // setShowInfoTag(false)
            props.toggle();
          }}
          className=""
        >
          {props.DrawerOpen ? (
            <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold text-white " />
          ) : (
            <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6  font-bold hidden " />
          )}
        </button>
      </div>

      <div className=''>
<div className='flex gap-2'>

<div className='flex items-center mt-2 gap-3'>
<img
              aria-hidden
              src="/images/uni.svg"
              alt="Window icon"
              // width={140}
              // height={140}
            />
       <div className=''>
<h5 className='text-black text-[14px] '>University of Broo</h5>
<h5 className='text-[#969696] text-[14px]'>Broouni@edupay.com</h5>
       </div>
        </div>
</div>
      <div className="mt-7 flex flex-col gap-3">
      <h5 className='text-[#969696] text-[14px]'>MENU</h5>

        <div className="">
          <div className='mb-2'>
            <Link to={"/dashboard/home"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                      ? "/images/dashboardWhite.svg"
                      : "/images/dashboard.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Dashboard</h5>
              </div>
            </Link>
          </div>

          <div className='mb-2'>
            <Link to={"/dashboard/payments"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "payments"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "payments"].every((ai) => pathnames.includes(ai))
                      ? "/images/payment.svg"
                      : "/images/payment.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Payments</h5>
              </div>
            </Link>
          </div>

          <div className='mb-2'>
            <Link to={"/dashboard/invoice"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "invoice"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "invoice"].every((ai) => pathnames.includes(ai))
                      ? "/images/invoiceWhite.svg"
                      : "/images/invoice.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Invoice Receipts</h5>
              </div>
            </Link>
          </div>

          <div className='mb-2'>
            <Link to={"/dashboard/students"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "students"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "students"].every((ai) => pathnames.includes(ai))
                      ? "/images/studentsWhite.svg"
                      : "/images/students.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Students</h5>
              </div>
            </Link>
          </div>

          <div className='mb-2'>
            <Link to={"/dashboard/classes"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "classes"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "classes"].every((ai) => pathnames.includes(ai))
                      ? "/images/studentsWhite.svg"
                      : "/images/classes.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Classes/Groups</h5>
              </div>
            </Link>
          </div>
        </div>

   
      </div>

      <div className="mt-10 flex flex-col gap-3">
      <h5 className='text-[#969696] text-[14px]'>ORGANIZATION</h5>

        <div className="">
          <div className='mb-2'>
            <Link to={"/dashboard/settings"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "settings"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "settings"].every((ai) => pathnames.includes(ai))
                      ? "/images/settingsWhite.svg"
                      : "/images/settings.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Settings</h5>
              </div>
            </Link>
          </div>

          <div className='mb-2'>
            <Link to={"/dashboard/report"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "report"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "payments"].every((ai) => pathnames.includes(ai))
                      ? "/images/report.svg"
                      : "/images/report.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Report</h5>
              </div>
            </Link>
          </div>

          <div className='mb-2'>
            <Link to={"/dashboard/help"} className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "help"].every((ai) => pathnames.includes(ai))
                    ? "bg-primary text-white "
                    : " text-[#1A1A1A]"
                } gap-x-3 flex items-center px-6 text-[14px] hover:bg-primary/[20%] hover:text-black rounded-full py-[10px] `}
              >
                <img
                  aria-hidden
                  src={
                    ["dashboard", "help"].every((ai) => pathnames.includes(ai))
                      ? "/images/help.svg"
                      : "/images/help.svg"
                  }
                  alt="Window icon"
                  // width={16}
                  // height={16}
                />
                <h5 className="text-[16px] font-[500]  ">Help</h5>
              </div>
            </Link>
          </div>


        </div>

   
      </div>
      </div>
    </aside>
  )
}

export default Sidebar