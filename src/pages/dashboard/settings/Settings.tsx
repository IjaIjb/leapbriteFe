import React, { useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import UserProfile from "./UserProfile";
import PaymentGateway from "./PaymentGateway";
import RolePermission from "./RolePermission";
import Notifications from "./Notifications";
import Appearance from "./Appearance";

const Settings = () => {
  const initialSettingState = {
    userProfileElement: true,
    paymentGatewayElement: false,
    rolesPermissionElement: false,
    notificationElement: false,
    appearanceElement: false,
  };

  const [settingValues, setSettingsValues] = useState({
    ...initialSettingState,
  });

  const handleUserProfileState = (e: any) => {
    e.preventDefault();
    setSettingsValues({
      userProfileElement: true,
      paymentGatewayElement: false,
      rolesPermissionElement: false,
      notificationElement: false,
      appearanceElement: false,
    });
  };

  const handlePaymentGatewayState = (e: any) => {
    e.preventDefault();
    setSettingsValues({
      userProfileElement: false,
      paymentGatewayElement: true,
      rolesPermissionElement: false,
      notificationElement: false,
      appearanceElement: false,
    });
  };

  const handleRolesPermissionState = (e: any) => {
    e.preventDefault();
    setSettingsValues({
      userProfileElement: false,
      paymentGatewayElement: false,
      rolesPermissionElement: true,
      notificationElement: false,
      appearanceElement: false,
    });
  };

  const handleNotificationState = (e: any) => {
    e.preventDefault();
    setSettingsValues({
      userProfileElement: false,
      paymentGatewayElement: false,
      rolesPermissionElement: false,
      notificationElement: true,
      appearanceElement: false,
    });
  };

  const handleAppearanceState = (e: any) => {
    e.preventDefault();
    setSettingsValues({
      userProfileElement: false,
      paymentGatewayElement: false,
      rolesPermissionElement: false,
      notificationElement: false,
      appearanceElement: true,
    });
  };

  const showProfileConnector = () => {
    return (
      <>
        {/* show general setting */}
        {settingValues.userProfileElement && (
          <>
            <div className="">
              <UserProfile />
            </div>
          </>
        )}

        {/* show Rating */}
        {settingValues.paymentGatewayElement && (
          <>
            <div className="">
              <PaymentGateway />
            </div>
          </>
        )}

        {/* show Security */}
        {settingValues.rolesPermissionElement && (
          <>
            <div className="">
              <RolePermission />
            </div>
          </>
        )}

        {settingValues.notificationElement && (
          <>
            <div className="">
              <Notifications />
            </div>
          </>
        )}
        {settingValues.appearanceElement && (
          <>
            <div className="">
              <Appearance />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <DashboardLayout>
      <div>
        <div>
          {/* <PageTitle title="User Management Overview" /> */}

          <ol className="list-none flex items-center justify-between mb-5 ">
            <li
              className={`${
                settingValues.userProfileElement
                  ? "border-primary border"
                  : "border-[#E0E0E0] border"
              }  px-4 text-[12px] py-2 whitespace-nowrap flex gap-2 items-center rounded-full bg-white hover:border-primary cursor-pointer`}
              onClick={(e: any) => handleUserProfileState(e)}
            >
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="29" height="29" rx="14.5" fill="#EFF9FF" />
                <path
                  d="M15.0002 12.9166C16.7491 12.9166 18.1668 11.4988 18.1668 9.74992C18.1668 8.00102 16.7491 6.58325 15.0002 6.58325C13.2513 6.58325 11.8335 8.00102 11.8335 9.74992C11.8335 11.4988 13.2513 12.9166 15.0002 12.9166Z"
                  fill="#0084CE"
                />
                <path
                  d="M21.3332 18.8542C21.3332 20.8215 21.3332 22.4167 14.9998 22.4167C8.6665 22.4167 8.6665 20.8215 8.6665 18.8542C8.6665 16.887 11.5023 15.2917 14.9998 15.2917C18.4974 15.2917 21.3332 16.887 21.3332 18.8542Z"
                  fill="#0084CE"
                />
              </svg>
              User Profile
            </li>

            <li
              className={`${
                settingValues.paymentGatewayElement
                  ? "border-primary border"
                  : "border-[#E0E0E0] border"
              }  px-4 text-[12px] py-2 whitespace-nowrap flex gap-2 items-center rounded-full bg-white hover:border-primary cursor-pointer`}
              onClick={(e: any) => handlePaymentGatewayState(e)}
            >
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="29" height="29" rx="14.5" fill="#EFF9FF" />
                <path
                  d="M10.5 9.5C9.83696 9.5 9.20107 9.76339 8.73223 10.2322C8.26339 10.7011 8 11.337 8 12V12.5H22V12C22 11.337 21.7366 10.7011 21.2678 10.2322C20.7989 9.76339 20.163 9.5 19.5 9.5H10.5ZM22 13.5H8V17C8 17.663 8.26339 18.2989 8.73223 18.7678C9.20107 19.2366 9.83696 19.5 10.5 19.5H19.5C20.163 19.5 20.7989 19.2366 21.2678 18.7678C21.7366 18.2989 22 17.663 22 17V13.5ZM17.5 16.5H19.5C19.6326 16.5 19.7598 16.5527 19.8536 16.6464C19.9473 16.7402 20 16.8674 20 17C20 17.1326 19.9473 17.2598 19.8536 17.3536C19.7598 17.4473 19.6326 17.5 19.5 17.5H17.5C17.3674 17.5 17.2402 17.4473 17.1464 17.3536C17.0527 17.2598 17 17.1326 17 17C17 16.8674 17.0527 16.7402 17.1464 16.6464C17.2402 16.5527 17.3674 16.5 17.5 16.5Z"
                  fill="#0084CE"
                />
              </svg>
              Payment Gateway
            </li>

            <li
              className={`${
                settingValues.rolesPermissionElement
                  ? "border-primary border"
                  : "border-[#E0E0E0] border"
              }  px-4 text-[12px] py-2 whitespace-nowrap flex gap-2 items-center rounded-full bg-white hover:border-primary cursor-pointer`}
              onClick={(e: any) => handleRolesPermissionState(e)}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="29" height="29" rx="14.5" fill="#EFF9FF" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1665 7.83343C10.2824 7.83343 9.4346 8.18462 8.80948 8.80974C8.18436 9.43486 7.83317 10.2827 7.83317 11.1668C7.83317 12.0508 8.18436 12.8987 8.80948 13.5238C9.4346 14.1489 10.2824 14.5001 11.1665 14.5001C12.0506 14.5001 12.8984 14.1489 13.5235 13.5238C14.1486 12.8987 14.4998 12.0508 14.4998 11.1668C14.4998 10.2827 14.1486 9.43486 13.5235 8.80974C12.8984 8.18462 12.0506 7.83343 11.1665 7.83343ZM9.49984 15.3334C8.61578 15.3334 7.76794 15.6846 7.14281 16.3097C6.51769 16.9349 6.1665 17.7827 6.1665 18.6668V19.5001C6.1665 19.9421 6.3421 20.366 6.65466 20.6786C6.96722 20.9912 7.39114 21.1668 7.83317 21.1668H14.4998C14.9419 21.1668 15.3658 20.9912 15.6783 20.6786C15.9909 20.366 16.1665 19.9421 16.1665 19.5001V18.6668C16.1665 17.7827 15.8153 16.9349 15.1902 16.3097C14.5651 15.6846 13.7172 15.3334 12.8332 15.3334H9.49984ZM15.5415 13.5876C15.9398 12.8709 16.1665 12.0459 16.1665 11.1668C16.1667 10.3196 15.9516 9.48634 15.5415 8.74509C16.0147 8.29737 16.6087 7.9981 17.2501 7.88428C17.8915 7.77046 18.5522 7.84708 19.1505 8.10466C19.7489 8.36225 20.2586 8.7895 20.6168 9.33363C20.975 9.87776 21.1658 10.5149 21.1658 11.1663C21.1658 11.8178 20.975 12.4549 20.6168 12.9991C20.2586 13.5432 19.7489 13.9704 19.1505 14.228C18.5522 14.4856 17.8915 14.5622 17.2501 14.4484C16.6087 14.3346 16.0147 14.0353 15.5415 13.5876ZM17.3882 21.1668C17.6715 20.6768 17.834 20.1076 17.834 19.5001V18.6668C17.8355 17.4366 17.382 16.2493 16.5607 15.3334H19.4998C20.3839 15.3334 21.2317 15.6846 21.8569 16.3097C22.482 16.9349 22.8332 17.7827 22.8332 18.6668V19.5001C22.8332 19.9421 22.6576 20.366 22.345 20.6786C22.0325 20.9912 21.6085 21.1668 21.1665 21.1668H17.3882Z"
                  fill="#0084CE"
                />
              </svg>
              User Roles & Permissions
            </li>

            <li
              className={`${
                settingValues.notificationElement
                  ? "border-primary border"
                  : "border-[#E0E0E0] border"
              }  px-4 text-[12px] py-2 whitespace-nowrap flex gap-2 items-center rounded-full bg-white hover:border-primary cursor-pointer`}
              onClick={(e: any) => handleNotificationState(e)}
            >
              <svg
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="29" height="29" rx="14.5" fill="#EFF9FF" />
                <g clip-path="url(#clip0_641_1514)">
                  <path
                    d="M15 8.66675C17.8992 8.66675 20.25 11.0252 20.25 13.9348V19.1667H9.75V13.9348C9.75 11.0252 12.1008 8.66675 15 8.66675ZM13.5417 19.7501H16.4583C16.4583 20.1369 16.3047 20.5078 16.0312 20.7813C15.7577 21.0548 15.3868 21.2084 15 21.2084C14.6132 21.2084 14.2423 21.0548 13.9688 20.7813C13.6953 20.5078 13.5417 20.1369 13.5417 19.7501Z"
                    fill="#0084CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_641_1514">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(8 7.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Notifications
            </li>

            <li
              className={`${
                settingValues.appearanceElement
                  ? "border-primary border"
                  : "border-[#E0E0E0] border"
              }  px-4 text-[12px] py-2 whitespace-nowrap flex gap-2 items-center rounded-full bg-white hover:border-primary cursor-pointer`}
              onClick={(e: any) => handleAppearanceState(e)}
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="29" height="29" rx="14.5" fill="#EFF9FF" />
                <g clip-path="url(#clip0_641_1519)">
                  <path
                    d="M18.9798 15.56L11.9098 8.49003L13.4098 6.99003C13.9098 6.43003 15.7098 6.52003 16.9198 7.31003C18.1298 8.11003 18.3498 8.59003 19.8298 9.41003C21.0098 10.05 22.2798 10.67 24.2798 10.26L18.9798 15.56ZM18.2698 16.27L11.1998 9.20003L9.42981 10.97C9.33711 11.0625 9.26356 11.1724 9.21338 11.2934C9.1632 11.4144 9.13737 11.5441 9.13737 11.675C9.13737 11.806 9.1632 11.9357 9.21338 12.0567C9.26356 12.1776 9.33711 12.2875 9.42981 12.38L10.4898 13.44C10.8798 13.83 10.8798 14.47 10.4898 14.86C9.88981 15.46 9.05981 15.97 8.27981 16.55C7.92982 16.81 7.57981 17.08 7.26981 17.39C5.92981 18.73 4.89982 20.58 5.89982 21.57C6.88982 22.57 8.73981 21.54 10.0798 20.21C10.3898 19.9 10.6598 19.55 10.9298 19.19C11.4998 18.41 12.0098 17.58 12.6198 16.98C12.7123 16.8873 12.8222 16.8138 12.9432 16.7636C13.0642 16.7134 13.1938 16.6876 13.3248 16.6876C13.4558 16.6876 13.5855 16.7134 13.7064 16.7636C13.8274 16.8138 13.9373 16.8873 14.0298 16.98L15.0898 18.04C15.4798 18.43 16.1098 18.43 16.4998 18.04L18.2698 16.27Z"
                    fill="#0084CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_641_1519">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(4.5 4.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Appearance
            </li>
          </ol>

          <div className="">{showProfileConnector()}</div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
