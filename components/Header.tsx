"use client";
import React, { FC } from "react";
import unionImage from "../public/icons_logos/logo-udr.svg";
import spaFlag from "../public/icons_logos/spa-flag.svg";
import downArrow from "../public/icons_logos/down-arrow.svg";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <header className="flex justify-between max-w-[1300px] mx-auto py-6 ">
      <Image src={unionImage} alt="logo" className="" />
      <nav className="flex font-bold text-[#1E3050] text-[14px] items-center gap-11">
        <a href="#" className="p-2">
          Buscar transacción
        </a>
        <a href="#" className="p-2">
          Políticas
        </a>
        <a href="#" className="p-2">
          Contáctanos
        </a>
        <button className="flex cursor-pointer items-center rounded-[6px] bg-[#F1F3F6] gap-3 p-3 ">
          <div className="flex items-center gap-9">
            <Image src={spaFlag} alt="Spanish Flag" className="" />
            Español
          </div>
          <Image src={downArrow} alt="Down" className="" />
        </button>
        <button className="flex cursor-pointer items-center rounded-[6px] bg-[#F1F3F6] gap-3 p-3 pl-4 ">
          Hola, Javier
          <div className="h-5 w-5 items-center flex justify-center font-normal rounded-full text-white text-[14px] bg-[#3179BD]">
            J
          </div>
        </button>
      </nav>
    </header>
  );
};
