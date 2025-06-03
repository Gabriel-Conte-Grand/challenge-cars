import React from "react";
import infoIcon from "../public/icons_logos/info-icon.svg";
import arrowIcon from "../public/icons_logos/arrow-icon.svg";
import Image from "next/image";

export const PricingCard = () => {
  return (
    <div className="relative my-5 bg-white rounded-xl text-center shadow-lg  p-4 w-[300px] mx-auto">
      <div className="text-center flex flex-col gap-2">
        <div className="flex gap-2 items-center justify-center">
          <h3 className="font-semibold text-[#242B35]">Inclusive Light</h3>
          <Image src={infoIcon} alt="info icon" />
        </div>
        <p className="text-sm text-gray-500">Precio por 3 días de renta</p>
      </div>
      <hr className="mt-5 border boerder-[#E0E4EA]" />
      <div className="relative flex justify-center mt-3 items-center">
        <button className=" cursor-pointer hover:shadow-lg absolute left-[-28px] bg-white rounded-full shadow w-10 h-10 flex items-center justify-center">
          <Image src={arrowIcon} alt="" />
        </button>

        <div className="text-xl font-bold  text-[#3179BD]">
          <span className="text-base">COP</span> 1,895.160
        </div>

        <button className=" cursor-pointer hover:shadow-lg absolute right-[-28px] bg-white rounded-full shadow w-10 h-10 flex items-center justify-center">
          <Image src={arrowIcon} alt="" className="rotate-180" />
        </button>
      </div>
      <div className=" w-full text-[#8292AA] text-sm  mx-auto">
        (USD 1,299.72)
      </div>

      <button className="mt-4 cursor-pointer hover:opacity-90  w-full bg-[#3179BD] font-bold text-white py-2 rounded-lg">
        Seleccionar
      </button>
    </div>
  );
};

{
  /* <div classNameName="">
  <span classNameName="absolute  right-60">
    <div classNameName="p-2 border  shadow border-[#C8CED9] rounded-full">
      <Image src={arrowIcon} alt="" classNameName="" />
    </div>
  </span>
  <span classNameName="absolute  left-60">
    <div classNameName="p-2 border  shadow border-[#C8CED9] rounded-full">
      <Image src={arrowIcon} alt="" classNameName="rotate-180" />
    </div>
  </span>
  <div classNameName="w-full text-center items-center">
    <span classNameName="text-center font-bold text-sm  text-[#3179BD]">
      COP <span classNameName="text-xl"> 1,895.160</span>
    </span>
  </div>
</div>; */
}
