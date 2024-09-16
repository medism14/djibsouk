/** @format */

import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addInputNamesChange } from "../../redux/features/global/globalSlice";
import { Tooltip } from "..";

export default function Input({
  label,
  id,
  name,
  type,
  placeholder,
  labelDisplay = true,
  className,
  register,
  inputRegister,
  errors,
  binding = false,
  oneInput = false,
  width = "full",
  warning = false,
  icon,
}) {
  const divRef = useRef(null);
  const [passDisplayed, setPassDisplayed] = useState(false);
  const [focus, setFocus] = useState(false);
  const [opacity, setOpacity] = useState(true);
  const [tryDispatchName, setTryDispatchName] = useState(0);

  const inputNamesChange = useSelector(
    (state) => state.global.inputNamesChange
  );
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setOpacity(event.target.value === "");

    // Si dans oneInput désactiver le bouton
    if (oneInput) {
      setTryDispatchName((prev) => prev + 1);
    }
  };

  // Dispatch l'activation du bouton
  useEffect(() => {
    if (tryDispatchName > 0) {
      let result = true;

      for (let inputNameChange of inputNamesChange) {
        if (inputNameChange == name) {
          result = false;
          break;
        }
      }

      // Si déjà, ça sert à rien de le refaire
      if (result) {
        dispatch(addInputNamesChange(name));
      }
    }
  }, [tryDispatchName]);

  useEffect(() => {
    if (divRef.current) {
      let inputElement = divRef.current.querySelector("input");

      if (inputElement.value !== "") {
        setOpacity(false);
      }

      if (inputElement) {
        inputElement.addEventListener("input", handleInput);

        return () => {
          inputElement.removeEventListener("input", handleInput);
        };
      }
    }
  }, []);

  return (
    // Les colonnes
    <div
      className={`flex flex-col w-full ${
        width == "full" ? "w-full" : ""
      } ${className}`}
    >
      {labelDisplay && (
        <label htmlFor={id} className="text-lg font-[600]">
          {label}:{binding && "*"}
        </label>
      )}
      {/* Ligne de l'input */}
      <div className="flex items-center h-[50px] relative" ref={divRef}>
        {/* Icon */}
        <div
          className={`absolute flex left-[15px] top-1/2 transform -translate-y-1/2 text-[--text-color] pointer-events-none ${
            opacity ? "text-[--text-opacity]" : ""
          }`}
        >
          {icon}
        </div>

        {/* Input */}
        <input
          id={id}
          name={name}
          type={passDisplayed ? "text" : type}
          placeholder={placeholder}
          {...(register
            ? inputRegister
              ? register(name, inputRegister)
              : register(name)
            : {})}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`flex-1 h-full pl-[45px] pr-[10px] font-[500] rounded-lg border border-2 border-[--text-color] outline-none transition-all duration-100 focus:border-[--accent-blue] ${
            type == "password" ? "rounded-r-none" : ""
          }`}
        />

        {/* Yeux mot de passe */}
        {type == "password" && (
          <div
            className={`bg-[--light-bold] flex items-center justify-center h-full px-[10px] rounded-r-lg cursor-pointer border border-2 border-l-0 transition-all duration-300 hover:bg-[--light-bold-modif] ${
              focus ? "border-[--accent-blue]" : "border-[--text-color]"
            }`}
            onClick={() => setPassDisplayed((prev) => !prev)}
          >
            {passDisplayed ? (
              <FontAwesomeIcon icon={faEyeSlash} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faEye} className="text-2xl" />
            )}
          </div>
        )}

        {/* Pour le warning (champ vide) */}
        {warning && (
          <Tooltip
            tooltip="Des informations sont manquantes ici"
            bgColor="#F1C179"
            color="#4F4F4F"
            className="absolute top-1/2 transform -translate-y-1/2 mr-[7px] right-full"
          >
            <div className="bg-[--secondary] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <p className="text-xl font-[900]">!</p>
            </div>
          </Tooltip>
        )}
      </div>

      {/* Gestion d'errerurs */}
      {errors && errors[name] && (
        <div className="text-[--accent-red] text-sm">
          {errors[name].message}
        </div>
      )}
    </div>
  );
}
