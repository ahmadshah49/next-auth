"use client";
import { signOut } from "next-auth/react";
import { useState } from "react";
// import { resolve } from "styled-jsx/css";
const SignOut = () => {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await signOut();
    setLoading(false);
  };
  return (
    <button
      className="py-2 hover:bg-red-500 ease-in-out my-4 px-4 bg-red-400 rounded text-white font-bold "
      onClick={handleSignOut}
    >
      {loading ? "Loading..." : "Sign Out"}
    </button>
  );
};

export default SignOut;
