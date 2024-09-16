/** @format */

import React, { useEffect, useState } from "react";
import PageLinks from "../../components/ReusableComponents/PageLinks";
import { Button, Sorting, TitlePage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import CardAnnonce from "../../components/ReusableComponents/CardAnnonce";

const links = [
  {
    page: "Mon compte",
    link: "/profil",
  },
  {
    page: "Historiques",
  },
];

const annonces = [
  {
    name: "Ranger rover, 2eme génération, très pérformant et utile",
    img: "/voiture.png",
    user: "Mohamed Ismael Otban",
    userImage: "/user.jpg",
    date: "25 Août 2024 à 15h18",
    images: [
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
    ],
    categorie: "Location",
    price: "500 FDJ",
    livraison: false,
    location: "Balbala, Djibouti",
    product: "/profil",
  },
  {
    name: "Ranger rover, 2eme génération, très pérformant et utile",
    img: "/voiture.png",
    user: "Mohamed Ismael Otban",
    userImage: "/user.jpg",
    date: "25 Août 2024 à 15h18",
    images: [
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
    ],
    categorie: "Location",
    price: "500 FDJ",
    livraison: false,
    location: "Balbala, Djibouti",
    product: "/profil",
  },
  {
    name: "Ranger rover, 2eme génération, très pérformant et utile",
    img: "/voiture.png",
    user: "Mohamed Ismael Otban",
    userImage: "/user.jpg",
    date: "25 Août 2024 à 15h18",
    images: [
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
      "/voiture.png",
    ],
    categorie: "Location",
    price: "500 FDJ",
    livraison: true,
    location: "Balbala, Djibouti",
    product: "/profil",
  },
  {
    name: "Ranger rover, 2eme génération, très pérformant et utile",
    img: "/voiture.png",
    user: "Mohamed Ismael Otban",
    userImage: "/user.jpg",
    date: "25 Août 2024 à 15h18",
    images: ["/voiture.png", "/voiture.png", "/voiture.png"],
    categorie: "Location",
    price: "500 FDJ",
    livraison: true,
    location: "Balbala, Djibouti",
    product: "/profil",
  },
  {
    name: "Ranger rover, 2eme génération, très pérformant et utile",
    img: "/voiture.png",
    user: "Mohamed Ismael Otban",
    userImage: "/user.jpg",
    date: "25 Août 2024 à 15h18",
    images: ["/voiture.png", "/voiture.png", "/voiture.png"],
    categorie: "Location",
    price: "500 FDJ",
    livraison: true,
    location: "Balbala, Djibouti",
    product: "/profil",
  },
];

export default function Historiques() {
  const [sortValue, setSortValue] = useState("");

  const navigate = useNavigate();

  // Valeur du sorting
  useEffect(() => {
    // console.log(sortValue);
  }, [sortValue]);

  return (
    <section className="flex flex-col px-[--lg-resp]">
      <PageLinks links={links} />

      <TitlePage
        name="Mon historique"
        icon={<FontAwesomeIcon icon={faClockRotateLeft} className="text-2xl" />}
      >
        <Sorting
          setSortValue={setSortValue}
          values={["Date croissant", "Date décroissant"]}
        />
      </TitlePage>

      {annonces.length > 0 ? (
        <div className="flex flex-col mt-[40px]">
          {annonces.map((value, index) => (
            <CardAnnonce key={index} value={value} prefixeDate="Vu le">
              <Button
                width="normal"
                icon={
                  <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
                }
                name="Voir l'annonce"
                className={
                  "px-[16px] text-sm py-[6px] border border-2 border-[--text-color]"
                }
                iconPosition="right"
              />
            </CardAnnonce>
          ))}
        </div>
      ) : (
        <div>Il n'y a rien ici pour vous</div>
      )}
    </section>
  );
}
