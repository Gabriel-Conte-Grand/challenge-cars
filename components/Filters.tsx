"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import filterIcon from "../public/icons_logos/filter-icon.svg";
import chevronRight from "../public/icons_logos/chevron-icon.svg";
import { Range } from "react-range";

type Filter = {
  filterName: string;
  optionsType: "checkbox" | "radio";
  filterOptions: string[] | number[];
};

export const Filters: FC = () => {
  const filters: Filter[] = [
    {
      filterName: "Compañía rentadora",
      optionsType: "checkbox",
      filterOptions: ["Avis", "Budget", "Payless"],
    },
    {
      filterName: "Categoría del auto",
      optionsType: "checkbox",
      filterOptions: [
        "Todas las categorias",
        "Económico",
        "Compacto",
        "Intermedio",
        "Estándar",
        "SUV",
      ],
    },
    {
      filterName: "Capacidad de maletas",
      optionsType: "checkbox",
      filterOptions: [
        "1 ó más maletas",
        "2 ó más maletas",
        "3 ó más maletas",
        "4 ó más maletas",
      ],
    },
    {
      filterName: "Cantidad de pasajeros",
      optionsType: "checkbox",
      filterOptions: [
        "4 pasajeros",
        "5 pasajeros",
        "7 pasajeros",
        "12 pasajeros",
      ],
    },
  ];

  const [values, setValues] = useState([2000000, 7000000]);

  return (
    <div className=" bg-white h-fit rounded-2xl text-[#3179BD] font-bold flex flex-col gap-6 pt-[30px] pb-6 w-80">
      <div className="flex  items-center pl-[30px]  gap-5">
        <Image src={filterIcon} alt="to" className="w-[18px] h-[18px]" />{" "}
        Filtrar resultados
      </div>
      {filters.map((filter) => (
        <div
          key={filter.filterName}
          className="flex text-[14px] flex-col w-full "
        >
          <div className="font-bold j px-[30px] py-3 bg-[#F0F4FD] flex justify-between">
            {filter.filterName}
            <Image src={chevronRight} alt="to" className="rotate-90" />
          </div>
          <div className="mt-6 mx-6 text-[14px] text-[#242B35] font-normal flex flex-col gap-2 w-full">
            {filter.filterOptions.map((option) => (
              <div
                key={option}
                className="cursor-pointer flex justify-start gap-3 items-center "
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded"
                  checked={true}
                  onChange={() => {}}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="font-bold text-[14px] px-3 py-3 bg-[#F0F4FD] flex justify-between">
        Fijar un rango de precio (COP)
        <Image src={chevronRight} alt="to" className="rotate-90" />
      </div>

      {/* RANGE */}
      <div className="mt-6 mx-6 flex flex-col gap-6">
        <Range
          label="Select your value"
          step={0.1}
          min={0}
          max={10000000}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "5px",
                width: "100%",
                backgroundColor: "#EEEFF4",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              key={props.key}
              style={{
                ...props.style,
                height: "24px",
                width: "24px",
                borderRadius: "100%",
                border: "4px solid #3179BD",
                backgroundColor: "white",
              }}
            />
          )}
        />

        <div className=" text-xs rounded-lg border text-[#9B9FB7] border-[#EEEFF4] flex items-center w-full">
          <div className="bg-[#EEEFF4]  p-3">COP</div>
          <div className="px-3 font-medium  w-full flex justify-between items-center">
            desde{" "}
            <span className="text-[#3179BD] font-bold text-[14px]">
              ${values[0]}
            </span>
          </div>
        </div>
        <div className=" text-xs rounded-lg border text-[#9B9FB7] border-[#EEEFF4] flex items-center w-full">
          <div className="bg-[#EEEFF4]  p-3">COP</div>
          <div className="px-3 font-medium w-full flex justify-between items-center">
            hasta{" "}
            <span className="text-[#3179BD] font-bold text-[14px]">
              ${values[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
