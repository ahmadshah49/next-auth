import React from "react";

const Card = () => {
  return (
    <div className="border bg-slate-100 rounded-md border-black/10 shadow-md py-6 px-7">
      <div className="bg-slate-200 h-11 rounded-full w-11 flex items-center justify-center">
        ico
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h4 className="text-2xl font-bold ">7857</h4>
          <span className="text-sm font-medium">Total Products</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
