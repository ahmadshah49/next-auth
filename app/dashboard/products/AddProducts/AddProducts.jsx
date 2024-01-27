"use client";

import { useState } from "react";

const AddProducts = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [visitors, setVisitors] = useState("");
  const [price, setPrice] = useState("");
  const [sales, setSales] = useState("");
  const [month, setMonth] = useState("");
  const [loading, setLoading] = useState(false);
  const months = [
    { value: "jan", label: "January" },
    { value: "feb", label: "February" },
    { value: "mar", label: "March" },
    { value: "apr", label: "April" },
    { value: "may", label: "May" },
    { value: "jun", label: "June" },
    { value: "jul", label: "July" },
    { value: "aug", label: "August" },
    { value: "sep", label: "September" },
    { value: "oct", label: "October" },
    { value: "nov", label: "November" },
    { value: "dec", label: "December" },
  ];
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name,
      visitors,
      price,
      sales,
      month,
    };
    console.log(formData);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: formData.name,
        visitors: parseInt(formData.visitors),
        price: parseInt(formData.price),
        sales: parseInt(formData.sales),
        month: formData.month,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch(
        "http://localhost:3000/api/addProducts",
        requestOptions
      );
    } catch (error) {
      console.log("error Adding Products", error);
    }
    setName("");
    setVisitors("");
    setPrice("");
    setSales("");
    setMonth("");
    setLoading(false);
    onClose();
  };

  return (
    <div
      className={
        isOpen
          ? "flex flex-col py-2 items-center justify-center w-[500px] rounded-md bg-slate-600"
          : " py-2  w-[500px] rounded-md bg-slate-600 opacity-0 hidden"
      }
    >
      <h1 className="text-xl font-bold text-white py-2 px-4">Add Products</h1>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-full items-center justify-center"
      >
        {/* Name  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="text"
            placeholder="Enter Product Name"
          />
        </div>
        {/* visitors  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Visitors
          </label>
          <input
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="number"
            id="visitors"
            value={visitors}
            onChange={(e) => setVisitors(e.target.value)}
            placeholder="Enter no of visitors"
          />
        </div>
        {/* price  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Price
          </label>
          <input
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter product price"
          />
        </div>
        {/* Sales  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Sales
          </label>
          <input
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="number"
            id="sales"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
            placeholder="Enter no of sales"
          />
        </div>
        {/* Select  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Month
          </label>
          <select
            id="month"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="py-3 outline-none px-4 text-white  w-full rounded-md bg-transparent border"
          >
            <option value="" className="text-black">
              Select Month
            </option>
            {months.map((month) => (
              <option
                key={month.value}
                value={month.value}
                className="text-black"
              >
                {month.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mt-14 mb-4 gap-6">
          <button
            type="submit"
            className="py-2 px-8 bg-white text-slate-600 font-bold rounded-md"
          >
            {loading ? "Loading..." : "Add"}
          </button>
          <button
            type="button"
            className="py-2 px-8 bg-red-500 text-white font-bold rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
