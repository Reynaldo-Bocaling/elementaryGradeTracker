// import logo from '../../assets/logo.png'
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { userLinks } from "./Navlinks";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const links = userLinks["admin"];

  return (
    <div
      className={`${
        isOpen ? " w-[250px]" : "w-[80px]"
      } relative bg-white border-rw shadow-lg shadow-slate-100  px-5 py-8 transition-all`}
    >
      <div
        className="flexCenter absolute top-4 -right-4 text-white bg-mainColor p-1 rounded-full w-[30px] h-[30px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoIosArrowBack
          className={`${
            !isOpen ? "rotate-180" : "rotate-0"
          } ease-in duration-300 `}
        />
      </div>

      <div className="flexColCenter gap-2">
        <img
          src="/src/assets/logo.png"
          alt="_logo"
          loading="lazy"
          className="w-[50px]"
        />
        <span
          className={`${
            !isOpen ? "hidden" : ""
          } text-lg font-bold tracking-wide transition-all`}
        >
          GradeTracker
        </span>
      </div>

      <ul className="flexColStart gap-3 mt-9">
        {links.map(({ path, label, Icon }, index) => (
          <li key={index} className={`${isOpen && "w-full"}`}>
            <NavLink
              to={path}
              className={`${
                !isOpen ? "p-4" : "py-3 px-5"
              } link flexStart relative gap-3 text-slate-500 rounded-full transition-all`}
            >
              <Icon size={17} />
              <span
                className={`${
                  !isOpen ? "hidden" : ""
                } text-normal tracking-wider`}
              >
                {label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="link flex items-center gap-3 mt-20 px-5 text-slate-500 cursor-pointer">
        <AiOutlineLogout size={19} />
        <span>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
