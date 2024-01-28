import React from "react";

const ProductList = async ({ data }) => {
  return (
    <div className="p-8 mt-16 m-8 bg-gray-200 rounded-xl py-8 px-7">
      <table className="w-full text-center py-10">
        <thead className="border-b border-black/20 h-16">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Visitors</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Month</th>
            <th>Total Revenue </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data, i) => (
            <tr className="h-10 border-b border-black/20" key={i}>
              <td>{data.id.slice(0, 8)}...</td>
              <td>{data.name}</td>
              <td>{data.visitors}</td>
              <td>{data.price}</td>
              <td>{data.sales}</td>
              <td className="uppercase">{data.month}</td>
              <td>{data.sales * data.price} Rs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
