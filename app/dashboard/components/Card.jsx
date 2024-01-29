import React from "react";

const Card = ({ icon, data, label }) => {
  return (
    <div className="border bg-slate-100 rounded-md border-black/10 shadow-md py-6 px-7">
      <div className="bg-slate-200 h-11 rounded-full w-11 flex items-center justify-center">
        {icon}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h4 className="text-2xl font-bold ">{data}</h4>
          <span className="text-sm font-medium">{label}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
