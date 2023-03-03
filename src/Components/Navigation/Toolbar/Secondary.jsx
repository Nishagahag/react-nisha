import React from "react";
import { FaReact } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import { IoLanguage } from "react-icons/io5";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
function Secondary() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex justify-between text-white bg-black px-5 py-3 items-center">
      <div className="flex items-center gap-2 text-blue-300 text-2xl">
        <div>
          <FaReact />
        </div>
        <Link to="Intro">
          <div className="font-bold ">React</div>
        </Link>
      </div>
      <div className="flex gap-3">
        <Link to="/About">
          <div
            className={`${
              location.pathname === "/About" ? "bg-blue-200 " : ""
            } hover:bg-blue-200 px-3 py-2`}
          >
            Docs
          </div>
        </Link>
        <Link to="/Layout">
          <div
            className={`${
              location.pathname === "/Layout" ? "bg-blue-200 " : ""
            } hover:bg-blue-200 px-3 py-2`}
          >
            Tutorial
          </div>
        </Link>
        <Link to="/Labs">
          <div
            className={`${
              location.pathname === "/" ? "bg-blue-200 " : ""
            } hover:bg-blue-200 px-3 py-2`}
          >
            Blog
          </div>
        </Link>
        <Link to="/Support">
          <div
            className={`${
              location.pathname === "/" ? "bg-blue-200 " : ""
            } hover:bg-blue-200 px-3 py-2`}
          >
            Community
          </div>
        </Link>
      </div>
      <div className="flex bg-[#333] items-center gap-1 px-1">
        <div>
          <HiSearch />
        </div>
        <input
          type="text"
          name="nisha"
          id="nisha"
          className="focus:outline-none bg-[#333] py-2 px-5 text-white"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-2 items-center">
        <div className="hover:bg-slate-400 rounded">v</div>|
        <div className="hover:bg-slate-400 cursor-pointer flex gap-2 items-center">
          <div>
            <IoLanguage />
          </div>
          <div>Language</div>
        </div>
        |<div className="hover:bg-slate-400 cursor-pointer">Github</div>
        <div>
          <BsBoxArrowUpRight />
        </div>
      </div>
    </div>
  );
}

export default Secondary;
