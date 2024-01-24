"use client";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Link from "next/link";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { signIn } from "next-auth/react";
// import Router from "next/navigation";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onShowPassword = () => {
    setShow(!show);
  };
  const data = {
    email,
    password,
  };
  const onSubmitHandler = async (e) => {
    // e.preventDefault();
    setLoading("true");
    if (!email || !password) {
      setError("Please Fill All Fields");
      setLoading(false);
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("invalid credentials!");
        setLoading(false);
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
    console.log(data);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="w-screen px-8 h-screen flex items-center justify-center">
      <div className="w-[50%] ">
        <Image src={"/comp.svg"} width={500} height={500} />
      </div>
      <div className="w-[35%]">
        <div className="  flex flex-col    rounded-lg shadow-lg p-8 shadow-black/40 bg-gray-300">
          <h1 className="text-center  text-4xl font-bold text-[#FF5B62]">
            Login
          </h1>
          <div
            // onSubmit={onSubmitHandler()}
            className="flex flex-col items-center w-full mt-20"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
              className="w-[80%] my-2 px-4 py-2 rounded-md outline-none  border-black/40"
            />
            <div className=" w-[80%] flex items-center px-4 my-2 py-2 rounded-md bg-white   ">
              <input
                type={show ? "password" : "text"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
                className="w-full outline-none"
              />
              <span>
                {show ? (
                  <BiShow
                    onClick={onShowPassword}
                    size={25}
                    className="text-black/60"
                  />
                ) : (
                  <BiHide
                    onClick={onShowPassword}
                    size={25}
                    className="text-black/60"
                  />
                )}
              </span>
            </div>
            {error && (
              <div className="bg-red-500 text-white w-[80%] text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <button
              // type="submit"
              onClick={onSubmitHandler}
              className="py-2 px-6 mt-16 w-[80%] mb-8 font-bold text-white rounded bg-[#FF5B62]"
            >
              {loading ? "loading..." : "login"}
            </button>
          </div>

          <div className="w-full flex items-center ">
            <span className="h-[1px] w-full bg-black/40 rounded text-black" />
            <span className="mx-4 text-black/40">or</span>
            <span className="h-[1px] w-full bg-black/40 rounded text-black" />
          </div>
          <button className="flex w-[80%] mx-auto py-2 my-2 px-6 gap-2 justify-center items-center bg-black/40 text-white rounded">
            <FcGoogle size={25} /> Sign up with Google
          </button>
        </div>
        <div className=" mt-8  flex flex-col items-center   rounded-lg shadow-lg p-4 shadow-black/40 bg-gray-300">
          <h1>
            Don't have an account.
            <button className=" py-2 text-[#3e75d4] font-bold underline ">
              <Link href={"/auth/Signup"}> sign up</Link>
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
