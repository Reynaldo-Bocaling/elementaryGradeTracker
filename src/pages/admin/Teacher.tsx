import { useState } from "react";
import { teacherData } from "../../services/DummyData";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import UpdateStudent from "../../components/update-user/UpdateTeacher";
import { IoSearch } from "react-icons/io5";
import Tables from "../../components/tables/TeacherTable";
import { IoAddOutline } from "react-icons/io5";

type studentType = {
  id?: number;
  name: string;
  gradeLevel: number;
  parentName: string;
  parentEmail: string;
  section?: string;
};

type teacherType = {
  id: number;
  name: string;
  contact: string;
  email: string;
  rank: number;
};
const Student = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<teacherType | null>();

  const handleUpdate = (item: any) => {
    setSelectData(item);
  };

  console.log(selectData);

  const headers = ["#", "Name", "Contact", "Email", "Rank", "Students"];
  const semester = ["1st sem", "2ndsem"];
  return (
    <>
      <div className="flexBetween mb-2 pr-4">
        <p className="text-lg font-semibold pl-3 ">Teacher's List</p>
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
          <Button color="primary" className="text-sm flex items-center gap-2">
            Add
            <IoAddOutline />
          </Button>
        </div>
      </div>
      <div className="px-1">
        <Tables
          data={teacherData}
          header={headers}
          handleUpdate={handleUpdate}
          isOpenUpdate={() => setIsOpen(true)}
        />
      </div>

      {isOpen && selectData && (
        <UpdateStudent
          isOpen={isOpen}
          onCLose={() => setIsOpen(false)}
          data={selectData}
        />
      )}
    </>
  );
};

export default Student;
