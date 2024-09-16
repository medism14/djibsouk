/** @format */

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useForm } from "react-hook-form";

export default function SearchBar({ setSearchValue }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSearchValue(data.search);
  };

  return (
    <div className="mt-[40px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[520px] flex mx-auto"
      >
        <input
          type="text"
          className="flex-1 bg-white outline-none px-[5px] rounded-lg rounded-r-none border border-2 border-r-[0px] border-[--text-color]"
          placeholder="Faites votre recherche ici..."
          {...register("search")}
        />
        <button className="bg-[--secondary] transition-all duration-300 p-[10px] rounded-lg rounded-l-none border border-2 border-[--text-color] hover:bg-[--secondary-modif]">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl" />
        </button>
      </form>
    </div>
  );
}
