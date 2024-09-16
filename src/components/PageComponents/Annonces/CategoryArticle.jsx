/** @format */

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faAngleDown,
  faAngleUp,
  faArrowRight,
  faLayerGroup,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  setCategoryChoiceGlobal,
  setCategoryOpenGlobal,
  setCategoryValueGlobal,
} from "../../../redux/features/global/globalSlice";

const categories = [
  {
    id: 1,
    name: "Véhicules",
    hasParent: false,
    hasChildren: true,
    categories: [
      {
        id: 2,
        name: "Voitures",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 3, name: "Locations", hasParent: true, hasChildren: false },
          { id: 4, name: "Ventes", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 5,
        name: "Motos",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 6, name: "Locations", hasParent: true, hasChildren: false },
          { id: 7, name: "Ventes", hasParent: true, hasChildren: false },
        ],
      },
      { id: 8, name: "Bateaux", hasParent: true, hasChildren: false },
      {
        id: 9,
        name: "Équipements voitures",
        hasParent: true,
        hasChildren: false,
      },
      { id: 10, name: "Équipements moto", hasParent: true, hasChildren: false },
    ],
  },
  {
    id: 11,
    name: "Immobilier",
    hasParent: false,
    hasChildren: true,
    categories: [
      {
        id: 12,
        name: "Appartements",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 13, name: "Vente", hasParent: true, hasChildren: false },
          { id: 14, name: "Location", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 15,
        name: "Maisons",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 16, name: "Vente", hasParent: true, hasChildren: false },
          { id: 17, name: "Location", hasParent: true, hasChildren: false },
        ],
      },
      { id: 18, name: "Colocations", hasParent: true, hasChildren: false },
      { id: 19, name: "Terrains", hasParent: true, hasChildren: false },
    ],
  },
  {
    id: 20,
    name: "Outils Maisons",
    hasParent: false,
    hasChildren: true,
    categories: [
      { id: 21, name: "Meubles", hasParent: true, hasChildren: false },
      { id: 22, name: "Électroménager", hasParent: true, hasChildren: false },
      { id: 23, name: "Décoration", hasParent: true, hasChildren: false },
      { id: 24, name: "Jardinage", hasParent: true, hasChildren: false },
      { id: 25, name: "Bricolage", hasParent: true, hasChildren: false },
    ],
  },
  {
    id: 26,
    name: "Technologies numériques",
    hasParent: false,
    hasChildren: true,
    categories: [
      {
        id: 27,
        name: "Informatique",
        hasParent: true,
        hasChildren: true,
        categories: [
          {
            id: 28,
            name: "Ordinateur portable",
            hasParent: true,
            hasChildren: false,
          },
          {
            id: 29,
            name: "Ordinateur fixe",
            hasParent: true,
            hasChildren: false,
          },
          { id: 30, name: "Disque dur", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 31,
        name: "Appareils",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 32, name: "Mobile", hasParent: true, hasChildren: false },
          { id: 33, name: "Tablette", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 34,
        name: "Jeux-Vidéos",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 35, name: "Consoles", hasParent: true, hasChildren: false },
          { id: 36, name: "CD", hasParent: true, hasChildren: false },
        ],
      },
      { id: 37, name: "Autres appareils", hasParent: true, hasChildren: false },
    ],
  },
  {
    id: 38,
    name: "Sports & Loisirs",
    hasParent: false,
    hasChildren: true,
    categories: [
      {
        id: 39,
        name: "Sports",
        hasParent: true,
        hasChildren: true,
        categories: [
          {
            id: 40,
            name: "Équipements sportifs",
            hasParent: true,
            hasChildren: false,
          },
          { id: 41, name: "Vélos", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 42,
        name: "Loisirs",
        hasParent: true,
        hasChildren: true,
        categories: [
          {
            id: 43,
            name: "Jeux & Jouets",
            hasParent: true,
            hasChildren: false,
          },
          { id: 44, name: "Livres", hasParent: true, hasChildren: false },
        ],
      },
    ],
  },
  {
    id: 45,
    name: "Mode",
    hasParent: false,
    hasChildren: true,
    categories: [
      {
        id: 46,
        name: "Vêtements",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 47, name: "Homme", hasParent: true, hasChildren: false },
          { id: 48, name: "Femme", hasParent: true, hasChildren: false },
          { id: 49, name: "Enfants", hasParent: true, hasChildren: false },
          { id: 50, name: "Mixte", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 51,
        name: "Chaussures",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 52, name: "Homme", hasParent: true, hasChildren: false },
          { id: 53, name: "Femme", hasParent: true, hasChildren: false },
          { id: 54, name: "Enfants", hasParent: true, hasChildren: false },
          { id: 55, name: "Mixte", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 56,
        name: "Accessoires",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 57, name: "Homme", hasParent: true, hasChildren: false },
          { id: 58, name: "Femme", hasParent: true, hasChildren: false },
          { id: 59, name: "Enfants", hasParent: true, hasChildren: false },
          { id: 60, name: "Mixte", hasParent: true, hasChildren: false },
        ],
      },
      {
        id: 61,
        name: "Montres & Bijoux",
        hasParent: true,
        hasChildren: true,
        categories: [
          { id: 62, name: "Homme", hasParent: true, hasChildren: false },
          { id: 63, name: "Femme", hasParent: true, hasChildren: false },
          { id: 64, name: "Enfants", hasParent: true, hasChildren: false },
          { id: 65, name: "Mixte", hasParent: true, hasChildren: false },
        ],
      },
    ],
  },
  { id: 66, name: "Autres", hasParent: false, hasChildren: false },
];

export default function CategoryArticle({ errors, className, setCategoryOpenParent, setCategoryValueParent, setCategoryChoiceParent }) {
  const [opacity, setOpacity] = useState(true);
  const [categoryValue, setCategoryValue] = useState([]);
  const [categoryChoice, setCategoryChoice] = useState([]);
  const [categoryDisplay, setCategoryDisplay] = useState([{}, categories]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);

  const dispatch = useDispatch();

  // Pour le choix de la catégorie
  const handleCategoryChoice = (item) => {
    // Si les deux catégories se ressemblent
    if (item == categoryChoice[categoryChoice.length - 1]) {
      setCategoryChoice((prev) => [...prev]);
      handleCloseCategory();
    }
    // Si la categorie precedent avait des enfants mais que lui n'en a pas
    else if (
      categoryChoice.length != 0 &&
      categoryChoice[categoryChoice.length - 1].hasChildren &&
      !item.hasChildren
    ) {
      setCategoryChoice((prev) => [...prev, item]);
      handleCloseCategory();
    }
    // Si la categorie precedent avait des enfants
    else if (
      categoryChoice.length == 0 ||
      categoryChoice[categoryChoice.length - 1].hasChildren
    ) {
      setCategoryChoice((prev) => [...prev, item]);
    }
    // Si on est passé de catégorie enfant à "Tout"
    else if (
      item.hasChildren &&
      !categoryChoice[categoryChoice.length - 1].hasChildren
    ) {
      setCategoryChoice((prev) => {
        const updatedTab = prev.slice(0, -1);
        return [...updatedTab];
      });
      handleCloseCategory();
    }
    // Si la categorie n'a pas d'enfant alors on change
    else if (!categoryChoice[categoryChoice.length - 1].hasChildren) {
      setCategoryChoice((prev) => {
        const updatedTab = prev.slice(0, -1);
        return [...updatedTab, item];
      });
      handleCloseCategory();
    }
  };

  // Reinitialiser les catégories, aller sur la catégorie parent
  const resetCategory = () => {
    setCategoryChoice([]);
    setCategoryDisplay([{}, categories]);
    setCategoryValue([]);
    setOpacity(true);
  };

  // Pour le bouton retour
  const handleCategoryBack = () => {
    // Si juste avant c'est la fin
    if (categoryChoice.length == 1) {
      resetCategory();
    } else {
      // Si on est sur une catégorie qui n'a pas d'enfant
      if (!categoryChoice[categoryChoice.length - 1].hasChildren) {
        // Si deux truc avant c'est la fin
        if (categoryChoice.length == 2) {
          resetCategory();
        } else {
          setCategoryChoice((prev) => {
            const updatedTab = prev.slice(0, -2);
            return [...updatedTab];
          });
        }
      } else {
        setCategoryChoice((prev) => {
          const updatedTab = prev.slice(0, -1);
          return [...updatedTab];
        });
      }
    }
  };

  // Pour la gestion de category et leur affichage
  useEffect(() => {
    dispatch(setCategoryChoiceGlobal(categoryChoice));
    setCategoryChoiceParent(categoryChoice);
    let i = 1;

    if (categoryChoice.length != 0) {
      setCategoryValue([]);
      setCategoryTitle([]);
      if (opacity) setOpacity(false);

      for (let category of categoryChoice) {
        // Faire en sorte d'ajouter le texte

        if (category.hasChildren) {
          setCategoryTitle((prev) => [...prev, category.name]);
        }

        setCategoryValue((prev) => [...prev, category.name]);

        // Pour display la category cliqué
        if (categoryChoice.length == i) {
          if (category.categories) {
            setCategoryDisplay([category, category.categories]);
          }
        }
        i++;
      }
    }
  }, [categoryChoice]);

  // Verifier s'il y'a un parent avec la class
  const haveParent = (event) => {
    let result = false;
    let element = event.target;

    while (element) {
      if (element.classList.contains("category")) {
        result = true;
        break;
      }

      if (element.tagName == "BODY") {
        break;
      }

      element = element.parentNode;
    }

    if (!result) {
      setCategoryOpen(false);
    }
  };

  // Pour fermer le modal category
  const handleCloseCategory = () => {
    setCategoryOpen(false);
  };

  // Pour verifier le clique du site
  useEffect(() => {
    dispatch(setCategoryOpenGlobal(categoryOpen));
    setCategoryOpenParent(categoryOpen);
    if (categoryOpen) {
      document.addEventListener("click", haveParent);
    }

    return () => document.removeEventListener("click", haveParent);
  }, [categoryOpen]);

  useEffect(() => {
    dispatch(setCategoryValueGlobal(categoryValue));
    setCategoryValueParent(categoryValue);
  }, [categoryValue]);

  return (
    <div className={`flex flex-col mt-[25px] ${className}`}>
      <label htmlFor="category" className="text-lg font-[600]">
        Categories:*
      </label>
      {/* Ligne */}
      <div className="relative category">
        {/* Icon */}
        <div
          className={`absolute z-50 flex left-[15px] top-1/2 transform -translate-y-1/2 text-[--text-color] pointer-events-none ${
            opacity ? "opacity-50" : "opacity-100"
          }`}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="text-xl" />
        </div>

        {/* Input */}
        <div
          className="h-[50px] pl-[45px] bg-white pr-[10px] rounded-lg border border-2 border-[--text-color] text-lg relative flex items-center space-x-[5px] cursor-pointer"
          onClick={() => setCategoryOpen((prev) => !prev)}
        >
          {categoryValue.length === 0 ? (
            <p className={`${opacity ? "opacity-50" : "opacity-100"}`}>
              Choisissez une categorie
            </p>
          ) : (
            categoryValue.map((value, index) => {
              if (index === 0) {
                return <p key={index}>{value}</p>;
              } else {
                return (
                  <React.Fragment key={index}>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <p>{value}</p>
                  </React.Fragment>
                );
              }
            })
          )}

          <div className="absolute right-[10px] top-1/2 transform -translate-y-1/2">
            {categoryOpen ? (
              <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} className="text-2xl" />
            )}
          </div>
        </div>

        {/* Message d'erreur */}
        {errors && errors.category && (
          <div className="absolute top-full mt-[2px]">
            <p className="text-[--accent-red] text-sm">
              {errors.category.message}
            </p>{" "}
          </div>
        )}

        {/* Modal categorie */}
        {categoryOpen && (
          <div className="absolute top-full left-0 w-full">
            {/* modal */}
            <div className="mb-[50px] bg-white p-[10px] flex flex-col border border-2 border-[--primary] shadow-xl rounded-lg w-full">
              {/* Pour faire le bouton retour */}
              {(categoryDisplay[0]?.hasChildren ||
                categoryChoice[categoryChoice.length - 2]) && (
                <>
                  {/* Eviter le comportement du flex par defaut */}
                  <div className="flex">
                    {/* Englober l'icone et le texte */}
                    <div
                      className="cursor-pointer p-[10px] px-[20px] flex items-center space-x-[7px]"
                      onClick={handleCategoryBack}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      <div className="cursor-pointer underline category">
                        Retour
                      </div>
                    </div>
                  </div>

                  {/* Affichage titre */}
                  <div className="flex items-center justify-center space-x-[10px] my-[10px]">
                    {categoryChoice[0].name == "Vehicules" ? (
                      <FontAwesomeIcon icon={faCar} className="text-[30px]" />
                    ) : categoryChoice[0].name == "Immobilier" ? (
                      <FontAwesomeIcon icon={faCar} className="text-[30px]" />
                    ) : (
                      <FontAwesomeIcon icon={faCar} className="text-[30px]" />
                    )}
                    {categoryTitle.map((value, index) => {
                      if (index == 0) {
                        return (
                          <p className="text-2xl font-[900]" key={index}>
                            {value}
                          </p>
                        );
                      } else {
                        return (
                          <React.Fragment key={index}>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="text-[23px]"
                            />
                            <p className="text-2xl font-[900]">{value}</p>
                          </React.Fragment>
                        );
                      }
                    })}
                  </div>
                </>
              )}

              {/* Tout */}
              {Object.values(categoryDisplay[0]).length != 0 && (
                <div
                  className={`flex cursor-pointer underline font-[800] text-lg mx-[20px] px-[12px] py-[10px] text-lg items-center rounded-lg transition-all duration-200 hover:bg-[--light]`}
                  onClick={() => handleCategoryChoice(categoryDisplay[0])}
                >
                  <p>
                    Tout {categoryDisplay[0].name} {">"}
                  </p>
                </div>
              )}

              {/* Listes categories */}
              {categoryDisplay[1].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleCategoryChoice(item)}
                  className={`flex items-center px-[12px] space-x-[6px] ${
                    Object.values(categoryDisplay[0]).length == 0
                      ? "mx-[20px]"
                      : "mx-[40px]"
                  } font-[600] ${
                    index == 0 ? "mt-[10px]" : "my-[10px]"
                  } py-[10px] cursor-pointer rounded-lg ${
                    item == categoryChoice[categoryChoice.length - 1] &&
                    !item.hasChildren
                      ? "bg-[--primary] text-[--light]"
                      : " transition-all duration-200 hover:bg-[--light]"
                  }`}
                >
                  <p>{item.name}</p>{" "}
                  {item.hasChildren && (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
