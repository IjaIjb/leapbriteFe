import React, { useState } from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import EachGroup from './EachGroup'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


const SchoolClasses = () => {
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
                <div className="flex justify-end mb-5">
            <div
              onClick={handleDetails}
              className="flex gap-1 cursor-pointer items-center bg-primary text-white py-4 h-fit rounded-[10px] px-8"
            >
              + <h4 className="text-white">Create Group</h4>
            </div>
          </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />
      <EachGroup />

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
                        <h4 className="text-black font-bold  text-[20px] border-b-2 pb-2">
                      Create Group
                        </h4>
                  <div className=" mb-5 relative">
                                   <label
                                         className=" text-[#2B2C2B] text-[16px] md:text-[20px] mb-2 font-[500] "
                                         htmlFor="first_name"
                                       >
                                        Group Name
                                       </label>
                                   <Field
                                     className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                     name="schoolName"
                                     type="text"
                                     id="schoolName"
                                     placeholder="Enter Group Name"
                                   />
                                   <p className="text-red-700 text-xs mt-1 ">
                                     <ErrorMessage name="schoolName" />
                                   </p>
                                 </div>

                                 <div className='grid md:grid-cols-2 gap-3'>
                                 <div className=" mb-5 relative">
                                   <label
                                         className=" text-[#2B2C2B] text-[16px] md:text-[20px] mb-2 font-[500] "
                                         htmlFor="first_name"
                                       >
                                     Semester Start Date
                                       </label>
                                   <Field
                                     className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                     name="schoolName"
                                     type="date"
                                     id="schoolName"
                                     placeholder="Enter Group Name"
                                   />
                                   <p className="text-red-700 text-xs mt-1 ">
                                     <ErrorMessage name="schoolName" />
                                   </p>
                                 </div>
                                 <div className=" mb-5 relative">
                                   <label
                                         className=" text-[#2B2C2B] text-[16px] md:text-[20px] mb-2 font-[500] "
                                         htmlFor="first_name"
                                       >
                                       Semester End Date
                                       </label>
                                   <Field
                                     className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                     name="schoolName"
                                     type="date"
                                     id="schoolName"
                                     placeholder="Enter Group Name"
                                   />
                                   <p className="text-red-700 text-xs mt-1 ">
                                     <ErrorMessage name="schoolName" />
                                   </p>
                                 </div>

                                 </div>

                                 <div className='grid md:grid-cols-2 gap-3'>
                                 <div className=" mb-5 relative">
                                   <label
                                         className=" text-[#2B2C2B] text-[16px] md:text-[20px] mb-2 font-[500] "
                                         htmlFor="first_name"
                                       >
                                     Payment Name
                                       </label>
                                   <Field
                                     className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                     name="schoolName"
                                     type="text"
                                     id="schoolName"
                                     placeholder="Enter Group Name"
                                   />
                                   <p className="text-red-700 text-xs mt-1 ">
                                     <ErrorMessage name="schoolName" />
                                   </p>
                                 </div>
                                 <div className=" mb-5 relative">
                                   <label
                                         className=" text-[#2B2C2B] text-[16px] md:text-[20px] mb-2 font-[500] "
                                         htmlFor="first_name"
                                       >
                                     Payment Amount
                                       </label>
                                   <Field
                                     className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                     name="schoolName"
                                     type="date"
                                     id="schoolName"
                                     placeholder="Enter Group Name"
                                   />
                                   <p className="text-red-700 text-xs mt-1 ">
                                     <ErrorMessage name="schoolName" />
                                   </p>
                                 </div>

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
  )
}

export default SchoolClasses