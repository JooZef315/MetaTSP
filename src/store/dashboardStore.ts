import { createStore } from "zustand";
import { TData } from "../types";

type DashboardStore = {
  DashboardData: TData | null;
  getDashboardData(data: TData): void;
};

export const useDashboardStore = createStore<DashboardStore>((set) => ({
  DashboardData: null,
  getDashboardData(data) {
    set({ DashboardData: { ...data } });
  },
}));
