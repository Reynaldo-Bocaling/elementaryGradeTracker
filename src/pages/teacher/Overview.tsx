import React from "react";
import { coundBox } from "../../constant";
import ColumnChart from "../../components/charts/ColumnCharf";
import AverageCircleChart from "../../components/charts/CircularChart";
import { LiaAwardSolid } from "react-icons/lia";
const Overview = () => {
  const subjectData = [
    { name: "ITWS01", average: 85 },
    { name: "CC102", average: 72 },
    { name: "ITNET01", average: 90 },
    { name: "GE02", average: 68 },
    { name: "PE01", average: 78 },
    { name: "NSTP01", average: 88 },
    { name: "CC103", average: 95 },
    { name: "FIL2", average: 81 },
  ];

  return (
    <div className="">
      <p className="font-semibold pl-3 mb-5">Welcome Teacher!</p>

      {/* count box */}
      <div className="flexColStart gap-3">
        <div className="flex gap-3 w-full">
          {coundBox.map(({ label, total, color, Icon, shadow }, index) => {
            return (
              <div
                key={index}
                className={`${shadow} flexColStart w-1/4 bg-white p-5 rounded-lg border border-slate-100 `}
              >
                <div className="flexCenter gap-4">
                  <div className={`${color} p-2 rounded-full`}>
                    <Icon size={23} />
                  </div>
                  <div className="flexColStart  gap-1">
                    <span className="text-xl font-semibold">{total}</span>
                    <small className="text-[0.62rem] text-[#ecf0f1] tracking-wider">
                      {label}
                    </small>
                  </div>
                </div>

                <small className="text-xs mt-5 text-slate-400 tracking-wider">
                  users
                </small>
              </div>
            );
          })}
        </div>

        <div className=" w-full flex items-start gap-3">
          <div className="w-[65%] bg-white p-4 rounded-lg border border-slate-100 shadow-md shadow-slate-100 ">
            <div>
              <ColumnChart data={subjectData} height={380} />
            </div>
          </div>
          <div className="flexColStart gap-3 w-[35%]">
            <div className="w-full bg-white p-4 rounded-lg border border-slate-100 shadow-md shadow-slate-100 pt-9">
              <AverageCircleChart averageRate={89} />
            </div>

            <div className="w-full bg-white py-4 px-7 rounded-lg border border-slate-100 shadow-md shadow-slate-100 ">
              <div className="flexCenter gap-3 py-2">
                <div className="flexColStart">
                  <span className="font-bold">Rey Bocaling</span>
                  <small className="text-2xs textgray-500">
                    Top 1 Highest Average
                  </small>
                </div>
                <LiaAwardSolid size={40} className="text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
