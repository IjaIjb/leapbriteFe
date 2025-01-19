import React from "react";
import { FaArrowRight } from "react-icons/fa";

const SuccessVrification = () => {
  return (
    <div>
      <div className="flex justify-center px-5 py-10">
        <div className="max-w-[700px] w-full">
          <div className="">
            <div className="flex justify-center">
              <h4 className="sm:text-[24px] max-w-[300px] text-[20px] text-center font-bold">
                Verification Successful
              </h4>
            </div>
            <h4 className="sm:text-[16px] max-w-[670px] text-[14px] text-center py-2 text-[#969696]">
              Lorem ipsum dolor sit amet consectetur. Egestas velit in ipsum
              gravida morbi felis sed est. Tempor a lacus lacus posuere ipsum
              aliquam.
            </h4>
          </div>

          <div className="flex my-10 justify-center">
            <img
              src="/images/onboard/rafiki.svg"
              className="w-"
              alt="mart Logo"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              // onClick={onSubmit}
              // disabled={isSubmitting} // Disable button if no option is selected
              className={`disabled:bg-gray-500  flex gap-2 items-center py-2 w-fit px-6 bg-primary text-white rounded-full  hover:bg-primary/[70%]
}`}
            >
              Sign In
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessVrification;
