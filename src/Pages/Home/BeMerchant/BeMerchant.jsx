import React from "react";
import merchant from "../../../assets/location-merchant.png";

const BeMerchant = () => {
  return (
    <div>
      <div className="divider divider-start"></div>
      <div className="bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] p-20 rounded-2xl my-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={merchant} className="" />
          <div>
            <h1 className="text-5xl font-bold text-white">
              Merchant and Customer Satisfaction is Our First Priority
            </h1>
            <p className="py-6 text-white">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex gap-3">
              <button className="btn bg-lime-400 border-none rounded-full text-black shadow-none font-bold text-lg p-6">
                Become a Merchant
              </button>
              <button className="btn btn-outline hover:bg-primary hover:text-black border-lime-400 font-bold text-lg rounded-full text-primary shadow-none p-6">
                Earn with ProFast Courier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeMerchant;
