import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Button({ width, icon, inputName, name, className, bg="bg-[--secondary]", bgHover="hover:bg-[--secondary-modif]", border=false, iconPosition="left", disabled=false, onClick }) {

  const [disable, setDisable] = useState(disabled);
  const inputNamesChange = useSelector((state) => state.global.inputNamesChange);

  useEffect(() => {
    if (inputName) {
      let result = false;

      for (let inputNameChange of inputNamesChange) {
        if (inputNameChange == inputName) {
          result = true;
          break;
        } 
      }

      if (result && disable) {
        setDisable(false);
      } else if (!result && !disable) {
        setDisable(true);
      }
    }
  }, [inputNamesChange])

  return (
    <button onClick={onClick} disabled={disable} className={`${width == "full" ? 'w-full' : "w-auto"} flex space-x-[10px] justify-center items-center rounded-lg ${bg} text-base ${disable ? 'opacity-50' : `opacity-100 transition-all duration-300 ${bgHover}`} ${className}`}>
      {iconPosition == "left" && icon}
      
      <span className="font-[700]">{name}</span>

      {iconPosition == "right" && icon}
    </button>
  )
}
