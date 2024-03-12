import React from "react";
import { coundBox } from "../../constant";
import ColumnChart from "../../components/charts/ColumnCharf";
import AverageCircleChart from "../../components/charts/CircularChart";
import { LiaAwardSolid } from "react-icons/lia";
import { users } from "../../services/DummyData";
import { Button } from "@nextui-org/react";
import { HiChevronRight } from "react-icons/hi";
import adminFloatingIcon from "../../assets/AdminFloat.png";
import averageFloatingIcon from "../../assets/averageIcon.png";

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

  const recenter3User = users.slice(Math.max(users.length - 3, 0));

  return (
    <div className="">
      <p className="font-semibold pl-3 mb-5">Welcome Admin!</p>

      {/* count box */}
      <div className="flexColStart gap-3">
        <div className="flex flex-col items-start md:flex-row gap-3 w-full ">
          <div className="w-full md:w-[65%] flex flex-col gap-3">
            <div className="relative w-full bg-gradient-to-r from-purple-600 to-purple-800 p-3 rounded-xl border border-slate-100 shadow-lg shadow-violet-100 py-10 px-7">
              <div>
                <p className="text-xl font-semibold text-white">
                  Track and Manage Elementary Grades
                </p>
                <span className="text-sm text-violet-200">
                  unlocking the potential of grade tracking
                </span>
                <div className="flexStart gap-3 mt-7">
                  <Button
                    size="md"
                    className="bg-white text-sm font-semibold flexCenter"
                  >
                    <span>Navigate</span> <HiChevronRight size={20} />
                  </Button>
                  <Button className="bg-[rgba(225,214,251,0.2)] text-white">
                    Explore
                  </Button>
                </div>
              </div>

              <img
                src={adminFloatingIcon}
                className="absolute top-8 right-4 w-[150px]"
                alt=""
              />
              <img
                src={averageFloatingIcon}
                className="absolute top-10 right-1/4 rotate-45 w-[30px]"
                alt=""
              />
            </div>
            <div className="w-full bg-white p-3 rounded-lg border border-slate-200 shadow-lg shadow-slate-200">
              <ColumnChart data={subjectData} height={300} />
            </div>
            <div className="w-full bg-white p-4 rounded-lg border border-slate-100 shadow-md shadow-slate-100 ">
              <p className="font-bold pl-5">Recent Accounts</p>
              <table className="w-full mt-3">
                <thead>
                  <tr className="h-14 border-b">
                    <th className="text-sm w-[40px] text-center">#</th>
                    <th className="text-sm w-[200px] text-left pl-3">Name</th>
                    <th className="text-sm w-[100px] text-left pl-3">Role</th>
                    <th className="text-sm w-[100px] text-left pl-3">
                      CreatAt
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recenter3User.map((item, index) => (
                    <tr className="h-14" key={index}>
                      <td className="text-sm text-center">{index + 1}</td>
                      <td className="text-sm text-left pl-3">{`${item.firstname} ${item.lastname}`}</td>
                      <td className="text-sm text-left pl-3">{item.role}</td>
                      <td className="text-sm text-left pl-3">{item.creatAT}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className=" flexColStart gap-3 w-full  md:w-[35%]">
            <div className="w-full grid grid-cols-2 gap-2 ">
              {coundBox.map(({ label, total, color, Icon, shadow }, index) => {
                return (
                  <div
                    key={index}
                    className={`${shadow} flexColStart bg-white p-5 rounded-lg border border-slate-100 `}
                  >
                    <div className="flexCenter gap-4">
                      <div className={`${color} p-2 rounded-full`}>
                        <Icon size={23} />
                      </div>
                      <div className="flexColStart  gap-1">
                        <span className="text-xl font-semibold">{total}</span>
                        <small className="text-[0.62rem] text-gray-500 tracking-wider">
                          {label}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full bg-white p-4 rounded-lg border border-slate-100 shadow-md shadow-slate-100 pt-9">
              <AverageCircleChart averageRate={89} />
            </div>
            <div className="flexCenter w-full gap-3 py-8 bg-white p-4 rounded-lg border border-slate-100 shadow-md shadow-slate-100">
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
  );
};

export default Overview;
