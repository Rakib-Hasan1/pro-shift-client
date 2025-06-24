import React from "react";
import { Outlet } from "react-router";
import authBanner from "../assets/authImage.png";
import Logo from "../Pages/Shared/ZapShiftLogo/Logo";

const AuthLayouts = () => {
  return (
    <div className="bg-base-100 relative">
      <div className="flex flex-col lg:flex-row-reverse items-center">
        <div className="flex-1 bg-[#FAFDF0] lg:min-h-screen">
          <img src={authBanner} className="w-full" />
        </div>
        <div className="lg:flex-1">
          <div className="m-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="absolute top-5 left-6 lg:top-10 lg:left-16">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default AuthLayouts;
