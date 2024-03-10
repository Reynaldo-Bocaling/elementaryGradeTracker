import React from "react";
import { studentData } from "../../services/DummyData";
const Subject = () => {
  const subjects = studentData.map(({ grades }) => ({
    subject: grades.flatMap(({ subject }) => ({
      subject: subject,
    })),
  }));

  console.log(subjects[0].subject);

  return (
    <div>
      <p className="text-lg font-semibold pl-3 ">Subjects</p>
      <div className="grid grid-cols-4 px-2 mt-7 gap-4">
        {subjects[0].subject.map((item, index) => (
          <div
            key={index}
            className="flexCenter  relative w-[200px] bg-white shadow-sm border py-9 px-3 rounded-lg"
          >
            <div className="flexBetween w-full absolute top-1 px-3">
              <small className=" text-gray-500 text-xs font-bold">
                {index + 1}
              </small>

              <div className="flexCenter gap-2 text-gray-400">
                <small className="text-[0.6rem]">Average rate</small>
                <span className="text-[0.6rem] font-medium ">86%</span>
              </div>
            </div>
            <span className="font-semibold tracking-wide">{item.subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subject;
