import React from "react";

function Intro() {
  return (
    <div>
      <div className=" flex h-96 w-screen items-center justify-center flex-col gap-9 bg-slate-500">
        <div className="justify-center font-bold text-blue-300 text-6xl">
          React
        </div>
        <div>A Java Script Library for building User Interfaces</div>
        <div className="flex gap-8 items-center">
          <div className="bg-blue-300 px-9 py-3">Start</div>
          <div className="text-blue-300">Take Tutorial</div>
        </div>
      </div>
      <div className="flex justify-between mt-14 w-10/12 mx-auto text-2xl text-slate-300 font-light">
        <div>Declarative</div>
        <div>Component-Based</div>
        <div>Learn Once, Write Anywhere</div>
      </div>
    </div>
  );
}

export default Intro;
