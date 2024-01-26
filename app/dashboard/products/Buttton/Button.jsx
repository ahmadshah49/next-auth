"use client";
import React, { useState } from "react";
import AddProducts from "../AddProducts/AddProducts";

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative px-8">
      <button
        onClick={setIsOpen}
        className="mt-14 py-2 px-6 bg-red-500 text-white font-bold rounded-md w-fit"
      >
        Add Products
      </button>
      <div
        className={
          isOpen
            ? "w-full absolute bg-black/45 inset-0 h-[92.7vh] flex items-center justify-center"
            : "w-full absolute bg-black/25 inset-0 h-screen  hidden"
        }
      >
        <AddProducts isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />{" "}
      </div>
    </div>
  );
};

export default Button;
