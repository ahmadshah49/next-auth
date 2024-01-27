"use client";

import { useState } from "react";

const AddVisitors = ({ isOpen, onClose }) => {
  const [vistors, setVistors] = useState("");
  const [premiumUser, setPremiumUser] = useState("");
  const [location, setLocation] = useState("");
  const [device, setDevice] = useState("");
  const [month, setMonth] = useState("");
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
  const devices = [
    { value: "desk", label: "Desktop" },
    { value: "tab", label: "Tablet" },
    { value: "lap", label: "Laptop" },
    { value: "mob", label: "Mobile" },
  ];
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = { vistors, premiumUser, location, device, month };
    console.log(formData);
    setDevice("");
    setLocation("");
    setMonth("");
    setPremiumUser("");
    setVistors("");
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
      <h1 className="text-xl font-bold text-white py-2 px-4">Add Visitors</h1>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-full items-center justify-center"
      >
        {/* Visitors  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Visitors
          </label>
          <input
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="number"
            name="visitors"
            value={vistors}
            onChange={(e) => setVistors(e.target.value)}
            placeholder="Enter no of visitors"
          />
        </div>
        {/* premiumVisitors  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Premium user no
          </label>
          <input
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="number"
            name="premiumUser"
            value={premiumUser}
            onChange={(e) => setPremiumUser(e.target.value)}
            placeholder="Premium Users No"
          />
        </div>
        {/* Location  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Location
          </label>
          <input
            className="py-2 outline-none px-4 w-full rounded-md bg-transparent border text-white"
            type="text"
            name="loaction"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
          />
        </div>
        {/* Select Device  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Device
          </label>
          <select
            id="device"
            name="device"
            value={device}
            onChange={(e) => setDevice(e.target.value)}
            className="py-3 outline-none px-4 text-white  w-full rounded-md bg-transparent border"
          >
            <option value="" className="text-black">
              Select Device
            </option>
            {devices.map((device) => (
              <option
                key={device.value}
                value={device.value}
                className="text-black"
              >
                {device.label}
              </option>
            ))}
          </select>
        </div>
        {/* Select Month */}
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
            Add
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

export default AddVisitors;
