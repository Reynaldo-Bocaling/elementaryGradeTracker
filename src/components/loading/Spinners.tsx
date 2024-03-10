import React from "react";
import { ClipLoader } from "react-spinners";

const Spinners = () => {
  return (
    <div className="flexCenter h-screen w-screen fixed top-0 left-0 bg-[rgab(0,0,0,0.12)] transition-all">
      <ClipLoader color="#36a4d6" size={40} speedMultiplier={1} />
    </div>
  );
};

export default Spinners;
