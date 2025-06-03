"use client";
import { Header } from "@/components/Header";
import { MainFilters } from "@/components/MainFilters";
import { BookingStage } from "@/components/BookingStage";
import { Filters } from "@/components/Filters";
import { CarCard } from "@/components/CarCard";
import cars from "../carsJSON.json";
import { SearchResults } from "@/components/SearchResults";
import { useCarStore } from "@/store/cars";
import { CarData } from "@/types";
import { useEffect } from "react";

export default function Home() {
  const carsList = [
    ...cars.cars.Avis,
    ...cars.cars.Budget,
    ...cars.cars.Payless,
  ] as CarData[];

  const { filteredCars, loadCars } = useCarStore();

  useEffect(() => {
    loadCars(carsList);
  }, []);

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
            <SearchResults quantity={filteredCars.length} />
            <div className="flex flex-col gap-8">
              {filteredCars?.map((car, idx) => (
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
