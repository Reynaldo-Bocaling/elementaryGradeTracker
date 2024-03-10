import { PiStudent } from "react-icons/pi";
import { LiaAwardSolid, LiaTimesSolid } from "react-icons/lia";
import { MdCheck } from "react-icons/md";

export const coundBox = [
  {
    label: "Students",
    total: 80,
    Icon: PiStudent,
    color: "bg-blue-100 text-mainColor",
    shadow: " shadow-lg shadow-shadowBlue",
  },
  {
    label: "Awards",
    total: 60,
    Icon: LiaAwardSolid,
    color: "bg-orange-100 text-orange-500",
    shadow: " shadow-lg shadow-shadowOrange",
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
