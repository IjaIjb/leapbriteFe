import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GetStarted = () => {
  return (
    <div>
      <div className="p-8">
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:block flex md:place-self-auto place-self-center">
            <div className="lg:pl-[80px] pt-10 md:pt-0 px-5">
              <div className="">
                <img src="/images/logo.svg" className="w-" alt="mart Logo" />
                <div className="flex items-center mt-7 gap-2">
                  <h5 className="text-[#000000] text-[24px] font-bold ">
                    Get Started
                  </h5>
                  <img src="/images/onboard/hand.svg" className="" alt="" />
                </div>
                <div className="mb-2">
                  <h6 className="text-[16px] text-[#969696]">
                    Welcome to Edupay- Lets create your account.
                  </h6>
                  <h6 className="text-[16px] text-[#969696]">
                    Kindly select and option to proceed
                  </h6>
                </div>
                <hr className="max-w-[400px]" />
              </div>

              <div className="flex flex-col max-w-[370px] mt-4 gap-3">
                <div className="relative cursor-pointer group bg-[#F8F8F8] border border-[#D6D6D6] rounded-[10px] p-3">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-[10px] p-[2px] bg-gradient-to-r from-[#0084CE] to-[#004368] opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-full w-full bg-[#F8F8F8] rounded-[10px]"></div>
                  </div>

                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <img src="/images/onboard/studentOnboard.svg" alt="" />
                    <div>
                      <h5 className="text-[14px] font-semibold">
                        Student/Parent
                      </h5>
                      <h5 className="text-[#6D8494] text-[12px]">
                        Are you a student or a parent trying to h
                      </h5>
                    </div>
                  </div>
                </div>

                <Link to={"/school-details"}>
                  <div className="relative cursor-pointer group bg-[#F8F8F8] border border-[#D6D6D6] rounded-[10px] p-3">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-[10px] p-[2px] bg-gradient-to-r from-[#0084CE] to-[#004368] opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-full w-full bg-[#F8F8F8] rounded-[10px]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative flex items-center gap-2">
                      <img src="/images/onboard/schoolOnboard.svg" alt="" />
                      <div>
                        <h5 className="text-[14px] font-semibold">School</h5>
                        <h5 className="text-[#6D8494] text-[12px]">
                          Own a school? Have a group students.
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="relative cursor-pointer group bg-[#F8F8F8] border border-[#D6D6D6] rounded-[10px] p-3">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-[10px] p-[2px] bg-gradient-to-r from-[#0084CE] to-[#004368] opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-full w-full bg-[#F8F8F8] rounded-[10px]"></div>
                  </div>

                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <img src="/images/onboard/agencyOnboard.svg" alt="" />
                    <div>
                      <h5 className="text-[14px] font-semibold">Agency</h5>
                      <h5 className="text-[#6D8494] text-[12px]">
                        Are you interested in giving out loans?
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen md:block hidden rounded-[15px] pt-10 bg-gradient-to-br from-[#004165] via-[#000000] to-[#0082CB]">
            <div className="flex justify-center">
              <img
                src="/images/onboard/onboard.png"
                className="lg:w-[500px] md:w-[350px]"
                alt="mart Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
