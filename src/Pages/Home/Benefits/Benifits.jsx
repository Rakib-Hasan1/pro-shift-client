import React from "react";
import logo1 from "../../../assets/live-tracking.png";
import logo2 from "../../../assets/safe-delivery.png";
// import logo3 from "../../../assets/tiny-deliveryman.png";

const Benefits = () => {
  return (
    <div>
      <div className="divider divider-start mb-8"></div>
      <div className="my-20">
        <div className="flex items-center gap-5 my-5 rounded-2xl bg-base-100 hover:shadow-sm p-5">
          <img src={logo1} alt="" />
          <div className="divider divider-horizontal divider-end"></div>
          <div>
            <h3 className="font-extrabold text-2xl mb-3">
              Live Parcel Tracking
            </h3>
            <p className="font-medium">
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 my-5 rounded-2xl bg-base-100 hover:shadow-sm p-5">
          <img src={logo2} alt="" />
          <div className="divider divider-horizontal divider-end"></div>
          <div>
            <h3 className="font-extrabold text-2xl mb-3">100% Safe Delivery</h3>
            <p className="font-medium">
              We ensure your parcels are handled with the utmost care and
              delivered securely to their destination. Our reliable process
              guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 my-5 rounded-2xl bg-base-100 hover:shadow-sm p-5">
          <img src={logo2} alt="" />
          <div className="divider divider-horizontal divider-end"></div>
          <div>
            <h3 className="font-extrabold text-2xl mb-3">
              24/7 Call Center Support
            </h3>
            <p className="font-medium">
              Our dedicated support team is available around the clock to assist
              you with any questions, updates, or delivery concerns—anytime you
              need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
