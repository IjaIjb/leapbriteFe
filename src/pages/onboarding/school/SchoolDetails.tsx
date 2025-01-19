import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";
import * as Yup from "yup";
import COUNTRYDATA from "../../../assets/country-list.json";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthApis } from "../../../apis/authApis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SchoolDetails = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setShowConfirmPassword] = useState(false);
  const [countryValue, setCountryValue] = useState([]);
  const [showScreen, setShowScreen] = useState(1);
  const history = useHistory();

  const optionCountries: any = [];
  const optionState: any = [];
  COUNTRYDATA.map((item) => {
    optionCountries.push({ label: item.name, value: item.name });
  });
  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      height: 46,
      minHeight: 46,
      background: "#FFFFFF",
      color: "#1F2337",
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: "#1F2337", // Custom colour
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: "none",
    }),
    menu: (base: any) => ({
      ...base,
      background: "white",
      color: "#1F2337",
    }),
    input: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        color: "black",
      };
    },
    singleValue: (defaultStyles: any) => {
      return {
        ...defaultStyles,
        color: "black",
      };
    },
  };

  function customTheme(theme: any) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#bac9e8",
        primary: "#0084CE",
      },
    };
  }

  const [uploadedImages, setUploadedImages] = useState({
    cac_file: null,
    ed_file: null,
    formc_file: null,
  });

  const handleFileChange = (e: any) => {
    const { name } = e.target; // Input name (e.g., "cac_file", "ed_file")
    const file = e.target.files[0];
  
    if (file) {
      if (file.type !== "application/pdf") {
        return alert("Only PDF files are allowed.");
      }
  
      setUploadedImages((prev) => ({
        ...prev,
        [name]: file, // Store the actual file object for FormData
      }));
    }
  };
  

  const initialData = {
    user_type: "school",
    email: "",
    password: "",
    password_confirmation: "",
    school_name: "",
    year_founded: "",
    category: "",
    type: "",
    country: "",
    state: "",
    full_address: "",
    student_number: 0,
    cac_file: "",
    ed_file: "",
    formc_file: "",
    full_name: "",
    role: "",
    phone_number: ""

  };

  const FILE_SIZE = 2 * 1024 * 1024; // 2MB
  const SUPPORTED_FORMATS = ["application/pdf", "image/jpeg", "image/png"];
  
  const validation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Required"),
    school_name: Yup.string().required("School name is required"),
    year_founded: Yup.string().required("Year founded is required"),
    category: Yup.string().required("Category is required"),
    type: Yup.string().required("Type is required"),
    full_address: Yup.string().required("Full address is required"),
    student_number: Yup.number().required("Student number is required"),
    phone_number: Yup.string().required("Phone number is required"),
  
    // File Validations
    cac_file: Yup.mixed()
      .required("CAC file is required")
      .test("fileSize", "File too large (Max 2MB)", (value:any) =>
        value ? value.size <= FILE_SIZE : false
      )
      .test("fileFormat", "Unsupported file format", (value:any) =>
        value ? SUPPORTED_FORMATS.includes(value.type) : false
      ),
  
    ed_file: Yup.mixed()
      .required("ED file is required")
      .test("fileSize", "File too large (Max 2MB)", (value:any) =>
        value ? value.size <= FILE_SIZE : false
      )
      .test("fileFormat", "Unsupported file format", (value:any) =>
        value ? SUPPORTED_FORMATS.includes(value.type) : false
      ),
  
    formc_file: Yup.mixed()
      .required("Form C file is required")
      .test("fileSize", "File too large (Max 2MB)", (value:any) =>
        value ? value.size <= FILE_SIZE : false
      )
      .test("fileFormat", "Unsupported file format", (value:any) =>
        value ? SUPPORTED_FORMATS.includes(value.type) : false
      ),
  });
  

  const onSubmit = async (values:any) => {
  
      // if (values?.password !== values?.confirm_password) {
      //   return toast.error("Password does not match");
      // }
  
      // Create the data object for JSON
      const requestData = {
 user_type: "school",
    email: values.email || "",
    password:  values.password ||"",
    password_confirmation: values.password_confirmation || "",
    school_name: values.school_name || "",
    year_founded: values.year_founded
    ? new Date(values.year_founded).getFullYear().toString()
    : "",
    category: values.category || "",
    type: values.type || "",
    country: values.country || "",
    state: values.state || "",
    full_address: values.full_address ||"",
    student_number: values.student_number || 0,
    cac_file: uploadedImages.cac_file || "",
    ed_file: uploadedImages.ed_file || "",
    formc_file: uploadedImages.formc_file || "",
    full_name: values.full_name || "",
    role: values.role || "",
    phone_number: values.phone_number ||""

      };
      console.log(requestData)

      try {
        // Register the user with JSON data
        const response = await AuthApis.register(requestData);
     
        if (response?.data?.status === true) {
         toast.success("Login Successful");
          history.push("/verifying"); // Navigate to the verification screen
          window.scrollTo(0, 0); // Scroll to top
        } else {
          toast.error('An error occured');
        }
  
        // toast.success(response?.data?.message);
      } catch (error) {
        console.log(error);
        // toast.error("Offline");
      }
  // console.log(values)

  };
  
  

  return (
    <div>
      <div className="flex justify-center px-5 pb-10">
        <div className="max-w-[700px] w-full">
          <div className="sticky top-0 z-20 pt-10 bg-white">
            <div className="flex justify-center">
              <h4 className="sm:text-[24px] text-[20px] text-center font-bold">
                {showScreen === 1
                  ? "School Details"
                  : showScreen === 2
                  ? "Upload Documents"
                  : "Personal Details"}
              </h4>
            </div>
            <h4 className="sm:text-[16px] text-[14px] text-center py-2 text-[#969696]">
              {showScreen === 1
                ? "Enter your school details here"
                : showScreen === 2
                ? "Upload your documents here"
                : "Enter your personal details"}
            </h4>

            <div className="flex items-center">
              {/* First Section */}
              <div
                className={`w-full sm:p-2 p-1 flex gap-2 rounded-full border items-center ${
                  showScreen === 1 ? "border-primary" : "border-[#DADADA]"
                }`}
              >
                {showScreen === 1 ? (
                  <div className="sm:h-6 sm:w-6 h-4 w-4 rounded-full border flex justify-center sm:text-[14px] text-[10px] items-center border-primary">
                    1
                  </div>
                ) : (
                  <IoMdCheckmarkCircle className="sm:h-6 sm:w-6 h-4 w-4 text-primary" />
                )}
                <h5 className="sm:text-[14px] text-[10px] font-semibold whitespace-nowrap">
                  School Details
                </h5>
              </div>

              <hr className="w-full" />
              {/* Second Section */}
              <div
                className={`w-full sm:p-2 p-1 flex gap-2 rounded-full border items-center ${
                  showScreen === 2 ? "border-primary" : "border-[#DADADA]"
                }`}
              >
                {showScreen === 1 || showScreen === 2 ? (
                  <div className="sm:h-6 sm:w-6 h-4 w-4 rounded-full border flex justify-center sm:text-[14px] text-[10px] items-center border-primary">
                    2
                  </div>
                ) : (
                  <IoMdCheckmarkCircle className="sm:h-6 sm:w-6 h-4 w-4 text-primary" />
                )}
                <h5 className="sm:text-[14px] text-[10px] text-[#969696] whitespace-nowrap">
                  Upload Documents
                </h5>
              </div>

              {/* Line Between Sections */}
              <hr className="w-full" />

              {/* Third Section */}
              <div
                className={`w-full sm:p-2 p-1 flex gap-2 rounded-full border items-center ${
                  showScreen === 3 ? "border-primary" : "border-[#DADADA]"
                }`}
              >
                <div className="sm:h-6 sm:w-6 h-4 w-4 rounded-full border flex justify-center sm:text-[14px] text-[10px] items-center border-primary">
                  3
                </div>
                <h5 className="sm:text-[14px] text-[12px] text-[#969696] whitespace-nowrap">
                  Personal Details
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-8 px-3 md:px-10 gap-8">
            <Formik
              initialValues={initialData}
              validationSchema={validation}
              onSubmit={onSubmit}
            >
              {({ values, setFieldValue,handleChange }) => (
                <Form className="w-full  mt-10 lg:mt-10 mb-6 flex flex-col justify-between">
                  <div className={showScreen === 1 ? "block" : "hidden"}>
                    <div className=" mb-5 relative">
                      <label
                            className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="school_name"
                          >
                           School Name
                          </label> 
                      <Field
                        className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                        name="school_name"
                        type="text"
                        id="school_name"
                        placeholder="School Name"
                        onChange={(e:any) => setFieldValue("school_name", e.target.value)}
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="school_name" />
                      </p>
                    </div>
                    <div className=" mb-5 relative">
                    <label
                            className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="year_founded"
                          >
                            Year Founded
                          </label> 
                      <Field
                        className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                        name="year_founded"
                        type="date"
                        id="year_founded"
                        placeholder="Year Founded"
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="year_founded" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                              className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="category"
                            >
                              Category
                            </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
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
                          Good
                        </option>
                        <option className="" value="M Bus (5)">
                          Better
                        </option>
                        <option className="" value="Sedan (3)">
                          Best
                        </option>
                      </Field>
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="category" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                              className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="type"
                            >
                             Type
                            </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                        name="type"
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
                        placeholder="Type"
                      >
                        <option label="Select"></option>
                        <option className="" value="Bus (12)">
                          Good
                        </option>
                        <option className="" value="M Bus (5)">
                          Better
                        </option>
                        <option className="" value="Sedan (3)">
                          Best
                        </option>
                      </Field>
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="type" />
                      </p>
                    </div>

                    <div className="mb-5 relative">
                      <label
                        htmlFor="country"
                        className="pb-2 text-[#969696] text-[16px] md:text-[20px] font-[500] "
                      >
                        Country
                      </label>
                      <Select
                        name="country"
                        options={optionCountries}
                        isSearchable
                        theme={customTheme}
                        styles={customStyles}
                        // defaultInputValue={props.customer!.country}
                        placeholder="select country"
                        noOptionsMessage={() => "Country not found"}
                        onChange={(options: any) => {
                          setFieldValue("country", options!.value);
                          setCountryValue(options!.country);
                          optionState?.splice(0, optionState!.length);

                          COUNTRYDATA.filter(
                            (item) => item.iso2 === options!.value
                          ).map((item) => {
                            item.states.map((values) =>
                              optionState!.push({
                                label: values.name,
                                value: values.name,
                              })
                            );
                          });
                        }}
                      />
                      <div className="flex justify-between mt-1">
                        <p className="text-red-700 text-xs ">
                          <ErrorMessage name="country" />
                        </p>
                      </div>
                    </div>

                    <div className="mb-5 relative">
                      <label
                      htmlFor="state"
                      className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                      >
                      State
                    </label>
                      <CreatableSelect
                        name="state"
                        options={optionState}
                        isSearchable
                        isClearable
                        theme={customTheme}
                        styles={customStyles}
                        placeholder="select a state"
                        noOptionsMessage={() => "select a Country"}
                        onChange={(options: any) => {
                          setFieldValue("state", options!.value);
                        }}
                      />
                    </div>

                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                        htmlFor="full_address"
                          >
                            Full Address
                          </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                        name="full_address"
                        type="text"
                        id="full_address"
                        placeholder="Full Address"
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="full_address" />
                      </p>
                    </div>

                    {/* <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="email"
                          >
                            Email Address
                          </label>
                          <Field
                            className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none border-[#D9D9D9] "
                            name="email"
                            type="email"
                            id="email"
                            placeholder=""
                          />
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="email" />
                          </p>
                        </div> */}

                    <div className=" mb-5 relative">
                      <label
                                                        className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                                                        htmlFor="student_number"
                          >
                           Student Number (Range)
                          </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                        name="student_number"
                        type="number"
                        id="student_number"
                        placeholder="Student Number(Range)"
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="student_number" />
                      </p>
                    </div>
                  </div>
                  <div className={showScreen === 2 ? "block" : "hidden"}>
      <div className="flex flex-col gap-5 pt-2 pb-12">
        {/* Corporate Affairs Certificate */}
        <div className="w-full">
          <label
            className="text-[#969696] text-[13px] md:text-[16px] font-[500]"
            htmlFor="cac_file"
          >
            Corporate Affairs Certificate
          </label>
          <div className="mt-2 flex justify-center items-center w-full h-[150px] border-dashed border-2 border-gray-300 bg-[#F7F7F7] rounded-md cursor-pointer hover:border-primary">
            <input
              id="cac_file"
              name="cac_file"
              type="file"
              className="hidden"
              accept="application/pdf" // Only allow PDF files
              onChange={handleFileChange}
            />
            <label
              htmlFor="cac_file"
              className="text-gray-500 text-sm md:text-base flex items-center justify-center w-full h-full"
            >
              {uploadedImages.cac_file ? (
                <img
                  src={uploadedImages.cac_file}
                  alt="Corporate Affairs Certificate"
                  className="h-full object-contain"
                />
              ) : (
                "Click to upload or drag and drop files here"
              )}
            </label>
          </div>
        </div>

        {/* Education Certificate */}
        <div className="w-full">
          <label
            className="text-[#969696] text-[13px] md:text-[16px] font-[500]"
            htmlFor="ed_file"
          >
            Education Certificate
          </label>
          <div className="mt-2 flex justify-center items-center w-full h-[150px] border-dashed border-2 border-gray-300 bg-[#F7F7F7] rounded-md cursor-pointer hover:border-primary">
            <input
              id="ed_file"
              name="ed_file"
              type="file"
              className="hidden"
              accept="application/pdf" // Only allow PDF files
              onChange={handleFileChange}
            />
            <label
              htmlFor="ed_file"
              className="text-gray-500 text-sm md:text-base flex items-center justify-center w-full h-full"
            >
              {uploadedImages.ed_file ? (
                <img
                  src={uploadedImages.ed_file}
                  alt="Education Certificate"
                  className="h-full object-contain"
                />
              ) : (
                "Click to upload or drag and drop files here"
              )}
            </label>
          </div>
        </div>

        {/* Form C Certificate */}
        <div className="w-full">
          <label
            className="text-[#969696] text-[13px] md:text-[16px] font-[500]"
            htmlFor="formc_file"
          >
            Form C Certificate
          </label>
          <div className="mt-2 flex justify-center items-center w-full h-[150px] border-dashed border-2 border-gray-300 bg-[#F7F7F7] rounded-md cursor-pointer hover:border-primary">
            <input
              id="formc_file"
              name="formc_file"
              type="file"
              className="hidden"
              accept="application/pdf" // Only allow PDF files
              onChange={handleFileChange}
            />
            <label
              htmlFor="formc_file"
              className="text-gray-500 text-sm md:text-base flex items-center justify-center w-full h-full"
            >
              {uploadedImages.formc_file ? (
                <img
                  src={uploadedImages.formc_file}
                  alt="Form C Certificate"
                  className="h-full object-contain"
                />
              ) : (
                "Click to upload or drag and drop files here"
              )}
            </label>
          </div>
        </div>
      </div>
    </div>

                  <div className={showScreen === 3 ? "block" : "hidden"}>
                    <div className=" mb-5 relative">
                      <label
                        className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="full_name"
                          >
                          Full Name
                          </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                        name="full_name"
                        type="text"
                        id="full_name"
                        placeholder="Full Name"
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="full_name" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                            className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="role"
                            >
                            Role
                            </label>
                      <Field
                        className=" block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                        name="role"
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
                        placeholder="Role"
                      >
                        <option label="Role"></option>
                        <option className="" value="Bus (12)">
                          User
                        </option>
                        <option className="" value="M Bus (5)">
                          Guardian
                        </option>
                        <option className="" value="Sedan (3)">
                          Best
                        </option>
                      </Field>
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="role" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                      <label
                          className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="email"
                          >
                         Email
                          </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Email"
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    {/* <div className=" mb-5 relative">
                      <label
                              className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                              htmlFor="last_name"
                            >
                              Vehicle Type
                            </label>
                      <Field
                        className=" block w-full h-12 border-[1px] text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0]  px-3 rounded-[10px] focus:outline-primary "
                        name="sex"
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
                        placeholder="Sex"
                      >
                        <option label="Sex"></option>
                        <option className="" value="Bus (12)">
                          Male
                        </option>
                        <option className="" value="M Bus (5)">
                          Female
                        </option>
                        <option className="" value="Sedan (3)">
                          Others
                        </option>
                      </Field>
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="sex" />
                      </p>
                    </div> */}
                    <div className=" mb-5 relative">
                      <label
                          className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="phone_number"
                          >
                           Phone Number
                          </label>
                      <Field
                        className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                        name="phone_number"
                        type="text"
                        id="phone_number"
                        placeholder=""
                      />
                      <p className="text-red-700 text-xs mt-1 ">
                        <ErrorMessage name="school_name" />
                      </p>
                    </div>

                    <div className=" mb-5 relative">
                          <label
                            className=" text-[#2B2C2B] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <div>
                            <Field
                                                    className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                             
                                             name="password"
                              id="password"
                              type={!showPassword ? "password" : "text"}
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowPassword(() => !showPassword)
                              }
                              className={`absolute right-4 top-12`}
                            >
                              {!showPassword ? (
                                <AiOutlineEyeInvisible className="" />
                              ) : (
                                <AiOutlineEye className="" />
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="password" />
                          </p>
                        </div>
                        <div className=" mb-5 relative">
                          <label
                          className=" text-[#969696] text-[16px] md:text-[20px] font-[500] "
                            htmlFor="password_confirmation"
                          >
                           Confirm Password
                          </label>
                          <div>
                            <Field
                                                    className="mt-1 block w-full h-12 border-[0.5px]  pl-3 rounded-[10px] focus:outline-none text-[#969696] bg-[#F7F7F7]  border-[#E0E0E0] "
                                                    name="password_confirmation"
                              id="password_confirmation"
                              type={!confirmPassword ? "password" : "text"}
                              placeholder=""
                            />
                            <button
                              type="button"
                              role="button"
                              aria-label="show password"
                              title=" show password"
                              onClick={() =>
                                setShowConfirmPassword(() => !confirmPassword)
                              }
                              className={`absolute right-4 top-12`}
                            >
                              {!confirmPassword ? (
                                <AiOutlineEyeInvisible className="" />
                              ) : (
                                <AiOutlineEye className="" />
                              )}
                            </button>
                          </div>
                          <p className="text-red-700 text-xs mt-1 ">
                            <ErrorMessage name="password_confirmation" />
                          </p>
                        </div>
                  </div>
                  

                  {showScreen === 1 ? (
                    <div className="flex justify-center">
                      <button
                        // type="submit"
                        onClick={() => setShowScreen(2)}
                        // disabled={isSubmitting} // Disable button if no option is selected
                        className={`disabled:bg-gray-500  flex gap-2 items-center py-2 w-fit px-6 bg-primary text-white rounded-full  hover:bg-primary/[70%]
}`}
                      >
                        {/* {isSubmitting ? <LoadingSpinner /> : "Continue"}
                        {!isSubmitting && <FaArrowRight />} */}
                        contininue
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center">
                      <div
                        onClick={
                          showScreen === 2
                            ? () => setShowScreen(1)
                            : () => setShowScreen(2)
                        }
                        // disabled={isSubmitting} // Disable button if no option is selected
                        className={`disabled:bg-gray-500  flex gap-2 items-center py-2 w-fit px-6 bg-[#E0E0E0] rounded-full 
}`}
                      >Back
                        {/* {!isSubmitting && <FaArrowLeft />}
                        {isSubmitting ? <LoadingSpinner /> : "Back"} */}
                      </div>

                      <button
                         type="submit"
                        //  onClick={onSubmit}
                       
                        onClick={
                          showScreen === 2
                            ? () => setShowScreen(3)
                            : () => onSubmit(values)
                        }
                        // disabled={isSubmitting} // Disable button if no option is selected
                        className={`disabled:bg-gray-500  flex gap-2 items-center py-2 w-fit px-6 bg-primary text-white rounded-full  hover:bg-primary/[70%]
}`}
                      >Continue
                        {/* {isSubmitting ? <LoadingSpinner /> : "Contine"}
                        {!isSubmitting && <FaArrowRight />} */}
                      </button>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
            <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SchoolDetails;
