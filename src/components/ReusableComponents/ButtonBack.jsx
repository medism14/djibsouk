/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ButtonBack({ name, onClick, className }) {
  return (
    <button className={`absolute top-0 left-0 flex space-x-[10px] px-[20px] py-[10px] bg-[--secondary] rounded-lg items-center transition-all duration-300 hover:bg-[--secondary-modif] ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={faLeftLong} className="" />
      <span className="text-base font-[700]">{name}</span>
    </button>
  );
}
