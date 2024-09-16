/** @format */

import React, { useState } from "react";
import { LeftPubCard, RightPubCard, SectionProduit } from "../../components";
import TopPubCard from "../../components/PubCards/TopPubCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import voiture from "../../assets/voiture.jpg";

export default function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customDots = (dots) => (
    <div
      className="w-[12px] h-[12px] rounded-full mt-[15px]"
      style={{
        backgroundColor:
          dots === currentSlide
            ? "var(--accent-blue)"
            : "var(--light-bold)",
      }}
    ></div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronCircleRight} />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronCircleLeft} />
    </div>
  );

  const settings = {
    dots: true,
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: setCurrentSlide,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    customPaging: customDots,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
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
    <section className="relative">
      <LeftPubCard />
      <RightPubCard />
      <section className="mx-[--lg-resp]">
        <TopPubCard />
        <h1 className="text-2xl font-[800] mt-[30px]">Pour vous</h1>
        <h3 className="text-xl font-[500] ml-[25px] mt-[10px]">Catégories</h3>

        <div className="relative bg-[--primary] w-full rounded-lg pt-[20px] pb-[35px] mt-[30px] px-[10px]">
          <Slider {...settings}>
            {/* Slides */}
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="px-[10px] select-none">
                <div className="flex justify-center px-[25px]">
                  <button className="font-[600] text-base flex items-center relative">
                    <img src={voiture} alt="Voiture" className="w-full rounded-lg rounded-b-none" />
                    <span className="text-sm text-[--text-color] absolute bg-[--light] opacity-75 rounded-lg rounded-b-none w-full bottom-0 transform">Voitures</span>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
        <SectionProduit categorie_id={5}>
          <FontAwesomeIcon icon={faCar} className="text-2xl" />
        </SectionProduit>

        <SectionProduit categorie_id={5}>
          <FontAwesomeIcon icon={faCar} className="text-2xl" />
        </SectionProduit>

        <SectionProduit categorie_id={5}>
          <FontAwesomeIcon icon={faCar} className="text-2xl" />
        </SectionProduit>

      </section>
    </section>
  );
}