import React from "react";
import DashboradLayout from "../DashboradLayout";
import AddProducts from "./AddProducts/AddProducts";
import Button from "./Buttton/Button";
import ProductList from "./ProductList/ProductList";

const page = () => {
  return (
    <DashboradLayout>
      <div className="w-full h-full">
        <Button />
        <ProductList />
      </div>
    </DashboradLayout>
  );
};

export default page;
