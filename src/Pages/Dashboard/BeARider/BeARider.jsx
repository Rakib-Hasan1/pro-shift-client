import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import riderLogo from "../../../assets/agent-pending.png";

const BeARider = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [selectedRegion, setSelectedRegion] = useState("");
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();

  const regions = [...new Set(serviceCenters.map((s) => s.region))];
  const districts = serviceCenters
    .filter((s) => s.region === selectedRegion)
    .map((s) => s.district);

  const onSubmit = async (data) => {
    const riderData = {
      ...data,
      name: user?.displayName || "",
      email: user?.email || "",
      status: "pending",
      created_at: new Date().toISOString(),
    };

    console.log("Rider Application:", riderData);

    axiosSecure.post("/riders", riderData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text: "Your application is pending approval.",
        });
      }
    });

    // Send to your backend here
    reset();
  };

  return (
    <div className="my-10 p-14 bg-base-100 rounded-xl shadow">
      <h2 className="font-extrabold text-3xl mb-2">Be a Rider</h2>
      <p className="text-gray-500 mb-6 max-w-2xl">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time..
      </p>

      <div className="divider"></div>

      <div className="flex items-center justify-around gap-6">
        <div>
          <h2 className="font-semibold text-2xl my-5">
            Tell us about yourself
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Name (read-only) */}

              <div>
                <label className="label font-semibold">Your Name</label>
                <input
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                  className="input input-bordered text-black w-full bg-gray-100"
                />
              </div>

              {/* Email (read-only) */}

              <div>
                <label className="label font-semibold">Your Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="input input-bordered text-black w-full bg-gray-100"
                />
              </div>

              {/* Age */}

              <div>
                <label className="label font-semibold">Your Age</label>
                <input
                  type="number"
                  placeholder="Your Age"
                  className="input input-bordered w-full"
                  {...register("age", { required: true, min: 18 })}
                />
                {errors.age && (
                  <span className="text-red-500 text-sm">
                    You must be 18 or older
                  </span>
                )}
              </div>

              {/* Phone */}

              <div>
                <label className="label font-semibold">Your Phone No.</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  {...register("phone", { required: true })}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    Phone number is required
                  </span>
                )}
              </div>

              {/* National ID */}

              <div>
                <label className="label font-semibold">Your NID No.</label>
                <input
                  type="text"
                  placeholder="National ID Card Number"
                  className="input input-bordered w-full"
                  {...register("nid", { required: true })}
                />
                {errors.nid && (
                  <span className="text-red-500 text-sm">NID is required</span>
                )}
              </div>

              {/* Region */}

              <div>
                <label className="label font-semibold">Your Region</label>
                <select
                  className="select select-bordered w-full"
                  {...register("region", { required: true })}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                >
                  <option value="">Select Region</option>
                  {regions.map((region, idx) => (
                    <option key={idx} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <span className="text-red-500 text-sm">
                    Region is required
                  </span>
                )}
              </div>

              {/* District */}

              <div>
                <label className="label font-semibold">Your District</label>
                <select
                  className="select select-bordered w-full"
                  {...register("district", { required: true })}
                  disabled={!selectedRegion}
                >
                  <option value="">Select District</option>
                  {districts.map((district, idx) => (
                    <option key={idx} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <span className="text-red-500 text-sm">
                    District is required
                  </span>
                )}
              </div>

              {/* Bike Brand */}

              <div>
                <label className="label font-semibold">Your Bike</label>
                <input
                  type="text"
                  placeholder="Bike Brand (e.g., Yamaha FZ)"
                  className="input input-bordered w-full"
                  {...register("bike_brand", { required: true })}
                />
                {errors.bike_brand && (
                  <span className="text-red-500 text-sm">
                    Bike brand is required
                  </span>
                )}
              </div>

              <div className="col-span-2">
                {/* Bike Registration */}

                <div>
                  <label className="label font-semibold">Your Reg No.</label>
                  <input
                    type="text"
                    placeholder="Bike Registration Number"
                    className="input input-bordered w-full"
                    {...register("bike_registration", { required: true })}
                  />
                  {errors.bike_registration && (
                    <span className="text-red-500 text-sm">
                      Registration number is required
                    </span>
                  )}
                </div>

                {/* Additional Info (optional) */}

                <div>
                  <label className="label font-semibold">Additional Info</label>
                  <textarea
                    placeholder="Additional information (optional)"
                    className="textarea textarea-bordered w-full"
                    {...register("note")}
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary text-black w-full mt-4"
            >
              Submit Rider Application
            </button>
          </form>
        </div>
        <div>
          {" "}
          <img src={riderLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BeARider;
