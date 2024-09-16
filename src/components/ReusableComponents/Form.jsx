/** @format */

import React from "react";

export default function Form({
  titre,
  children,
  width,
  className,
  step,
  totalStep,
  handleSubmit,
  onSubmit,
}) {
  return (
    <div
      className={`${
        width == "full" ? "w-full" : "w-[750px] mx-auto"
      } select-none flex flex-col mb-[50px] ${className}`}
    >
      {/* Titre */}
      <div
        className={`bg-[--primary] text-3xl text-[--light] p-[20px] flex justify-center font-[800] rounded-xl rounded-b-none w-full`}
      >
        {titre}
      </div>

      {/* Body */}
      <div
        className={`px-[60px] border border-2 border-[--text-color] rounded-xl rounded-t-none shadow-2xl pt-[20px] pb-[30px] w-full relative`}
      >
        {totalStep && (
          <div className="absolute top-0 w-full left-0 bg-red-200 flex">
            {Array.from({ length: totalStep }, (_, index) => (
              <div
                key={index}
                className={`flex-1 h-[10px] ${
                  step > index ? "bg-[--secondary]" : "bg-[--light-bold]"
                } `}
              ></div>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
      </div>
    </div>
  );
}
