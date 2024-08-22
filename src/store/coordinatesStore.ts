import { create } from "zustand";
import { TCoords, TNode } from "../types";

type CoordinatesStore = {
  mapCoordinates: TCoords;
  gridCoordinates: TCoords;
  placeOnMap(node: TNode): void;
  removeFromMap(node: TNode): void;
  placeOnGrid(node: TNode): void;
  removeFromGrid(node: TNode): void;
  clearGrid(): void;
  clearMap(): void;
};

export const useCoordinatesStore = create<CoordinatesStore>((set) => ({
  mapCoordinates: [],
  gridCoordinates: [],
  placeOnMap(node) {
    node[0] = Math.round(node[0] * 100) / 100;
    node[1] = Math.round(node[1] * 100) / 100;
    set((state) => ({ mapCoordinates: [...state.mapCoordinates, node] }));
  },
  removeFromMap(node) {
    console.log("remove ", node);
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
  clearGrid() {
    set({ gridCoordinates: [] });
  },
  clearMap() {
    set({ mapCoordinates: [] });
  },
}));
