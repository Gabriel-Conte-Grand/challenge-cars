"use client";
import Image from "next/image";
import React from "react";
import chevronRight from "../public/icons_logos/chevron-icon.svg";

type ResultsType = {
  quantity: number;
  order: "asc" | "desc";
  toggleOrder: () => void;
};

export const SearchResults = ({
  quantity,
  order,
  toggleOrder,
}: ResultsType) => {
  return (
    <div className="flex items-center justify-between mb-4 py-2 text-sm">
      <span className="text-[#3179BD] font-bold">
        Encontramos {quantity} vehículos para tu búsqueda
      </span>

      <div className="flex items-center  gap-4 text-[#242B35]">
        <input type="checkbox" checked={true} onChange={() => {}} />
        <label>Mostrar destacados primero</label>
      </div>
      <div className="flex gap-4 items-center font-bold ">
        <button className="bg-[#3179BD] cursor-pointer hover:opacity-80 rounded-lg py-3 px-5 text-white">
          Enviar cotización
        </button>
        <button
          onClick={toggleOrder}
          className="bg-white w-40 cursor-pointer hover:opacity-80 text-[#242B35] flex gap-4 items-center rounded-lg py-3 px-5"
        >
          {order === "asc" ? "Menor Precio" : "Mayor Precio"}
          <Image
            src={chevronRight}
            alt=""
            className={order === "asc" ? "rotate-90" : "-rotate-90"}
          />
        </button>
      </div>
    </div>
  );
};
