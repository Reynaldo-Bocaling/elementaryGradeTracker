import { useState } from "react";
import { studentData } from "../../services/DummyData";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import UpdateStudent from "../../components/update-user/UpdateStudent";
import { IoAddOutline, IoSearch } from "react-icons/io5";
import Tables from "../../components/tables/StudentTable";
import CreateStudent from "../../components/create-user/CreateStuden";

type studentType = {
  id?: number;
  firstname?: string;
  lastname?: string;
  gradeLevel: number;
  parentName: string;
  parentEmail: string;
  section?: string[];
};
const Student = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAddStudent, setIsAddStudent] = useState<boolean>(false);

  const [selectData, setSelectData] = useState<studentType>();

  const data = studentData.map(
    (
      { id, firstname, lastname, gradeLevel, parentName, parentEmail, section },
      index
    ) => ({
      no: index + 1,
      id,
      name: `${firstname} ${lastname}`,
      firstname,
      lastname,
      gradeLevel,
      parentName,
      parentEmail,
      section,
    })
  );

  const handleUpdate = (item: any) => {
    setSelectData(item);
  };

  const headers = [
    "#",
    "Name",
    "Grade level",
    "Parent Name",
    "Parent Email",
    "Section",
  ];
  const semester = ["1st sem", "2ndsem"];
  return (
    <>
      <div className="flexBetween mb-2 pr-4">
        <p className="text-lg font-semibold pl-3 ">Student's List</p>
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
          <Button
            color="primary"
            className="text-sm flex items-center gap-2"
            onClick={() => setIsAddStudent(true)}
          >
            Add
            <IoAddOutline />
          </Button>
        </div>
      </div>
      <div className="px-1">
        <Tables
          data={data}
          header={headers}
          handleUpdate={handleUpdate}
          isOpenUpdate={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <UpdateStudent
          isOpen={isOpen}
          onCLose={() => setIsOpen(false)}
          data={selectData}
        />
      )}

      {isAddStudent && (
        <CreateStudent
          isOpen={isAddStudent}
          onCLose={() => setIsAddStudent(false)}
        />
      )}
    </>
  );
};

export default Student;
