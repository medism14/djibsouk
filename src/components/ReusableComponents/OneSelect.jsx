/** @format */

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Select({
  label,
  id,
  name,
  labelDisplay = true,
  binding = true,
  className,
  children,
  placeholder,
  champ,
  defaultValue = "",
  icon,
}) {
  const selectParentRef = useRef(null);
  const [opacity, setOpacity] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const verifOptionSelect = (event) => {
    let item = event.target;

    if (item.value != "") {
      setOpacity(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }
  };

  useEffect(() => {
    const select = selectParentRef.current.querySelector("select");

    if (select.value != "") {
      setOpacity(false);
    }
    // Passer directement la fonction verifOptionSelect
    select.addEventListener("change", verifOptionSelect);

    return () => {
      select.removeEventListener("change", verifOptionSelect);
    };
  }, []);

  return (
    <div
      className={`flex flex-col w-[470px] ${className}`}
    >
      {labelDisplay && (
        <label htmlFor={id} className="text-lg font-[600]">
          {label}:{binding && "*"}
        </label>
      )}
      <div
        className="flex items-center h-[50px] relative"
        ref={selectParentRef}
      >
        {/* Icon */}
        <div
          className={`absolute flex left-[15px] top-1/2 transform -translate-y-1/2 text-[--text-color] pointer-events-none ${
            opacity ? "opacity-50" : "opacity-100"
          }`}
        >
          {icon}
        </div>

        {/* Select */}
        <select
          name={name}
          id={id}
          style={{ textIndent: "45px" }}
          className={`flex-1 h-full rounded-lg border border-2 border-[--text-color] font-[500] cursor-pointer ${
            opacity ? "text-[--text-opacity]" : ""
          } outline-none appearance-none ${
            opacity ? "opacity-100" : "opacity-100"
          }]`}
          defaultValue={defaultValue}
        >
          {/* Option par défaut qui est désactivée après sélection */}
          {!defaultValue && (
            <option value="" className="opacity-50" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>

        {/* Chevron icon */}
        <div
          className={`absolute flex right-[15px] top-1/2 transform -translate-y-1/2 pointer-events-none`}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-xl" />
        </div>
      </div>

      {/* Affichage des validations */}
      {submitted && (
        <div className="text-green-600 text-sm dropOpacityAnimation">
          le Champ "{champ}" a bien été mis à jour !
        </div>
      )}
    </div>
  );
}
