"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const page = () => {
  const [login, setLogin] = useState(false);
  const onChangeHandler = (e) => {
    e.preventDefault();
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-screen px-8 h-screen flex items-center justify-center">
      <div className="w-[50%] ">
        <Image src={"/comp.svg"} width={500} height={500} />
      </div>
      <div className="w-[35%]">
        {login ? (
          <div className=" flex flex-col items-center   rounded-lg shadow-lg p-8 shadow-black/40 bg-gray-300">
            <h1 className="text-center  text-4xl font-bold text-[#FF5B62]">
              Login
            </h1>
            <form className="flex flex-col items-center w-full mt-20">
              <input
                type="email"
                placeholder="enter your email"
                className="w-[80%] my-2 px-4 py-2 rounded-md outline-none focus:border-2 border-black/40"
              />
              <input
                type="password"
                placeholder="enter your password"
                className="w-[80%] px-4 my-2 py-2 rounded-md outline-none focus:border-2 border-black/40"
              />
              <button
                onClick={onSubmitHandler}
                type="submit"
                className="py-2 px-6 mt-4 mb-8 font-bold text-white rounded bg-[#FF5B62]"
              >
                login
              </button>
            </form>
            <div className="w-full flex items-center ">
              <span className="h-[1px] w-full bg-black/40 rounded text-black" />
              <span className="mx-4 text-black/40">or</span>
              <span className="h-[1px] w-full bg-black/40 rounded text-black" />
            </div>
            <button className="flex py-2 my-2 px-6 gap-2 justify-center items-center bg-black/40 text-white rounded">
              <FcGoogle size={25} /> login with Google
            </button>
          </div>
        ) : (
          <div className=" flex flex-col items-center   rounded-lg shadow-lg p-8 shadow-black/40 bg-gray-300">
            <h1 className="text-center  text-4xl font-bold text-[#FF5B62]">
              Sign up
            </h1>
            <form className="flex flex-col items-center w-full mt-20">
              <input
                type="text"
                placeholder="enter your full name"
                className="w-[80%] my-2 px-4 py-2 rounded-md outline-none focus:border-2 border-black/40"
              />
              <input
                type="email"
                placeholder="enter your email"
                className="w-[80%] my-2 px-4 py-2 rounded-md outline-none focus:border-2 border-black/40"
              />
              <input
                type="password"
                placeholder="enter  password"
                className="w-[80%] px-4 my-2 py-2 rounded-md outline-none focus:border-2 border-black/40"
              />
              <input
                type="password"
                placeholder="confirm password"
                className="w-[80%] px-4 my-2 py-2 rounded-md outline-none focus:border-2 border-black/40"
              />
              <button
                onClick={onSubmitHandler}
                type="submit"
                className="py-2 px-6 mt-4 mb-8 font-bold text-white rounded bg-[#FF5B62]"
              >
                sign up
              </button>
            </form>
            <div className="w-full flex items-center ">
              <span className="h-[1px] w-full bg-black/40 rounded text-black" />
              <span className="mx-4 text-black/40">or</span>
              <span className="h-[1px] w-full bg-black/40 rounded text-black" />
            </div>
            <button className="flex py-2 my-2 px-6 gap-2 justify-center items-center bg-black/40 text-white rounded">
              <FcGoogle size={25} /> sign up with Google
            </button>
          </div>
        )}
        <div className=" mt-8  flex flex-col items-center   rounded-lg shadow-lg p-4 shadow-black/40 bg-gray-300">
          <h1>
            {login ? "Don't have an account." : " already have an account "}
            <button
              onClick={() => setLogin((prev) => !prev)}
              className=" py-2 text-[#3e75d4] font-bold underline "
            >
              {login ? "sign up" : "login"}
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
