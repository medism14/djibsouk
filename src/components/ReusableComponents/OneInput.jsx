/** @format */

import React, { useEffect, useState } from "react";
import { Input, Button } from "@/components";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeInputNamesChange } from "../../redux/features/global/globalSlice";

export default function OneInput({
  label,
  id,
  name,
  champ,
  type,
  placeholder,
  inputRegister,
  className,
  binding = true,
  value,
  icon,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();

  // Soumission formulaire
  const onSubmit = (data) => {
    dispatch(removeInputNamesChange(name));
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    setTimeout(() => {
      reset({
        [name]: data[name],
      });
    }, 50);
  };

  // Pour verifier si l'input est vide ou non
  const verifValueInput = () => {
    if (watch(name) == "") {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  // Ajouter la valeur par défaut
  useEffect(() => {
    if (value) {
      setValue(name, value);
    }

    verifValueInput();

  }, [name, value, setValue]);

  useEffect(() => {
    verifValueInput();
  }, [watch(name)]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={`${className}`}>
        {/* Ligne entiere input + Button */}
        <div className="flex items-end space-x-[20px]">
          <div className="basis-[470px] relative">
            <Input
              label={label}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              register={register}
              inputRegister={inputRegister}
              oneInput={true}
              icon={icon}
              binding={binding}
              warning={warning}
            />
          </div>

          <Button
            width="normal"
            icon={<FontAwesomeIcon icon={faPencil} className="text-2xl" />}
            inputName={name}
            name="Modifier"
            disabled={true}
            className={"h-[50px] px-[25px]"}
          />
        </div>

        {/* Affichage des erreurs */}
        {errors && errors[name] && (
          <div className="text-[--accent-red] text-sm">
            {errors[name].message}
          </div>
        )}

        {/* Affichage des validations */}
        {submitted && (
          <div className="text-green-600 text-sm dropOpacityAnimation">
            le Champ "{champ}" a bien été mis à jour !
          </div>
        )}
      </form>
    </>
  );
}
