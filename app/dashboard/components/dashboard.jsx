"use client";
import Card from "./Card";
import { FaUsers } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import YearlyAnlyticsChart from "./YearlyAnlyticsChart";
import VisitorsAnalytics from "./VisitorsAnalytics";
import DeviceAnalytics from "./DeviceAnalytics";

const CardsData = ({ productsData, vistorsData }) => {
  console.log(productsData, vistorsData);
  return (
    <div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          label={"Total Premium Visitors"}
          data={
            vistorsData.length
              ? vistorsData.reduce(
                  (acc, visitors) => parseInt(acc + visitors.premiumVistors),
                  0
                )
              : 0
          }
          icon={<FaUsers size={25} />}
        />
        <Card
          label={"Total Products"}
          data={productsData.length}
          icon={<BiMoneyWithdraw size={25} />}
        />
        <Card
          label={"Total Sales"}
          data={
            productsData.length
              ? productsData.reduce(
                  (acc, sales) => parseInt(acc + sales.sales),
                  0
                )
              : 0
          }
          icon={<MdOutlineProductionQuantityLimits size={25} />}
        />
        <Card
          label={"Total Visitors"}
          data={
            vistorsData.length
              ? vistorsData.reduce(
                  (acc, vistors) => parseInt(acc + vistors.visitors),
                  0
                )
              : 0
          }
          icon={<BsFillPersonCheckFill size={25} />}
        />
      </div>
      <div className="grid grid-cols-12 p-8 gap-4">
        <YearlyAnlyticsChart
          allProducts={productsData.map((productItem) => ({
            ...productItem,
            revenue: productItem.price * productItem.sales,
          }))}
        />
        <VisitorsAnalytics allVistors={vistorsData} />
      </div>
      <div className="grid grid-cols-12 p-8 gap-4">
        <DeviceAnalytics allVistors={vistorsData} />
      </div>
    </div>
  );
};

export default CardsData;
