import React from "react";
import { SlOptions } from "react-icons/sl";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SchoolRecentPayments = () => {
  const data = [
    {
      id: "100045636",
      student_name: "Henry, Arthur",
      payment_type: "Sedan",
      class: "Jss 3",
      amount: "N20,000",
      date: "21/05/2024",
    },
    {
      id: "284959004",
      student_name: "Nguyen, Shane",
      payment_type: "Sedan",
      class: "Jss 3",
      amount: "N30,000",
      date: "21/05/2024",
    },
    {
      id: "100045656",
      student_name: "95795003749",
      payment_type: "Sedan",
      class: "Jss 3",
      amount: "N10,000",
      date: "21/05/2024",
    },
    {
      id: "100045689",
      student_name: "Flores, Juanita",
      payment_type: "Sedan",
      class: "Jss 3",
      amount: "N55,000",
      date: "21/05/2024",
    },
  ];
  return (
    <div>
      <div className="bg-white h-full rounded-[15px] pl-4 py-3 pr-2">
        <h5 className="text-black text-[24px] font-bold">Recent Payments</h5>
        <table className="w-full text-[#969696] text-[13px] text-center overflow-hidden overflow-x-scroll ">
          <thead className="   ">
            <tr>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 accent-green-600 mt-5 bg-[#D9D9D9] border-gray-300 rounded focus:ring-blue-500"
              />

              <th scope="col" className="px-6 py-3">
                Student Id
              </th>
              <th scope="col" className="px-6 py-3">
                Student Name
              </th>
              <th scope="col" className="px-6 py-3">
                Payment Type
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>

              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {data.map((datas, index) => (
              <tr
                key={index}
                //   className={`bg-white ${
                //     index % 2 === 0 ? "" : "bg-[#D9D9D930]/[19%]"
                //   }`} // Apply bg-gray-200 to even rows
              >
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 accent-green-600 my-4 bg-[#D9D9D9] border-gray-300 rounded focus:ring-blue-500"
                />

                <td className="px-6 py-4">{datas?.id}</td>
                <td className="px-6 py-4">{datas?.student_name}</td>
                <td className="px-6 py-4">{datas?.payment_type}</td>
                <td className="px-6 py-4">{datas?.class}</td>
                <td className="px-6 py-4">{datas?.amount}</td>
                <td className="px-6 py-4">{datas?.date}</td>
                <td className="px-6 py-4">
                  <div className="relative">
                    <div className="flex justify-center">
                      <SlOptions
                        className="cursor-pointer"
                        // onClick={() => toggleDropdown(index)}
                      />
                    </div>
                    {/* {dropdownIndex === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li>
                          <div
                            onClick={handleVehicleStatement}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                            See Statement
                          </div>
                        </li>
                        <li>
                          <div
                            onClick={handleVehicleReport}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                            Vehicle Report
                          </div>
                        </li>
                        <li>
                          <div
                            onClick={handleVehicleDocuments}
                            className="px-4 py-2 text-sm text-primary hover:bg-[#9F9F9F33] text-center cursor-pointer"
                          >
                           See Documents
                          </div>
                        </li>
                      </ul>
                    </div>
                  )} */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex gap-4 justify-center mt-7 mb-3 items-center">
          <h4 className="text-blackText font-[500] text-[13px]">
            Page 1 of 30
          </h4>

          <div className="flex items-center gap-1">
            <div className="text-[#98A2B3] px-3 py-2 ">1</div>
            <div className="text-[#98A2B3] px-3 py-2 ">2</div>
            <div className=" px-3 py-2 bg-primary text-white rounded-[6px]">
              3
            </div>
            <div className="text-[#98A2B3] px-3 py-2 ">4</div>
            <div className="text-[#98A2B3] px-3 py-2 ">5</div>
            <div className="text-[#98A2B3] px-3 py-2 ">6</div>
          </div>

          <div className="flex gap-2">
            <div className="bg-[#D9D9D9] py-2 px-2 rounded-[6px]">
              <MdChevronLeft className="text-white w-7 h-7 " />
            </div>
            <div className="bg-[#D9D9D9] py-2 px-2 rounded-[6px]">
              <MdChevronRight className="text-white w-7 h-7 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolRecentPayments;
