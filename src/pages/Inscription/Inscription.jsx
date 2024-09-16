/** @format */

import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonBack,
  Form,
  Input,
  Providers,
  Select,
} from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faEnvelope,
  faKey,
  faLeftLong,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/djibsouk.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Inscription() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    name: "",
    city: "",
    phone: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    watch,
    reset,
  } = useForm();

  // value: /^(77)\d{6}$/,

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const totalStep = 2;

  const handleBack = () => {
    navigate("/");
  };

  const goBack = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    const updatedValues = {
      email: step === 1 ? data.email : formValues.email,
      password: step === 1 ? data.password : formValues.password,
      passwordConfirmation:
        step === 1
          ? data.passwordConfirmation
          : formValues.passwordConfirmation,
      name: step === 2 ? data.name : formValues.name,
      city: step === 2 ? data.city : formValues.city,
      phone: step === 2 ? data.phone : formValues.phone,
    };

    setFormValues(updatedValues);

    setStep((prev) => prev + 1);

    setTimeout(() => {
      reset(updatedValues);
    }, 50);
  };

  useEffect(() => {
    console.log;
    if (step > totalStep) {
      console.log(formValues);
      navigate("/");
    }
  }, [formValues, step]);

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

  const passwordConfirmationRegister = {
    required: "La confirmation du mot de passe est réquise",
    validate: (value) => {
      const password = watch("password");

      if (value === password) {
        return true;
      } else {
        return "Les mots de passe ne correspondent pas";
      }
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
    <section className="min-h-screen flex items-center">
      <div className="flex w-full space-x-[70px] px-[--lg-resp-normal]">
        {/* Côté gauche */}
        <div className="flex-1 ">
          <Form
            titre="Inscription"
            width="full"
            step={step}
            totalStep={totalStep}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          >
            {step > 1 && (
              <div className="flex">
                <div
                  className="flex items-center border-b-2 border-[--primary] space-x-[5px] cursor-pointer"
                  onClick={goBack}
                >
                  <FontAwesomeIcon icon={faLeftLong} /> <span>Retour</span>
                </div>
              </div>
            )}

            {step == 1 && (
              <>
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ex: (ali123@gmail.com)"
                  className={"mt-[15px]"}
                  register={register}
                  inputRegister={emailRegister}
                  errors={errors}
                  icon={
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  }
                />

                <Input
                  label="Mot de passe"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Ex: (password123)"
                  className={"mt-[25px]"}
                  register={register}
                  inputRegister={passwordRegister}
                  errors={errors}
                  icon={<FontAwesomeIcon icon={faKey} className="text-xl" />}
                />

                <Input
                  label="Confirmez votre mot de passe"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  placeholder="Ex: (password123)"
                  className={"mt-[25px]"}
                  register={register}
                  inputRegister={passwordConfirmationRegister}
                  errors={errors}
                  icon={<FontAwesomeIcon icon={faKey} className="text-xl" />}
                />
              </>
            )}

            {step == 2 && (
              <>
                <Input
                  label="Votre nom complet"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ex: (Ali Omar Ahmed)"
                  className={"mt-[25px]"}
                  register={register}
                  inputRegister={nameRegister}
                  errors={errors}
                  icon={<FontAwesomeIcon icon={faUser} className="text-xl" />}
                />

                <Select
                  label="Votre ville"
                  id="city"
                  name="city"
                  className={"mt-[25px]"}
                  register={register}
                  errors={errors}
                  clearErrors={clearErrors}
                  placeholder={"Veuillez selectionner une ville"}
                  requiredValue={"La ville est réquise"}
                  icon={<FontAwesomeIcon icon={faCity} className="text-xl" />}
                >
                  <option value="Djibouti-Ville">Djibouti-Ville</option>
                  <option value="Tadjourah">Tadjourah</option>
                  <option value="Arta">Arta</option>
                  <option value="Dikhil">Dikhil</option>
                  <option value="Obock">Obock</option>
                  <option value="Ali-Sabieh">Ali-Sabieh</option>
                </Select>

                <Input
                  label="Votre numéro de téléphone"
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Ex: (77283482)"
                  className={"mt-[25px]"}
                  register={register}
                  inputRegister={phoneRegister}
                  errors={errors}
                  icon={<FontAwesomeIcon icon={faPhone} className="text-xl" />}
                />
              </>
            )}

            <Button
              width="full"
              name={step == totalStep ? "S'inscrire" : "Continuer"}
              className={"mt-[35px] text-lg py-[12px]"}
              size={"large"}
            />

            <div className="mt-[25px] flex justify-center font-[800]">
              <p>
                Déjà un compte ?{" "}
                <a href="/connexion" className="text-[--accent-blue] underline">
                  Connectez-vous ici
                </a>
              </p>
            </div>

            <div className="flex justify-center mt-[25px]">
              <p className="border-b-[4px] border-[--primary] font-[800] text-xl">
                OU
              </p>
            </div>

            <Providers className="mt-[25px]" />
          </Form>
        </div>

        {/* Côté droite */}
        <div className="flex-1 relative flex justify-center items-center">
          <ButtonBack name="Revenir à la page d'accueil" onClick={handleBack} />

          <img src={logo} alt="Logo" className="w-[80%]" />
        </div>
      </div>
    </section>
  );
}
