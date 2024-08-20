export type TCoords = [number, number][];

export type TNode = [number, number];

export enum TAlgorithms {
  Hill_Climbing = "Hill_Climbing",
  Simulated_Annealing = "Simulated_Annealing",
  Ant_Colony = "Ant_Colony",
}

export type TData = {
  bestPath: number[];
  bestCost: number;
  time: string;
  chart: {
    x: number[];
    y: number[];
  };
};
