import React from "react";
import DashboradLayout from "../DashboradLayout";
import Button1 from "./Button1/Button1";
import VisitorsList from "./VisitorsList/VisitorsList";
import prisma from "@/app/config/prisma";
const fetchData = async () => {
  try {
    const FetchVisitors = await prisma.addVistors.findMany();
    return FetchVisitors;
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};
const page = async () => {
  const data = await fetchData();
  return (
    <DashboradLayout>
      <div className="w-full h-full">
        <Button1 />
        <VisitorsList data={data} />
      </div>
    </DashboradLayout>
  );
};

export default page;
