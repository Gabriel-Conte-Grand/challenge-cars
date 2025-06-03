import Image from "next/image";
import React from "react";
import chevronRight from "../public/icons_logos/chevron-icon.svg";
import { activeFilters, Filter } from "./Filters";
import { Checkbox } from "./Checkbox";

type Props = {
  filter: Filter;
  setActiveFilters: React.Dispatch<React.SetStateAction<activeFilters>>;
  activeFilters: activeFilters;
};

export const FilterSection = ({
  filter,
  setActiveFilters,
  activeFilters,
}: Props) => {
  const handleChange = (
    option: { name: string; code: string | number },
    isChecked: boolean
  ) => {
    if (isChecked) {
      setActiveFilters((prev: activeFilters) => {
        return {
          ...prev,
          [filter.filterId]: [...prev[filter.filterId], option.code],
        };
      });
    } else {
      const updatedFilter = activeFilters[filter.filterId].filter(
        (item) => item !== option.code
      );
      console.log("updatedFilter", updatedFilter);
      setActiveFilters((prev) => {
        return {
          ...prev,
          [filter.filterId]: [...updatedFilter],
        };
      });
    }
  };

  return (
    <div key={filter.filterName} className="flex text-[14px] flex-col w-full ">
      <div className="font-bold j px-[30px] py-3 bg-[#F0F4FD] flex justify-between">
        {filter.filterName}
        <Image src={chevronRight} alt="to" className="rotate-90" />
      </div>
      <div className="mt-6 mx-6 text-[14px] text-[#242B35] font-normal flex flex-col gap-2 w-full">
        {filter.filterOptions.map((option) => {
          return (
            <Checkbox
              key={option.name}
              activeFilters={activeFilters}
              filter={filter}
              handleChange={handleChange}
              option={option}
            />
          );
        })}
      </div>
    </div>
  );
};
