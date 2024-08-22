import { create } from "zustand";
import { TData } from "../types";

type DashboardStore = {
  DashboardData: TData | null;
  setDashboardData(data: TData): void;
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  DashboardData: null,
  setDashboardData(data) {
    set({ DashboardData: { ...data } });
  },
}));
