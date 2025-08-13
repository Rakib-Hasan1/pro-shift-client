import React from "react";
import reviewImg from "../../../assets/customer-top.png";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fitness Coach",
    review:
      "Posture Pro has completely changed my daily routine! My back pain is gone and my posture is noticeably better.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Lee",
    role: "Office Worker",
    review:
      "After just two weeks of use, I feel more comfortable at my desk and my shoulders are no longer tense. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Yoga Instructor",
    review:
      "This product is perfect for maintaining proper posture during long hours of teaching and working. Love it!",
    rating: 5,
  },
];

const CustomerReview = () => {
  return (
    <div className="my-12">
      {/* Top Section */}
      <div className="flex flex-col justify-center items-center gap-3 text-center px-4">
        <img src={reviewImg} className="max-w-3xs" alt="Review" />
        <h2 className="font-extrabold text-3xl">
          What our customers are saying
        </h2>
        <p className="max-w-2xl text-gray-600">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
        {reviews.map(({ id, name, role, review, rating }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-3 text-yellow-500">
              {Array.from({ length: rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            {/* Review Text */}
            <p className="text-gray-700 mb-4 italic">"{review}"</p>
            {/* Reviewer Info */}
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
