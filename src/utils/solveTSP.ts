import { AntColony, HillClimbing, SimulatedAnnealing } from "../lib";
import { TAlgorithms, TCoords, TData } from "../types";

type AlgorithmParams =
  | {
      generations: number;
      beta: number;
      t0?: undefined;
    }
  | {
      t0: number;
      generations?: undefined;
      beta?: undefined;
    }
  | undefined;

export const solveTSP = (
  coordinates: TCoords,
  algorithm: TAlgorithms,
  algorithmParams: AlgorithmParams
): TData => {
  let res = {} as TData;

  switch (algorithm) {
    case TAlgorithms.Hill_Climbing: {
      const agent = new HillClimbing();
      agent.readRoutesFromList(coordinates);
      res = agent.run();
      console.log(res);
      return res;
    }
    case TAlgorithms.Simulated_Annealing: {
      const agent = new SimulatedAnnealing(algorithmParams?.t0);
      agent.readRoutesFromList(coordinates);
      res = agent.run();
      console.log(res);
      return res;
    }
    case TAlgorithms.Ant_Colony: {
      const agent = new AntColony(
        algorithmParams?.generations,
        algorithmParams?.beta
      );
      agent.readRoutesFromList(coordinates);
      res = agent.run();
      console.log(res);
      return res;
    }
  }
};
