"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import filterIcon from "../public/icons_logos/filter-icon.svg";
import chevronRight from "../public/icons_logos/chevron-icon.svg";
import { Range } from "react-range";
import { useCarStore } from "@/store/cars";
import { FilterSection } from "./FilterSection";
import { useEffect } from "react";

type FilterId = keyof activeFilters;

export type Filter = {
  filterName: string;
  filterId: FilterId;
  optionsType: "checkbox";
  filterOptions: { name: string; code: string | number; value: boolean }[];
};

export type FilterOption = {
  name: string;
  value: boolean;
  code: string | number;
};

export type activeFilters = {
  company: number[];
  category: string[];
  luggage: number[];
  passangers: number[];
};

export const Filters: FC = () => {
  const filters: Filter[] = [
    {
      filterName: "Compañía rentadora",
      filterId: "company",
      optionsType: "checkbox",
      filterOptions: [
        { name: "Avis", value: true, code: 1 },
        { name: "Budget", value: true, code: 2 },
        { name: "Payless", value: true, code: 3 },
      ],
    },
    {
      filterName: "Categoría del auto",
      filterId: "category",
      optionsType: "checkbox",
      filterOptions: [
        { name: "Económico", value: false, code: "Económico" },
        { name: "Compacto", value: false, code: "Compacto" },
        { name: "Intermedio", value: false, code: "Intermedio" },
        { name: "Estándar", value: false, code: "Estándar" },
        { name: "SUV", value: false, code: "SUV" },
      ],
    },
    {
      filterName: "Capacidad de maletas",
      filterId: "luggage",
      optionsType: "checkbox",
      filterOptions: [
        { name: "1 ó más maletas", value: false, code: 1 },
        { name: "2 ó más maletas", value: false, code: 2 },
        { name: "3 ó más maletas", value: false, code: 3 },
        { name: "4 ó más maletas", value: false, code: 4 },
      ],
    },
    {
      filterName: "Cantidad de pasajeros",
      filterId: "passangers",
      optionsType: "checkbox",
      filterOptions: [
        { name: "4 pasajeros", value: false, code: 4 },
        { name: "5 pasajeros", value: false, code: 5 },
        { name: "7 pasajeros", value: false, code: 7 },
        { name: "12 pasajeros", value: false, code: 12 },
      ],
    },
  ];

  const { applyFilters, priceBounds, handlePriceBoundChange } = useCarStore();

  const [values, setValues] = useState([priceBounds[0], priceBounds[1]]);

  const [activeFilters, setActiveFilters] = useState<activeFilters>({
    company: [],
    category: [],
    luggage: [],
    passangers: [],
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handlePriceBoundChange(values[0], values[1]);
      applyFilters(activeFilters);
    }, 1000);

    return () => {
      clearTimeout(timeoutId); // limpia el timeout si values cambia antes del segundo
    };
  }, [values, handlePriceBoundChange]);

  useEffect(() => {
    applyFilters(activeFilters);
  }, [activeFilters, applyFilters]);

  return (
    <div className=" bg-white h-fit rounded-2xl text-[#3179BD] font-bold flex flex-col gap-6 pt-[30px] pb-6 w-80">
      <div className="flex  items-center pl-[30px]  gap-5">
        <Image src={filterIcon} alt="to" className="w-[18px] h-[18px]" />{" "}
        Filtrar resultados
      </div>
      {filters.map((filter) => (
        <FilterSection
          key={filter.filterId}
          filter={filter}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
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
