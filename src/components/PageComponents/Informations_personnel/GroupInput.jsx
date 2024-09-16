/** @format */

import React from "react";

export default function GroupInput({ name, children, className }) {
  return (
    <div className={`ml-[25px] flex flex-col ${className}`}>
    {/* Titre */}
      <div className="self-start">
        <h1 className="font-[700] border-b-2 border-[--text-color] text-xl w-[170%]">
          {name}
        </h1>
      </div>

      <div className="pl-[30px] flex flex-col">
        {children}
      </div>
    </div>
  );
}
