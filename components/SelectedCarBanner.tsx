import { useCarStore } from "@/store/cars";
import Image from "next/image";
import React from "react";
import avisLogo from "../public/icons_logos/avis-logo.svg";
import budgerLogo from "../public/icons_logos/budger.svg";
import paylessLogo from "../public/icons_logos/payless-logo.svg";
import deleteLogo from "../public/icons_logos/delete-logo.svg";
import { CarData } from "@/types";

type Props = {
  carOfInterest: CarData;
  deleteCarFromSelected: () => void;
  addCarToSelected: (car: CarData) => void;
};

export const SelectedCarBanner = ({
  carOfInterest,
  deleteCarFromSelected,
  addCarToSelected,
}: Props) => {
  const { cars } = useCarStore();

  const demoCar = cars?.[0];

  const retailerLogo =
    carOfInterest?.brand === 1
      ? avisLogo
      : demoCar?.brand === 2
      ? budgerLogo
      : paylessLogo;

  const image =
    carOfInterest?.picture_url.normal || demoCar?.picture_url.featured;

  const imageAddress = image?.split("/").at(-1);

  return (
    <div className="fixed bottom-0 w-screen py-4 bg-white  border-t border-gray-200 z-50 shadow-[0_-4px_4px_-1px_rgba(0,0,0,0.1),0_-2px_2px_-2px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto gap-12 flex items-center ">
        <Image src={retailerLogo} alt="logo" width={48} height={15} />
        <div className="flex flex-col gap-[6px] py-2 w-96">
          <h4 className="text-[#242B35] text-xl font-bold ">
            Inclusive Light - H8
          </h4>
          <p className="text-[#3179BD] cursor-pointer text-sm font-medium">
            Ver detalle de la tarifa
          </p>
        </div>
        <Image
          src={`/cars/${imageAddress}`}
          alt="logo"
          width={132}
          height={62}
        />
        <div className="flex gap-8 py-2">
          <div className="flex flex-col gap-[6px]  items-end">
            <h4 className="text-[#242B35] text-xl font-bold ">
              COP{" "}
              {
                carOfInterest?.rates?.F2?.pricing.COP.total_charge.total
                  .estimated_total_amount
              }
            </h4>
            <p className="text-[#8292AA] text-sm font-medium">
              USD{" "}
              {
                carOfInterest.rates?.F2?.pricing.USD.total_charge.total
                  .estimated_total_amount
              }
            </p>
          </div>
          <button
            onClick={() => addCarToSelected(carOfInterest)}
            className="bg-[#3179BD] cursor-pointer hover:opacity-80 py-2 px-10 font-bold text-white rounded-lg"
          >
            Continuar
          </button>
          <button
            onClick={deleteCarFromSelected}
            className="bg-[#E91248] flex gap-5 items-center cursor-pointer hover:opacity-80 py-2 px-10 font-bold  text-white rounded-lg"
          >
            <Image src={deleteLogo} alt="logo" width={12} height={12} />{" "}
            <span>Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
