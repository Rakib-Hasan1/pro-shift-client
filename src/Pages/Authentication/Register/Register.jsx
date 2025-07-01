import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../Shared/ZapShiftLogo/SocialLogin/SocialLogin";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const axiosInstance = useAxios();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const [profilePic, setProfilePic] = useState("");

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(async (result) => {
      console.log(result.user);
      // update user to db
      const userInfo = {
        email: data?.email,

        // default role
        role: "user",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      const userRes = await axiosInstance.post("/users", userInfo);
      console.log(userRes.data);

      // update user profile in FB
      const userProfile = {
        displayName: data?.name,
        photoURL: profilePic,
      };
      updateUserProfile(userProfile)
        .then(() => {
          console.log("Profile updated!");
          navigate(from);
        })
        .catch((error) => {
          console.log(error);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const imageURL = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imageURL, formData);

    setProfilePic(res?.data?.data.url);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card shrink-0 ">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <h1 className="text-5xl font-bold">Create an account!</h1>
              <label className="font-semibold text-xl mb-2">
                Register with Profast
              </label>

              <label className="label">Upload your Image</label>
              <input
                onChange={handleImageUpload}
                type="file"
                className="file-input w-full"
              />

              {/* name field */}
              <label className="label">Your Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input w-full"
                placeholder="Your Name"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Name is required</p>
              )}

              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/,
                })}
                className="input w-full"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 characters or longer
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  At least 6 chars with upper, lower & symbol
                </p>
              )}
              <button className="btn btn-primary text-black mt-4">
                Register
              </button>
            </fieldset>

            <p className="text-lg">
              Already have an account?
              <Link to="/login" className="text-primary pl-2 hover:underline">
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
