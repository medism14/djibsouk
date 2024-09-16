/** @format */

import React, { useState } from "react";
import Modal from "../../ReusableComponents/Modal";
import Input from "../../ReusableComponents/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import Button from "../../ReusableComponents/Button";
import { useForm } from "react-hook-form";

export default function ModificationPassword() {
  const [hide, setHide] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const closeModal = () => {
    setHide(true);
  };

  const onSubmit = () => {
    console.log("loup");
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

  return (
    <div className="flex justif-center mt-[80px]">
      <button
        className="bg-[--primary-button] transition-all duration-300 hover:bg-[--primary] py-[20px] w-[450px] mx-auto text-[--light] text-xl rounded-lg openModal"
        onClick={() => setHide(false)}
      >
        Modifier votre mot de passe
      </button>

      {!hide && (
        <Modal
          titre="Modification de votre mot de passe"
          closeModal={closeModal}
          handleSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-[10px] items-center mt-[30px]">
            <p className="font-[600] basis-[200px] break-words text-center">Votre mot de passe:</p>

            <div className="flex-1 flex items-center">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Ex: (password123)"
                register={register}
                labelDisplay={false}
                inputRegister={passwordRegister}
                errors={errors}
                icon={<FontAwesomeIcon icon={faKey} className="text-xl" />}
              />
            </div>
          </div>

          <div className="flex space-x-[10px] items-center mt-[30px]">
            <p className="font-[600] basis-[200px] break-words text-center">Confirmer votre mot de passe:</p>

            <div className="flex flex-1 items-center">
              <Input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                placeholder="Ex: (password123)"
                register={register}
                labelDisplay={false}
                inputRegister={passwordConfirmationRegister}
                errors={errors}
                icon={<FontAwesomeIcon icon={faKey} className="text-xl" />}
              />
            </div>
          </div>

          <Button
            width="full"
            name="Envoyer"
            className="mt-[20px] py-[10px] text-lg"
          />
        </Modal>
      )}
    </div>
  );
}
