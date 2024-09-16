/** @format */

import React, { useEffect, useRef, useState } from "react";

const ToolTip = ({
  children,
  tooltip,
  bgColor = "#f1c179",
  color = "#4F4F4F",
  className,
}) => {
  const tooltipRef = useRef(null);
  const [size, setSize] = useState(false);

  useEffect(() => {
    const tooltipWidth = tooltipRef.current.getBoundingClientRect().width;
    if (tooltipWidth > 450) {
      setSize(true);
    }
  }, []);

  return (
    <div className={`group ${className} select-none cursor-default`}>
      {children}
      <div
        className={`absolute bottom-full mb-[2px] left-1/2 transform -translate-x-1/2 flex flex-col invisible group-hover:visible`}
      >
        {/* Interieur tooltip */}
        <div
          style={{ backgroundColor: bgColor, color: color }}
          ref={tooltipRef}
          className={`rounded-lg shadow-md px-2 py-1 text-center ${
            size ? "w-[450px] break-words" : "whitespace-nowrap"
          }`}
        >
          {tooltip}
        </div>

        {/* Fleche tooltip */}
        <div
          style={{ borderTopColor: bgColor }}
          className="mx-auto w-0 h-0 border-x-[10px] border-x-transparent border-t-[10px]"
        ></div>
      </div>
    </div>
  );
};

export default ToolTip;
