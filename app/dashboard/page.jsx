import React from "react";
import SignOut from "../componets/signOut";

const page = () => {
  return (
    <div className="w-full h-screen bg-gray-400 flex items-center  justify-center ">
      <div className="flex flex-col bg-white rounded-lg py-8 px-8">
        <h1 className="text-3xl font-bold py-2">This is Dashboard</h1>
        <SignOut />
      </div>
    </div>
  );
};

export default page;
