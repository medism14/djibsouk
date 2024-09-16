/** @format */

import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import logo from "../../assets/djibsouk.png";
import {
  Form,
  Input,
  ButtonBack,
  Button,
  Providers,
  Modal,
  ModalEmail,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Connexion() {
  const [hide, setHide] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Pour fermer le modal
  const closeModal = () => {
    setHide(true);
  };

  const handleBack = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    // navigate("/");
    console.log(data);
  };

  const emailRegister = {
    required: "L'email est réquis",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Veuillez respectez le format d'email",
    },
  };

  const passwordRegister = {
    required: "Le mot de passe est réquis",
    minLength: {
      value: 6,
      message: "Le mot de passe doit au moisn avoir 6 caractère",
    },
  };

  return (
    <section className="h-screen flex items-center">
      <div className="flex w-full space-x-[70px] px-[--lg-resp-normal]">
        {/* Côté gauche */}
        <div className="flex-1 relative flex justify-center items-center select-none">
          <ButtonBack name="Revenir à la page d'accueil" onClick={handleBack} />

          <img src={logo} alt="Logo" className="w-[80%]" />
        </div>

        {/* Côté droite */}
        <div className="flex-1 flex justify-center">
          {/* Formulaire de connexion */}
          <Form
            titre={"Authentification"}
            width={"full"}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          >
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Ex: (ali123@gmail.com)"
              className={"mt-[10px]"}
              register={register}
              inputRegister={emailRegister}
              errors={errors}
              icon={<FontAwesomeIcon icon={faEnvelope} className="text-xl" />}
            />

            <div className="flex flex-col space-y-[5px] mt-[25px]">
              <Input
                label="Mot de passe"
                id="password"
                name="password"
                type="password"
                placeholder="Ex: (password123)"
                register={register}
                inputRegister={passwordRegister}
                errors={errors}
                icon={<FontAwesomeIcon icon={faKey} className="text-xl" />}
              />
              <div className="flex justify-start">
                <div
                  onClick={() => setHide(false)}
                  className="text-start font-[600] text-sm openModal cursor-pointer"
                >
                  Mot de passe oublié
                </div>
              </div>
            </div>

            <Button
              width="full"
              name="Se connecter"
              className={"mt-[35px] text-lg py-[12px]"}
            />

            <div className="font-[700] flex justify-center mt-[25px]">
              <p className="">
                Toujours pas de compte ?{" "}
                <a
                  href="/inscription"
                  className="underline text-[--accent-blue]"
                >
                  Inscrivez-vous ici
                </a>
              </p>
            </div>

            <div className="flex justify-center mt-[25px]">
              <p className="border-b-[4px] border-[--text-color] font-[800] text-xl">
                OU
              </p>
            </div>

            <Providers className="mt-[25px]" />
          </Form>
        </div>
      </div>

      {!hide && <ModalEmail closeModal={closeModal} hide={hide} />}
    </section>
  );
}
