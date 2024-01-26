import React from "react";
import DashboradLayout from "../DashboradLayout";
import Button1 from "./Button1/Button1";

const page = () => {
  return (
    <DashboradLayout>
      <div className="w-full h-full">
        <Button1 />
      </div>
    </DashboradLayout>
  );
};

export default page;
