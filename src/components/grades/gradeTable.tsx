import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { HiOutlineDotsHorizontal, HiOutlineDownload } from "react-icons/hi";
import UpdateGrades from "./UpdateGrades";
type StudentType = {
  id: number;
  firstname: string;
  lastname: string;
  section: string;
  gradeLevel: number;
  parentName: string;
  parentEmail: string;
  average: number;
  grades: { subject: string; grade: number }[];
};
const gradeTable = ({ data }: { data: StudentType[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<any>({});
  const [tableToggle, setTableToggle] = useState<number | null>(1);

  const handleUpdate = (item: any) => {
    setSelectData(item);
    if (selectData !== null) {
      setIsOpen(true);
    }
  };

  const handleTableToggle = (id: number) => {
    setTableToggle(tableToggle === id ? null : id);
  };
  return (
    <>
      <div className="bg-white border  rounded-lg overflow-x-auto lg:overflow-visible px-5">
        <table className="w-full">
          <thead>
            <tr className="h-14 border-b">
              <th className="tracking-wide text-xs text-center w-[50px]">#</th>
              <th className="tracking-wide text-xs text-left pl-5 border-l">
                Name
              </th>

              {data[0]?.grades.map((grade) => (
                <th
                  className="tracking-wide text-xs text-center border border-collapse w-[80px] "
                  key={grade.subject}
                >
                  {grade.subject}
                </th>
              ))}
              <th className="tracking-wide text-xs text-center border border-collapse   w-[120px]">
                Average
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((student, index) => (
              <tr key={student.id} className="h-14">
                <td className="text-xs text-center border-b">{index + 1}</td>
                <td className="text-xs text-left pl-5 border-l border-b w-[200px]">
                  {`${student.firstname} ${student.lastname}`}
                </td>

                {student.grades.map((grade) => (
                  <td
                    className="text-xs text-center  border border-collapse "
                    key={grade.subject}
                  >
                    {grade.grade}
                  </td>
                ))}
                <td className=" relative text-xs text-center  border border-collapse font-semibold">
                  <div className="flexCenter gap-4">
                    <span
                      className={`${
                        student.average < 75
                          ? "  text-red-500 underline"
                          : "text-green-500"
                      }`}
                    >
                      {student.average.toFixed(2)}
                    </span>

                    <button
                      className="text-gray-600 hover:bg-slate-50 py-1 px-2 transition-all hover:rounded-lg hover:shadow-sm"
                      onClick={() => handleTableToggle(student.id)}
                    >
                      <HiOutlineDotsHorizontal size={18} />
                    </button>
                    {tableToggle === student.id && (
                      <div
                        className="absolute top-[80%] flexColStart gap-2 -left-12 px-3 bg-white border shadow-sm rounded-lg w-[140px] h-[100px] z-50"
                        onClick={() => setTableToggle(null)}
                      >
                        <button
                          className="flexCenter gap-3 hover:underline hover:text-gray-500 transition-all"
                          onClick={() => handleUpdate(student.grades)}
                        >
                          <LuPencil
                            size={17}
                            className="mx-auto cursor-pointer text-green-500"
                          />
                          Edit
                        </button>
                        <button className="flexCenter gap-3 hover:underline hover:text-gray-500 transition-all">
                          <HiOutlineDownload
                            size={20}
                            className="mx-auto cursor-pointer text-blue-500"
                          />
                          Print Grade
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isOpen && (
        <UpdateGrades
          isOpen={isOpen}
          onCLose={() => setIsOpen(false)}
          data={selectData}
        />
      )}
    </>
  );
};

export default gradeTable;
