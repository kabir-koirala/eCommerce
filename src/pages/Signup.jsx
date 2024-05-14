import React from "react";
import { Link } from "react-router-dom";
// import footerImg from "/assets/loginFooter.png";
// import BreadCrumb from "../components/common/BreadCrumb";

export default function Signup() {
  return (
    <>
      <BreadCrumb />
      <div className="mx-auto mt-[67px] flex w-[302px] items-center justify-center p-[28px] shadow-lg md:w-[544px]">
        <div className="space-y-2 p-[24px] font-lato  ">
          <div>
            <h1 className="font-Josefin mb-0 text-center text-[32px] font-bold">
              Signup
            </h1>
            <p className="mt-0 text-center text-[15px] text-[#9096B2]">
              Please login using account detail bellow.
            </p>
          </div>

          <div className="">
            <div className="form-group">
              <input className="form-control" type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <select placeholder="Role" className="form-control" name="" id="">
                <option value="">Select Role</option>
                <option value="seller">seller</option>
                <option value="buyer">buyer</option>
              </select>
            </div>
          </div>

          <a href="/forgetPassword" className="text-sm text-[#9096B2]">
            Forget Your Password ?
          </a>
          <button className="btn w-full">Sign in</button>
          <p className="text-gray-light">
            Don’t have an Account?
            <a href="/Signup" className="text-[#558cf3]">
              Create account
            </a>
          </p>
        </div>
      </div>
      <img src={footerImg} className="container my-[40px]" />
    </>
  );
}
``;
