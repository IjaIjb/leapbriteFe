import React, { useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import StudentTable from "./StudentTable";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SchoolStudents = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => {
    // e.preventDefault();
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleDetails = () => {
    onOpenModal(); // Open the modal
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
    <DashboardLayout>
      <div>
        <div className="grid md:grid-cols-5 items-center gap-4 mb-5">
          <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
            <div className="flex items-center gap-2">
              <img
                aria-hidden
                src="/images/schoolHome/totalEarnings.svg"
                alt="Window icon"
                className="w-[40px] h-[40px]"
                //   className='w-[120px] h-[120px] '
                // width={140}
                // height={140}
              />

              <div>
                <h5 className="text-[#969696] text-[14px]">Students</h5>
                <h5 className="text-black text-[24px] font-bold">1,239</h5>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
            <div className="flex items-center gap-2">
              <img
                aria-hidden
                src="/images/schoolHome/totalMale.svg"
                alt="Window icon"
                className="w-[40px] h-[40px]"
                //   className='w-[120px] h-[120px] '
                // width={140}
                // height={140}
              />

              <div>
                <h5 className="text-[#969696] text-[14px]">Male</h5>
                <h5 className="text-black text-[24px] font-bold">1,239</h5>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
            <div className="flex items-center gap-2">
              <img
                aria-hidden
                src="/images/schoolHome/totalfemale.svg"
                alt="Window icon"
                className="w-[40px] h-[40px]"
                //   className='w-[120px] h-[120px] '
                // width={140}
                // height={140}
              />

              <div>
                <h5 className="text-[#969696] text-[14px]">Female</h5>
                <h5 className="text-black text-[24px] font-bold">39</h5>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[15px] pl-4 py-3 pr-2">
            <div className="flex items-center gap-2">
              <img
                aria-hidden
                src="/images/schoolHome/pending.svg"
                alt="Window icon"
                className="w-[40px] h-[40px]"
                //   className='w-[120px] h-[120px] '
                // width={140}
                // height={140}
              />

              <div>
                <h5 className="text-[#969696] text-[14px]">Pending</h5>
                <h5 className="text-black text-[24px] font-bold">39</h5>
              </div>
            </div>
          </div>

          <div className="flex justify-end ">
             <Link to={"/dashboard/add-student"}
              // onClick={handleDetails}
              className="flex gap-1 cursor-pointer items-center bg-primary text-white py-4 h-fit rounded-[10px] px-5"
            >
              + <h4 className="text-white">Add Student</h4>
            </Link>
          </div>
        </div>

        <StudentTable />
        <Modal
          classNames={{
            modal: "rounded-[10px] overflow-visible relative",
          }}
          open={open}
          onClose={onCloseModal}
          center
        >
          <div className="px-4 pb-2">
            <Formik
              initialValues={initialData}
              validationSchema={validation}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="w-[400px] ">
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
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default SchoolStudents;
