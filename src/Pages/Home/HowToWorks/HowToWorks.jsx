import React from "react";
import { FaRoute } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import { FaBuildingCircleCheck } from "react-icons/fa6";

const HowToWorks = () => {
  return (
    <div data-aos="zoom-in-up" className="w-11/12 mx-auto">
      <h2 className="font-extrabold text-3xl">How it Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-8">
        <div className="space-y-4 bg-base-100 hover:shadow-sm rounded-xl p-6">
          <p>
            <FaRoute size={50} />
          </p>
          <p className="font-bold text-xl">Booking Pick & Drop</p>
          <p className="font-medium">
            Easily schedule pickups and drops for your parcels — quick,
            convenient, and reliable.
          </p>
        </div>
        <div className="space-y-4 bg-base-100 hover:shadow-sm rounded-xl p-6">
          <p>
            <FaHandHoldingUsd size={50} />
          </p>
          <p className="font-bold text-xl">Cash On Delivery</p>
          <p className="font-medium">
            Accept payments at the doorstep. Hassle-free cash collection from
            your customers.
          </p>
        </div>
        <div className="space-y-4 bg-base-100 hover:shadow-sm rounded-xl p-6">
          <p>
            <FaTruckMoving size={50} />
          </p>
          <p className="font-bold text-xl">Delivery Hub</p>
          <p className="font-medium">
            Operate through our strategically located hubs for faster and more
            efficient delivery.
          </p>
        </div>
        <div className="space-y-4 bg-base-100 hover:shadow-sm rounded-xl p-6">
          <p>
            <FaBuildingCircleCheck size={50} />
          </p>
          <p className="font-bold text-xl">Booking SME & Corporate</p>
          <p className="font-medium">
            Specialized delivery solutions tailored for SMEs and corporate
            clients with bulk needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToWorks;
