import React, { useState } from "react";

type Props = {
  option: { name: string; code: string | number };
  filter: {
    filterId: string;
  };
  activeFilters: {
    [key: string]: (string | number)[];
  };
  handleChange: (
    option: {
      name: string;
      code: string | number;
    },
    isChecked: boolean
  ) => void;
};

export const Checkbox = ({
  activeFilters,
  option,
  filter,
  handleChange,
}: Props) => {
  const [isChecked, setIsChecked] = useState(
    activeFilters[filter.filterId].includes(option.code)
  );

  return (
    <div
      key={option.name}
      className="cursor-pointer flex justify-start gap-3 items-center "
    >
      <input
        type="checkbox"
        className="w-4 h-4 rounded cursor-pointer"
        checked={isChecked}
        onChange={(ev) => {
          setIsChecked(ev.target.checked);
          handleChange(option, ev.target.checked);
        }}
      />
      <label>{option.name}</label>
    </div>
  );
};
