/** @format */

import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

export default function Modal({
  titre,
  children,
  closeModal,
  handleSubmit,
}) {
  const checkParent = (event) => {
    let element = event.target;
    let result = true;

    if (element.classList.contains("openModal")) {
      return;
    }

    while (element) {
      if (element.classList.contains("modalParent")) {
        break;
      }

      if (element.tagName === "BODY") {
        result = false;
        break;
      }

      element = element.parentNode;
    }

    if (!result) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkParent);

    return () => {
      document.removeEventListener("click", checkParent);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`fixed inset-0 z-30 bg-[rgba(0,0,0,0.3)] flex justify-center items-center m-0 p-0`}
      >
        {/* Modal */}
        <div className="pb-[25px] bg-[--light-bold] border border-2 border-[--text-color] rounded-xl flex flex-col z-40 w-[650px] modalParent">
          {/* Titre */}
          <div className="flex justify-center items-center relative bg-[--primary] text-[--light] py-[12px]">
            <span className="text-2xl font-[700] px-[20px]">{titre}</span>

            {/* Icone fermerture */}
            <div
              className="absolute right-[10px] top-1/2 transform -translate-y-1/2 p-[10px] cursor-pointer select-none"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faClose} className="text-3xl" />
            </div>
          </div>

          {/* Contenu */}
          <div className="flex flex-col px-[40px]">{children}</div>
        </div>
      </div>
    </form>
  );
}
