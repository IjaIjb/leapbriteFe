import React from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const AddStudent = () => {
  // Validation Schema
  const validationSchema = Yup.object({
    studentFirstName: Yup.string().required("First Name is required"),
    studentLastName: Yup.string().required("Last Name is required"),
    dob: Yup.date().required("Date of Birth is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    class: Yup.string().required("Class is required"),
    sex: Yup.string().required("Sex is required"),
    guardianFirstName: Yup.string().required("First Name is required"),
    guardianLastName: Yup.string().required("Last Name is required"),
    guardianPhone: Yup.string().required("Phone number is required"),
    guardianEmail: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    guardianAddress: Yup.string().required("Address is required"),
  });

  // Initial Values
  const initialValues = {
    studentFirstName: "",
    studentLastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    class: "",
    sex: "",
    guardianFirstName: "",
    guardianLastName: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianAddress: "",
    sameAsStudent: false,
  };

  // On Submit Handler
  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };

  return (
    <DashboardLayout>
      <div className=" min-h-screen">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6 mb-6">
              {/* Student Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold bg-blue-500 text-white px-4 py-2 rounded-md inline-block mb-4">
                  Student details
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="studentFirstName"
                      className="block text-sm font-medium"
                    >
                      First Name *
                    </label>
                    <Field
                      name="studentFirstName"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="studentFirstName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="studentLastName"
                      className="block text-sm font-medium"
                    >
                      Last Name *
                    </label>
                    <Field
                      name="studentLastName"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="studentLastName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium">
                      Date of Birth *
                    </label>
                    <Field
                      name="dob"
                      type="date"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                    >
                      Phone *
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium"
                    >
                      Address *
                    </label>
                    <Field
                      name="address"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Class */}
                  <div>
                    <label
                      htmlFor="class"
                      className="block text-sm font-medium"
                    >
                      Class *
                    </label>
                    <Field
                      name="class"
                      as="select"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    >
                      <option value="">Select Class</option>
                      <option value="JSS1">JSS1</option>
                      <option value="JSS2">JSS2</option>
                      <option value="JSS3">JSS3</option>
                      <option value="SS1">SS1</option>
                      <option value="SS2">SS2</option>
                      <option value="SS3">SS3</option>
                    </Field>
                    <ErrorMessage
                      name="class"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Sex */}
                  <div>
                    <label htmlFor="sex" className="block text-sm font-medium">
                      Sex *
                    </label>
                    <Field
                      name="sex"
                      as="select"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    >
                      <option value="">Select Sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage
                      name="sex"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* Guardian/Parent Details */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold bg-blue-500 text-white px-4 py-2 rounded-md inline-block mb-4">
                  Guardian/Parent details
                </h3>

<div className="md:flex w-full gap-4">
             <div className="w-full">
                <div className="grid grid-cols-2 gap-4">
                  {/* Guardian First Name */}
                  <div>
                    <label
                      htmlFor="guardianFirstName"
                      className="block text-sm font-medium"
                    >
                      First Name *
                    </label>
                    <Field
                      name="guardianFirstName"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="guardianFirstName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Guardian Last Name */}
                  <div>
                    <label
                      htmlFor="guardianLastName"
                      className="block text-sm font-medium"
                    >
                      Last Name *
                    </label>
                    <Field
                      name="guardianLastName"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="guardianLastName"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Guardian Phone */}
                  <div>
                    <label
                      htmlFor="guardianPhone"
                      className="block text-sm font-medium"
                    >
                      Phone *
                    </label>
                    <Field
                      name="guardianPhone"
                      type="text"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="guardianPhone"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Guardian Email */}
                  <div>
                    <label
                      htmlFor="guardianEmail"
                      className="block text-sm font-medium"
                    >
                      Email *
                    </label>
                    <Field
                      name="guardianEmail"
                      type="email"
                      className="border border-gray-300 w-full px-4 py-2 rounded-md"
                    />
                    <ErrorMessage
                      name="guardianEmail"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>
                </div>


                <div className="mt-4">
                  <label
                    htmlFor="guardianAddress"
                    className="block text-sm font-medium"
                  >
                    Address *
                  </label>
                  <Field
                    name="guardianAddress"
                    type="email"
                    className="border border-gray-300 w-full px-4 py-2 rounded-md"
                  />
                  <ErrorMessage
                    name="guardianAddress"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                </div>
                <div className="flex justify-end items-end ">
             <Link to={"/dashboard/add-student"}
              // onClick={handleDetails}
              className="flex gap-1 cursor-pointer items-center bg-primary text-white py-2 h-fit rounded-[10px] px-5"
            >
              + <h4 className="text-white whitespace-nowrap">Add Parent</h4>
            </Link>
          </div>
                </div>

                <div className="flex gap-2 items-center mt-3 ">
                <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 accent-green-600  bg-[#D9D9D9] border-gray-300 rounded focus:ring-blue-500"
              />
              <h6 className="text-[#969696] text-[10px]">Same as student</h6>
                </div>
              </div>

              <div className="flex justify-end gap-4 ">
              <Link to={"/dashboard/add-student"}
              // onClick={handleDetails}
              className="flex gap-1 cursor-pointer items-center bg-primary text-white py-3 h-fit rounded-[10px] px-14"
            >
            <h4 className="text-white whitespace-nowrap">Save</h4>
            </Link>

            <Link to={"/dashboard/add-student"}
              // onClick={handleDetails}
              className="flex gap-1 cursor-pointer items-center border border-primary  py-3 h-fit rounded-[10px] px-5"
            >
             <h4 className="text-primary whitespace-nowrap">Save as draft</h4>
            </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  );
};

export default AddStudent;
