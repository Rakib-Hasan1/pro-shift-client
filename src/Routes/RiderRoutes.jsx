import React from "react";
import useAuth from "../hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import LoadingEffect from "../Pages/Shared/LoadingEffect/LoadingEffect";

const RiderRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();

  if (loading || roleLoading) {
    return <LoadingEffect></LoadingEffect>;
  }

  if (!user || role !== "rider") {
    return (
      <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    );
  }

  return children;
};

export default RiderRoutes;
