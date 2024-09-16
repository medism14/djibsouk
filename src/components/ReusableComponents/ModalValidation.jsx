/** @format */

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

export default function ModalValidation({
  setModalValidationHide,
  text,
  activationButton,
}) {
  const modalRef = useRef(null);

  const handleClickVerif = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      event.target != activationButton
    ) {
      setModalValidationHide(true);
    }
  };

  // Pour voir où l'on clique
  useEffect(() => {
    document.addEventListener("click", handleClickVerif);

    return () => {
      document.removeEventListener("click", handleClickVerif);
    };
  }, [modalRef]);

  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] flex items-center justify-center select-none">
      <div
        ref={modalRef}
        className="bg-[--light] rounded-lg rounded-b-none w-[500px] text-center pt-[30px] pb-[20px] relative"
      >
        <div
          className="absolute top-0 right-0 pr-[5px] pt-[5px] cursor-pointer"
          onClick={() => setModalValidationHide(true)}
        >
          <FontAwesomeIcon icon={faClose} className="w-[20px] h-auto" />
        </div>
        <p className="text-green-600">{text}</p>

        <div className="absolute bottom-0 h-[5px] bg-green-600 transition-all w-[0px] w-full slideInGreenAnimation"></div>
      </div>
    </div>
  );
}
