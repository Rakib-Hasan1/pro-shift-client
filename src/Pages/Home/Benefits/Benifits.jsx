import React from "react";
import logo1 from "../../../assets/live-tracking.png";
import logo2 from "../../../assets/safe-delivery.png";

const benefitsData = [
  {
    id: 1,
    img: logo1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    id: 2,
    img: logo2,
    title: "100% Safe Delivery",
    desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    id: 3,
    img: logo2,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const Benefits = () => {
  return (
    <div className="px-4">
      <div className="divider divider-start mb-8"></div>
      <div className="my-20 space-y-8">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-5 rounded-2xl bg-base-100 hover:shadow-md p-5 py-10 transition-shadow"
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="w-20 h-20 object-contain"
            />
            {/* Divider only on larger screens */}
            <div className="hidden md:block divider divider-horizontal divider-end"></div>
            <div className="text-center md:text-left">
              <h3 className="font-extrabold text-2xl mb-3">{benefit.title}</h3>
              <p className="font-medium text-gray-600">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
