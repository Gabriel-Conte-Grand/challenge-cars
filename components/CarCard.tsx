import React from "react";
import Image from "next/image";
import avisLogo from "../public/icons_logos/avis-logo.svg";
import budgerLogo from "../public/icons_logos/budger.svg";
import paylessLogo from "../public/icons_logos/payless-logo.svg";
import starSolid from "../public/icons_logos/star-solid-icon.svg";
import emptyStar from "../public/icons_logos/star-outlined-icon.svg";
import featuredIcon from "../public/icons_logos/featured-icon.svg";
import checkLogo from "../public/icons_logos/check-logo.svg";
import { PricingCard } from "./PricingCard";
import { Features } from "../types/index";

type CarType = {
  vehicleGroup: string;
  code: string;
  category: string;
  name: string;
  thumb: string | null;
  features: Features;
  retailerId: number;
  priceCOP: number;
  priceUSD: number;
  stars: number;
};

type featuresIcons = {
  name: string;
  icon: string;
};

export const CarCard = ({
  vehicleGroup,
  code,
  category,
  name,
  thumb,
  features,
  retailerId,
  priceCOP,
  priceUSD,
  stars
}: CarType) => {
  const imageAddress = thumb?.split("/").at(-1);

  console.log(thumb);

  const featuresIcons: featuresIcons[] = [
    {
      name: "seats",
      icon: "/icons_logos/passengers-icon.svg",
    },
    {
      name: "doors",
      icon: "/icons_logos/doors-icon.svg",
    },
    {
      name: "transmition",
      icon: "/icons_logos/transmission-icon.svg",
    },
    {
      name: "small_suitcase",
      icon: "/icons_logos/luggage-icon.svg",
    },
    {
      name: "large_suitcase",
      icon: "/icons_logos/carry-icon.svg",
    },
    {
      name: "Aire acondicionado",
      icon: "/icons_logos/air-conditioning-icon.svg",
    },
  ];

  const isSelected = true;

  const retailerLogo =
    retailerId === 1 ? avisLogo : retailerId === 2 ? budgerLogo : paylessLogo;

  const filledStars = new Array(5).fill('');


  return (
    <div className="flex bg-white shadow-lg rounded-2xl gap-9 border-l-4 h-[268px] border-[#3179BD]  px-5 w-full">
      <div className="flex flex-col py-6  ">
        <div className="flex flex-col gap-[10px]">
          <Image src={retailerLogo} alt="logo" />
          <div className="flex gap-1 items-center">
           {
           filledStars.map((star,idx) => {
            if(idx+1 <= stars){
              return (<Image key={idx} src={starSolid} alt="star" />)
            }else{
              return (<Image key={idx} src={emptyStar} alt="empty star" />)
            }
           })
            
            }
          </div>
        </div>

        <Image
          src={`/cars/${imageAddress}`}
          alt="car"
          width={201}
          height={133}
          className="object-cover mt-1 rounded-lg"
        />
        <div className="w-fit">
          <span className="bg-[#E5F6F0] font-medium gap-2 flex items-center text-xs p-2 text-center rounded-[6px]  text-[#26B489]">
            <Image src={featuredIcon} alt="Destacado" /> Destacado
          </span>
        </div>
      </div>

      <div className="flex  flex-1 gap-9">
        <div className="flex flex-col w-fit gap-6 py-6">
          <div className="flex flex-col gap-[6px]">
            <span className="text-[#ABB7CD] font-bold text-xs">
              Grupo {vehicleGroup} - {code}
            </span>
            <h4 className="text-lg font-bold text-[#3179BD]">{category}</h4>
            <span className="text-[#242B35] font-normal text-[14px]">
              {name}
            </span>
          </div>

          <ul className="flex itens-center gap-3">
            {featuresIcons.map((feature) => {
              const key = feature.name as keyof Features;
              return (
                <li
                  key={feature.name}
                  className="flex font-bold rounded-lg text-[#374D75] p-2 bg-[#F1F3F6] items-center gap-2 text-xs"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.name}
                    width={8}
                    height={8}
                  />
                  {features[key] ?? "SI"}
                </li>
              );
            })}
          </ul>
          <hr className="border-1  border-[#E0E2EC]" />
          {isSelected ? (
            <span className="flex text-sm font-medium gap-2 text-[#26B489]  items-center">
              <Image src={checkLogo} alt="done" /> Vehículo agregado a su
              cotización (1 de 5)
            </span>
          ) : (
            <span>
              <img /> Seleccionar este vehículo para cotizar
            </span>
          )}
        </div>

        <hr className="h-auto border my-1 border-dashed border-[#C8CED9]" />
        <PricingCard priceCOP={priceCOP} priceUSD={priceUSD} />
      </div>
    </div>
  );
};
