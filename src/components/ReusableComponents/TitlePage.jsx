/** @format */

import React from "react";

export default function TitlePage({ name, icon, children }) {
  return (
    <div className="border-b-2 border-[--text-color] w-full flex justify-between">
      <div className="flex items-center space-x-[12px]">
        {icon}
        <p className="text-[30px] font-[900]">{name}</p>
      </div>
      {children}
    </div>
  );
}
