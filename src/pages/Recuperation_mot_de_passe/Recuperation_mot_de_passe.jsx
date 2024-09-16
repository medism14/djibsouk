/** @format */
import React from "react";
import { Form, Input, MiniHeader, Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Recuperation_mot_de_passe() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const passwordRegister = {
    required: "Le mot de passe est réquis",
    minLength: {
      value: 6,
      message: "Le mot de passe doit au moisn avoir 6 caractère",
    },
  };

  const passwordConfirmationRegister = {
    required: "La confirmation du mot de passe est requise",
    validate: (value) => {
      const password = watch("password");

      if (value === password) {
        return true;
      } else {
        return "Les mots de passe ne correspondent pas";
      }
    },
  };

  const onSubmit = (data) => {
    // navigate("/");
    console.log(data);
  };

  return (
    <section className="min-h-screen w-full">
      <MiniHeader />

      <Form
        titre="Modifiez votre mot de passe"
        width="normal"
        className="mt-[60px]"
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
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
        <Button width="full" name="Enregistrer" className={"mt-[35px] text-lg py-[12px]"} />
      </Form>
    </section>
  );
}
