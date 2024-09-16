/** @format */

import React, { useEffect } from "react";
import { useState, useRef } from "react";
import logo from "../../assets/djibsouk.png";
import car from "../../assets/voiture.png";
import newImage from "../../assets/new.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faPlus,
  faUser,
  faSearch,
  faCaretDown,
  faCar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../ReusableComponents/DeleteButton";
import Button from "../ReusableComponents/Button";

const notifications = [
  {
    title:
      "Ranger rover, 2eme génération, très pérformant et utile, dernière ...",
    message:
      "Votre annonce va s’expirer, n’oubliez pas de l’actualiser si toujours d’actualité !",
    image: car,
    relance: true,
    date: "Aujourd’hui à 14:20",
  },
  {
    title: "Nouveauté sur l’application !",
    message:
      "Une nouveauté apparaît sur notre application, dès à présent vous pourrez mettre vos annonces en premium !",
    image: newImage,
    relance: false,
    date: "Le 22/03/10 à 12:14",
  },
];

export default function Header() {
  const [isHoveredCategorie, setIsHoveredCategorie] = useState(false);
  const [displayCategorie, setDisplayCategorie] = useState(false);
  const [notifPress, setNotifPress] = useState(false);

  const hoverTimeout = useRef(null);
  const navigate = useNavigate();

  const hoveredCategorieFunction = () => {
    if (!hoverTimeout.current) {
      setIsHoveredCategorie(true);
      hoverTimeout.current = setTimeout(() => {
        setDisplayCategorie(true);

        hoverTimeout.current = null;
      }, 500);
    }
  };

  const verifNotifPress = (event) => {
    let element = event.target;
    let result = false;

    while (element) {
      if (element.classList.contains("notif")) {
        result = true;
        break;
      }

      if (element.tagName == "BODY") {
        break;
      }

      element = element.parentNode;
    }

    if (!result) {
      setNotifPress(false);
    }
  };

  useEffect(() => {
    if (!isHoveredCategorie) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  }, [isHoveredCategorie]);

  useEffect(() => {
    if (notifPress) {
      document.addEventListener("click", verifNotifPress);
    }

    return () => {
      document.removeEventListener("click", verifNotifPress);
    };
  }, [notifPress]);

  return (
    <section className="flex flex-col space-y-[20px] lg:px-[--lg-resp] mb-[30px] pb-[5px] border-b-2">
      {/* Partie haute */}
      <div className="flex space-x-[10px]">
        {/* Côté gauche */}
        <div className="flex space-x-[3px] items-center flex-1">
          <a href="/">
            <img src={logo} alt="Logo du site" className="w-[100px]" />
          </a>

          {/* Input pour la recherche */}
          <div className="flex space-x-0 flex-1">
            <input
              className="bg-white h-[50px] w-[350px] outline-none rounded-lg rounded-r-none border-2 border-[--text-color] px-[7px]"
              placeholder="Recherchez ici..."
            />
            <button className="w-[50px] bg-[--secondary] border-2 border-[--text-color] border-l-0 rounded-r-lg transition-all duration-500 hover:bg-[#f3cc92]">
              <FontAwesomeIcon icon={faSearch} className="text-2xl font-bold" />
            </button>
          </div>
        </div>

        {/* Côté droit */}
        <div className="flex space-x-[15px] items-center">
          <button className="flex items-center justify-center space-x-[8px] text-[#F2F2F2] bg-[--primary] px-[10px] py-[10px] rounded-lg font-[500]">
            <FontAwesomeIcon icon={faPlus} className="text-2xl" />
            <span>Poster une annonce</span>
          </button>

          {/* Profil */}
          <div className="flex space-x-[8px]">
            <div className="py-[10px]">
              <button
                className="w-[50px] h-[50px] rounded-full border border-1 border-[#4F4F4F] transition-all duration-300 hover:bg-[--light-bold]"
                onClick={() => navigate("/connexion")}
              >
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </button>
            </div>

            {/* Notifications */}
            <div className="pt-[10px] relative">
              <div className="relative notif">
                <button
                  className="w-[50px] h-[50px] rounded-full border border-1 border-[#4F4F4F] transition-all duration-300 hover:bg-[--light-bold] relative"
                  onClick={() => setNotifPress((prev) => !prev)}
                >
                  <FontAwesomeIcon icon={faBell} className="text-2xl" />
                </button>

                {/* Modal notification */}
                <div
                  className={`${
                    notifPress ? "visible" : "hidden"
                  } absolute top-full right-0 pb-[20px] bg-white border border-2 border-[--text-color] rounded-lg shadow-xl mt-[5px] w-[500px] ${notifications.length <= 2 ? "h-auto" : "h-[400px] overflow-y-scroll"} z-50`}
                >
                  {/* Titre */}
                  <div className="bg-[--light-bold] text-2xl w-full flex justify-center py-[10px] items-center font-[800] rounded-lg border-b-2 rounded-b-none border-[--text-color]">
                    Notifications
                  </div>

                  {/* Body */}
                  <div className="flex flex-col px-[10px]">
                    {/* Les notifications */}
                    {notifications.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col ${
                          index == notifications.length - 1
                            ? ""
                            : "border-b-2 border-[--text-color]"
                        } py-[10px]`}
                      >
                        {/* Première ligne */}
                        <div className="flex justify-between items-center">
                          <p className="self-end italic">{item.date}</p>

                          <DeleteButton />
                        </div>

                        {/* Titre */}
                        <p className="truncate font-[800] mt-[2px]">
                          {item.title}
                        </p>

                        {/* Contenu */}
                        <div className="flex space-x-[5px]">
                          <img
                            src={item.image}
                            alt="Image de l'element"
                            className="w-[100px]"
                          />
                          <p className="flex-1">{item.message}</p>
                        </div>

                        {/* Bouton relance (si annonce) */}
                        {item.relance && (
                          <div className="flex justify-end mt-[4px]">
                            <Button
                              width="normal"
                              name="Relancer l'annonce"
                              className={`px-[12px] py-[6px] text-sm`}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="absolute top-0 right-0 text-sm font-[900] text-[--accent-red]">
                5
              </p>
            </div>

            {/* Messages */}
            <div className="py-[10px] relative">
              <button className="w-[50px] h-[50px] rounded-full border border-1 border-[#4F4F4F] transition-all duration-300 hover:bg-[--light-bold]">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              </button>
              <p className="absolute top-0 right-0 text-sm font-[900] text-[--accent-red]">
                5
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partie basse */}
      <div className="flex w-full space-x-[50px] pb-[5px] sm:overflow-x-scroll lg:overflow-x-visible scrollbar-always-visible">
        <div className="relative">
          <button
            className="flex items-center space-x-[5px] font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]"
            onMouseEnter={() => {
              hoveredCategorieFunction();
            }}
            onMouseLeave={() => {
              setIsHoveredCategorie(false);
              setDisplayCategorie(false);
            }}
          >
            <p>Véhicules</p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>

          {/* Modal Categories */}
          <div
            className={`flex flex-col absolute left-0 top-full bg-[#FFFFFF] border border-2 border-[--text-color] rounded-b-lg z-50 ${
              displayCategorie ? "" : "hidden"
            }`}
            onMouseEnter={() => setDisplayCategorie(true)}
            onMouseLeave={() => setDisplayCategorie(false)}
          >
            <div className="flex space-x-[5px] justify-center bg-[--light] py-[15px] px-[50px] border-b-2 border-[#4F4F4F] rounded-b-xl w-[450px]">
              <FontAwesomeIcon icon={faCar} className="text-2xl" />
              <p className="text-xl font-[800]">Vehicules</p>
            </div>

            <div className="p-[20px]">
              <div className="flex mb-[25px]">
                <a
                  href="#"
                  className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                >
                  <h1 className="text-[20px] font-[900]">Tout véhicules</h1>
                  <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                </a>
              </div>

              <div className="flex space-x-[60px]">
                <div className="flex flex-col space-y-[15px]">
                  <div>
                    <div className="flex items-center space-x-[5px] ml-[15px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-lg font-[700]">Voitures</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-lg"
                        />
                      </a>
                    </div>

                    <div className="flex items-center space-x-[5px] ml-[30px] mt-[10px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-base font-[400]">Location</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-base"
                        />
                      </a>
                    </div>

                    <div className="flex items-center space-x-[5px] ml-[30px] mt-[10px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-base font-[400]">Location</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-base"
                        />
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-[5px] ml-[15px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-lg font-[700]">Motos</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-lg"
                        />
                      </a>
                    </div>

                    <div className="flex items-center space-x-[5px] ml-[30px] mt-[10px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-base font-[400]">Location</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-base"
                        />
                      </a>
                    </div>

                    <div className="flex items-center space-x-[5px] ml-[30px] mt-[10px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-base font-[400]">Location</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-base"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-[15px]">
                  <div>
                    <div className="flex items-center space-x-[5px] ml-[15px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-lg font-[700]">Bateaux</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-lg"
                        />
                      </a>
                    </div>

                    <div className="flex items-center space-x-[5px] ml-[30px] mt-[10px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-base font-[400]">Location</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-base"
                        />
                      </a>
                    </div>

                    <div className="flex items-center space-x-[5px] ml-[30px] mt-[10px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-base font-[400]">Location</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-base"
                        />
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-[5px] ml-[15px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-lg font-[700]">
                          Equipements voitures
                        </p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-lg"
                        />
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center space-x-[5px] ml-[15px]">
                      <a
                        href="#"
                        className="flex items-center space-x-[5px] transition-all duration-300 hover:text-[--accent-blue]"
                      >
                        <p className="text-lg font-[700]">Equipements moto</p>
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="text-lg"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <button className="flex items-center space-x-[5px] font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
            <p className="font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
              Immobiliers
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>

        <div className="relative">
          <button className="flex items-center space-x-[5px] font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
            <p className="font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
              Outils maisons
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>

        <div className="relative">
          <button className="flex items-center space-x-[5px] font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
            <p className="font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
              Multimédia
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>

        <div className="relative">
          <button className="flex items-center space-x-[5px] font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
            <p className="font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
              Sports et loisirs
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>

        <div className="relative">
          <button className="flex items-center space-x-[5px] font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
            <p className="font-[500] transition-all duration-300 hover:text-[--primary] hover:font-[800]">
              Mode
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      </div>
    </section>
  );
}
