import { RxDashboard } from "react-icons/rx";
import { FiUsers, FiSettings } from "react-icons/fi";
import { AiOutlineBarChart } from "react-icons/ai";
import { IoBookOutline } from "react-icons/io5";
export const userLinks = {
  admin: [
    {
      path: "/",
      label: "Overview",
      Icon: RxDashboard,
    },
    {
      path: "/teacher-list",
      label: "Teachers",
      Icon: FiUsers,
    },
    {
      path: "/student-list",
      label: "Students",
      Icon: FiUsers,
    },
    {
      path: "/grades",
      label: "Grades",
      Icon: AiOutlineBarChart,
    },
    {
      path: "/subjects",
      label: "Subjects",
      Icon: IoBookOutline,
    },
    {
      path: "/settings",
      label: "Settings",
      Icon: FiSettings,
    },
  ],
  teacher: [
    {
      path: "/",
      label: "Overview",
      Icon: RxDashboard,
    },
    {
      path: "/student-list",
      label: "Students",
      Icon: FiUsers,
    },
    {
      path: "/grades",
      label: "Grades",
      Icon: AiOutlineBarChart,
    },
    {
      path: "/subjects",
      label: "Subjects",
      Icon: IoBookOutline,
    },
    {
      path: "/settings",
      label: "Settings",
      Icon: FiSettings,
    },
  ],
};
