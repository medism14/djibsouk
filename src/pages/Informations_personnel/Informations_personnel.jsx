/** @format */

import React, { useState } from "react";
import {
  Button,
  GroupInput,
  OneInput,
  OneSelect,
  Select,
  TitlePage,
  Tooltip,
} from "../../components";
import {
  faBuildingUser,
  faCity,
  faDoorOpen,
  faEnvelope,
  faMapPin,
  faPhone,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModificationPassword from "../../components/PageComponents/Informations_personnel/ModificationPassword";
import PageLinks from "../../components/ReusableComponents/PageLinks";

const user = {
  name: "Mohamed Ismael Otban",
  email: "medismael14@gmail.com",
  phone: "77829349",
  city: "Djibouti-Ville",
  neighborhood: "",
  landmark: "",
};

const links = [
  {
    page: "Mon compte",
    link: "/profil",
  },
  {
    page: "Informations personnel",
  }
]

export default function Informations_personnel() {
  const [image, setImage] = useState("");

  const handleAddImage = () => {
    setImage("/voiture.png");
  };

  const emailRegister = {
    required: "L'email est réquis",
    pattern: {
      value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/,
      message: "Votre email ne respecte pas le format",
    },
  };

  const nameRegister = {
    required: "Le nom complet est réquis",
    minLength: {
      value: 6,
      message: "Le nom doit au moins contenir 6 caractère",
    },
  };

  const phoneRegister = {
    required: "Le numéro de téléphone est réquis",
    pattern: {
      value: /^(77)\d{6}$/,
      message: "Le numéro de téléphone correspond pas au champ",
    },
  };

  return (
    <section className="px-[--lg-resp] flex flex-col">
      <PageLinks links={links} />
      <TitlePage name="Informations personnel">
        <Tooltip
          tooltip="Des informations sont manquantes"
          bgColor="#F1C179"
          color="#4F4F4F"
          className={"relative"}
          position="top"
        >
          <div className="bg-[--secondary] w-[35px] h-[35px] flex items-center justify-center rounded-full">
            <p className="text-2xl font-[900]">!</p>
          </div>
        </Tooltip>
      </TitlePage>

      {/* Informations */}
      <div className="flex mt-[20px]">
        {/* Partie à gauche Image */}
        <div className="flex items-center justify-center relative px-[25px]">
          {/* Image */}
          {image ? (
            <img src={image} alt="" className="w-[140px] h-[140px] rounded-full" />
          ) : (
            <>
              <div
                className="w-[140px] h-[140px] rounded-full flex justify-center items-center bg-[--primary] space-y-[10px] cursor-pointer relative"
                onClick={handleAddImage}
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-[70px] h-auto text-[--light]"
                />
                <div className="absolute top-[15px] right-[15px]">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="w-[25px] h-auto text-[--light]"
                  />
                </div>
              </div>

              {/* Indiquer que c'est manquant */}
              <Tooltip
                tooltip="Ajoutez une photo de profil pour augmenter la confiance des utilisateurs"
                bgColor="#F1C179"
                color="#4F4F4F"
                className="absolute top-0 left-0"
              >
                <div className="bg-[--secondary] w-[35px] h-[35px] flex items-center justify-center rounded-full">
                  <p className="text-2xl font-[900]">!</p>
                </div>
              </Tooltip>
            </>
          )}
        </div>

        {/* Partie à droite Info */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-[30px] font-[900]">{user.name}</p>
          <Button
            width="normal"
            icon={<FontAwesomeIcon icon={faDoorOpen} className="text-2xl" />}
            name="Déconnexion"
            className={"self-start px-[25px] py-[10px]"}
            iconPosition="right"
          />
        </div>
      </div>

      {/* Contact */}
      <GroupInput name="Votre contact" className={"mt-[50px]"}>
        <OneInput
          label="Votre nom complet"
          champ="Nom"
          id="name"
          name="name"
          type="text"
          placeholder="Ex: (Mohamed Ali Youssouf)"
          className={"mt-[15px]"}
          inputRegister={nameRegister}
          value={user.name}
          icon={<FontAwesomeIcon icon={faUser} className="text-xl" />}
        />

        <OneInput
          label="Votre email"
          champ="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Ex: (ali123@gmail.com)"
          className={"mt-[25px]"}
          inputRegister={emailRegister}
          value={user.email}
          icon={<FontAwesomeIcon icon={faEnvelope} className="text-xl" />}
        />

        <OneInput
          label="Votre numéro de téléphone"
          champ="Téléphone"
          id="phone"
          name="phone"
          type="number"
          placeholder="Ex: (77802834)"
          className={"mt-[25px]"}
          inputRegister={phoneRegister}
          value={user.phone}
          icon={<FontAwesomeIcon icon={faPhone} className="text-xl" />}
        />
      </GroupInput>

      {/* Adresse */}
      <GroupInput name="Votre adresse" className={"mt-[50px]"}>
        <OneSelect
          label="Votre ville"
          id="city"
          name="city"
          champ="Ville"
          className={"mt-[15px]"}
          width="normal"
          defaultValue={user.city}
          placeholder={"Veuillez selectionner une ville"}
          icon={<FontAwesomeIcon icon={faCity} className="text-xl" />}
        >
          <option value="Djibouti-Ville">Djibouti-Ville</option>
          <option value="Tadjourah">Tadjourah</option>
          <option value="Arta">Arta</option>
          <option value="Dikhil">Dikhil</option>
          <option value="Obock">Obock</option>
          <option value="Ali-Sabieh">Ali-Sabieh</option>
        </OneSelect>

        <OneInput
          label="Votre quartier"
          champ="Quartier"
          id="neighborhood"
          name="neighborhood"
          type="text"
          placeholder="Ex: (Saline-Ouest)"
          className={"mt-[25px]"}
          value={user.neighborhood}
          binding={false}
          icon={<FontAwesomeIcon icon={faBuildingUser} className="text-xl" />}
        />

        <OneInput
          label="Votre point de répère"
          champ="Point de répère"
          id="landmark"
          name="landmark"
          type="text"
          placeholder="Ex: (A coté du lic)"
          className={"mt-[25px]"}
          value={user.landmark}
          binding={false}
          icon={<FontAwesomeIcon icon={faMapPin} className="text-xl" />}
        />
      </GroupInput>

      <ModificationPassword />
    </section>
  );
}
