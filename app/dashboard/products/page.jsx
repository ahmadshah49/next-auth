import React from "react";
import DashboradLayout from "../DashboradLayout";
import AddProducts from "./AddProducts/AddProducts";
import Button from "./Buttton/Button";
import ProductList from "./ProductList/ProductList";
import prisma from "@/app/config/prisma";
const fetchData = async () => {
  try {
    const FetchProducts = await prisma.addProducts.findMany();
    return FetchProducts;
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};
const page = async () => {
  const data = await fetchData();
  return (
    <DashboradLayout>
      <div className="w-full h-full">
        <Button />
        <ProductList data={data} />
      </div>
    </DashboradLayout>
  );
};

export default page;
