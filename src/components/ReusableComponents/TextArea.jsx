/** @format */

import React, { useEffect, useRef, useState } from "react";

export default function Textarea({
  label,
  id,
  name,
  placeholder,
  labelDisplay = true,
  className,
  register,
  inputRegister,
  errors,
  binding = true,
  rows = 5, // nombre de lignes par défaut
  cols = 50, // largeur optimale par défaut
  icon,
}) {
  const divRef = useRef(null);
  const [opacity, setOpacity] = useState(true);

  const handleTextarea = (event) => {
    setOpacity(event.target.value === "");
  };

  useEffect(() => {
    if (divRef.current) {
      let textareaElement = divRef.current.querySelector("textarea");

      if (textareaElement) {
        textareaElement.addEventListener("input", handleTextarea);

        return () => {
          textareaElement.removeEventListener("input", handleTextarea);
        };
      }
    }
  }, []);

  return (
    <div className={`flex flex-col w-full ${className}`}>
      {labelDisplay && (
        <label htmlFor={id} className="text-lg font-[600]">
          {label}:{binding && "*"}
        </label>
      )}

      {/* Ligne */}
      <div className="flex flex-col relative" ref={divRef}>
        {/* Icon */}
        {icon && (
          <div
            className={`absolute left-[15px] top-[15px] text-[--text-color] pointer-events-none ${
              opacity ? "text-[--text-opacity]" : ""
            }`}
          >
            {icon}
          </div>
        )}

        {/* Textarea */}
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          {...(register
            ? inputRegister
              ? register(name, inputRegister)
              : register(name)
            : {})}
          className={`p-[10px] font-[500] rounded-lg border border-2 border-[--text-color] outline-none transition-all duration-100 focus:border-[--accent-blue] ${
            icon ? "pl-[45px]" : "pl-[15px]"
          }`}
        />

        {/* Gestion d'erreurs */}
        {errors && errors[name] && (
          <div className="text-[--accent-red] text-sm">
            {errors[name].message}
          </div>
        )}
      </div>
    </div>
  );
}
