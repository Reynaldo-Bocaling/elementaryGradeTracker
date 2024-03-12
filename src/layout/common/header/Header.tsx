import { Avatar } from "@nextui-org/react";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoSearch, IoNotificationsOutline } from "react-icons/io5";
function Header() {
  return (
    <div className="header h-[60px] bg-white shadow-md shadow-slate-100 flex items-center justify-between px-7">
      <div className="hidden md:flex items-center gap-3 bg-slate-100 rounded-full py-1 px-5 ml-1">
        <IoSearch />
        <input
          type="text"
          placeholder="search Something.."
          className="bg-transparent text-sm py-1"
        />
      </div>

      <HiMenuAlt2 size={23} className="md:hidden" />
      <div className="flexCenter gap-7">
        <div className="flex items-center gap-3">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="h-[30px] w-[30px]"
          />
          <small className="text-sm text-gary-400 tracking-wide">
            Rey Bocaling
          </small>
        </div>
        <IoNotificationsOutline size={23} className="text-mainColor" />
      </div>
    </div>
  );
}

export default Header;
