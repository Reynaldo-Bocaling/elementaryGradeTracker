import { studentData } from "../../services/DummyData";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import GradeTable from "../../components/grades/gradeTable";
import { useState } from "react";

const Grade = () => {
  const data = studentData.map(
    ({
      id,
      firstname,
      lastname,
      gradeLevel,
      parentName,
      parentEmail,
      section,
      grades,
    }) => ({
      id,
      firstname,
      lastname,
      gradeLevel,
      parentName,
      parentEmail,
      section,
      grades,
      average:
        grades.reduce((acc, item) => acc + item.grade, 0) / grades.length,
    })
  );

  const semester = ["1st sem", "2ndsem"];

  return (
    <>
      <div className="flexBetween mb-2 pr-4">
        <p className="text-lg font-semibold pl-3 ">Student Grades</p>
        <div className="flexCenter relative  gap-2 w-[350px]">
          <Input
            type="email"
            placeholder="search.."
            labelPlacement="outside"
            startContent={<IoSearch className="text-mainColor" />}
            className="max-w-[250px] w-full border border-slate-100 rounded-lg"
          />

          <Select
            placeholder="Filter by"
            className="max-w-[110px] w-full text-sm border border-slate-100 rounded-lg"
          >
            {semester.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>

      <GradeTable data={data} />
    </>
  );
};

export default Grade;
