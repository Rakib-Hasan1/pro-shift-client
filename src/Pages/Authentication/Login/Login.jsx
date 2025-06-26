import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../Shared/ZapShiftLogo/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset border-base-300 rounded-box w-md p-4">
            <label className="font-extrabold text-5xl my-2">Welcome Back</label>
            <label className="font-semibold text-xl mb-2">
              Login with ProFast
            </label>

            <label className="label font-bold">Email</label>
            <input
              type="email"
              {...register("email")}
              className="input w-full"
              placeholder="Email"
            />

            <label className="label font-bold">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 character or longer
              </p>
            )}

            <div>
              <a className="link link-hover text-lg">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary text-black mt-4">
              Login
            </button>

            <p className="text-lg">
              Don't have in ProShift account?
              <Link
                to="/register"
                className="text-primary pl-2 hover:underline"
              >
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
