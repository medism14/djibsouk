/** @format */

import React from "react";
import Modal from "../../ReusableComponents/Modal";
import Input from "../../ReusableComponents/Input";
import Button from "../../ReusableComponents/Button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";

export default function ModalEmail({ hide, closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailRegister = {
    required: "L'email est réquis",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Veuillez respectez le format d'email",
    },
  };

  const onSubmit = (data) => {
    console.log(data.email)
  } 

  return (
    !hide && (
      <Modal
        titre="Écrivez votre adresse mail"
        closeModal={closeModal}
        handleSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="Ex: (ali123@gmail.com)"
          className={"mt-[20px] mb-[5px]"}
          register={register}
          inputRegister={emailRegister}
          errors={errors}
          icon={<FontAwesomeIcon icon={faEnvelope} className="text-xl" />}
        />

        <Button
          width="full"
          name="Envoyer"
          className="mt-[20px] py-[10px] text-lg"
        />
      </Modal>
    )
  );
}
