/** @format */

import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardAnnonce({ value, children, prefixeDate }) {
  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next-card " onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleRight} />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-card" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleLeft} />
    </div>
  );

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      {/* Carte d'une annonce */}
      <div className="flex flex-col">
        {/* Titre */}
        <h2 className="font-[900] text-xl truncate">{value.name}</h2>

        {/* Nom et date de visionnage */}
        <div className="flex justify-between">
          <div className="flex space-x-[5px] items-center h-[40px]">
            {value.userImage ? (
              <img
                src={value.userImage}
                alt="Image profil"
                className="rounded-full w-[40px] h-full"
              />
            ) : (
              <div className="w-[40px] h-full rounded-full bg-[--primary] text-[--light]">
                <FontAwesomeIcon icon={faUser} className="" />
              </div>
            )}

            <p className="text-sm font-[700] italic">{value.user}</p>
          </div>

          <p className="text-sm text-[--text-opacity] italic">
            {prefixeDate} {value.date}
          </p>
        </div>

        {/* Images produits */}
        <div
          className={`mt-[20px] ${value.images.length > 4 ? "mx-[40px]" : ""}`}
        >
          {value.images.length > 4 ? (
            <Slider {...settings}>
              {value.images.map((value, index) => (
                <div key={index} className="">
                  <div className="max-w-[240px] mx-auto">
                    <img
                      src={value}
                      alt="Image site"
                      className="w-full h-[200px]"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="flex space-x-[35px]">
              {value.images.map((value, index) => (
                <div key={index} className="">
                  <div className="max-w-[240px] mx-auto">
                    <img
                      src={value}
                      alt="Image site"
                      className="w-auto h-[200px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Informations importante */}
        <div className="flex flex-col mt-[5px]">
          <h2 className="font-[700] text-2xl">{value.categorie}</h2>
          <p className="font-[700] text-lg text-[--accent-blue]">
            {value.price}
          </p>
        </div>

        {/* Informations non importante et boutons */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col mt-[15px]">
            <p className="font-[500] text-[--text-opacity]">
              {value.livraison && (
                "Livraison disponible"
              )}
            </p>
            <p className="font-[500] text-[--text-opacity] underline">
              {value.location}
            </p>
          </div>

          <div className="flex space-x-[14px]">
            {children}
          </div>
        </div>
      </div>

      {/* Separation des annonces */}
      <div className="h-[20px] w-full bg-[--light] rounded-lg my-[35px]"></div>
    </React.Fragment>
  );
}
