import SignOut from "@/app/componets/signOut";
import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-600  flex items-center px-8 justify-between ">
      <h1 className="text-xl font-bold text-white">Header</h1>
      <SignOut />
    </div>
  );
};

export default Header;
