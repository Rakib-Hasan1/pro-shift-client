import React from "react";
import useUserRole from "../../../Hooks/useUserRole";
import LoadingEffect from "../../Shared/LoadingEffect/LoadingEffect";
import UserDashboard from "./UserDashboard";
import RiderDashboard from "./RiderDashboard";
import AdminDashboard from "./AdminDashboard";
import Forbidden from "../../Forbidden/Forbidden";

const DashboardHome = () => {
  const { role, roleLoading } = useUserRole();

  if (roleLoading) {
    return (
      <div>
        <LoadingEffect></LoadingEffect>
      </div>
    );
  }

  if (role === "user") {
    return <UserDashboard></UserDashboard>;
  } else if (role === "rider") {
    return <RiderDashboard></RiderDashboard>;
  } else if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  } else {
    return <Forbidden></Forbidden>;
  }
};

export default DashboardHome;
