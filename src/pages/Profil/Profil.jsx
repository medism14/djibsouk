/** @format */

import React from "react";
import { Button, TitlePage } from "../../components";
import { useNavigate } from "react-router-dom";
import profilIcon from "../../assets/profilIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBullhorn,
  faClockRotateLeft,
  faDoorOpen,
  faEnvelope,
  faLayerGroup,
  faPlus,
  faScroll,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "../../components";

const elements = [
  {
    title: "Messages",
    icon: <FontAwesomeIcon icon={faEnvelope} className="text-[80px]" />,
    notifs: 5,
    description: "Mes messages",
    link: "/messagerie",
  },
  {
    title: "Annonces",
    icon: <FontAwesomeIcon icon={faBullhorn} className="text-[80px]" />,
    notifs: 5,
    description: "Mes annonces",
    link: "/annonces",
  },
  {
    title: "Historiques",
    icon: <FontAwesomeIcon icon={faClockRotateLeft} className="text-[80px]" />,
    description: "Mon historique",
    link: "/historiques",
  },
  {
    title: "Utilisateurs",
    icon: <FontAwesomeIcon icon={faUsers} className="text-[80px]" />,
    description: "Gestion d'utilisateurs",
    link: "/utilisateurs",
  },
  {
    title: "Notifications",
    icon: <FontAwesomeIcon icon={faBell} className="text-[80px]" />,
    notifs: 5,
    description: "Gestion de notifications",
    link: "/notifications",
  },
  {
    title: "Catégories",
    icon: <FontAwesomeIcon icon={faLayerGroup} className="text-[80px]" />,
    description: "Gestion de catégories",
    link: "/categories",
  },
  {
    title: "Gestion d'annonces",
    icon: <FontAwesomeIcon icon={faScroll} className="text-[80px]" />,
    notifs: 5,
    link: "/gestion_annonces",
  },
];

export default function Profil() {
  const navigate = useNavigate();

  const handleDeconnexion = () => {};

  return (
    <section className="px-[--lg-resp] flex flex-col">
      <TitlePage name="Bonjour Mohamed Ismael !" />

      {/* Partie Information personnel */}
      <div
        className="w-[60%] mx-auto mt-[50px] bg-[--primary] py-[20px] rounded-lg cursor-pointer flex flex-col items-center relative"
        onClick={() => navigate("/informations_personnel")}
      >
        <img src={profilIcon} alt="Icon du profil" className="w-[100px]" />
        <p className="mt-[7px] text-3xl font-[800] text-[--light]">Profil</p>
        <p className="mt-[20px] text-lg font-[400] text-[--light]">
          Voir mon espace personnel
        </p>
        <div className="absolute top-2 right-2">
          <Tooltip tooltip="Des informations sont manquantes" bgColor="#F1C179" color="#4F4F4F" className={"relative"}>
            <div className="bg-[--secondary] w-[35px] h-[35px] flex items-center justify-center rounded-full">
              <p className="text-2xl font-[900]">!</p>
            </div>
          </Tooltip>
        </div>
      </div>

      {/* Depot annonce */}
      <div className="mx-auto w-[40%] rounded-lg border border-2 border-[--text-color] rounded-lg py-[15px] bg-[--secondary] flex items-center justify-center space-x-[10px] mt-[35px] cursor-pointer transition-all duration-300 hover:bg-[--secondary-modif]">
        <FontAwesomeIcon icon={faPlus} className="text-[35px]" />
        <span className="text-[20px] font-[800]">Déposer une annonce</span>
      </div>

      {/* Listages des fonctionnalités */}
      <div className="flex flex-wrap justify-between mt-[60px]">
        {elements.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => navigate(item.link)}
              className={`py-[15px] ${
                index == 6 ? "mx-auto" : ""
              } w-[30%] flex flex-col items-center bg-[--light] mb-[50px] border border-2 border-[--text-color] rounded-lg relative cursor-pointer transition-all duration-200 hover:bg-[--light-modif]`}
            >
              {item.icon}
              <p
                className={`${index == 6 ? "text-2xl" : "text-3xl"}
               font-[800]`}
              >
                {item.title}
              </p>
              <p className="text-lg font-[500] mt-[15px]">{item.description}</p>
              {item.notifs && (
                <div className="absolute top-2 right-2 bg-[--secondary] w-[40px] h-[40px] rounded-full flex items-center justify-center text-lg font-[900]">
                  {item.notifs}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bouton déconnexion */}
        <Button
          width="normal"
          icon={<FontAwesomeIcon icon={faDoorOpen} />}
          name="Me déconnecter"
          className={"mx-auto"}
          onClick={handleDeconnexion}
        />
    </section>
  );
}
