"use client";
const AddProducts = ({ isOpen, onClose }) => {
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  return (
    <div
      className={
        isOpen
          ? "flex flex-col py-2 items-center justify-center w-[500px] rounded-md bg-slate-600"
          : " py-2  w-[500px] rounded-md bg-slate-600 opacity-0 hidden"
      }
    >
      <h1 className="text-xl font-bold text-white py-2 px-4">Add Products</h1>
      <div className="flex flex-col w-full items-center justify-center">
        {/* Name  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Name
          </label>
          <input
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
            placeholder="Enter no of sales"
          />
        </div>
        {/* Select  */}
        <div className="relative my-4 w-[80%]">
          <label className="absolute -mt-3 ml-2 px-2 text-white bg-slate-600">
            Month
          </label>
          <select
            id="selectMonth"
            className="py-3 outline-none px-4 text-white  w-full rounded-md bg-transparent border"
          >
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
          <button className="py-2 px-8 bg-white text-slate-600 font-bold rounded-md">
            Add
          </button>
          <button
            className="py-2 px-8 bg-red-500 text-white font-bold rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
