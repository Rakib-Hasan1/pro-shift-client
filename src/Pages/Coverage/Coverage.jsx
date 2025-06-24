import React from "react";
import BangladeshMap from "./BangladeshMap";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenters = useLoaderData();

  return (
    <div className="px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-6">
        We are available in 64 districts
      </h1>

      <BangladeshMap serviceCenters={serviceCenters} />
    </div>
  );
};

export default Coverage;
