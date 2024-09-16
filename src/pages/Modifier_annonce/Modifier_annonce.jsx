/** @format */

import React, { useState } from "react";
import {
  Button,
  ButtonClick,
  CategoryArticle,
  InfoPart,
  OneInput,
  PageLinks,
  TitlePage,
} from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faHeading,
  faMoneyBill,
  faPencil,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const links = [
  {
    page: "Mon compte",
    link: "/profil",
  },
  {
    page: " Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
  },
];

const annonce = {
  title:
    "Ranger rover, 2eme génération, très pérformant et utile, dernière génération",
  date: "25 août 2024 à 20h15",
  category: "Voitures",
  subCategory: "Location",
  delivery: true,
  localisation: "Balbala, Djibouti",
  price: "500 FDJ",
  expirationDate: "19 jours, 23h",
  categories: [],
  condition: "Bon etat",
  city: "Djibouti-Ville",
  neighborhood: "Balbala",
  lankmark: "",
  phoneNumber: "77283948",
  description: "",
  images: ["/voiture.png", "/voiture.png"],
};

export default function Modifier_annonce() {
  const [relaunchDisabled, setRelaunchDisabled] = useState(true);

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next-dispModif " onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleRight} />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev-dispModif" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronCircleLeft} />
    </div>
  );

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const handleSoldArticle = () => {
    console.log("loup");
  };

  const handleRemoveArticle = () => {};

  const handleRelaunchArticle = () => {};

  const handleValidArticle = () => {};

  // Pour la verification du titre
  const titleRegister = {
    required: "Le titre est réquis",
    minLength: {
      value: 4,
      message: "Le champ titre doit au moins contenir 4 caractère",
    },
  };

  // Pour la verification du prix
  const priceRegister = {
    required: "Le prix est réquis",
  };

  // Pour la verification de la description
  const descriptionRegister = {
    required: "La description est réquise",
    minLength: {
      value: 4,
      message: "La description doit au moins contenir 6 caractère",
    },
  };

  return (
    <section className="flex flex-col px-[--lg-resp]">
      <PageLinks links={links} />

      <TitlePage
        name="Modifier votre annonce"
        icon={
          <FontAwesomeIcon icon={faScrewdriverWrench} className="text-[26px]" />
        }
      />

      {/* Resumé de l'annonce */}
      <InfoPart>
        <h2 className="text-lg font-[800]">{annonce.title}</h2>
        <div className="flex mt-[10px]">
          {/* Les images */}
          <div className="w-[220px] h-[150px]">
            <Slider {...settings}>
              {annonce.images.map((value, index) => (
                <div key={index} className="">
                  <div className="w-[200px] h-[150px] overflow-hidden mx-auto">
                    <img
                      src={value}
                      alt={`Image ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Les autres informations */}
          <div className="ml-[50px] flex-1 flex flex-col justify-between relative">
            {/* Partie haute */}
            <div className="flex flex-col justify-between">
              <p className="font-[900] text-xl text-[--accent-blue]">
                {annonce.price}
              </p>
              <p className="text-lg font-[800]">{annonce.category}</p>
              <p className="font-[400]">{annonce.subCategory}</p>
            </div>

            {/* Partie basse */}
            <div className="flex flex-col justify-between">
              <p className="text-sm font-[600] text-[--text-opacity]">
                {annonce.delivery && "Livraison disponible"}
              </p>
              <p className="text-sm font-[600] text-[--text-opacity] underline">
                {annonce.localisation}
              </p>
            </div>

            {/* Date */}
            <p className="absolute top-[5px] right-[5px] text-[--text-opacity] italic text-sm">
              Posté le, {annonce.date}
            </p>
          </div>
        </div>
      </InfoPart>

      <InfoPart title="Etat de l'annonce" expiration={annonce.expirationDate}>
        <div className="pl-[25px] flex flex-col space-y-[25px]">
          <ButtonClick
            name="Si votre article a été vendu:"
            bg="bg-[--primary-button]"
            bgHover="hover:bg-[--primary]"
            onClick={handleSoldArticle}
          />

          <ButtonClick
            name="Si vous souhaitez retirer votre annonce:"
            bg="bg-[--accent-red]"
            bgHover="hover:bg-[--accent-red-modif]"
            onClick={handleRemoveArticle}
          />

          <ButtonClick
            name="Si vous souhaitez relancer votre annonce:"
            disabled={relaunchDisabled}
            disabledMessage={
              "Vous pourrez relancer l’annonce 1 semaine avant son expiration"
            }
            bg="bg-[--primary-button]"
            bgHover="hover:bg-[--primary]"
            onClick={handleRelaunchArticle}
          />

          <ButtonClick
            name="Valider cette annonce:"
            bg="bg-[--primary-button]"
            bgHover="hover:bg-[--primary]"
            onClick={handleValidArticle}
          />
        </div>
      </InfoPart>

      <InfoPart title="Informations pertinentes">
        <OneInput
          label="Titre de votre article"
          champ="Titre"
          id="title"
          name="title"
          type="text"
          placeholder="Ex: (Maison, T3 meublé)"
          inputRegister={titleRegister}
          value={annonce.title}
          icon={<FontAwesomeIcon icon={faHeading} className="text-xl" />}
        />

        <OneInput
          label="Prix"
          champ="Titre"
          id="price"
          name="price"
          type="text"
          placeholder="Ex: (500FDJ)"
          className={"mt-[25px]"}
          inputRegister={priceRegister}
          value={annonce.price}
          icon={<FontAwesomeIcon icon={faMoneyBill} className="text-xl" />}
        />

        <CategoryArticle className={"w-[469px]"} />
      </InfoPart>
    </section>
  );
}
