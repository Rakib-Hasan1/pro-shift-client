import React from "react";

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;
  return (
    <div className="bg-white rounded-xl shadow p-6  hover:bg-primary transition space-y-3 border border-gray-200 text-center">
      <div className="flex justify-center ">
        <Icon className="text-4xl text-black" />
      </div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
