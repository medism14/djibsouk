/** @format */

import React from "react";

export default function InfoPart({ title, children, expiration }) {
  return (
    <div className="bg-[--light] px-[30px] py-[25px] rounded-lg mt-[30px] flex flex-col">
      {/* Titre annonce */}
      <div className="flex justify-between mb-[20px]">
        <h2 className="font-[800] text-xl">{title}</h2>
        {expiration && (
          <p
            style={{ textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)" }}
            className="italic"
          >
            Date avant expiration: {expiration}
          </p>
        )}
      </div>
      <div className="px-[25px]">{children}</div>
    </div>
  );
}
