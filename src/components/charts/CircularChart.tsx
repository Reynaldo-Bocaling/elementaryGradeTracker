import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type AverageCircleChartProps = {
  averageRate: number; // Average rate ng lahat ng grades
};

const AverageCircleChart: React.FC<AverageCircleChartProps> = ({
  averageRate,
}) => {
  const chartData: ApexOptions = {
    title: {
      text: "Total Average",
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "900",
        color: "#263238",
      },
    },
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function (val: number) {
              return val.toFixed(2) + "%";
            },
          },
        },
      },
    },
    fill: {
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Average Rate"],
  };

  return (
    <div>
      <div id="averageCircleChart">
        <ReactApexChart
          options={chartData}
          series={[averageRate]}
          type="radialBar"
          height={280}
        />
      </div>
    </div>
  );
};

export default AverageCircleChart;
