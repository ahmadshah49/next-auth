"use client";
import Card from "./Card";

const CardsData = ({ productsData, vistorsData }) => {
  console.log(productsData, vistorsData);
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsData;
