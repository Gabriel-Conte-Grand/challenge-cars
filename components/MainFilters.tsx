import React, { FC } from "react";
import chevronRight from "../public/icons_logos/chevron-icon.svg";
import Image from "next/image";

export const MainFilters: FC = () => {
  return (
    <section className="max-w-[1300px] text-[14px] mx-auto py-4 flex gap-6">
      <div className="flex gap-9 rounded-lg items-center py-[10px] px-6  font-medium text-[#06102D] bg-[#F1F3F6]">
        <span>Miami International Airport (MIA)</span>
        <Image src={chevronRight} alt="to" className="" />
        <span>Orlando International Airport (MCO)</span>
      </div>
      <div className="flex gap-9 rounded-lg items-center py-[10px] px-6  font-medium text-[#06102D] bg-[#F1F3F6]">
        <span>20 septiembre 2025, 12:00</span>
        <Image src={chevronRight} alt="to" />
        <span>30 septiembre 2025, 18:00</span>
      </div>
      <button className="bg-[#3179BD] cursor-pointer hover:opacity-70  py-4 text-white flex-1 rounded-lg">
        Modificar
      </button>
    </section>
  );
};
