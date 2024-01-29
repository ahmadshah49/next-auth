import React from "react";
import ReactApexChart from "react-apexcharts";
import { deviceAnalyticsChartOptions } from "./config";
function getDeviceByVisitors(data, getDevice) {
  if (data.filter((item) => item.device === getDevice).length === 0) return 0;

  return data
    ? data
        .filter((item) => item.device === getDevice)
        .reduce((acc, obj) => acc + obj.visitors, 0)
    : 0;
}
const DeviceAnalytics = ({ allVistors }) => {
  console.log("all Devices", allVistors);
  const series = [
    getDeviceByVisitors(allVistors, "desk"),
    getDeviceByVisitors(allVistors, "lap"),
    getDeviceByVisitors(allVistors, "tab"),
    getDeviceByVisitors(allVistors, "mob"),
  ];
  return (
    <div className="col-span-12 px-4 py-8 bg-slate-100 shadow-md border border-slate-300 rounded-md">
      <div className="flex items-start justify-between gap-4 w-full flex-col flex-wrap">
        <h1 className="font-bold text-xl">Visitors by Country</h1>
        <div id="deviceAnalyticsChart" className="mx-auto flex justify-center ">
          <ReactApexChart
            options={deviceAnalyticsChartOptions}
            series={[...series]}
            type="donut"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceAnalytics;
