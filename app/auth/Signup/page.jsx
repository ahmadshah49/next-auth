"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import Link from "next/link";
const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const onShowPassword = () => {
    setShow(!show);
  };
  const onShowPassword1 = () => {
    setShow1(!show1);
  };
  const data = {
    name,
    email,
    password,
    confirmPassword,
  };
  const onSubmitHandler = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please Confirm All Feild");
      return;
    } else {
      null;
    }
    if (password !== confirmPassword) {
      alert("please Match The Password");
      return;
    }
    console.log(data);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-screen px-8 h-screen flex items-center justify-center">
      <div className="w-[50%] ">
        <Image src={"/comp.svg"} width={500} height={500} />
      </div>
      <div className="w-[35%]">
        <div className=" flex flex-col items-center   rounded-lg shadow-lg p-8 shadow-black/40 bg-gray-300">
          <h1 className="text-center  text-4xl font-bold text-[#FF5B62]">
            Sign up
          </h1>
          <div className="flex flex-col items-center w-full mt-20">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Fullname"
              className="w-[80%] my-2 px-4 py-2 rounded-md outline-none focus:border-2 border-black/40"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-[80%] my-2 px-4 py-2 rounded-md outline-none focus:border-2 border-black/40"
            />
            <div className="w-[80%] bg-white flex items-center  px-4 my-2 py-2 rounded-md outline-none focus:border-2 border-black/40">
              <input
                // type="password"
                name="password"
                type={show ? "password" : "text"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <span>
                {show ? (
                  <BiShow onClick={onShowPassword} size={25} />
                ) : (
                  <BiHide onClick={onShowPassword} size={25} />
                )}
              </span>
            </div>
            <div className="w-[80%] bg-white flex items-center  px-4 my-2 py-2 rounded-md outline-none focus:border-2 border-black/40">
              <input
                // type="password"
                name="password"
                type={show1 ? "password" : "text"}
                onChange={(e) => setShow1(e.target.value)}
                placeholder="Confirm password"
                className="w-full outline-none"
              />
              <span>
                {show1 ? (
                  <BiShow onClick={onShowPassword1} size={25} />
                ) : (
                  <BiHide onClick={onShowPassword1} size={25} />
                )}
              </span>
            </div>
            <button
              onClick={onSubmitHandler}
              className="py-2 px-6 mt-4 mb-8 font-bold text-white rounded bg-[#FF5B62]"
            >
              Sign up
            </button>
          </div>
          <div className="w-full flex items-center ">
            <span className="h-[1px] w-full bg-black/40 rounded text-black" />
            <span className="mx-4 text-black/40">or</span>
            <span className="h-[1px] w-full bg-black/40 rounded text-black" />
          </div>
          <button className="flex py-2 my-2 px-6 gap-2 justify-center items-center bg-black/40 text-white rounded">
            <FcGoogle size={25} /> login with Google
          </button>
        </div>
        <div className=" mt-8  flex flex-col items-center   rounded-lg shadow-lg p-4 shadow-black/40 bg-gray-300">
          <h1>
            Already have an Account
            <button className=" py-2 text-[#3e75d4] font-bold underline ">
              <Link href={"/auth"}>Log in</Link>
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
