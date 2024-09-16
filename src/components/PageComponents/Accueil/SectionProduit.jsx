/** @format */

import React, { useEffect, useState } from "react";
import voiture from "../../../assets/voiture.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../ReusableComponents/Button";

const dataCategorie = {
  categorieName: "Voitures",
  produits: [
    {
      user: "Mohamed Osman Elmi",
      img: voiture,
      sousCategorie: "Location",
      nomProduit:
        "Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
      prix: "500 FDJ",
      livraison: true,
      localisation: "Balbala, Djibouti",
    },
    {
      user: "Mohamed Osman Elmi",
      img: voiture,
      sousCategorie: "Location",
      nomProduit:
        "Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
      prix: "500 FDJ",
      livraison: true,
      localisation: "Balbala, Djibouti",
    },
    {
      user: "Mohamed Osman Elmi",
      img: voiture,
      sousCategorie: "Location",
      nomProduit:
        "Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
      prix: "500 FDJ",
      livraison: true,
      localisation: "Balbala, Djibouti",
    },
    {
      user: "Mohamed Osman Elmi",
      img: voiture,
      sousCategorie: "Location",
      nomProduit:
        "Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
      prix: "500 FDJ",
      livraison: true,
      localisation: "Balbala, Djibouti",
    },
    {
      user: "Mohamed Osman Elmi",
      img: voiture,
      sousCategorie: "Location",
      nomProduit:
        "Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
      prix: "500 FDJ",
      livraison: true,
      localisation: "Balbala, Djibouti",
    },
  ],
};

export default function SectionProduit({ categorie_id, children }) {
  const [data, setData] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next-product" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleRight} />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-product" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleLeft} />
    </div>
  );

  const settings = {
    dots: false,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    afterChange: setCurrentSlide,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  useEffect(() => {
    setData(dataCategorie);
  }, []);

  return (
    <section className="mt-[40px]">
      {/* Titre de la section */}
      <div className="flex justify-between items-center border-b-[2px] pb-[6px] border-[--text-color]">
        {/* Partie gauche */}
        <div className="flex space-x-[5px] items-center">
          {children}
          <span className="text-xl font-[800]">{data.categorieName}</span>
        </div>

        {/* Partie droite */}
        <div>
          <Button width={"normal"} size={"normal"} name="Voir plus +" className={"px-[22px] py-[7px]"} />
        </div>
      </div>

      {/* Les produits */}
      <div className="relative w-full mt-[20px]">
        <Slider {...settings}>
          {data &&
            data.produits &&
            data.produits.map((produit, index) => (
              <div key={index} className="px-[20px]">
                <div className="flex justify-center">
                  <div className="flex flex-col space-y-[25px] w-[200px] cursor-pointer">
                    {/* Partie haute */}
                    <div className="flex flex-col">
                      <div className="flex space-x-[5px] items-center">
                        <div className="py-[12px]">
                          <button className="w-[30px] h-[30px] bg-[--primary] text-white rounded-full border border-1 border-[#4F4F4F]">
                            <FontAwesomeIcon
                              icon={faUser}
                              className="text-base"
                            />
                          </button>
                        </div>
                        <span className="text-sm font-[600] truncate">
                          {produit.user}
                        </span>
                      </div>

                      <img
                        src={produit.img}
                        alt="Voiture"
                        className="w-full rounded-lg"
                      />

                      <h2 className="text-xl font-[800]">
                        {produit.sousCategorie}
                      </h2>

                      <h5 className="text-sm font-[600] truncate">
                        {produit.nomProduit}
                      </h5>

                      <h5 className="text-sm font-[400]">{produit.prix}</h5>
                    </div>

                    {/* Partie basse */}
                    <div className="flex flex-col">
                      <p className="text-[--accent-blue] text-sm font-[600]">
                        {produit.livraison ? "Livraison disponible" : ""}
                      </p>
                      <p className="text-sm font-[600]">
                        {produit.localisation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        {/* Une carte */}
      </div>
    </section>
  );
}
