import React from "react";
import { useNavigate } from "react-router-dom";
import Icon2 from "../icons/icon2";

export const Box2 = ({ isActive }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`relative h-full ${isActive ? "group" : ""} cursor-pointer`}
      onClick={() => navigate("/sound")}
    >
      <div
        className={`absolute inset-0 rounded-[15px] border-[1px] ${
          isActive ? "md:border-green-600 border-green-400" : "md:border-transparent border-green-600"
        } z-10 transition-all duration-300`}
      ></div>
      <div className="h-full md:bg-[#1d1d1d] rounded-[15px] opacity-80 shadow-[0_0px_10px_5px_rgba(0,0,0,0.15)] z-0 flex items-center justify-center">
        <h2
          className={`sm:text-[100%] text-sm ${
            isActive ? "tracking-[8px]" : "tracking-[7px]"
          } transition-all duration-[1500ms]`}
        >
          SOUND DESIGN
        </h2>
        <div
          className={`absolute bottom-24 transition-all duration-700 2xl:block hidden ${
            isActive
              ? "opacity-100 blur-none"
              : "opacity-0 blur-sm group-hover:opacity-100 group-hover:blur-none"
          }`}
        >
          <Icon2 />
        </div>
      </div>
    </div>
  );
};

export default Box2;
