import React from "react";
import loginBackground from "../assets/signInIcon.png";

import { Button, Input } from "@nextui-org/react";
const Login = () => {
  return (
    <>
      <div className="relative flex h-screen w-screen bg-white px-9 overflow-hidden">
        <div className=" w-1/2 h-screen p-10">
          <div className="img relative w-full h-full px-7">
            <h1 className="text-xl font-bold mb-2">
              <span className="text-violet-500">Grade</span>Tracker
            </h1>
            <small className="leading-3 tracking-wide text-gray-500 ">
              Streamline academic progress monitoring with Grade Tracker,
              facilitating seamless grade updates to parents by teachers.
            </small>
            <img
              src={loginBackground}
              alt="_"
              className=" absolute top-[55%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[360px]"
            />
          </div>
        </div>
        <div className="shadow-effect overflow-hidden w-1/2 bg-white flexCenter">
          <div className="max-w-[370px] w-full">
            <p className="flex items-center gap-2 text-xl font-bold mb-4">
              Welcome to{" "}
              <p className="text-xl font-bold">
                <span className="text-violet-500">Grade</span>Tracker
              </p>
            </p>
            <form className="flexColStart gap-4">
              <Input type="text" label="Username" />
              <Input type="password" label="Password" />
              <button className="relative z-10 text-sm text-violet-500 font-semibold ml-auto px-2 hover:underline">
                Forgot Password
              </button>
              <Button
                size="lg"
                className="relative z-50 text-white shadow-xl shadow-violet-200  bg-violet-500 w-full font-medium tracking-wide rounded-full"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
