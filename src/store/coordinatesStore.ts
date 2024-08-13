import { createStore } from "zustand";
import { TCoords } from "../types";

type CoordinatesStore = {
  mapCoordinates: TCoords;
  gridCoordinates: TCoords;
  placeOnMap(nodes: TCoords): void;
  placeOnGrid(nodes: TCoords): void;
};

export const useCoordinatesStore = createStore<CoordinatesStore>((set) => ({
  mapCoordinates: [],
  gridCoordinates: [],
  placeOnMap(nodes) {
    set({ mapCoordinates: [...nodes] });
  },
  placeOnGrid(nodes) {
    set({ gridCoordinates: [...nodes] });
  },
}));
