import { PiStudent } from "react-icons/pi";
import { LiaAwardSolid, LiaTimesSolid } from "react-icons/lia";
import { MdCheck } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FiPieChart } from "react-icons/fi";

export const coundBox = [
  {
    label: "Students",
    total: 80,
    Icon: PiStudent,
    color: "bg-blue-100 text-mainColor",
    shadow: " shadow-lg shadow-shadowBlue",
  },
  {
    label: "Teachers",
    total: 70,
    Icon: FiUsers,
    color: "bg-violet-100 text-violet-500",
    shadow: " shadow-lg shadow-shadowGreen",
  },
  {
    label: "Awards",
    total: 60,
    Icon: LiaAwardSolid,
    color: "bg-orange-100 text-orange-500",
    shadow: " shadow-lg shadow-shadowOrange",
  },
  {
    label: "Sections",
    total: 10,
    Icon: FiPieChart,
    color: "bg-cyan-100 text-cyan-500",
    shadow: " shadow-lg shadow-shadowRed",
  },
  {
    label: "Passed",
    total: 70,
    Icon: MdCheck,
    color: "bg-green-100 text-green-500",
    shadow: " shadow-lg shadow-shadowGreen",
  },
  {
    label: "Failed",
    total: 10,
    Icon: LiaTimesSolid,
    color: "bg-red-100 text-red-500",
    shadow: " shadow-lg shadow-shadowRed",
  },
];
