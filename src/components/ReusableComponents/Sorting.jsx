/** @format */

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

export default function Sorting({ setSortValue, values }) {
  const [open, setOpen] = useState(false);

  const selectionRef = useRef(null);

  const handleSelectionChoice = (event) => {
    setSortValue(event.target.textContent);
    setOpen(false);
};

  const handleSelectionClose = (event) => {
    if (selectionRef.current && !selectionRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  // Pour verifier le clique du select
  useEffect(() => {
    document.addEventListener("click", handleSelectionClose);

    return () => {
      document.removeEventListener("click", handleSelectionClose);
    };
  }, [selectionRef.current]);

  return (
    <div ref={selectionRef} className="relative shadow-xl mb-[7px] select-none">
      <div
        className="py-[8px] w-[220px] flex items-center justify-center border border-2 border-[--text-color] cursor-pointer rounded-lg"
        onClick={() => setOpen((prev) => !prev)}
      >
        <p className="mr-[8px]">Trier par</p>
        {open ? (
          <FontAwesomeIcon icon={faArrowUp} />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} />
        )}
      </div>

      {open && (
        <div className="absolute top-full left-[0px] flex flex-col px-[7px] py-[10px] space-y-[6px] border border-2 border-[--text-color] shadow-xl rounded-lg bg-white w-full">
          {values.map((value, index) => (
            <div
              key={index}
              className="w-full py-[10px] transition-all duration-300 hover:bg-[--light-bold] text-center rounded-lg cursor-pointer"
              onClick={handleSelectionChoice}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
