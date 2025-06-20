import React from "react";
import reviewImg from "../../../assets/customer-top.png";

const CustomerReview = () => {
  return (
    <div className="my-12">
      <div className="flex flex-col justify-center items-center gap-3">
        <img src={reviewImg} className="max-w-3xs" alt="Review" />
        <h2 className="font-extrabold text-3xl">
          What our customers are sayings
        </h2>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <h2 className="font-extrabold text-3xl text-center">......Working on it.......</h2>
    </div>
  );
};

export default CustomerReview;
