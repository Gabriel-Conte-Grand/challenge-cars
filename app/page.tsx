import { Header } from "@/components/Header";
import { MainFilters } from "@/components/MainFilters";
import { BookingStage } from "@/components/BookingStage";
import { Filters } from "@/components/Filters";
import { CarCard } from "@/components/CarCard";
import cars from "../carsJSON.json";
import Image from "next/image";
import chevronRight from "../public/icons_logos/chevron-icon.svg";

export default function Home() {
  const carsList = [
    ...cars.cars.Avis,
    ...cars.cars.Budget,
    ...cars.cars.Payless,
  ];

  return (
    <div className="">
      <Header />
      <hr className="border-gray-100" />
      <MainFilters />
      <BookingStage />

      {/* BODY */}
      <section className="flex bg-[#F1F3F6] pt-[30px] pb-20 ">
        <div className="flex mx-auto w-full max-w-[1300px] gap-8">
          <Filters />
          <div className="w-full">
            <div className="flex items-center justify-between mb-4 py-2 text-sm">
              <span className="text-[#3179BD] font-bold">
                Encontramos {carsList.length} vehículos para tu búsqueda
              </span>

              <div className="flex items-center  gap-4 text-[#242B35]">
                <input type="checkbox" checked={true} />
                <label>Mostrar destacados primero</label>
              </div>
              <div className="flex gap-4 items-center font-bold ">
                <button className="bg-[#3179BD] cursor-pointer hover:opacity-80 rounded-lg py-3 px-5 text-white">
                  Enviar cotización
                </button>
                <button className="bg-white cursor-pointer hover:opacity-80 text-[#242B35] flex gap-4 items-center rounded-lg py-3 px-5">
                  Mayor Precio
                  <Image src={chevronRight} alt="" className="rotate-90" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {carsList.map((car, idx) => (
                <CarCard
                  key={idx}
                  category={car.features.category}
                  name={car.name_details}
                  code={car.code}
                  vehicleGroup={car.vehicle_group}
                  thumb={car.picture_url.normal || car.picture_url.featured}
                  features={car.features}
                  retailerId={car.brand}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
