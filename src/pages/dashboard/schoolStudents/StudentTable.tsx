import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const StudentTable = () => {
  const history = useHistory();

  const handleRowClick = (productId: any) => {
    history.push(`/dashboard/student-details/${productId}`); // Navigate to product details page
  };
  const data = [
    {
      id: "100045636",
      student_name: "Henry Arthur",
      email: "adillon@google.com",
      class: "Jss 3",
      age: "45",
      payment: "pending",
    },
    {
      id: "298769HGTY",
      student_name: "Jerome Bell",
      email: "mastinfo@yahoo.com",
      class: "Jss 3",
      age: "21",
      payment: "to date",
    },
    {
      id: "298769HGTY",
      student_name: "Kathryn Murphy",
      email: "dowdy@google.com",
      class: "Jss 3",
      age: "21",
      payment: "to date",
    },
  ];
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
  };
 
  const initialData = {
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    companyAddress: "",
    companyRC: "",
    phone: "",
  };

  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    companyName: Yup.string().required("Company name is required"),
    companyAddress: Yup.string().required("Company address is required"),
    companyRC: Yup.string().required("Company RC is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const onSubmit = async () => {};

  return ( 
    <div>
      <div className="bg-white h-full rounded-[15px] pl-4 py-3 pr-2">
        <div className="flex justify-between">
        <h5 className="text-black text-[24px] font-bold">Academic Year</h5>
     
     <div className="relative">
      <div 
        onClick={() => toggleDropdown()}
        className="border cursor-pointer border-[#969696] flex gap-2 items-center rounded-[10px] px-4 py-2">
<img src="/images/mage_filter.svg" className="w-4 h-4" alt="" />
<h6 className="text-[#969696] text-[13px]">Filter</h6>
      </div>

      {isDropdownVisible && (
              <div className="absolute right-0 mt-2 w-[300px] bg-white border rounded-md shadow-lg z-10">
          <div className="px-4 pb-2">
            <Formik
              initialValues={initialData}
              validationSchema={validation}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className=" ">
                  <h4 className="text-black font-bold  text-[16px] border-b-2 pb-2">
                    Filter
                  </h4>
                  <div className=" mb-5 relative pb-4 border-b-2">
                    <div className="flex justify-between items-center py-3">
                      <label
                        className=" text-black text-[12px] md:text-[14px] font-[500] "
                        htmlFor="last_name"
                      >
                        Class
                      </label>
                      <div className="text-primary text-[12px]">Reset</div>
                    </div>

                    <Field
                      className=" block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                      name="category"
                      as="select"
                      // type="tel"
                      //   onChange={(
                      //     event: React.ChangeEvent<HTMLInputElement>
                      //   ) => {
                      //     setFieldValue(
                      //       "vehicle_type",
                      //       event.target.value
                      //     );
                      //   }}
                      placeholder="Category"
                    >
                      <option label="Select"></option>
                      <option className="" value="Bus (12)">
                        Jss1
                      </option>
                      <option className="" value="Bus (12)">
                        Jss2
                      </option>
                      <option className="" value="Bus (12)">
                        Jss3
                      </option>
                      <option className="" value="Bus (12)">
                        SS1
                      </option>
                      <option className="" value="Bus (12)">
                        SS2
                      </option>
                      <option className="" value="Bus (12)">
                        SS3
                      </option>
                    </Field>
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="category" />
                    </p>
                  </div>

                  <div className=" mb-5 relative pb-4 border-b-2">
                    <div className="flex justify-between items-center py-3">
                      <label
                        className=" text-black text-[12px] md:text-[14px] font-[500] "
                        htmlFor="last_name"
                      >
                        Sub-Class
                      </label>
                      <div className="text-primary text-[12px]">Reset</div>
                    </div>

                    <Field
                      className=" block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                      name="category"
                      as="select"
                      // type="tel"
                      //   onChange={(
                      //     event: React.ChangeEvent<HTMLInputElement>
                      //   ) => {
                      //     setFieldValue(
                      //       "vehicle_type",
                      //       event.target.value
                      //     );
                      //   }}
                      placeholder="Category"
                    >
                      <option label="Select"></option>
                      <option className="" value="Bus (12)">
                        Jss1 Gold
                      </option>
                      <option className="" value="Bus (12)">
                        Jss2 Gold
                      </option>
                      <option className="" value="Bus (12)">
                        Jss3 Gold
                      </option>
                      <option className="" value="Bus (12)">
                        SS1 Gold
                      </option>
                      <option className="" value="Bus (12)">
                        SS2 Gold
                      </option>
                      <option className="" value="Bus (12)">
                        SS3 Gold
                      </option>
                    </Field>
                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="category" />
                    </p>
                  </div>

                  <div className=" mb-5 relative pb-4 ">
                    <div className="flex justify-between items-center py-3">
                      <label
                        className=" text-black text-[12px] md:text-[14px] font-[500] "
                        htmlFor="last_name"
                      >
                        Age
                      </label>
                      <div className="text-primary text-[12px]">Reset</div>
                    </div>

                    <Field
                      className=" block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                      name="category"
                      type="number"
                      // type="tel"
                      //   onChange={(
                      //     event: React.ChangeEvent<HTMLInputElement>
                      //   ) => {
                      //     setFieldValue(
                      //       "vehicle_type",
                      //       event.target.value
                      //     );
                      //   }}
                      placeholder="14-20"
                    />

                    <p className="text-red-700 text-xs mt-1 ">
                      <ErrorMessage name="category" />
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="rounded-full px-10 py-2 text-[#969696] border border-[#969696] text-[13px]">
                      Reset all
                    </div>
                    <div className="rounded-full px-12 py-2 text-white bg-primary text-[13px]">
                      Apply
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
              </div>
            )}
      </div>
        </div>
        <table className="w-full text-[#969696] text-[13px] text-center overflow-hidden overflow-x-scroll ">
          <thead className=" ">
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
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Class
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>

              <th scope="col" className="px-6 py-3">
                Payments
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((datas, index) => (
              <tr
                key={datas.id}
                onClick={() => handleRowClick(datas.student_name)}
                className="cursor-pointer hover:bg-gray-200"
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
                <td className="px-6 py-4">{datas?.email}</td>
                <td className="px-6 py-4">{datas?.class}</td>
                <td className="px-6 py-4">{datas?.age}</td>
                <td
                 
                >
                 <h4  className={`px-3 py-2  ${
                    datas?.payment === "pending"
                      ? "bg-[#FB7D5B]/[17%] text-[#FB7D5B] rounded-full "
                      : "bg-[#5BFBAE]/[17%] text-[#03BF7B] rounded-full"
                  }`}> {datas?.payment === "pending" ? "Pending" : "Up to date"}</h4>
                </td>
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

export default StudentTable;
