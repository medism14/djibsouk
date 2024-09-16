/** @format */

import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonBack,
  CategoryArticle,
  Form,
  ImagesGestion,
  Input,
  MiniHeader,
  Select,
  TextArea,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingUser,
  faCheck,
  faCity,
  faFileAlt,
  faHeading,
  faLeftLong,
  faMapPin,
  faMoneyBill,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function Annonces() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    title: "",
    price: "",
    categories: [],
    condition: "",
    delivery: "false",
    city: "",
    neighborhood: "",
    landmark: "",
    phone: "",
    description: "",
    images: [],
  });
  const [categoryOpenParent, setCategoryOpenParent] = useState([]);
  const [categoryValueParent, setCategoryValueParent] = useState([]);
  const [categoryChoiceParent, setCategoryChoiceParent] = useState([]);

  const totalStep = 3;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
    watch,
  } = useForm();

  const handleButtonBack = () => {
    navigate("/");
  };

  const categoryOpenGlobal = useSelector(
    (state) => state.global.categoryOpenGlobal
  );
  const categoryValueGlobal = useSelector(
    (state) => state.global.categoryValueGlobal
  );
  const categoryChoiceGlobal = useSelector(
    (state) => state.global.categoryChoiceGlobal
  );

  const imagesAnnonce = useSelector((state) => state.global.imagesAnnonce);

  // Changement categoryChoice
  useEffect(() => {
    console.log(categoryChoiceParent);
  }, [categoryChoiceParent])

  // Soumission du formulaire
  const onSubmit = (data) => {
    const updatedValues = {
      title: step === 1 ? data.title : formValues.title,
      price: step === 1 ? data.price : formValues.price,
      categories: step === 1 ? categoryChoiceGlobal : formValues.categories,
      condition: step === 2 ? data.condition : formValues.condition,
      delivery: step === 2 ? data.delivery : formValues.delivery,
      city: step === 2 ? data.city : formValues.city,
      neighborhood: step === 2 ? data.neighborhood : formValues.neighborhood,
      landmark: step === 2 ? data.landmark : formValues.landmark,
      phone: step === 2 ? data.phone : formValues.phone,
      description: step === 2 ? data.description : formValues.description,
      images: step === 3 ? imagesAnnonce : formValues.images,
    };

    setFormValues(updatedValues);

    setStep((prev) => prev + 1);

    setTimeout(() => {
      reset(updatedValues);
    }, 50);
  };

  const goBack = () => {
    setStep((prev) => prev - 1);
  };
  

  useEffect(() => {
    if (step > totalStep) {
      console.log(formValues);
      navigate("/");
    }
  }, [step, formValues]);

  const handleButton = () => {
    if (step == 1) {
      // Gestion d'erreur pour la categoryvalue
      if (categoryValueGlobal.length == 0) {
        if (categoryOpenGlobal) {
          setCategoryOpen(false);
        }

        setError("category", {
          type: "manual",
          message: "la catégorie est réquise",
        });
      }
    } else if (step == 3) {
      if (imagesAnnonce.length == 0) {
        setError("images", {
          type: "manual",
          message: "Veuillez rentrer au moins une image",
        });
      } else {
        clearErrors("images");
      }
    }
  };

  // Lors du changement de category, clear l'erreur
  useEffect(() => {
    if (categoryValueGlobal.length !== 0 && errors.category) {
      clearErrors("category");
    }
  }, [categoryValueGlobal]);

  // Lors du changement des images, clear l'erreur
  useEffect(() => {
    if (imagesAnnonce.length !== 0 && errors.images) clearErrors("images");
  }, [imagesAnnonce]);

  // Pour la verification du titre
  const titleRegister = {
    required: "Le titre est réquis",
    minLength: {
      value: 4,
      message: "Le champ titre doit au moins contenir 4 caractère",
    },
  };

  // Pour la verification du prix
  const priceRegister = {
    required: "Le prix est réquis",
  };

  // Pour la verification de la description
  const descriptionRegister = {
    required: "La description est réquise",
    minLength: {
      value: 4,
      message: "La description doit au moins contenir 6 caractère",
    },
  };

  return (
    <section className="">
      <MiniHeader />

      <div className="relative mt-[50px] mx-[--lg-resp-normal] flex flex-col">
        <ButtonBack
          name="Revenir à la page d'accueil"
          onClick={handleButtonBack}
        />

        <Form
          titre={"Création d'annonce"}
          width={"normal"}
          step={step}
          totalStep={totalStep}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          className={"mt-[70px]"}
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
              {/* Titre article */}
              <Input
                label="Titre de votre article"
                obligatoire={true}
                id="title"
                name="title"
                type="text"
                placeholder="Ex: (Maison T3, meublé)"
                className={"mt-[15px]"}
                register={register}
                inputRegister={titleRegister}
                binding={true}
                errors={errors}
                icon={<FontAwesomeIcon icon={faHeading} className="text-xl" />}
              />

              {/* Prix article */}
              <Input
                label="Prix"
                obligatoire={true}
                id="price"
                name="price"
                type="text"
                placeholder="Ex: (500FDJ)"
                className={"mt-[25px]"}
                register={register}
                inputRegister={priceRegister}
                binding={true}
                errors={errors}
                icon={
                  <FontAwesomeIcon icon={faMoneyBill} className="text-xl" />
                }
              />
            </>
          )}

          <CategoryArticle errors={errors} setCategoryOpenParent={setCategoryOpenParent} setCategoryValueParent={setCategoryValueParent} setCategoryChoiceParent={setCategoryChoiceParent} className={step > 1 && "hidden"} />

          {step == 2 && (
            <>
              <Select
                label="Condition"
                id="condition"
                name="condition"
                className={"mt-[15px]"}
                register={register}
                errors={errors}
                clearErrors={clearErrors}
                placeholder={"Choisissez la condition"}
                requiredValue={"La condition est réquise"}
                watch={watch}
                icon={<FontAwesomeIcon icon={faCheck} className="text-xl" />}
              >
                <option value="Très bon état">Très bon état</option>
                <option value="Bon état">Bon état</option>
                <option value="Etat moyen">Etat moyen</option>
              </Select>

              <Select
                label="Livraison"
                id="delivery"
                name="delivery"
                className={"mt-[25px]"}
                register={register}
                errors={errors}
                clearErrors={clearErrors}
                placeholder={"Choisissez si vous livrez ou non livraison"}
                requiredValue={"La livraison est réquise"}
                watch={watch}
                icon={<FontAwesomeIcon icon={faTruck} className="text-xl" />}
              >
                <option value="true">Livraison disponible</option>
                <option value="false">Livraison non disponible</option>
              </Select>

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
                watch={watch}
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
                label="Quartier"
                id="neighborhood"
                name="neighborhood"
                type="text"
                placeholder="Ex: (Saline-ouest)"
                className={"mt-[25px]"}
                binding={false}
                register={register}
                icon={
                  <FontAwesomeIcon icon={faBuildingUser} className="text-xl" />
                }
              />

              <Input
                label="Point de répère"
                id="landmark"
                name="landmark"
                type="text"
                placeholder="Ex: (À côté du LIC)"
                className={"mt-[25px]"}
                binding={false}
                register={register}
                icon={<FontAwesomeIcon icon={faMapPin} className="text-xl" />}
              />

              <Input
                label="Numéro de téléphone à contacter"
                id="phone"
                name="phone"
                type="number"
                placeholder="Ex: (77283948)"
                className={"mt-[25px]"}
                binding={false}
                register={register}
                icon={<FontAwesomeIcon icon={faPhone} className="text-xl" />}
              />

              <TextArea
                label="Description de votre article"
                id="description"
                name="description"
                placeholder="Décrivez votre produit ici..."
                labelDisplay={true}
                className="mt-[25px]"
                register={register}
                inputRegister={descriptionRegister}
                errors={errors}
                icon={<FontAwesomeIcon icon={faFileAlt} className="text-xl" />}
              />
            </>
          )}

          {step == 3 && (
            <>
              <ImagesGestion modif={false} errors={errors} />
            </>
          )}

          <Button
            width="full"
            name={step == totalStep ? "Enregistrer" : "Continuer"}
            className={"mt-[35px] text-lg py-[12px]"}
            size={"large"}
            onClick={handleButton}
          />
        </Form>
      </div>
    </section>
  );
}
