/** @format */

import { faHandPointer, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../ReusableComponents/Button";
import { Tooltip } from "../..";

export default function ButtonClick({
  name,
  disabled,
  disabledMessage,
  bg,
  bgHover,
  onClick,
}) {
  return (
    <div className="flex flex-col">
      <p className="font-[600] text-lg">{name}</p>
      <div className="pl-[10px] mt-[5px] relative">
        {disabled && disabledMessage && (
          <Tooltip
            tooltip={disabledMessage}
            className="absolute top-1/2 transform -translate-y-1/2 right-full"
          >
            <div className="bg-[--secondary] w-[25px] h-[25px] flex items-center justify-center rounded-full">
              <p className="text-xl font-[900]">!</p>
            </div>
          </Tooltip>
        )}

        <Button
          width="normal"
          icon={<FontAwesomeIcon icon={faHandPointer} className="text-xl" />}
          name="Cliquez ici"
          className={
            "px-[20px] text-[--light] text-sm py-[7px]"
          }
          bg={bg}
          bgHover={bgHover}
          border={true}
          iconPosition="left"
          onClick={onClick}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
