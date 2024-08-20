import { createStore } from "zustand";
import { TCoords, TNode } from "../types";

type CoordinatesStore = {
  mapCoordinates: TCoords;
  gridCoordinates: TCoords;
  placeOnMap(node: TNode): void;
  removeFromMap(node: TNode): void;
  placeOnGrid(node: TNode): void;
  removeFromGrid(node: TNode): void;
};

export const useCoordinatesStore = createStore<CoordinatesStore>((set) => ({
  mapCoordinates: [],
  gridCoordinates: [],
  placeOnMap(node) {
    set((state) => ({ mapCoordinates: [...state.mapCoordinates, node] }));
  },
  removeFromMap(node) {
    set((state) => ({
      mapCoordinates: [
        ...state.mapCoordinates.filter(
          (coord) => coord[0] != node[0] || coord[1] != node[1]
        ),
      ],
    }));
  },
  placeOnGrid(node) {
    set((state) => ({ gridCoordinates: [...state.gridCoordinates, node] }));
  },
  removeFromGrid(node) {
    set((state) => ({
      gridCoordinates: [
        ...state.gridCoordinates.filter(
          (coord) => coord[0] != node[0] || coord[1] != node[1]
        ),
      ],
    }));
  },
}));
