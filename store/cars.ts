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
  carOfInterest: CarData | null;
  order: "asc" | "desc";
  priceBounds: [number, number];
  loadCars: (allCars: CarData[]) => void;
  applyFilters: (filters: activeFilters) => void;
  toggleOrder: () => void;
  selectCarOfInterest: (car: CarData) => void;
  addCarToSelected: (car: CarData) => void;
  deleteCarFromSelected: () => void;
  handlePriceBoundChange: (min: number, max: number) => void;
};

export const useCarStore = create<Store>()((set) => ({
  cars: [],
  filteredCars: [],
  selectedCars: [],
  carOfInterest: null,
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

      filteredCars = filteredCars.filter((car) => {
        const dailyPrice =
          car.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount;

        if (!dailyPrice) return true;

        const totalPrice = dailyPrice * 3;

        const minPrice = state.priceBounds[0];
        const maxPrice = state.priceBounds[1];
        if (minPrice === 20000000 && maxPrice === 7000000) {
          return true; // If no price bounds are set, return all cars
        }

        return totalPrice >= minPrice && totalPrice <= maxPrice;
      });

      //order

      if (state.order === "asc") {
        filteredCars = filteredCars.sort((a, b) => {
          return (
            a.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount -
            b.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount
          );
        });
      } else {
        filteredCars = filteredCars.sort((a, b) => {
          return (
            b.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount -
            a.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount
          );
        });
      }

      return { ...state, filteredCars };
    });
  },
  toggleOrder: () =>
    set((state) => {
      let filteredCars = state.filteredCars;
      const newOrder = state.order === "asc" ? "desc" : "asc";
      if (newOrder === "asc") {
        filteredCars = filteredCars.sort((a, b) => {
          return (
            a.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount -
            b.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount
          );
        });
      } else {
        filteredCars = filteredCars.sort((a, b) => {
          return (
            b.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount -
            a.rates?.F2?.pricing.COP.total_charge.total.estimated_total_amount
          );
        });
      }
      return {
        ...state,
        order: newOrder,
        filteredCars,
      };
    }),
  selectCarOfInterest: (car: CarData) => {
    set((state) => {
      return { ...state, carOfInterest: car };
    });
  },
  addCarToSelected: (car: CarData) =>
    set((state) => {
      if (state.selectedCars.length === 5 || state.selectedCars.includes(car)) {
        alert(
          "Solo puedes seleccionar hasta 5 vehículos y no puedes seleccionar el mismo vehículo más de una vez."
        );
        return state;
      }
      return {
        ...state,
        selectedCars: [...state.selectedCars, car],
        carOfInterest: null,
      };
    }),
  deleteCarFromSelected: () =>
    set((state) => ({
      ...state,
      carOfInterest: null,
    })),
  handlePriceBoundChange: (min, max) =>
    set((state) => ({ ...state, priceBounds: [min, max] })),
}));
