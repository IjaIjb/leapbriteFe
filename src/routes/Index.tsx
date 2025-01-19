import { lazy } from "react";

const HomePage = lazy(() => import("../pages/onboarding/getStarted/GetStarted"));
const SchoolDetails = lazy(() => import("../pages/onboarding/school/SchoolDetails"));
const VerifyPage = lazy(() => import("../pages/onboarding/Verifying"));
const VerifySuccessPage = lazy(() => import("../pages/onboarding/SuccessVrification"));
const SchoolHome = lazy(() => import("../pages/dashboard/shoolhome/SchoolHome"));
const SchoolPayments = lazy(() => import("../pages/dashboard/schoolPayments/SchoolPayments"));
const SchoolInvoice = lazy(() => import("../pages/dashboard/schoolInvoice/SchoolInvoice"));
const SchoolStudents = lazy(() => import("../pages/dashboard/schoolStudents/SchoolStudents"));
const StudentDetails = lazy(() => import("../pages/dashboard/schoolStudents/StudentDetails"));
const AddStudent = lazy(() => import("../pages/dashboard/schoolStudents/AddStudent"));
const SchoolSettings = lazy(() => import("../pages/dashboard/settings/Settings"));
const SchoolReport = lazy(() => import("../pages/dashboard/report/Report"));
const SchoolHelp = lazy(() => import("../pages/dashboard/help/Help"));
const SchoolClasses = lazy(() => import("../pages/dashboard/schoolClasses/SchoolClasses"));

const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/school-details",
      component: SchoolDetails,
    },
    {
      path: "/verifying",
      component: VerifyPage,
    },
    {
      path: "/verification/successful",
      component: VerifySuccessPage,
    },
    {
      path: "/dashboard/home",
      component: SchoolHome,
    },
    {
      path: "/dashboard/payments",
      component: SchoolPayments,
    },
    {
      path: "/dashboard/invoice",
      component: SchoolInvoice,
    },
    {
      path: "/dashboard/students",
      component: SchoolStudents,
    },
    {
      path: "/dashboard/student-details/:studentId",
      component: StudentDetails,
    },
    {
      path: "/dashboard/add-student",
      component: AddStudent,
    },
    {
      path: "/dashboard/classes",
      component: SchoolClasses,
    },
    {
      path: "/dashboard/settings",
      component: SchoolSettings,
    },
    {
      path: "/dashboard/report",
      component: SchoolReport,
    },
    {
      path: "/dashboard/help",
      component: SchoolHelp,
    },
    
  ];
  
  export default routes;