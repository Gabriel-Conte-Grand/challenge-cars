import React from "react";
import infoIcon from "../public/icons_logos/info-icon.svg";
import arrowIcon from "../public/icons_logos/arrow-icon.svg";
import Image from "next/image";
import { RateTooltip } from "./RateTooltip";

type Props = {
  priceCOP: number;
  priceUSD: number;
  handleCarSelection: () => void;
};

export const PricingCard = ({
  priceCOP,
  priceUSD,
  handleCarSelection,
}: Props) => {
  const numberOfDays = 3;
  const formattedPriceCOP = (priceCOP * numberOfDays).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });

  const formattedPriceUSD = (priceUSD * numberOfDays).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="relative my-5 bg-white rounded-xl text-center shadow-lg  p-4 w-[300px] mx-auto">
      <div className="text-center flex flex-col gap-2">
        <div className="flex gap-2 items-center justify-center">
          <h3 className="font-semibold text-[#242B35]">Inclusive Light</h3>
          <div className="group relative">
            <Image src={infoIcon} alt="info icon" className="cursor-pointer" />
            <RateTooltip />
          </div>
        </div>
        <p className="text-sm text-gray-500">Precio por 3 días de renta</p>
      </div>
      <hr className="mt-5 border boerder-[#E0E4EA]" />
      <div className="relative flex justify-center mt-3 items-center">
        <button className=" cursor-pointer hover:shadow-lg absolute left-[-28px] bg-white rounded-full shadow w-10 h-10 flex items-center justify-center">
          <Image src={arrowIcon} alt="" />
        </button>

        <div className="text-xl font-bold  text-[#3179BD]">
          <span className="text-base">COP</span> {formattedPriceCOP}
        </div>

        <button className=" cursor-pointer hover:shadow-lg absolute right-[-28px] bg-white rounded-full shadow w-10 h-10 flex items-center justify-center">
          <Image src={arrowIcon} alt="" className="rotate-180" />
        </button>
      </div>
      <div className=" w-full text-[#8292AA] text-sm  mx-auto">
        (USD {formattedPriceUSD})
      </div>

      <button
        onClick={handleCarSelection}
        className="mt-4 cursor-pointer hover:opacity-90  w-full bg-[#3179BD] font-bold text-white py-2 rounded-lg"
      >
        Seleccionar
      </button>
    </div>
  );
};
