import React from "react";
import casio from "../../../assets/brands/casio.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import amazon from "../../../assets/brands/amazon.png";
import moonstar from "../../../assets/brands/moonstar.png";
import start from "../../../assets/brands/start.png";
import startPeople from "../../../assets/brands/start-people 1.png";
import randstard from "../../../assets/brands/randstad.png";
import Marquee from "react-fast-marquee";

const SalesTeam = () => {
  return (
    <div className="my-12">
      <h2 className="font-extrabold text-3xl text-center mb-8">
        We've helped thousands of sales teams
      </h2>
      <Marquee>
        <div className="flex items-center justify-center my-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
            <img src={casio} alt="" />
            <img src={amazon} alt="" />
            <img src={moonstar} alt="" />
            <img src={start} alt="" />
            <img src={startPeople} alt="" />
            <img src={randstard} alt="" />
            <img src={amazon_vector} alt="" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default SalesTeam;
