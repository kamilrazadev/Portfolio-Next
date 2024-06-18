import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineSpeed } from "react-icons/md";
import { TiArrowRight } from "react-icons/ti";

const WebServicesCard = () => {
  return (
    <div className="flex flex-col gap-2 p-5 border-t-[1px] border-b-[1px] border-r-[1.5px] border-l-[1.5px] border-slate-600 rounded-3xl backdrop-blur-md">
      <div
        className="mb-2
       w-[50px] h-[50px] text-slate-200 text-2xl rounded-full flex justify-center items-center bg-[#14223e] relative after:absolute after:top-0 after:left-0 after:w-[51px] after:h-[51px] after:rounded-full after:bg-slate-500 after:z-[-1] "
      >
        <MdOutlineSpeed />
      </div>
      <p className="text-white font-semibold text-xl">Well Optimized</p>
      <p className="text-slate-400 text-[15px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae ut
      </p>
      <div className="w-full flex justify-end">
        <button className="flex items-center gap-1 text-slate-200 ">
          <span className="text-sm">Get a Quote</span> <BsArrowRight className="text-my-purple" />
        </button>
      </div>
    </div>
  );
};

export default WebServicesCard;
