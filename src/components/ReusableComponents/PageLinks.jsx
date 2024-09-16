/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageLinks({ links }) {
  const navigate = useNavigate();

  return (
    <div className="flex my-[10px] space-x-[4px]">
      {links.map((value, index) => (
        <React.Fragment key={index}>
          <span
            onClick={() => index + 1 !== links.length && navigate(value.link)}
            className={`${
              index + 1 === links.length
                ? "font-[600] truncate"
                : "cursor-pointer font-[800] whitespace-nowrap"
            }`}
          >
            {value.page}
          </span>
          {index + 1 !== links.length && (
            <span className="font-[800]">{" > "}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
