import React from "react";

const Verifying = () => {
  return (
    <div>
      <div className="flex justify-center px-5 py-10">
        <div className="max-w-[700px] w-full">
          <div className="">
            <div className="flex justify-center">
              <h4 className="sm:text-[24px] max-w-[300px] text-[20px] text-center font-bold">
                Verifying information provided
              </h4>
            </div>
            <h4 className="sm:text-[16px] max-w-[670px] text-[14px] text-center py-2 text-[#969696]">
              We are just verifying the information you have sent to us. We will
              be in touch with you within 24 Hours. Kindly check your mail for
              notifications
            </h4>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/onboard/pana.svg"
              className="w-"
              alt="mart Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifying;
