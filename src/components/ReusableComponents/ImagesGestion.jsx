/** @format */

import {
  faClose,
  faImage,
  faPencil,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setImagesAnnonce } from "../../redux/features/global/globalSlice";

export default function ImagesGestion({ modif = false, errors }) {
  const [images, setImages] = useState([]);

  const dispatch = useDispatch();

  const handleAddImage = () => {
    if (images.length < 10) {
      setImages((prev) => [...prev, "/voiture.png"]);
    }
  };

  const handleRemove = (indexToRemove) => {
    setImages(() => {
      const updateTab = images.filter((_, index) => index != indexToRemove);
      return [...updateTab];
    });
  };

  useEffect(() => {
    dispatch(setImagesAnnonce(images));
  }, [images]);

  return (
    <div className="flex flex-col px-[20px]">
      {/* Enregistrement d'images */}
      <div className="flex flex-col items-center">
        {/* Icône ajout image */}
        <div
          className="w-[140px] h-[140px] rounded-full flex flex-col items-center bg-[--primary] py-[15px] cursor-pointer"
          onClick={handleAddImage}
        >
          <FontAwesomeIcon
            icon={faImage}
            className="w-[90px] h-auto text-[--light]"
          />
          <FontAwesomeIcon
            icon={faPlus}
            className="w-[20px] h-auto text-[--light]"
          />
        </div>

        <h1 className="mt-[10px] font-[800] text-lg">
          Ajoutez des images à votre annonce
        </h1>
        <p>La première image est celle qui doit donner le plus d’impression</p>

        {/* Ligne separation */}
        <div className="h-[15px] w-full bg-[--light] rounded-lg my-[15px]" />
      </div>

      {/* Dispaly d'images */}
      <div className="flex flex-col">
        <p className="self-center font-[900]">{images.length}/10</p>

        {/* Les images */}
        <div className="flex flex-wrap justify-between mt-[25px]">
          {/* Les cartes d'images */}
          {images.map((value, index) => (
            <div key={index} className="w-[38%] flex flex-col mb-[20px]">
              <p className="self-center font-[500]">
                {index + 1}/{images.length}
              </p>
              <div className="flex-1 relative">
                <img src={value} alt={"Image "} className="w-full" />
                <div
                  className="absolute left-full top-[5px] w-[35px] h-[35px] flex justify-center items-center bg-[--accent-red] ml-[3px] rounded-full text-[--light] cursor-pointer transition-all duration-200 hover:bg-[--accent-red-modif]"
                  onClick={() => handleRemove(index)}
                >
                  <FontAwesomeIcon icon={faClose} className="text-lg" />
                </div>

                {modif && (
                  <div className="absolute left-full bottom-[5px] w-[35px] h-[35px] flex justify-center items-center bg-[--secondary] ml-[3px] rounded-full cursor-pointer transition-all duration-200 hover:bg-[--secondary-modif]">
                    <FontAwesomeIcon icon={faPencil} className="text-lg" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {errors && errors.images && (
        <div className="text-[--accent-red] text-center">
          {errors.images.message}
        </div>
      )}
    </div>
  );
}
