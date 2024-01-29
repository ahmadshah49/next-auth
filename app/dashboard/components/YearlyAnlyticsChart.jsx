import ReactApexChart from "react-apexcharts";
const monthsArray = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const getSales = (product, month) => {
  if (product.filter((item) => item.month === month).length === 0) return 0;
  return product
    .filter((item) => item.month === month)
    .reduce((acc, productItem) => acc + productItem.sales, 0);
};
// const getRevnue = (product, month) => {
//   if (product.filter((item) => item.month === month).length === 0) return 0;
//   return product
//     .filter((item) => item.month === month)
//     .reduce((acc, productItem) => acc + productItem.revenue, 0);
// };

const YearlyAnlyticsChart = ({ allProducts }) => {
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      name: "Sales",
      data: monthsArray.map((item) => getSales(allProducts, item)),
    },
    // {
    //   name: "Revenue",
    //   data: monthsArray.map((item) => getRevnue(allProducts, item)),
    // },
  ];

  return (
    <div className="col-span-8 px-6 py-8 bg-slate-100 shadow-md border border-slate-300 rounded-md">
      <div className="flex items-start justify-between gap-4 w-full flex-col flex-wrap">
        <h1 className="font-bold text-xl">Yearly Analytics</h1>
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

export default YearlyAnlyticsChart;
