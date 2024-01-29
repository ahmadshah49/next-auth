"use client";
import ReactApexChart from "react-apexcharts";

const getVisitor = (data, country) => {
  if (data.length === 0) return 0;
  return data
    .filter((item) => item.loaction === country)
    .reduce((acc, visitors) => acc + visitors.visitors, 0);
};

const getPremiumVisitor = (data, country) => {
  if (data.length === 0) return 0;
  return data
    .filter((item) => item.loaction === country)
    .reduce((acc, visitors) => acc + visitors.premiumVistors, 0);
};
const VisitorsAnalytics = ({ allVistors }) => {
  const uniqueLocation = [...new Set(allVistors.map((item) => item.loaction))];
  console.log(allVistors);
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: uniqueLocation.slice(
        0,
        uniqueLocation.length > 4 ? 4 : uniqueLocation.length
      ),
    },
    yaxis: {
      min: 0,
      max: 10000,
      tickAmount: 10,
      labels: {
        formatter: function (value) {
          return value.toFixed(0);
        },
      },
    },
  };
  const series = [
    {
      name: "Visitors",
      data: uniqueLocation.map((loactionItem) =>
        getVisitor(allVistors, loactionItem)
      ),
    },
    {
      name: "Premium Vistors",
      data: uniqueLocation.map((loactionItem) =>
        getPremiumVisitor(allVistors, loactionItem)
      ),
    },
  ];
  return (
    <div className="col-span-4 px-4 py-8 bg-slate-100 shadow-md border border-slate-300 rounded-md">
      <div className="flex items-start justify-between gap-4 w-full flex-col flex-wrap">
        <h1 className="font-bold text-xl">Visitors by Country</h1>
        <div id="YearlyAnlyticsChart" className="w-full">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default VisitorsAnalytics;
