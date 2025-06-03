import Image from "next/image";
import React, { FC } from "react";
import chevronRight from "../public/icons_logos/chevron-icon.svg";

export const BookingStage: FC = () => {
  return (
    <section className="w-full py-[10px]  bg-[#102C79]">
      <div className="flex justify-around px-16 py-2 font-normal text-[#7C9AED]  mx-auto max-w-[1300px]">
        <div className="font-bold text-white">Selecciona tu vehiculo</div>
        <Image src={chevronRight} alt="to" />
        <div>Agrega equipamiento adicional</div>
        <Image src={chevronRight} alt="to" />
        <div>Información del conductor</div>
        <Image src={chevronRight} alt="to" />
        <div>Confirmación de la reserva</div>
      </div>
    </section>
  );
};
