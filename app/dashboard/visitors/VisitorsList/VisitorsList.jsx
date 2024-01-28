// import React from "react";

// const VisitorsList = () => {
//   return <div>VisitorsList</div>;
// };

// export default VisitorsList;
import React from "react";

const VisitorsList = async ({ data }) => {
  return (
    <div className="p-8 mt-16 m-8 bg-gray-200 rounded-xl py-8 px-7">
      <table className="w-full text-center py-10">
        <thead className="border-b border-black/20 h-16">
          <tr>
            <th>Id</th>
            <th>Visitors</th>
            <th>Premium Vistors</th>
            <th>Loaction</th>
            <th>Device</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((data, i) => (
            <tr className="h-10 border-b border-black/20" key={i}>
              <td>{data.id.slice(0, 8)}...</td>
              <td>{data.visitors}</td>
              <td>{data.premiumVistors}</td>
              <td>{data.loaction}</td>
              <td>{data.device}</td>
              <td className="uppercase">{data.month}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitorsList;
