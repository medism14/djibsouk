/** @format */

import React, { useEffect, useState } from "react";
import PageLinks from "../../components/ReusableComponents/PageLinks";
import { Button, ModalValidation, Sorting, TitlePage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCheck,
  faChevronRight,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../../components/ReusableComponents/SearchBar";
import CardAnnonce from "../../components/ReusableComponents/CardAnnonce";

const links = [
  {
    page: "Mon compte",
    link: "/profil",
  },
  {
    page: "Mes annonces",
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

export default function Mes_annonces() {

  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [modalValidationHide, setModalValidationHide] = useState(true);
  const [activationButton, setActivationButton] = useState(true);

  const handleArticleSold = (event) => {
    setModalValidationHide(false);
    setActivationButton(event.target)
  };

  // Valeur du triage mis à jour
  useEffect(() => {
    if (sortValue) {
      console.log(sortValue);
    }
  }, [sortValue])

  // Valeur de la recherche mis à jour
  useEffect(() => {
    if (searchValue) {
      console.log(searchValue);
    }
  }, [searchValue])

  return (
    <section className="flex flex-col px-[--lg-resp]">
      <PageLinks links={links} />

      <TitlePage
        name="Mes annonces"
        icon={<FontAwesomeIcon icon={faBullhorn} className="text-[25px]" />}
      >
        <Sorting
          setSortValue={setSortValue}
          values={["Date croissant", "Date décroissant"]}
        />
      </TitlePage>

      <SearchBar setSearchValue={setSearchValue} />

      {/* Defilement des produits */}
      {annonces.length > 0 ? (
        <div className="flex flex-col mt-[40px]">
          {annonces.map((value, index) => (
            <CardAnnonce key={index} value={value} prefixeDate="Posté le">
              <Button
                width="normal"
                icon={<FontAwesomeIcon icon={faPencil} className="text-xl" />}
                name="Modifier"
                className={
                  "px-[16px] text-sm py-[6px] border border-2 border-[--text-color] text-[--light]"
                }
                bg="bg-[--primary-button]"
                bgHover="hover:bg-[--primary]"
                iconPosition="left"
              />

              <Button
                width="normal"
                icon={<FontAwesomeIcon icon={faCheck} className="text-2xl" />}
                name="J'ai vendu cet article"
                className={
                  "px-[16px] text-sm py-[6px] border border-2 border-[--text-color] text-[--light]"
                }
                bg="bg-[--accent-blue]"
                bgHover="hover:bg-[--accent-blue-modif]"
                iconPosition="left"
                onClick={handleArticleSold}
              />

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

      {!modalValidationHide && (
        <ModalValidation
          setModalValidationHide={setModalValidationHide}
          activationButton={activationButton}
          text={"L'article a bien été pris en compte comme étant vendu"}
        />
      )}

      {/* <div className="inset-0 z-50 fixed bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
        <div className="bg-white">
          big loupo
        </div>
      </div> */}
    </section>
  );
}
