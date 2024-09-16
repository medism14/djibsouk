/** @format */

import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="">
        <ul className="circles-loading flex space-x-[30px]">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
