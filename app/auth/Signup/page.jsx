"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  const onSubmitHandler = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
      setError("Please Confirm All Fields");
      setLoading(false);
      return;
    } else {
      null;
    }
    if (password.length <= 3 || confirmPassword.length <= 3) {
      setError("Password Must Contain 4 Charcters");
      setLoading(false);
      return;
    } else {
      setLoading(true);
    }
    if (password !== confirmPassword) {
      setError("Please Match The Password");
      setLoading(false);
      return;
    }
    try {
      const userExitsres = await fetch("http://localhost:3000/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const userExistsData = await userExitsres.json();
      console.log("Response Form Server", userExistsData);
      if (userExistsData.exists) {
        setError("This Email is Already Exists");
        setLoading(false);
        return;
      }
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        router.push("/auth");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShow(true);
    setShow1(true);
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
              className="w-[80%] my-2 px-4 py-2 rounded-md outline-none "
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-[80%] my-2 px-4 py-2 rounded-md outline-none "
            />
            <div className="w-[80%] bg-white flex items-center  px-4 my-2 py-2 rounded-md outline-none ">
              <input
                // type="password"
                name="password"
                type={show ? "password" : "text"}
                value={password}
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
            <div className="w-[80%] bg-white flex   px-4 my-2 py-2 rounded-md outline-none ">
              <input
                // type="password"
                name="password"
                type={show1 ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
            {error && (
              <div className="bg-red-500 text-white w-[80%] text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
            <button
              onClick={onSubmitHandler}
              className="py-2 w-[80%] px-6 mt-16 mb-8 font-bold text-white rounded bg-[#FF5B62]"
            >
              {loading ? (
                <div className="cursor-not-allowed  ">loading...</div>
              ) : (
                "Sign up"
              )}
            </button>
          </div>
          <div className="w-full flex items-center ">
            <span className="h-[1px] w-full bg-black/40 rounded text-black" />
            <span className="mx-4 text-black/40">or</span>
            <span className="h-[1px] w-full bg-black/40 rounded text-black" />
          </div>
          <button className="flex w-[80%] py-2 my-2 px-6 gap-2 justify-center items-center bg-black/40 text-white rounded">
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
