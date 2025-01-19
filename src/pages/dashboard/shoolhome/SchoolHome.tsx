import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import SchoolRecentPayments from "./SchoolRecentPayments";
import SchoolNews from "./SchoolNews";
import SchoolEarningsChart from "./SchoolEarningsChart";
import SchoolStudentChart from "./SchoolStudentChart";
import ParentChart from "./ParentChart";

const Home = () => {
  return (
    <div>
      <DashboardLayout>
        <div className="grid md:grid-cols-12 gap-2 w-full">
          <div className="col-span-9">
            <div className="grid md:grid-cols-12 gap-2">
              <div className="col-span-5">
                <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
                  <div className="flex items-center gap-2">
                    <img
                      aria-hidden
                      src="/images/schoolHome/totalEarnings.svg"
                      alt="Window icon"
                      //   className='w-[120px] h-[120px] '
                      // width={140}
                      // height={140}
                    />

                    <div>
                      <h5 className="text-[#969696] text-[14px]">
                        Total Earnings
                      </h5>
                      <h5 className="text-black text-[24px] font-bold">
                        $1,239,809.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
                  <div className="flex items-center gap-2">
                    <img
                      aria-hidden
                      src="/images/schoolHome/totalStudents.svg"
                      alt="Window icon"
                      //   className='w-[120px] h-[120px] '
                      // width={140}
                      // height={140}
                    />

                    <div>
                      <h5 className="text-[#969696] text-[14px]">Students</h5>
                      <h5 className="text-black text-[24px] font-bold">
                        1,239
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3">
                <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
                  <div className="flex items-center gap-2">
                    <img
                      aria-hidden
                      src="/images/schoolHome/totalParents.svg"
                      alt="Window icon"
                      //   className='w-[120px] h-[120px] '
                      // width={140}
                      // height={140}
                    />

                    <div>
                      <h5 className="text-[#969696] text-[14px]">Parents</h5>
                      <h5 className="text-black text-[24px] font-bold">439</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 grid md:grid-cols-12 gap-2">
              <div className="col-span-9">
<SchoolEarningsChart />
              </div>

              <div className="col-span-3">
<SchoolStudentChart />
              </div>
            </div>
          </div>

          <div className=" h-full col-span-3">
<ParentChart />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-2 mt-3">
          <div className="col-span-9">
            <SchoolRecentPayments />
          </div>
          <div className="col-span-3 h-full">
            <div className="bg-white h-full rounded-[15px] px-4 py-3 ">
              <h5 className="text-black text-[18px] font-bold">
                Recent Payments
              </h5>
              <h5 className="text-black text-[16px] py-6 font-bold">
                Scholarship Opportunity......
              </h5>

              <div className="flex justify-center text-center items-center gap-2">
                <img
                  aria-hidden
                  src="/images/schoolHome/News.svg"
                  alt="Window icon"
                  //   className='w-[120px] h-[120px] '
                  // width={140}
                  // height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Home;
