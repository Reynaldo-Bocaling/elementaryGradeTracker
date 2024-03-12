import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { FiTrash2 } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

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
  students: number;
};

type propsType = {
  data: teacherType[];
  handleUpdate: (item: teacherType) => void;
  isOpenUpdate: () => void;
  header: string[];
};

const TeacherTable = ({
  data,
  handleUpdate,
  header,
  isOpenUpdate,
}: propsType) => {
  const [tableToggle, setTableToggle] = useState<number | null>(null);

  const handleTableToggle = (id: number) => {
    setTableToggle(tableToggle === id ? null : id);
  };

  const handleUpdateToggle = (item: teacherType) => {
    handleUpdate(item);
    if (item !== null) {
      isOpenUpdate();
    }
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="bg-white border p-1 rounded-lg overflow-x-auto lg:overflow-visible">
            <table className="w-full">
              <thead>
                <tr className="h-16 border-b">
                  {header.map((item) => (
                    <th
                      key={item}
                      className="tracking-wider text-sm text-left pl-5"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data?.map((item) => (
                  <tr key={item.id} className="h-16 border-b">
                    <td className="text-sm text-left pl-5 w-[90px]">
                      {item.id}
                    </td>
                    <td className="text-sm text-left pl-5">{item.name}</td>
                    <td className="text-sm text-left pl-5">{item.contact}</td>
                    <td className="text-sm text-left pl-5 w-[170px]">
                      {item.email}
                    </td>
                    <td className="text-sm text-left pl-9 w-[170px]">
                      {item.rank}
                    </td>
                    <td className="relative  text-sm text-left  w-[170px]">
                      <div className="flexCenter gap-9 ">
                        <span>{item.students}</span>
                        <div className=" h-14 flexCenter">
                          <button
                            className="text-gray-600 hover:bg-slate-50 py-1 px-2 transition-all hover:rounded-lg hover:shadow-sm"
                            onClick={() => handleTableToggle(item.id)}
                          >
                            <HiOutlineDotsHorizontal size={18} />
                          </button>
                          {tableToggle === item.id && (
                            <div
                              className="tableToggleContainer flexColStart gap-2 bg-white border shadow-sm w-[140px] h-[100px] z-50"
                              onClick={() => setTableToggle(null)}
                            >
                              <button
                                onClick={() => handleUpdateToggle(item)}
                                className="flexCenter gap-3 hover:underline hover:text-gray-500 transition-all"
                              >
                                <LuPencil
                                  size={15}
                                  className="cursor-pointer text-green-500"
                                />
                                <span>Edit</span>
                              </button>
                              <button className="flexCenter gap-3 hover:underline hover:text-gray-500 transition-all">
                                <FiTrash2
                                  size={15}
                                  className="cursor-pointer text-red-500"
                                />
                                <span>Delete</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">No data</div>
      )}
    </>
  );
};

export default TeacherTable;
