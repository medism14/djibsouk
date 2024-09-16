/** @format */

import React from "react";
import logo from "../../assets/djibsouk.png";

export default function PubLoading() {
  return (
    <div className="flex flex-col w-full items-center space-y-[40px]">
      <img src={logo} alt="Logo du site" className="w-[100px] opacity-50" />

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
