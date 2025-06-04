import Image from "next/image";
import React from "react";
import checkLogo from "../public/icons_logos/check-logo.svg";

export const RateTooltip = () => {
  const includes = ["Millaje Libre", "LDW - Loss Damage Waiver"];

  return (
    <div className=" w-[393px] left-1/2 rounded-2xl text-left bg-white -translate-x-1/2 absolute hidden  group-hover:flex  shadow-2xl font-bold text-[#242B35] p-[30px] z-50   flex-col gap-[10px]">
      <div className="text-lg">Detalle de tarifa</div>
      <hr className="border-1  border-[#E0E2EC]" />
      <div className="flex flex-col gap-4">
        <span>Inclusive Light (H8)</span>
        <ul>
          {includes.map((item, idx) => (
            <li
              key={idx}
              className="text-sm flex gap-2 font-normal text-[#5B6B86]"
            >
              <Image src={checkLogo} alt="done" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
