import { activeFilters } from "@/components/Filters";
import { CarData } from "@/types";
import { create } from "zustand";

export type Filters = {
  company: number[];
  doors: number[];
  category: string[];
  luggage: number[];
  priceRange: [number, number];
};

type Store = {
  cars: CarData[];
  filteredCars: CarData[];
  selectedCars: CarData[];
  order: "asc" | "desc";
  priceBounds: [number, number];
  loadCars: (allCars: CarData[]) => void;
  applyFilters: (filters: activeFilters) => void;
};

export const useCarStore = create<Store>()((set) => ({
  cars: [],
  filteredCars: [],
  selectedCars: [],
  order: "asc",
  priceBounds: [2000000, 7000000],
  loadCars: (allCars) =>
    set((state) => ({ ...state, cars: allCars, filteredCars: allCars })),
  applyFilters: (filters: activeFilters) => {
    set((state) => {
      let filteredCars = state.cars;
      if (filters.company.length > 0) {
        filteredCars = filteredCars.filter((car) => {
          return filters.company.includes(car.brand);
        });
      }
      if (filters.category.length > 0) {
        filteredCars = filteredCars.filter((car) => {
          return filters.category.includes(car.features.category);
        });
      }
      if (filters.luggage.length > 0) {
        filteredCars = filteredCars.filter((car) => {
          const minSelectedValue = Math.min(...filters.luggage);
          return car.features.small_suitcase >= minSelectedValue;
        });
      }
      if (filters.passangers.length > 0) {
        filteredCars = filteredCars.filter((car) => {
          return filters.passangers.includes(parseInt(car.features.seats));
        });
      }
      // if (filters.category.length > 0) {
      //   matches = matches && filters.category.includes(car.features.category);
      // }
      // if (filters.category.length > 0) {
      //   matches = matches && filters.category.includes(car.vehicle_class);
      // }
      // if (filters.luggage.length > 0) {
      //   matches =
      //     matches && filters.luggage.includes(car.features.large_suitcase);
      // }

      // if (
      //   car.price >= filters.priceRange[0] &&
      //   car.price <= filters.priceRange[1]
      // ) {
      //   matches = matches && true;
      // } else {
      //   matches = false;
      // }

      console.log("Filtered Cars:", filteredCars);
      return { ...state, filteredCars };
    });
  },
}));
