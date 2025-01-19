import React from "react";

const UserProfile = () => {
  return (
    <div>
      <h4 className="text-[#000000] font-bold text-[24px]">User Profile</h4>
      <h4 className="text-[#969696] text-[16px] pb-3">
        Update your payment gateway here and start receiving payment online{" "}
      </h4>
      <div className="bg-white w-full p-2 rounded-[15px]">
        <div className="border-b">
          <div className="flex items-center gap-5 px-10 pt-6 pb-3">
            <div>
              <h4 className="text-[#000000] text-[16px]">Your Photo</h4>
              <h4 className="text-[#969696] text-[16px]">
                This will be displayed on your profile
              </h4>
            </div>
            <div className="flex items-center gap-4">
              <img
                aria-hidden
                src="/images/uni.svg"
                alt="Window icon"
                width={90}
                height={90}
              />
              <h4 className="text-[#000000] tetx">Delete</h4>
              <h4>Delete</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
