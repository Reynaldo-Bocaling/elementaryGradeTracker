import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./common/sidebar/Sidebar";
import Header from "./common/header/Header";

function Rootlayout() {
  return (
    <div className="fixed top-0 left-0 w-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden gap-2 bg-[#e8e1ee33]">
          <Header />
          <main className=" flex-1 overflow-x-hidden overflow-y-auto  p-3">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Rootlayout;
