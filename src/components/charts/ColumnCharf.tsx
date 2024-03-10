import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type Subject = {
  name: string;
  average: number;
};

type ApexChartProps = {
  data: Subject[];
  height: number;
};

const ApexChart: React.FC<ApexChartProps> = ({ data, height }) => {
  const chartData: ApexOptions = {
    chart: {
      type: "bar",
      height: 380,
    },
    xaxis: {
      categories: data.map((subject) => subject.name),
    },
    title: {
      text: "Average Rate per Subject",
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val.toFixed(2) + "%";
        },
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData}
          series={[{ data: data.map((subject) => subject.average) }]}
          type="bar"
          height={height}
        />
      </div>
    </div>
  );
};

export default ApexChart;
