"use client";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <button
      className="py-2 hover:bg-red-500 ease-in-out my-4 px-4 bg-red-400 rounded text-white font-bold "
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
